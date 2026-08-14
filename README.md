# Corefix Technologies LLP Website

SEO-first Next.js website for Corefix Technologies LLP.

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Server-rendered/static pages
- Optional Google Sheets blog CMS
- Vercel-ready

## Run
```bash
npm install
npm run dev
```
Production:
```bash
npm run check
npm run build
npm start
```

## Structure
- `app/` routes and SEO pages
- `app/services/[slug]` — 13 dedicated service pages
- `app/products/[category]` — 8 product category pages
- `app/blog/[slug]` — dynamic SEO blog articles
- `components/` reusable UI
- `lib/services-data.ts` — service content and supplied keyword research
- `lib/products-data.ts` — product categories and supplied keyword research
- `lib/blog.ts` — remote blog feed
- `blog-cms/Code.gs` — Google Sheets blog API
- `public/hero/` — animated horizontal hero background slides
- `public/images/corefix-logo.png` — add the final Corefix logo here

## Weekly blog publishing without code changes
Use the Google Sheet + Apps Script setup in `blog-cms/README.md`. Set `BLOG_API_URL` in Vercel. Add one row per published article. The site fetches the feed server-side and revalidates it every 5 minutes, so you do not create a new Next.js page for every blog.

## Mobile design
Service/product cards remain horizontal on phones as well as desktop. Mobile reduces padding, font sizes, icon sizes and gaps instead of changing the composition into vertical cards.

## Logo
Place the final transparent Corefix logo at:
`public/images/corefix-logo.png`
