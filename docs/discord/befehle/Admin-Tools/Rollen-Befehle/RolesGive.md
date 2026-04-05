---
title: Rolle zuweisen
description: Weiße jemandem eine Rolle permanent oder temporär zu
---

# 👤➕ | Rolle zuweisen

Befehl: **`/roles give`**

### Erforderliche Optionen
- **`user`**
  Mitglied, dem du eine Rolle zuweisen willst
- **`role`**
  Rolle, die du dem Mitglied zuweisen willst

### Andere Optionen
- **`duration`** [Optional]
  Wenn du diesen Parameter angibst, wird die Rolle nach Ablauf dieser Länge entfernt

### Beschreibung
Mit diesem Befehl kannst du Nutzern Rollen geben. 
- Ohne Angabe einer Dauer wird die Rolle **permanent** zugewiesen.
- Mit Angabe einer Dauer (z.B. `1d`, `12h`) wird die Rolle automatisch nach Ablauf der Zeit wieder entfernt.

### Berechtigungen
<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span className="badge" style={{backgroundColor: '#aa3a3a', color: '#fff'}}>👑 | Owner</span>
    <span className="badge" style={{backgroundColor: '#db7013', color: '#fff'}}>⚖️ | Manager</span>
    <span className="badge" style={{backgroundColor: '#1891bd', color: '#fff'}}>🛡️ | Mod+ / Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span className="badge badge--success">🌎 | Alle Kanäle</span>
  </div>
</div>