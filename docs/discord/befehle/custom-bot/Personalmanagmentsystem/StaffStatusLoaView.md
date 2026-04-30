---
title: LOA Details
description: Zeigt Details zu einer spezifischen Abwesenheit an.
---

# 🔍🎭 | LOA Details

Befehl: **`/staff-status loa view`**

### Erforderliche Optionen
- **`user:`** Nutzer, dessen LOA-Details eingesehen werden sollen.

### Beschreibung
Zeigt die genauen Daten und den hinterlegten Grund für eine Abwesenheit an. Teammitglieder können ihre eigenen Daten sehen, Manager können alle Daten sehen.

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