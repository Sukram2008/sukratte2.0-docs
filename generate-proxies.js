const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './docs/discord/befehle'; 
const TARGETS = [
  { name: 'nutzer-bereich', folder: './docs/discord/nutzer-bereich', label: 'Nutzer' },
  { name: 'team-bereich', folder: './docs/discord/team-bereich', label: 'Team' }
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
      
      // Sucht den Titel (unterstützt Leerzeichen und Sonderzeichen)
      const titleMatch = originalContent.match(/^title:\s*(.*)$/m);
      const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '').replace('.mdx', '');
      
      // Sucht die Beschreibung (extrahiert alles nach "description:")
      const descMatch = originalContent.match(/^description:\s*(.*)$/m);
      let description = descMatch ? descMatch[1].trim() : '';

      TARGETS.forEach(t => {
        const targetFilePath = path.join(t.folder, relativePath);
        const depth = relativePath.split(path.sep).length; 
        const dots = '../'.repeat(depth); 
        const importPath = `${dots}befehle/${relativePath.replace(/\\/g, '/')}`;

        // Erstellt den Kopf der neuen Datei (Frontmatter)
        let frontmatter = `---\ntitle: ${title}\n`;
        if (description) {
          // Wir setzen die Beschreibung in Anführungszeichen für Docusaurus
          frontmatter += `description: "${description.replace(/"/g, '\\"')}"\n`;
        }
        frontmatter += `displayed_sidebar: tutorialSidebar\nhide_title: true\n---`;

        const content = `${frontmatter}

import Original from '${importPath}';

<Original />
`;
        fs.writeFileSync(targetFilePath, content);
      });
    }
  });
}

// Ordner initialisieren
TARGETS.forEach(t => {
  if (!fs.existsSync(t.folder)) fs.mkdirSync(t.folder, { recursive: true });

  const categoryJson = {
    label: t.label,
    link: null, 
    className: 'hide-sidebar-item' 
  };
  
  fs.writeFileSync(
    path.join(t.folder, '_category_.json'), 
    JSON.stringify(categoryJson, null, 2)
  );
});

createProxies(SOURCE_DIR, SOURCE_DIR);
console.log('✅ Dateipflege abgeschlossen: Titel und Beschreibungen wurden übertragen.');