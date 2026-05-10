# myCaminoJourney

This workspace contains a minimal Angular app scaffolding for tracking a Camino journey.

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm start
```

Features included:
- Photo uploads (stored in browser localStorage) via the Photos page.
- GPX parsing for Polarsteps exports via `src/app/services/polarsteps.service.ts`.

Key files:
- [package.json](package.json) — project scripts and dependencies.
- [src/app/services/polarsteps.service.ts](src/app/services/polarsteps.service.ts) — GPX parser & integration stub.
- [src/app/photos/photos.component.ts](src/app/photos/photos.component.ts) — photo upload UI and storage.

Next steps:
- Run `npm install` then `npm start` to open the app.
- If you want map visualization, I can add Leaflet/Mapbox support.
