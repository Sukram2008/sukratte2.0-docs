---
title: Notiz erstellen
description: Erstelle eine neue Notiz zu einem Nutzer
---

# 📝 | Notiz erstellen

Befehl: **`/moderate notes create`**

### Erforderliche Optionen
- **`user:`**
  Nutzer dem du die Notiz hinzufügen möchtest.
- **`notes:`**
  Die Notiz, die du für den Nutzer erstellen möchtest.

### Beschreibung
Mit diesem Befehl kannst du eine neue administrative Notiz für einen bestimmten Benutzer hinterlegen.

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