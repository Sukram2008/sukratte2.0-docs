---
title: Mitarbeiter suspendieren
description: Suspendiert ein Teammitglied für einen bestimmten Zeitraum
---

# 🚫🎭 | Mitarbeiter suspendieren

Befehl: **`/staff-management infraction suspend`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, der suspendiert werden soll.
- **`duration:`**
  Wie lange die Sperre dauern soll (z. B. 7d, 1m).
- **`reason:`**
  Der Grund für die Suspendierung.

### Beschreibung
Entzieht dem Teammitglied für die angegebene Dauer den Zugriff auf Teambereiche und markiert den Status als suspendiert.

:::info Hinweis
Nach Ablauf der Dauer wird der Status in der Regel nicht automatisch zurückgesetzt, sondern erfordert eine manuelle Überprüfung durch das Management.
:::

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