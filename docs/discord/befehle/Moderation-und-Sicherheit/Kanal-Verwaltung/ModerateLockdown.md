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