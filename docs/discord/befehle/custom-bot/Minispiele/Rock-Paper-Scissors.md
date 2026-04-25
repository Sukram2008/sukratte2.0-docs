---
title: Schere, Stein, Papier
description: Spiele eine Runde Schere, Stein, Papier gegen ein anderes Mitglied oder den Bot
---

# ✂️📄 | Minispiele: rock-paper-scissors

Befehl: **`/rock-paper-scissors`**

### Andere Optionen
- **`user:`**
  Wähle ein Mitglied aus, das du herausfordern möchtest. Bleibt dieses Feld leer, spielst du automatisch gegen den Bot.

:::tip Hinweis
Wenn du beim Feld **`user`** niemanden auswählst, startest du direkt eine Runde gegen den Bot.
:::

### Beschreibung
Fordere mit diesem Befehl ein anderes Mitglied oder den Bot zu einer Runde Schere, Stein, Papier heraus. Das Spiel wird komplett über Buttons gesteuert.

### Spielablauf & Mechaniken

#### Startphase
- **Herausforderung:** Der eingeladene Nutzer kann zwischen den Buttons **Spiel beitreten** oder **Nein, danke** wählen. (Gegen den Bot startet das Spiel sofort).
- **Statusanzeige:** Über dem Spielfeld wird angezeigt, wer gegeneinander spielt und die Aufforderung, eine Waffe zu wählen.

#### Steuerung (Buttons während der Wahl)
Das Interface besteht aus zwei Reihen mit jeweils drei Buttons:
- **Erste Reihe (Aktion):** Hier befinden sich die Buttons **Schere**, **Stein** und **Papier**, um deine Wahl zu treffen.
- **Zweite Reihe (Status):**
  - Links und rechts stehen die **User-Tags** der Spieler.
  - Solange ein Spieler noch nicht gewählt hat, wird ein **Wecker-Emoji** ⏰ angezeigt.
  - Sobald die Wahl getroffen wurde, ändert sich das Symbol zu einem **Haken** ✅.
  - Zwischen den Namen befindet sich ein Button mit **gekreuzten Schwertern** ⚔️.
  - Diese Spieler-Buttons sind **nie anklickbar** und ausgegraut.

#### Spielende & Ergebnis
- **Anzeige:** Sobald beide gewählt haben, verschwinden die Auswahl-Buttons (Schere, Stein, Papier).
- **Auflösung:** Es wird angezeigt, was jeder Spieler gewählt hat und direkt dahinter, ob man gewonnen oder verloren hat.
- **Optik:** Die Spieler-Buttons in der zweiten Reihe färben sich von Blau zu **Rot**, die Schwerter bleiben in der Mitte weiterhin sichtbar.
- **Erneut spielen:** Unter dem Ergebnis erscheint ein Button **Erneut spielen**. Klickt man diesen, startet eine neue Runde. Anstatt der Aufforderung zur Waffenwahl wird dort zunächst das Ergebnis der letzten Runde als Historie angezeigt.

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