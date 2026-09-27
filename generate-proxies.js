const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './docs/discord/befehle/custom-bot';
const CONTEXT_MENU_DIR = './docs/discord/kontextmenü';

const NUTZER_DIR = './docs/discord/nutzer-bereich';
const TEAM_DIR = './docs/discord/team-bereich';

/**
 * ============================================================
 * KONFIGURATION
 * ============================================================
 *
 * Die Regeln werden von oben nach unten geprüft.
 * Spezifische Pfade müssen deshalb vor allgemeineren Regeln
 * stehen, damit sie nicht von einer übergeordneten Regel
 * abgefangen werden.
 */

/**
 * Kontextmenü-Aktionen werden getrennt von den normalen
 * Custom-Bot-Befehlen verarbeitet.
 */
const CONTEXT_MENU_RULES = [
    // Nutzer-Bereich
    ...rules('nutzer',
        'Nachrichten-Aktionen/ContextCreateReminder.md',
        'Nachrichten-Aktionen/ContextQuoteMessage.md',
        'Nachrichten-Aktionen/ContextReportMessage.md',
        'Nachrichten-Aktionen/ContextViewPollVotes.md',
        'Nutzer-Aktionen/Aktivitäts-Streak/ContextViewStreak.md',
        'Nutzer-Aktionen/Geburtstags-Kalender/ContextViewBirthday.md',
        'Nutzer-Aktionen/Moderation-und-Sicherheit/ContextReportUser.md'
    ),

    // Team-Bereich
    ...rules('team',
        'Nachrichten-Aktionen/ContextApproveSuggestion.md',
        'Nachrichten-Aktionen/ContextConvertToSuggestion.md',
        'Nachrichten-Aktionen/ContextDenySuggestion.md',
        'Nachrichten-Aktionen/ContextProtectLastWord.md',
        'Nachrichten-Aktionen/ContextResetAfterMessage.md',
        'Nutzer-Aktionen/Anonymer-Chat/ContextBlockUser.md',
        'Nutzer-Aktionen/Anonymer-Chat/ContextWarnUser.md',
        'Nutzer-Aktionen/Moderation-und-Sicherheit/ContextBan.md',
        'Nutzer-Aktionen/Moderation-und-Sicherheit/ContextKick.md',
        'Nutzer-Aktionen/Moderation-und-Sicherheit/ContextModHistory.md',
        'Nutzer-Aktionen/Moderation-und-Sicherheit/ContextMute.md'
    )
];

/**
 * Custom-Bot-Regeln.
 *
 * Spezielle Regeln stehen absichtlich vor den allgemeinen
 * Kategorien. Beispiel:
 *
 *   Eigene-Befehle/Support/TerminAnfragen
 *   Eigene-Befehle/Support
 *
 * Dadurch wird TerminAnfragen korrekt dem Team-Bereich
 * zugeordnet und nicht vorher durch "Support" abgefangen.
 */
const RULES = [
    // Spezielle Eigene-Befehle
    ...rules('team',
        'Eigene-Befehle/Support/TerminAnfragen',
        'Eigene-Befehle/Team-Verwaltung/TeamAbmelden',
        'Eigene-Befehle/Team-Verwaltung/TeamWarn',
        'Eigene-Befehle/Kommunikation/Gelesen'
    ),

    // System / Administration
    ...rules('team',
        'Admin-Tools',
        'Anti-Nuke-Schutz',
        'Betterstatus',
        'Einladungsverfolgung'
    ),

    // Nutzer-Systeme
    ...rules('nutzer',
        'AFK-System',
        'Bewerbungen',
        'Color-me',
        'Erinnerungen',
        'Fun-Befehle',
        'Halloween-Event',
        'Info-Befehle',
        'Minispiele',
        'Aktivitäts-Streak',
        'Temporäre-Channel'
    ),

    // Anonymer Chat
    ...rules('team', 'Anonymer-Chat/Moderator-Befehle'),
    ...rules('nutzer', 'Anonymer-Chat/Nutzer-Befehle'),

    // Built-In Commands
    ...rules('team', 'Build-In-Commands/Admin-Befehle'),
    ...rules('nutzer', 'Build-In-Commands/Nutzer-Befehle'),

    // Gewinnspiele
    ...rules('team', 'Gewinnspiele/Team-Befehle'),
    ...rules('nutzer', 'Gewinnspiele/Nutzer-Befehle'),

    // Errate die Nummer
    ...rules('team', 'Errate-die-Nummer'),

    // Geburtstags-Kalender
    ...rules('team', 'Geburtstags-Kalender/Admin-Befehle'),
    ...rules('nutzer', 'Geburtstags-Kalender/Nutzer-Befehle'),

    // Level-System
    ...rules('team', 'Level-System/Admin-Befehle'),
    ...rules('nutzer', 'Level-System/Nutzer-Befehle'),

    // Moderation und Sicherheit
    ...rules('team',
        'Moderation-und-Sicherheit/Moderations-Aktionen',
        'Moderation-und-Sicherheit/Kanal-Verwaltung',
        'Moderation-und-Sicherheit/Notizen'
    ),
    ...rules('nutzer', 'Moderation-und-Sicherheit/Nutzer-Befehle'),

    // Massenrolle / Partner / Team-Ziele
    ...rules('team',
        'Massenrolle',
        'Partner-Liste',
        'Teammitglieder-Ziele'
    ),

    // Ping-Schutz
    ...rules('team', 'Ping-Schutz/Team-Befehle'),
    ...rules('nutzer', 'Ping-Schutz/Nutzer-Befehle'),

    // Sammel die Codes
    ...rules('team', 'Sammel-die-Codes/Admin-Befehle'),
    ...rules('nutzer', 'Sammel-die-Codes/Nutzer-Befehle'),

    // Umfragen
    ...rules('team', 'Umfragen'),

    // Vorschläge
    ...rules('team', 'Vorschläge/Team-Befehle'),
    ...rules('nutzer', 'Vorschläge/Nutzer-Befehle'),

    // Wirtschaftssystem
    ...rules('team',
        'Wirtschaftssystem/Team-Befehle',
        'Wirtschaftssystem/Shop/Admin-Befehle'
    ),
    ...rules('nutzer',
        'Wirtschaftssystem/Shop/Nutzer-Befehle',
        'Wirtschaftssystem/Finanzen',
        'Wirtschaftssystem/Geldquellen'
    ),

    // Eigene Befehle
    ...rules('nutzer', 'Eigene-Befehle/Fehlermeldungen/BugReport'),
    ...rules('team',
        'Eigene-Befehle/Team-Verwaltung',
        'Eigene-Befehle/Organisation',
        'Eigene-Befehle/Kommunikation'
    ),
    ...rules('nutzer', 'Eigene-Befehle/Support'),

    // Personalmanagement
    ...rules('team', 'Personalmanagmentsystem')
];

/**
 * Erstellt mehrere Regeln mit weniger Wiederholung.
 */
function rules(target, ...matches) {
    return matches.map(match => ({ match, target }));
}

/**
 * Normalisiert Pfade, damit Windows und Unix dieselbe
 * Schreibweise verwenden.
 */
function normalizePath(filePath) {
    return filePath.replace(/\\/g, '/').replace(/^\.\/+/, '');
}

/**
 * Prüft einen Pfad gegen eine Regel.
 *
 * "Schach" passt z. B. auf:
 *   Schach/ChessChallenge.md
 *
 * "Schach" passt aber nicht auf:
 *   MeineSchachDatei/...
 */
function pathMatches(filePath, rule) {
    const normalizedPath = normalizePath(filePath);
    const normalizedRule = normalizePath(rule);

    return normalizedPath === normalizedRule ||
        normalizedPath.startsWith(`${normalizedRule}/`);
}

/**
 * Löscht die automatisch erzeugten Proxies.
 *
 * _category_.json bleibt erhalten, damit manuelle
 * Kategorie-Konfigurationen nicht verloren gehen.
 */
function clearDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    for (const entry of fs.readdirSync(dir)) {
        if (entry === '_category_.json') continue;

        const currentPath = path.join(dir, entry);
        const stats = fs.lstatSync(currentPath);

        if (stats.isDirectory()) {
            clearDirectory(currentPath);

            if (fs.readdirSync(currentPath).length === 0) {
                fs.rmdirSync(currentPath);
            }
        } else {
            fs.unlinkSync(currentPath);
        }
    }
}

/**
 * Findet die erste passende Zielregel.
 */
function findTarget(relativePath, ruleSet) {
    const rule = ruleSet.find(entry =>
        pathMatches(relativePath, entry.match)
    );

    return rule?.target ?? null;
}

/**
 * Liest Titel und Beschreibung aus dem Frontmatter.
 */
function readFrontmatter(content, fileName) {
    const titleMatch = content.match(/^title:\s*(.*)$/m);
    const descriptionMatch = content.match(/^description:\s*(.*)$/m);

    return {
        title: titleMatch
            ? titleMatch[1].trim().replace(/^["']|["']$/g, '')
            : fileName.replace(/\.(md|mdx)$/i, ''),
        description: descriptionMatch
            ? descriptionMatch[1].trim().replace(/^["']|["']$/g, '')
            : ''
    };
}

/**
 * Erstellt einen Proxy für eine Quelldatei.
 */
function createProxy(sourceFile, relativePath, targetBaseDir, sourceType) {
    const normalizedPath = normalizePath(relativePath);

    const targetRelativePath = sourceType === 'context-menu'
        ? path.join('Kontextmenü-Aktionen', normalizedPath)
        : normalizedPath;

    const targetFile = path.join(targetBaseDir, targetRelativePath);
    const targetDir = path.dirname(targetFile);

    fs.mkdirSync(targetDir, { recursive: true });

    const content = fs.readFileSync(sourceFile, 'utf8');
    const { title, description } = readFrontmatter(
        content,
        path.basename(sourceFile)
    );

    const depth = targetRelativePath.split(path.sep).length;

    const importRoot = sourceType === 'context-menu'
        ? 'kontextmenü'
        : 'befehle/custom-bot';

    const importPath =
        `${'../'.repeat(depth)}${importRoot}/${normalizedPath}`;

    const proxyContent = `---
title: ${title}
${description ? `description: "${description.replace(/"/g, '\\"')}"` : ''}
displayed_sidebar: tutorialSidebar
hide_title: true
---

import Original from '${importPath}';

<Original />
`;

    fs.writeFileSync(targetFile, proxyContent, 'utf8');
}

/**
 * Verarbeitet alle Markdown-Dateien eines Verzeichnisses.
 */
function processFiles(dir, baseDir, sourceType, ruleSet, statistics) {
    if (!fs.existsSync(dir)) return;

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            processFiles(
                fullPath,
                baseDir,
                sourceType,
                ruleSet,
                statistics
            );
            continue;
        }

        if (!/\.(md|mdx)$/i.test(entry.name)) continue;

        const relativePath = normalizePath(
            path.relative(baseDir, fullPath)
        );

        const targetArea = findTarget(relativePath, ruleSet);

        // Keine unbekannten Dateien automatisch ins Team verschieben.
        if (!targetArea) {
            statistics.unmatched.push(relativePath);
            continue;
        }

        const targetBaseDir =
            targetArea === 'team' ? TEAM_DIR : NUTZER_DIR;

        createProxy(
            fullPath,
            relativePath,
            targetBaseDir,
            sourceType
        );

        statistics.total++;
        statistics[targetArea]++;
    }
}

/**
 * ============================================================
 * HAUPTPROGRAMM
 * ============================================================
 */

console.log('🧹 Alte Proxies werden gelöscht...');

// Nutzer- und Team-Bereich müssen NICHT manuell gelöscht werden.
clearDirectory(NUTZER_DIR);
clearDirectory(TEAM_DIR);

const statistics = {
    total: 0,
    nutzer: 0,
    team: 0,
    unmatched: []
};

console.log('🚀 Custom-Bot Befehle werden einsortiert...');

processFiles(
    SOURCE_DIR,
    SOURCE_DIR,
    'custom-bot',
    RULES,
    statistics
);

// Kontextmenüs werden separat verarbeitet.
if (fs.existsSync(CONTEXT_MENU_DIR)) {
    console.log('🖱️ Kontextmenü-Aktionen werden einsortiert...');

    processFiles(
        CONTEXT_MENU_DIR,
        CONTEXT_MENU_DIR,
        'context-menu',
        CONTEXT_MENU_RULES,
        statistics
    );
}

console.log('');
console.log('📄 Dateien verarbeitet:', statistics.total);
console.log('👤 Nutzer-Bereich:', statistics.nutzer);
console.log('👥 Team-Bereich:', statistics.team);

if (statistics.unmatched.length) {
    console.log('');
    console.log('⚠️ Nicht zugeordnete Dateien:');

    for (const file of statistics.unmatched) {
        console.log(`   ❌ ${file}`);
    }

    console.log('');
    console.log(
        `⚠️ ${statistics.unmatched.length} Datei(en) wurden ` +
        'nicht als Proxy erstellt.'
    );

    process.exitCode = 1;
} else {
    console.log('✅ Alle Dateien wurden eindeutig zugeordnet.');
}

console.log('✅ Proxy-Generierung abgeschlossen.');