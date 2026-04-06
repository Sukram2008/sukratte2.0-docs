# Pfad festlegen
$targetDir = Join-Path (Get-Location) "docs\discord\befehle"

if (-not (Test-Path $targetDir)) {
    Write-Host "FEHLER: Pfad nicht gefunden!" -ForegroundColor Red
    exit
}

# Alle .md Dateien finden
$allFiles = Get-ChildItem -Path $targetDir -Recurse -Filter "*.md"
$incomplete = @()

# Unicode-Definitionen (damit das Skript keine Emojis braucht)
$emojiPeople = [char]::ConvertFromUtf32(0x1F465) # 👥
$emojiTV = [char]::ConvertFromUtf32(0x1F4FA)     # 📺

foreach ($file in $allFiles) {
    # Datei als UTF8 einlesen
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    if ($content -match "### Berechtigungen") {
        # Bereich isolieren
        $regex = "(?s)### Berechtigungen(.*?)(?=###|$)"
        if ($content -match $regex) {
            $section = $Matches[1]
            
            # Prüfen auf Rollen
            $hasRoles = ($section -like "*Rollen*") -or ($section.Contains($emojiPeople))
            
            # Prüfen auf Kanäle
            $hasChannels = ($section -like "*Kanäle*") -or ($section -like "*Kanale*") -or ($section.Contains($emojiTV))
            
            if (-not $hasRoles -or -not $hasChannels) {
                $missing = @()
                if (-not $hasRoles) { $missing += "Rollen" }
                if (-not $hasChannels) { $missing += "Kanäle" }
                
                $incomplete += [PSCustomObject]@{
                    Datei = $file.FullName.Replace($targetDir, "")
                    Fehlt = $missing -join " & "
                }
            }
        }
    }
}

# Ergebnis-Ausgabe
Write-Host "`n=== FINALER BERECHTIGUNGS-CHECK ===" -ForegroundColor Cyan
if ($incomplete.Count -eq 0) {
    Write-Host "Vollständig! Alle Dateien haben Rollen und Kanäle." -ForegroundColor Green
} else {
    Write-Host "Unvollständig: $($incomplete.Count) Dateien gefunden." -ForegroundColor Yellow
    $incomplete | Format-Table -AutoSize
}