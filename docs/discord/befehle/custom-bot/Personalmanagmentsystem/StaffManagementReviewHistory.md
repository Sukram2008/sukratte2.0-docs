---
title: Review-Verlauf
description: Zeigt den Verlauf der Bewertungen eines Teammitglieds an
---

# 📜🎭 | Review-Verlauf

Befehl: **`/staff-management review history`**

### Erforderliche Optionen
- **`user:`**
  Das Teammitglied, dessen Historie eingesehen werden soll.

### Beschreibung
Ruft eine Liste aller bisherigen Bewertungen ab, die für dieses Teammitglied abgegeben wurden, inklusive Kommentare und Sterne-Durchschnitt.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 | Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖ | Moderator-Manager</span>
    <span style={{backgroundColor: '#b47735', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚡ | Mod+</span>
    <span style={{backgroundColor: '#db7013', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛠 | Mod</span>
    <span style={{backgroundColor: '#e67e22', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🛡 | Junior-Mod</span>
    <span style={{backgroundColor: '#3498db', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>💬 | Supporter</span>
    <span style={{backgroundColor: '#5dade2', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🧪 | Probe-Supporter</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>#️⃣ | Alle Kanäle</span>
  </div>
</div>

:::tip Team-Befehl
Dieser Befehl ist für alle Teammitglieder in den entsprechenden Kanälen freigeschaltet.
:::