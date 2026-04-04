const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './docs/discord/befehle'; 
const TARGETS = [
  { name: 'nutzer-bereich', folder: './docs/nutzer-bereich' },
  { name: 'team-bereich', folder: './docs/team-bereich' }
];

function createProxies(dir, baseDir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(baseDir, fullPath);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      TARGETS.forEach(t => {
        const targetFolder = path.join(t.folder, relativePath);
        if (!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder, { recursive: true });
      });
      createProxies(fullPath, baseDir);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const originalContent = fs.readFileSync(fullPath, 'utf-8');
      
      const titleMatch = originalContent.match(/title:\s*(.*)/);
      const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '').replace('.mdx', '');

      TARGETS.forEach(t => {
        const targetFilePath = path.join(t.folder, relativePath);
        
        // BERECHNUNG DER PFADTIEFE
        // Wir müssen aus dem Zielordner (z.B. docs/nutzer-bereich/Ordner/Datei.md) 
        // erst hoch nach "docs" und dann in "discord/befehle/..."
        const depth = relativePath.split(path.sep).length; 
        // Wenn relativePath "System/Datei.md" ist, ist depth = 2.
        // Wir brauchen "../" für "System", "../" für "nutzer-bereich" -> also depth viele "../"
        const dots = '../'.repeat(depth); 
        const importPath = `${dots}discord/befehle/${relativePath.replace(/\\/g, '/')}`;

        const content = `---
title: ${title}
displayed_sidebar: tutorialSidebar
---

import Original from '${importPath}';

<Original />
`;
        fs.writeFileSync(targetFilePath, content);
      });
    }
  });
}

// Vorab-Check: Alte Proxy-Ordner leeren, um Geisterdateien zu vermeiden
TARGETS.forEach(t => {
  if (fs.existsSync(t.folder)) {
    // Optional: fs.rmSync(t.folder, { recursive: true, force: true }); 
  }
  if (!fs.existsSync(t.folder)) fs.mkdirSync(t.folder, { recursive: true });
});

createProxies(SOURCE_DIR, SOURCE_DIR);
console.log('✅ Pfade korrigiert und Dateien neu generiert!');