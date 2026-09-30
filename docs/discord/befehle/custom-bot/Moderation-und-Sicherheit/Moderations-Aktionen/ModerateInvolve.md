---
title: Beteiligten Nutzer verwalten
description: Verknüpft einen beteiligten Nutzer mit einem Moderationsfall
keywords:
  [
    Involve,
    Beteiligter,
    Nutzer,
    Moderationsfall,
    Melder,
    Zeuge,
    Moderate,
    Moderation,
  ]
---

# 👥 | Beteiligten Nutzer verwalten

Befehl: **`/moderate involve`**

### Erforderliche Optionen

- **`id:`**
  Der zu aktualisierende Fall. Die Suche erfolgt über die Fallnummer oder den Nutzer.
- **`user:`**
  Der beteiligte Nutzer, der mit dem Fall verknüpft oder davon entfernt werden soll.

### Andere Optionen

- **`remove:`** [Optional]
  Entfernt den Nutzer vom Fall, statt ihn mit dem Fall zu verknüpfen (True/False).

### Beschreibung

Verknüpft einen beteiligten Nutzer (z. B. Melder, zweiter Täter oder Zeuge) mit einem Moderationsfall.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 | Owner</span>
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 | AFK Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖️ | Moderator-Manager</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>💼 | Support-Manager</span>
    <span style={{backgroundColor: '#b47735', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚡ | Mod+</span>
    <span style={{backgroundColor: '#db7013', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛡️ | Mod</span>
    <span style={{backgroundColor: '#e67e22', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🔨 | Junior-Mod</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#99aab5', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>#️⃣ | Alle Kanäle</span>
  </div>
</div>
