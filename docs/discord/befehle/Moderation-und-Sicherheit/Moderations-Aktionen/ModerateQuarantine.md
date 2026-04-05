---
title: Quarantäne verhängen
description: Versetzt einen Nutzer in Quarantäne
---

# ☣️ | Quarantäne verhängen

Befehl: **`/moderate quarantine`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, der in Quarantäne verschoben werden soll.
- **`reason:`**
  Der Grund für die Quarantäne.

### Andere Optionen
- **`duration:`** [Optional]
  Die Dauer der Quarantäne.

:::tip Anmerkung: Dauer
Wird keine **duration** angegeben, ist die Quarantäne standardmäßig **permanent**.
:::

### Beschreibung
Isoliert einen Nutzer vom Rest des Servers.

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