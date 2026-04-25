---
title: Tic-Tac-Toe
description: Fordere ein anderes Mitglied zu einer Runde Tic-Tac-Toe heraus
---

# ❌⭕ | Minispiele: Tic-Tac-Toe

Befehl: **`/tic-tac-toe`**

### Erforderliche Optionen
- **`user:`**
  Der Benutzer, gegen den du antreten möchtest.

### Beschreibung
Mit diesem Befehl startest du das klassische "Drei gewinnt". Dein Gegenüber erhält eine Herausforderung und muss diese annehmen, damit das Spiel beginnt. Ziel ist es, drei deiner Symbole in eine horizontale, vertikale oder diagonale Reihe zu bringen.

### Spielablauf & Mechaniken

#### Startphase
- **Herausforderung:** Der eingeladene Nutzer kann zwischen den Buttons **Spiel beitreten** oder **Nein, danke** wählen. Sobald die Einladung angenommen wurde, startet die Runde.

#### Während des Spiels
- **Statusanzeige:** Direkt über dem Spielfeld wird angezeigt, welcher Spieler welcher Farbe (Grün oder Gelb) zugeordnet ist und wer aktuell am Zug ist.
- **Spielfeld:** Das Feld besteht aus **9 Buttons (3x3)**. Nur die Person, die gerade an der Reihe ist, kann ein Feld anklicken.
- **Symbole & Farben:** Die Felder enthalten zunächst einen neutralen **weißen Punkt**. Sobald ein Feld gewählt wird, ändert sich der Punkt je nach Spieler auf **Grün** oder **Gelb** und wird leicht ausgegraut.
- **Spielende:** Wenn das Spiel vorbei ist (Sieg oder Unentschieden), werden **alle Buttons grau**, um zu signalisieren, dass das Spiel beendet ist und keine weiteren Züge mehr möglich sind.

:::tip Steuerung
Das Spiel wird komplett über Buttons gesteuert. Du musst keine Koordinaten eingeben, sondern tippst einfach direkt auf das gewünschte Feld im 3x3-Gitter.
:::

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