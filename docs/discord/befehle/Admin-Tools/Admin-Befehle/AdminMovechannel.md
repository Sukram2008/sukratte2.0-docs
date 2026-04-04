---
title: Kanalposition ändern
description: Zeigt oder ändert die Position eines Kanals
displayed_sidebar: tutorialSidebar
---

# 🔄📁 | Kanalposition ändern

:::info Bot-Zuständigkeit
Dieser Befehl wird vom **Custom-Bot** ausgeführt.
:::

<div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
  <span className="badge badge--danger">Admin-Tools</span>
  <span className="badge badge--warning">Berechtigung: Administrator</span>
</div>

### Beschreibung
Mit diesem Befehl kannst du die Position eines Kanals innerhalb der Kanalliste deines Servers verwalten.
- Wenn du **nur** den Kanal angibst, wird dir die aktuelle Position des Kanals angezeigt.
- Wenn du zusätzlich eine **neue Position** angibst, verschiebt der Bot den Kanal an die entsprechende Stelle.

### Verwendung
` /admin movechannel channel:[Kanal] [new-position:Nummer] `

### Berechtigungen
* **Erforderliche Rechte:** `Kanäle verwalten` oder `Administrator`.