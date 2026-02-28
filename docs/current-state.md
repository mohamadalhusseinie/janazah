# Aktueller Stand (einfach erklärt)

## In einem Satz
Die App ist ein **funktionierender MVP-Prototyp**: Man kann Meldungen erstellen, Abos anlegen und alles im Feed sehen – aber nur mit temporärer In-Memory-Speicherung.

## Was heute funktioniert

### Für Nutzer
- Janazah-Meldung im Formular erfassen.
- Stadt/Moschee per E-Mail abonnieren.
- Aktuelle Meldungen im Feed ansehen.

### Für die Technik
- API für Meldungen: `GET/POST /api/janazah`.
- API für Abos: `GET/POST /api/subscribe`.
- Eingaben werden serverseitig mit Zod validiert.

## Was noch fehlt (für echten Produktivbetrieb)
- Dauerhafte Datenbank (aktuell gehen Daten nach Neustart verloren).
- Login/Rechte (wer darf Meldungen veröffentlichen?).
- Freigabeprozess (Moderation).
- Automatische E-Mail/Push-Benachrichtigungen.
- Monitoring, Rate-Limits, Audit-Logs.

## Ampel-Status
- 🟢 **MVP-Demo nutzbar**
- 🟡 **Intern testbar**
- 🔴 **Noch nicht produktionsreif**

## Nächster sinnvoller Schritt
1. **Persistenz** (PostgreSQL/Supabase) zuerst.
2. Dann **Auth + Freigabe**.
3. Danach **Benachrichtigungen**.
