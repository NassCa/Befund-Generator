# Psychopathologischer Befund

Offline nutzbarer Befundgenerator nach der Systematik des Psychopathologischen Befundes 3.0.
Einzeldatei ohne externe Abhängigkeiten. Es werden keine Daten gespeichert und keine übertragen.

## Veröffentlichen

1. Repository anlegen, `index.html`, `sw.js`, `LICENSE` und diese Datei hochladen.
2. Settings → Pages → Source: Deploy from a branch, Branch: `main`, Ordner `/ (root)`.
3. Nach ein bis zwei Minuten liegt die App unter `https://<benutzername>.github.io/<repo>/`.

## Installieren

- Windows: Seite in Chrome oder Edge öffnen, in der Werkzeugleiste „App installieren“.
- iOS: Seite in Safari öffnen, Teilen → „Zum Home-Bildschirm“.

Nach der Installation läuft die App ohne Netz.

## Aktualisieren

Nach jeder Änderung an `index.html` die Versionsnummer in der ersten Zeile von `sw.js`
erhöhen (`befund-v1` → `-v2`), sonst behalten installierte Geräte die alte Fassung.

## Lizenz

Lexembestand und Systematik nach der Dokumentationskarte „Psychopathologischer Befund 3.0“
(Version 2025.02) © 2025 Dr. Benjamin Ochs, https://ppb3.de, lizenziert unter CC BY-SA 4.0.
Diese Anwendung ist eine Bearbeitung und steht deshalb ebenfalls unter CC BY-SA 4.0.
Geändert wurden: Umsetzung als Webanwendung, Ausformulierung der Skalenstufen als leicht,
deutlich und hochgradig anstelle der Pfeilsymbole, Ergänzung eigener Kurzdefinitionen.

Die Kurzdefinitionen sind eigene Formulierungen auf Grundlage der psychopathologischen
Standardliteratur und nicht Bestandteil der PPB3-Klassifikation.
