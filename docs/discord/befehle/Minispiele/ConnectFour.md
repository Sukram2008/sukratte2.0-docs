---
title: Vier gewinnt
description: Fordere ein anderes Mitglied zu einer Runde Vier gewinnt heraus
---

# 🔴🔵 | Minispiele: Vier gewinnt

Befehl: **`/connect-four`**

### Erforderliche Optionen
- **`user:`**
  Wähle den Gegner aus, gegen den du antreten möchtest.

### Andere Optionen
- **`field_size:`** [Optional]
  Die Größe des Spielfelds. 
  *(Hinweis: Das Feld ist immer quadratisch, also $x \times x$ Felder).*

:::info Wichtiger Hinweis
Da das Feld quadratisch ist, beeinflusst die `field_size` sowohl die Breite als auch die Höhe des Spiels. Bei einer Größe von 7 hast du also ein $7 \times 7$ Raster.
:::

### Beschreibung
Mit diesem Befehl forderst du ein anderes Mitglied zu einer Runde "Vier gewinnt" heraus. Sobald die Einladung angenommen wurde, wird ein Spielfeld generiert, in das ihr abwechselnd eure Steine fallen lassen könnt.

### Spielablauf & Mechaniken

#### Startphase
- **Anfrage:** Der Gegner erhält eine Nachricht mit den Buttons **Spiel beitreten** und **Nein, danke**.
- **Spielstart:** Sobald "Spiel beitreten" geklickt wird, erscheint das leere Spielfeld aus **weißen Vierecken**.

#### Während des Spiels
- **Statusanzeige:** Über dem Feld wird angezeigt, wer gegen wen spielt und welcher Name (mit zugehöriger Farbe) gerade am Zug ist.
- **Steuerung:** Unter dem Feld befinden sich Buttons mit Zahlen-Emojis (1 bis `field_size` (Standard 7)). Ein Klick wirft deinen Stein in die jeweilige Spalte.
- **Platzierung:** Der Stein (ein **roter** oder **blauer Punkt**) fällt automatisch an die unterste verfügbare Stelle der gewählten Spalte.

#### Spielende & Sieg
- **Gewinnreihe:** Sobald jemand vier Steine in einer Reihe hat (horizontal, vertikal oder diagonal), werden die Steine der Gewinner-Reihe durch **farbige Viereck-Emojis** (Rot oder Blau) ersetzt.
- **Abschluss:** Das Spiel wird beendet und die Buttons zur Steuerung werden entfernt.

### Berechtigungen

<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
  <strong style={{minWidth: '80px'}}>👥 Rollen:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>👤 | Member</span>
  </div>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <strong style={{minWidth: '80px'}}>📺 Kanäle:</strong>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
    <span style={{backgroundColor: '#6e31e0', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85em'}}>🎮 | minigames</span>
  </div>
</div>