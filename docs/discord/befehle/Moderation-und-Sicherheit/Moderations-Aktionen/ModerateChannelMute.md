---
title: Kanal stummschalten
description: Deaktiviert die Schreibrechte für einen Nutzer in einem Kanal
---

# 🔒 | Kanal stummschalten

Befehl: **`/moderate channel-mute`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, der im Kanal stummgeschaltet werden soll.
- **`reason:`**
  Der Grund für den Channel-Mute.

### Andere Optionen
- **`proof:`** [Optional]
  Ein Beweis für die Aktion.

:::info Anmerkung: Kanal
Diese Aktion bezieht sich immer auf den **aktuellen Kanal**, in dem der Befehl ausgeführt wird.
:::

### Beschreibung
Sperrt den Schreibzugriff für einen bestimmten Nutzer im aktuellen Kanal.

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