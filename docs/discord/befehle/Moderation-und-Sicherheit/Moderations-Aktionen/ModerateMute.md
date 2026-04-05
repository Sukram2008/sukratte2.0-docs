---
title: Nutzer stummschalten
description: Schaltet einen Nutzer stumm
---

# 🔇 | Nutzer stummschalten

Befehl: **`/moderate mute`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, der stummgeschaltet werden soll.
- **`duration:`**
  Die Dauer der Stummschaltung.
- **`reason:`**
  Der Grund für den Mute.

### Andere Optionen
- **`proof:`** [Optional]
  Ein Beweis für die Stummschaltung.

:::info Anmerkung
Die Option **duration** ist bei einer Stummschaltung eine Pflichtangabe.
:::

### Beschreibung
Verhindert, dass ein Nutzer für eine bestimmte Zeit kommunizieren kann.

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