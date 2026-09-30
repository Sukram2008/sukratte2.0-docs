---
title: Item bearbeiten
description: Ändere bestehende Shop-Einträge
keywords: [Shop, Edit, Bearbeiten, Update, Preisänderung, Management]
---

# 📝⚙️ | Item bearbeiten

Befehl: **`/shop edit`**

### Erforderliche Optionen

- **`item-id:`**
  Die ID des Items, das du bearbeiten möchtest.

### Optionale Änderungen

- **`item-new-name:`**
  Ein neuer Name für das Item.
- **`new-price:`**
  Ein aktualisierter Preis.
- **`new-role:`**
  Die Rolle, die künftig vergeben werden soll.

### Beschreibung

Mit diesem Befehl kannst du bestehende Items im Shop anpassen, ohne sie löschen und neu erstellen zu müssen. Du musst lediglich die ID angeben und kannst dann die gewünschten Felder aktualisieren.

### Berechtigungen

:::warning Zusätzliche Berechtigungen
Die Unterbefehle `/shop add`, `/shop edit` und `/shop delete` können nur von Administratoren ausgeführt werden. Da aktuell keine Administrator-Rollen konfiguriert sind, haben nur Bot-Operatoren Zugriff auf diese Funktionen.
:::

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👤 | Member</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#99aab5', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🏦 | wirtschaft</span>
  </div>
</div>
