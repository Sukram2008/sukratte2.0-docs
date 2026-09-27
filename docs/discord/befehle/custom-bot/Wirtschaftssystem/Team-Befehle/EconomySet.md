---
title: Kontostand setzen
description: Setze das Guthaben eines Nutzers fest
keywords: [Economy, Set, Kontostand, Überschreiben, Admin, Management]
---

# 🎯🏦 | Kontostand setzen

Befehl: **`/economy set`**

### Erforderliche Optionen
- **`user:`**
  Der Nutzer, dessen Kontostand angepasst werden soll.
- **`balance:`**
  Der exakte Betrag, den der Nutzer danach besitzen soll.

### Beschreibung
Setzt das Bankguthaben eines Nutzers auf einen fest definierten Wert.

:::danger Wichtiger Hinweis
Dieser Befehl **überschreibt** den aktuellen Kontostand vollständig. Das bisherige Guthaben des Nutzers geht dabei verloren und wird exakt durch den neuen Betrag ersetzt.
:::

:::warning Achtung: Unfairness-Gefahr
Das manuelle Festlegen von Kontoständen kann das gesamte Wirtschaftssystem manipulieren. Es verfälscht den Wettbewerb und kann zu großem Unmut führen, wenn Nutzer ohne spielerische Leistung hohe Beträge erhalten.
:::

### Berechtigungen

:::warning Zusätzliche Berechtigungen
Einige Befehle dieses Moduls können nur von den in der Konfiguration festgelegten Administratoren ausgeführt werden. Dies betrifft insbesondere Befehle, die den Kontostand von Nutzern verändern oder das Wirtschaftssystem verwalten.
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