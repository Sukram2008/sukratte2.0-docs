const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './docs/discord/befehle'; 
const NUTZER_DIR = './docs/discord/nutzer-bereich';
const TEAM_DIR = './docs/discord/team-bereich';

const RULES = [
    { match: 'Admin-Tools', target: 'team' },
    { match: 'AFK-System', target: 'nutzer' },
    { match: 'Anonymer-Chat/Nutzer-Befehle', target: 'nutzer' },
    { match: 'Anonymer-Chat/Moderator-Befehle', target: 'team' },
    { match: 'Betterstatus', target: 'team' },
    { match: 'Bewerbungen', target: 'nutzer' },
    { match: 'Color-me', target: 'nutzer' },
    { match: 'Einladungsverfolgung', target: 'team' },
    { match: 'Erinnerungen', target: 'nutzer' },
    { match: 'Errate-die-Nummer', target: 'team' },
    { match: 'Fun-Befehle', target: 'nutzer' },
    { match: 'Geburtstags-Kalender/Nutzer-Befehle', target: 'nutzer' },
    { match: 'Geburtstags-Kalender/Admin-Befehle', target: 'team' },
    { match: 'Gewinnspiele/Nutzer-Befehle', target: 'nutzer' },
    { match: 'Gewinnspiele/Team-Befehle', target: 'team' },
    { match: 'Info-Befehle', target: 'nutzer' },
    { match: 'Level-System/Nutzer-Befehle', target: 'nutzer' },
    { match: 'Level-System/Admin-Befehle', target: 'team' },
    { match: 'Massenrolle', target: 'team' },
    { match: 'Minispiele', target: 'nutzer' },
    { match: 'Moderation-und-Sicherheit/Nutzer-Befehle', target: 'nutzer' },
    { match: 'Moderation-und-Sicherheit/Moderations-Aktionen', target: 'team' },
    { match: 'Moderation-und-Sicherheit/Kanal-Verwaltung', target: 'team' },
    { match: 'Moderation-und-Sicherheit/Notizen', target: 'team' },
    { match: 'Partner-Liste', target: 'team' },
    { match: 'Ping-Schutz/Nutzer-Befehle', target: 'nutzer' },
    { match: 'Ping-Schutz/Team-Befehle', target: 'team' },
    { match: 'Sammel-die-Codes/Nutzer-Befehle', target: 'nutzer' },
    { match: 'Sammel-die-Codes/Admin-Befehle', target: 'team' },
    { match: 'Teammitglieder-Ziele', target: 'team' },
    { match: 'Temporäre-Channel', target: 'nutzer' },
    { match: 'Umfragen', target: 'team' },
    { match: 'Vorschläge/Nutzer-Befehle', target: 'nutzer' },
    { match: 'Vorschläge/Team-Befehle', target: 'team' },
    { match: 'Wirtschaftssystem/Finanzen', target: 'nutzer' },
    { match: 'Wirtschaftssystem/Geldquellen', target: 'nutzer' },
    { match: 'Wirtschaftssystem/Team-Befehle', target: 'team' }
];

function clearDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        const curPath = path.join(dir, file);
        if (!curPath.endsWith('_category_.json')) {
            if (fs.lstatSync(curPath).isDirectory()) {
                clearDirectory(curPath);
                fs.rmdirSync(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        }
    });
}

function processFiles(dir, baseDir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const relativePath = path.relative(baseDir, fullPath);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            processFiles(fullPath, baseDir);
        } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            
            const titleMatch = content.match(/^title:\s*(.*)$/m);
            const title = titleMatch ? titleMatch[1].trim() : file.replace(/\.mdx?$/, '');
            const descMatch = content.match(/^description:\s*(.*)$/m);
            const description = descMatch ? descMatch[1].trim() : '';

            // LOGIK: Den richtigen Zielort finden
            let targetArea = 'nutzer'; // Standardfall
            
            // Wir prüfen unsere Regeln gegen den relativen Pfad
            for (const rule of RULES) {
                if (relativePath.includes(rule.match)) {
                    targetArea = rule.target;
                    break; 
                }
            }

            const finalBaseDir = targetArea === 'team' ? TEAM_DIR : NUTZER_DIR;
            const targetFolder = path.join(finalBaseDir, relativePath);

            const targetDirPath = path.dirname(targetFolder);
            if (!fs.existsSync(targetDirPath)) fs.mkdirSync(targetDirPath, { recursive: true });

            const depth = relativePath.split(path.sep).length;
            const dots = '../'.repeat(depth);
            const importPath = `${dots}befehle/${relativePath.replace(/\\/g, '/')}`;

            const proxyContent = `---
title: ${title}
${description ? `description: "${description.replace(/"/g, '\\"')}"` : ''}
displayed_sidebar: tutorialSidebar
hide_title: true
---

import Original from '${importPath}';

<Original />
`;
            fs.writeFileSync(targetFolder, proxyContent);
        }
    });
}

console.log('🧹 Alte Proxies werden gelöscht...');
clearDirectory(NUTZER_DIR);
clearDirectory(TEAM_DIR);

console.log('🚀 Präzise Sortierung der Unterordner läuft...');
processFiles(SOURCE_DIR, SOURCE_DIR);

console.log('✅ Fertig! Alle Dateien sind in ihren jeweiligen Abteilungen.');