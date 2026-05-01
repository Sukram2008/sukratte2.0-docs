---
title: Teamsitzung erstellen
description: Erstellt eine neue Teamsitzungsvorlage
keywords: [Teamsitzung, Meeting, Planung, Protokoll, Termin, Orga]
---

# 👥📝 | Teamsitzung erstellen

Befehl: **`/teamsitzung-erstellen`**

### Erforderliche Optionen
- **`date`**
  Datum und Uhrzeit der geplanten Sitzung
- **`topics`**
  Die Themen, die besprochen werden sollen
- **`channel`**
  Der Textkanal für die Durchführung der Sitzung

:::tip Hinweis zum Format
Bitte achte beim Datum auf das Format: **DD.MM.YYYY, HH:MM** (Beispiel: 01.05.2026, 18:00).
:::

### Beschreibung
Bereitet eine neue Teamsitzung vor und erstellt automatisch die entsprechende Ankündigung für das Team.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#aa3a3a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👑 | Owner</span>
    <span style={{backgroundColor: '#f09a50', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>⚖ | Moderator-Manager</span>
    <span style={{backgroundColor: '#1891bd', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>💼 | Support-Manager</span>
    <span style={{backgroundColor: '#e4b613', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>📋 | Orga-Team</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>#️⃣ | Alle Kanäle</span>
  </div>
</div>