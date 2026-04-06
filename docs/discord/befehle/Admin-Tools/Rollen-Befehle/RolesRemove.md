---
title: Rolle entfernen
description: Entferne permanent oder temporär eine Rolle von einem Nutzer
---

# 👤➖ | Rolle entfernen

Befehl: **`/roles remove`**

### Erforderliche Optionen
- **`user`**
  Mitglied, von welchem du die Rolle entfernen willst
- **`role`**
  Rolle, die du vom Mitglied entfernen willst

### Andere Optionen
- **`duration`** [Optional]
  Wenn du diesen Parameter angibst, wird die Rolle nach Ablauf dieser Länge zurückgegeben

### Beschreibung
Entfernt eine Rolle von einem Mitglied.
- Wird eine Dauer angegeben, handelt es sich um einen temporären Entzug – die Rolle wird dem Nutzer nach Ablauf der Zeit automatisch wieder gegeben.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 | Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖ | Moderator-Manager</span>
    <span style={{backgroundColor: '#1891bd', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>💼 | Support-Manager</span>
    <span style={{backgroundColor: '#b47735', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚡ | Mod+</span>
    <span style={{backgroundColor: '#db7013', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛠 | Mod</span>
    <span style={{backgroundColor: '#bd8b20', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🔨 | Junior-Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>#️⃣ | Alle Kanäle</span>
  </div>
</div>