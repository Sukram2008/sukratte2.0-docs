---
title: Notiz bearbeiten
description: Bearbeite eine deiner existierenden Notizen zu einem Nutzer
---

# ✍️ | Notiz bearbeiten

Befehl: **`/moderate notes edit`**

### Erforderliche Optionen
- **`user:`**
  Nutzer dem du die Notiz bearbeiten möchtest.
- **`note-id:`**
  Die ID der Notiz, die du bearbeiten möchtest.
- **`notes:`**
  Der neue Inhalt für die Notiz.

### Beschreibung
Bearbeite den Inhalt einer bereits existierenden Notiz für einen Benutzer.

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