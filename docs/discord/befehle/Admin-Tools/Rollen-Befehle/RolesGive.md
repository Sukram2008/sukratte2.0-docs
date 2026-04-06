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
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖ Moderator-Manager</span>
    <span style={{backgroundColor: '#1891bd', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>💼 Support-Manager</span>
    <span style={{backgroundColor: '#b47735', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚡ Mod+</span>
    <span style={{backgroundColor: '#db7013', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛠 Mod</span>
    <span style={{backgroundColor: '#bd8b20', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🔨 Junior-Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>Alle Kanäle</span>
  </div>
</div>