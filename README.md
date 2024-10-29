# Energieportal Winterthur

Das Energieportal der Stadt Winterthur

## Anpassung Inhalte

Die Texte der Website finden sich im File "/public/locales/de.json" und lassen sich dort anpassen.

Wenn sich die Struktur eines Texts ändert (z.B. weitere Links hinzukommen, an anderer Stelle etc.), muss auch entsprechend das Template angepasst werden, das für die Darstellung des Texts verantwortlich ist. Das entsprechende Template lässt sich ausfindig machen, in dem nach dem key der Translation im Projekt gesucht wird.

## Development

### Setup

Den Code entweder über HTTPS oder SSH klonen und in einer Entwicklungsumgebung öffnen.

In Kommandozeile in Projektordner navigieren und Dependencies installieren:

```bash
npm i
```

Auf root-Ebene eine Datei ".env" mit diesem Inhalt erstellen:

```bash
NEXT_PUBLIC_BASE_PATH=/energieportal
NEXT_PUBLIC_API_ENDPOINT=https://stadtplan.winterthur.ch/energieportal-service
```

### NextJS Server

Den lokalen Entwicklungsserver starten:

```bash
npm run dev
```

Im Browser [http://localhost:3000/energieportal](http://localhost:3000/energieportal) öffnen.

## Deployment

### Test-Umgebung

Das Deployment auf eine Testumgebung erfolgt über Github Pages und wird automatisch ausgelöst, sobald Änderungen auf dem main-Branch vorgenommen werden:

https://geoinformation-winterthur.github.io/energieportal-winterthur-main/

### Produktiv-Umgebung

Das Veröffentlichen in die Produktivumgebung erfolgt manuell durch Edgar Butwilowski anhand von statischen Build-Files.

Bei Änderungen auf dem main-Branch wird neben dem Deployment in die Testumgebung auch die Generierung der Build-Files für den Release angestossen.
Diese werden auf Root-Ebene im Ordner "release_build" abgelegt.

Hat man das Projekt ausgecheckt, lassen sich die Build-Files auch manuell über die Kommandozentrale generieren:

```bash
npm run build
```

Die generierten Files werden auf Root-Ebene des Projektes im Ordner "/out" abgelegt.
