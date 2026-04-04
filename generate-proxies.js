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
      
      // Sucht nach dem Titel in den Metadaten der Originaldatei
      const titleMatch = originalContent.match(/title:\s*(.*)/);
      const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '');

      TARGETS.forEach(t => {
        const targetFilePath = path.join(t.folder, relativePath);
        const depth = relativePath.split(path.sep).length;
        const dots = '../'.repeat(depth + 1); 
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

TARGETS.forEach(t => {
  if (!fs.existsSync(t.folder)) fs.mkdirSync(t.folder, { recursive: true });
});
createProxies(SOURCE_DIR, SOURCE_DIR);
console.log('✅ Alle Ordner und Verlinkungen wurden erstellt!');