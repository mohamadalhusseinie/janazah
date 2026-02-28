# Nächste Stories (klar und kurz)

## Ziel
Aus dem aktuellen MVP eine stabile v1 machen.

## Top 6 Stories (in Reihenfolge)

### 1) Persistente Datenbank anbinden
**Warum zuerst?** Sonst gehen Daten nach Neustart verloren.

**Ergebnis:**
- Posts und Abos liegen in PostgreSQL/Supabase.
- API liest/schreibt aus DB statt In-Memory.

### 2) Datum/Uhrzeit sauber normalisieren
**Warum jetzt?** Damit Gebets-/Beisetzungszeiten immer korrekt sind.

**Ergebnis:**
- Speicherung in UTC.
- Anzeige lokalisiert (`de-DE`).

### 3) Admin-Login einführen
**Warum?** Nicht jede Person soll veröffentlichen können.

**Ergebnis:**
- Nur authentifizierte Admins können `POST /api/janazah`.

### 4) Freigabe-Workflow für Meldungen
**Warum?** Qualität und Missbrauchsschutz.

**Ergebnis:**
- Status: `pending | approved | rejected`.
- Öffentlicher Feed zeigt nur `approved`.

### 5) Benachrichtigungs-Matching bauen
**Warum?** Abos sollen echten Nutzen bringen.

**Ergebnis:**
- Match nach Stadt oder Moschee.
- Keine doppelten Benachrichtigungen pro Event/E-Mail.

### 6) E-Mail-Versand integrieren
**Warum?** End-to-End-Wert für Abonnenten.

**Ergebnis:**
- E-Mails über Provider (z. B. Resend/SendGrid).
- Fehler werden geloggt und retried.

---

## Kompakter Sprint-Vorschlag
- **Sprint 1:** Story 1 + 2
- **Sprint 2:** Story 3 + 4
- **Sprint 3:** Story 5 + 6

## Definition of Done (kurz)
- Tests für Erfolg + Fehlerfälle
- Dokumentation aktualisiert
- In Staging geprüft
