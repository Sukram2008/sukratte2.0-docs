---
title: Server-Lockdown
description: Aktiviert oder deaktiviert den Lockdown-Modus
---

# 🚨 | Server-Lockdown

Befehl: **`/moderate lockdown`**

### Erforderliche Optionen
- **`enable:`**
  Legt fest, ob der Lockdown aktiviert (**True**) oder deaktiviert (**False**) werden soll.
- **`reason:`**
  Der Grund für den Lockdown oder dessen Aufhebung.

:::danger Achtung: Globale Auswirkung
Ein Lockdown ist ein massiver Eingriff! Er sperrt den Schreibzugriff auf **nahezu allen relevanten Kanälen** des Servers gleichzeitig. Nutze diesen Befehl nur in absoluten Notfällen (z. B. bei einem Raid).
:::

### Beschreibung
Versetzt den gesamten Server in einen Sicherheitszustand, um unkontrollierte Nachrichtenfluten oder Angriffe zu stoppen.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖ Moderator-Manager</span>
    <span style={{backgroundColor: '#b47735', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚡ Mod+</span>
    <span style={{backgroundColor: '#db7013', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛠 Mod</span>
    <span style={{backgroundColor: '#e67e22', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛡 Junior-Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>Alle Kanäle</span>
  </div>
</div>