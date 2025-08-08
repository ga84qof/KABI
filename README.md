# Kabi MVP (Next.js + Supabase)

Minimal app to list storage spaces from Supabase and view details.

## Local dev
1) Copy `.env.example` to `.env.local` and fill values from Supabase (Project Settings → API).
2) `npm install`
3) `npm run dev`
4) Open http://localhost:3000

## Deploy to Vercel
1) Import this repo in Vercel.
2) Set env vars:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - NEXT_PUBLIC_MAPBOX_TOKEN (optional)
   - NEXT_PUBLIC_SITE_NAME (e.g., Kabi)
3) Deploy.
