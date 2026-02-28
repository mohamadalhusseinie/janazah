# Janazah Platform (MVP)

MVP für eine Plattform, über die Gemeinden Janazah-Meldungen veröffentlichen und Menschen Städte/Moscheen abonnieren können.

## Tech Stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS
- API Routes als Backend-Startpunkt
- In-Memory Datenhaltung (für MVP-Demo), später PostgreSQL/Supabase

## Schnellstart

```bash
npm install
npm run dev
```

Dann öffnen: <http://localhost:3000>

## Enthaltene Features (MVP v0)

- Janazah-Meldung erstellen
- Feed mit aktuellen Janazah-Meldungen
- Stadt/Moschee abonnieren
- API-Endpunkte:
  - `GET/POST /api/janazah`
  - `GET/POST /api/subscribe`

## Nächste Schritte

1. Persistenz mit PostgreSQL + Supabase
2. Authentifizierung (Admin/Freigabe)
3. E-Mail/Web-Push Benachrichtigungen
4. Mobile App mit Expo (gleiches API)


## Aktueller Stand

- Einfach erklärt: `docs/current-state.md`

## Planung

- Nächste Stories (kurz & priorisiert): `docs/next-stories.md`
