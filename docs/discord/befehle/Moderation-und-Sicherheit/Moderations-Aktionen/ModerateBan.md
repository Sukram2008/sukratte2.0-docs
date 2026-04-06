---
title: Nutzer bannen
description: Bannt ein Mitglied vom Server
---

# 🔨 | Nutzer bannen

Befehl: **`/moderate ban`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, der gebannt werden soll.
- **`reason:`**
  Der Grund für den Ban.

### Andere Optionen
- **`proof:`** [Optional]
  Ein Beweis für die Moderationsaktion.
- **`duration:`** [Optional]
  Die Dauer des Bans.
- **`days:`** [Optional]
  Anzahl der Tage, für die Nachrichten gelöscht werden sollen.

:::tip Anmerkung: Dauer
Wird keine **duration** angegeben, ist der Ban standardmäßig **permanent**.
:::

### Beschreibung
Bannt ein Mitglied dauerhaft oder zeitweise vom Server.

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