---
title: Nutzer sperren
description: Sperrt einen Nutzer für den anonymen Chat
---

# 🚫👤 | Nutzer sperren

Befehl: **`/moderate-anonymous-channel disable`**

### Erforderliche Optionen
- **`display-name`**
  Der Name, welcher im Kanal angezeigt wird.

### Andere Optionen
- **`reason`** [Optional]
  Grund für die Deaktivierung des Nutzers.

### Beschreibung
Dieser Befehl entzieht einem Nutzer die Berechtigung, am anonymen Chat teilzunehmen. Über den Anzeigenamen (Display Name) kann der Moderator den Nutzer identifizieren und sperren, ohne dessen echte Identität zu sehen.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span className="badge" style={{backgroundColor: '#aa3a3a', color: '#fff'}}>👑 | Owner</span>
    <span className="badge" style={{backgroundColor: '#db7013', color: '#fff'}}>⚖️ | Moderator-Manager</span>
    <span className="badge" style={{backgroundColor: '#1891bd', color: '#fff'}}>🛡️ | Mod+ / Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span className="badge badge--success">💬 | #anonymer-chat</span>
  </div>
</div>