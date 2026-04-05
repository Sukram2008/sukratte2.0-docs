---
title: Kanal-Stummschaltung aufheben
description: Hebt den Channel-Mute für einen Nutzer auf
---

# 🔊🔒 | Kanal-Stummschaltung aufheben

Befehl: **`/moderate remove-channel-mute`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, dessen Stummschaltung im Kanal aufgehoben werden soll.
- **`reason:`**
  Der Grund für das Aufheben des Channel-Mutes.

:::tip Anmerkung: Kanal
Diese Aktion bezieht sich immer auf den **aktuellen Kanal**, in dem der Befehl ausgeführt wird.
:::

### Beschreibung
Ermöglicht es einem Nutzer, in dem spezifischen Kanal wieder zu schreiben, in dem er zuvor stummgeschaltet wurde.

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