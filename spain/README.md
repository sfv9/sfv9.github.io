# ¡Vámonos! — Familia España 🇪🇸

An interactive Spain trip planner for the Vaughn family's July–August 2026 adventure
(Madrid → Barcelona → Calella + getaways), with audio Spanish games for the kids (5 & 7).

Self-contained PWA — vanilla JS, no build step. Mirrors the `sfv9.github.io/spanish` app pattern.

## Run it locally
```bash
cd spain-trip
python3 -m http.server 5177
# open http://localhost:5177
```
(Or it's already wired into `.claude/launch.json` as **spain-trip** on port 5177.)

## What's inside
- **Trip** — live countdown, visual journey map, trip stats, "Before you go" action items.
- **Plan** — day-by-day itinerary (Madrid Jul 6–10, train day, Calella base camp).
- **Explore** — Barcelona sights + 10 getaways (Girona, Tossa, Montserrat, Penedès cava,
  Andorra, PortAventura…) with drive times from Calella & kid ⭐ ratings.
- **¡Niños!** — 9 audio Spanish decks (76 words) with three games (Listen & Tap for the 5-yo,
  Match for the 7-yo, Flashcards), stars, ranks, and a trip passport the kids stamp as they travel.
- **Info** — Airbnb / train / rental-car logistics, interactive packing list, parent survival
  phrases (tap to hear), emergency numbers. Links out to the full "Spanish for Calella" course.

Progress (stars, mastered words, checklists, passport stamps) saves to `localStorage` per device.
Spanish audio uses the browser's built-in `es-ES` speech synthesis — works offline once cached.

## Put it on the family's phones
Add to Home Screen in Safari/Chrome → it installs as a standalone app.
To deploy alongside the other apps, copy this folder into `sfv9.github.io/spain/`
(then it lives at `apps.sfv9.com/spain/`). The manifest/sw use relative paths so it just works.

## A couple of things to double-check
- **Calella** assumed = Calella de Mar (Maresme, ~50 min N of Barcelona). If you meant the
  smaller Calella de Palafrugell on the Costa Brava, tell me and I'll re-base the getaways.
- Dates/weekdays compute automatically (Jul 5 2026 = Sunday departure → land Mon Jul 6).
