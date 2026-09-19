# Vercel deployment

This fork includes a Vercel adapter that keeps the existing Vite frontend and
maps the existing Node provider middleware to a single Vercel Function.

## Import settings

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 24.x

`vercel.json` already defines these settings.

## Environment variables

The app starts without provider keys. Optional server-side keys should be added
in Vercel Project Settings -> Environment Variables.

Common examples:

- `OPENAI_API_KEY`
- `GOOGLE_MAPS_API_KEY`
- `CESIUM_ION_TOKEN`
- `OPENSKY_CLIENT_ID`
- `OPENSKY_CLIENT_SECRET`
- `OPENSKY_AUTH_MODE`

The local POWER UP endpoint is intentionally disabled on Vercel because Vercel
Functions do not persist edits to a repo-local `.env` file. Configure secrets
through the Vercel dashboard instead.

## Notes

The upstream project was designed primarily for a long-running local Vite
server. Vercel Functions are stateless and have an ephemeral filesystem, so
in-memory and on-disk provider caches should be treated as best-effort only.
