import os
import re

results = []
discord_dir = 'docs/discord'

for root, dirs, files in os.walk(discord_dir):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                    for idx, line in enumerate(lines, 1):
                        # Check for lines with emojis
                        if re.search(r'[👑#️⃣👥📺]', line):
                            # Check if NOT in correct format: emoji + space + | + space
                            if not re.search(r'[👑#️⃣👥📺] \| ', line):
                                results.append({
                                    'file': filepath,
                                    'line_num': idx,
                                    'line': line.strip(),
                                })
            except Exception as e:
                print(f'Fehler bei {filepath}: {e}')

if results:
    results.sort(key=lambda x: (x['file'], x['line_num']))
    print('BETROFFENE DATEIEN UND ZEILENNUMMERN:\n')
    
    current_file = ''
    for r in results:
        if r['file'] != current_file:
            current_file = r['file']
            print(f'\n📄 {r["file"]}')
        print(f'   Zeile {r["line_num"]}: {r["line"][:100]}')
    
    print(f'\n\nGesamt betroffene Zeilen: {len(results)}')
else:
    print('✅ Alle Dateien haben das korrekte Format!')
