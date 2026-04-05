---
title: Erinnerung erstellen
description: Erstelle eine persönliche Erinnerung für dich
---

# ⏰🔔 | Erinnerung erstellen

Befehl: **`/remind-me`**

### Erforderliche Optionen
- **`in`**
  Nach welcher Zeit sollen wir dich erinnern? (z. B. "2h 30m")
- **`what`**
  An was sollen wir dich erinnern?

### Andere Optionen
- **`dm`** [Optional]
  Sollen wir dir eine PN statt einem Ping in diesen Kanal senden? (**True** = PN / **False** = Kanal-Ping)

### Beschreibung
Mit diesem Befehl kannst du dir ganz einfach Erinnerungen setzen, damit du nichts Wichtiges verpasst. 

- **Zeitformat:** Du kannst Einheiten wie `h` (Stunden), `m` (Minuten) oder `d` (Tage) kombinieren.
- **Zustellung:** Standardmäßig markiert dich der Bot im aktuellen Kanal, sobald die Zeit abgelaufen ist. 
- **Privat-Modus:** Wenn du die Option `dm` auf **True** setzt, schickt dir der Bot die Erinnerung stattdessen diskret per Privatnachricht.

:::info Hinweis
Stelle bei der Nutzung der DM-Option sicher, dass deine Privatsphäre-Einstellungen den Empfang von Nachrichten von Servermitgliedern erlauben.
:::

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span className="badge" style={{backgroundColor: '#6e31e0', color: '#fff'}}>👤 | Member</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span className="badge badge--success">💬 | #chat</span>
    <span className="badge badge--success">🤖 | #befehle</span>
  </div>
</div>