---
title: Quarantäne aufheben
description: Hebt die Quarantäne eines Nutzers auf
---

# ❇️ | Quarantäne aufheben

Befehl: **`/moderate unquarantine`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, dessen Quarantäne beendet werden soll.

### Andere Optionen
- **`reason:`** [Optional]
  Der Grund für das Aufheben der Quarantäne.

### Beschreibung
Beendet den Quarantäne-Status eines Nutzers.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span className="badge" style={{backgroundColor: '#aa3a3a', color: '#fff'}}>👑 | Owner</span>
    <span className="badge" style={{backgroundColor: '#db7013', color: '#fff'}}>⚖️ | Moderator-Manager</span>
    <span className="badge" style={{backgroundColor: '#b47735', color: '#fff'}}>🛡️ | Mod+</span>
    <span className="badge" style={{backgroundColor: '#db7013', color: '#fff'}}>🛡️ | Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span className="badge badge--success">#️⃣ | Alle Kanäle</span>
  </div>
</div>