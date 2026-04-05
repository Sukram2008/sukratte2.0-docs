---
title: Duell
description: Fordere ein anderes Mitglied zu einem strategischen Duell heraus
---

# ⚔️🏟️ | Minispiele: duel

Befehl: **`/duel`**

### Erforderliche Optionen
- **`user:`**
  Der Benutzer, gegen den du antreten möchtest.

### Beschreibung
Mit diesem Befehl startest du ein taktisches rundenbasiertes Duell. Strategie und das Vorhersehen der gegnerischen Züge sind hier der Schlüssel zum Sieg.

### Spielablauf & Mechaniken

#### Startphase
- **Herausforderung:** Der markierte Nutzer hat **2 Minuten** Zeit, die Einladung über den Button **Spiel beitreten** anzunehmen oder über **Nein, danke** abzulehnen.
- **Status:** Untereinander werden die Namen der Kontrahenten angezeigt. Dahinter steht der Status: `⏳ Warte auf Auswahl`. Sobald ein Spieler eine Aktion gewählt hat, ändert sich dies zu `✅ Bereit`.

#### Die Aktionen
Dir stehen in jeder Runde drei Buttons zur Verfügung:

- **🔫 Waffe nutzen:** - Du gewinnst sofort, wenn der Gegner in dieser Runde nachlädt.
  - Wenn der Gegner abwehrt oder ebenfalls schießt, verbrauchst du eine Patrone und die Runde geht weiter.
- **🛡️ Abwehren:** - Schützt dich vor einem Schuss des Gegners (dieser verliert dabei eine Patrone).
  - **Achtung:** Wenn dui **5-mal oder öfter hintereinander** abwehrst, wrd dein Schild unwirksam, bis du wieder lädst oder schießt.
- **🔁 Waffe laden:** - Erhöht deinen Munitionsvorrat um eine Patrone. 
  - Du kannst maximal **5 Patronen** gleichzeitig halten.
  - **Risiko:** Wenn der Gegner in dieser Runde schießt, hast du sofort verloren!

#### Aktion-Matrix (Übersicht)

| Spieler B ⬇ | 🔫 Waffe nutzen | 🛡️ Abwehren | 🔄 Nachladen |
| :--- | :--- | :--- | :--- |
| **🔫 Waffe nutzen** | Beide verlieren 1 Patrone | B verliert 1 Patrone, A weicht aus | **Spieler B gewinnt** |
| **🛡️ Abwehren** | A verliert 1 Patrone, B weicht aus | Nichts passiert | A erhält 1 Patrone |
| **🔄 Nachladen** | **Spieler A gewinnt** | B erhält 1 Patrone | Beide erhalten 1 Patrone |

:::tip Strategie
Behalte die Munition deines Gegners im Auge! Wenn er keine Patronen hat, kann er nicht schießen – das ist deine Chance zum gefahrlosen Nachladen.
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
    <span className="badge badge--success">🎮 | #minigames</span>
  </div>
</div>