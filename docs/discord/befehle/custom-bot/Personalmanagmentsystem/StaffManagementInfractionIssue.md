---
title: Verstoß aussprechen
description: Spricht einen offiziellen Verstoß gegen ein Teammitglied aus
keywords: [Staff-Management, Infraction, Issue, Verwarnung, Aussprechen, Sanktion]
---

# ⚠️🎭 | Verstoß aussprechen

Befehl: **`/staff-management infraction issue`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, der den Verstoß erhält.
- **`type:`**
  Die Art des Verstoßes.
  *Auswahl:* Verwarnung, Wird untersucht, Kündigung.
- **`reason:`**
  Der Grund für den Verstoß.

### Andere Optionen
- **`expiry:`** [Optional]
  Wann der Verstoß automatisch ablaufen soll.

### Beschreibung
Registriert einen neuen Verstoß im System. Das Teammitglied wird über die Maßnahme informiert und der Vorfall wird in der Akte vermerkt.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 | Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖ | Moderator-Manager</span>
    <span style={{backgroundColor: '#1891bd', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>💼 | Support-Manager</span>
    <span style={{backgroundColor: '#1dbd8b', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🎨 | Designer-Manager</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>#️⃣ | Team-Intern</span>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>#️⃣ | Admin-Bereich</span>
  </div>
</div>

:::info Aufsichts-Recht
Befehl für die operative Leitung. Erfordert eine der oben genannten Management-Rollen zur erfolgreichen Ausführung.
:::