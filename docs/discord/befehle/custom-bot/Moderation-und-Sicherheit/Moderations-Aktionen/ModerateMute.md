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
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 | Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖ | Moderator-Manager</span>
    <span style={{backgroundColor: '#b47735', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚡ | Mod+</span>
    <span style={{backgroundColor: '#db7013', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛠 | Mod</span>
    <span style={{backgroundColor: '#e67e22', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛡 | Junior-Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>#️⃣ | Alle Kanäle</span>
  </div>
</div>