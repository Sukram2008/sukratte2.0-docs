---
title: Umfrage erstellen
description: Erstelle eine neue Umfrage mit mehreren Antwortmöglichkeiten
---

# 📊📝 | Umfrage erstellen

Befehl: **`/poll create`**

### Erforderliche Optionen
- **`description:`**
  Die Frage oder das Thema der Umfrage.
- **`channel:`**
  Der Textkanal, in dem die Umfrage veröffentlicht werden soll.
- **`option1:`**
  Die erste Antwortmöglichkeit.
- **`option2:`**
  Die zweite Antwortmöglichkeit.

### Andere Optionen
- **`option3`** bis **`option9:`**
  Zusätzliche Antwortmöglichkeiten (insgesamt bis zu 9).
- **`duration:`**
  Legt fest, wie lange die Umfrage aktiv sein soll.
- **`public:`**
  Bestimmt, ob die Ergebnisse für alle sichtbar sind.

### Beschreibung
Mit diesem Befehl startest du eine interaktive Umfrage. Die Nutzer können über ein **Drop-Down-Menü** wählen und abstimmen. Der Kanal muss direkt beim Erstellen ausgewählt werden.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 | Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖ | Moderator-Manager</span>
    <span style={{backgroundColor: '#1891bd', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>💼 | Support-Manager</span>
    <span style={{backgroundColor: '#b47735', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚡ | Mod+</span>
    <span style={{backgroundColor: '#db7013', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛠 | Mod</span>
    <span style={{backgroundColor: '#e67e22', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛡 | Junior-Mod</span>
    <span style={{backgroundColor: '#11a1d3', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🧤 | Supporter</span>
    <span style={{backgroundColor: '#2ecc71', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🌱 | Probe-Supporter</span>
    <span style={{backgroundColor: '#e4b613', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>📋 | Orga-Team</span>
    <span style={{backgroundColor: '#9146ff', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>💜 | Twitch-Mod</span>
    <span style={{backgroundColor: '#ff0000', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>❤️ | YouTube-Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>#️⃣ | Alle Kanäle</span>
  </div>
</div>