# Pin!t Website — Project Log

## Overview
Landing page for **Pin!t**, a mobile app for saving and sharing favourite places. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Deployed at [pinit.website](https://pinit.website).

---

## Stack
| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Font | Urbanist (Google Fonts) |
| Database | Supabase |
| Hosting | Vercel |
| Domain | Squarespace → pinit.website |
| Repo | github.com/Humayd22/pinit-website |

---

## Key Decisions

### Hero Layout
- Started with a two-column layout (text + phone mockup)
- Removed the phone mockup entirely
- Moved to a **centered layout**: pill badge → headline → subtitle → store buttons → carousel

### Arc Flow Carousel
- Tried CSS marquee (flat horizontal scroll) — rejected
- Tried scaled/faded CSS carousel — rejected
- Landed on a **true circular arc carousel** using `requestAnimationFrame` + imperative DOM updates (no React re-renders) for 60fps performance
- Math: cards follow a circle of radius `R=750px` centred below the screen
  - `cardX = cx + R × sin(θ)`
  - `cardY = refY + R × (1 - cos(θ))`
  - Card rotation = θ in degrees (tangent of circle)
- Centre card sits highest, edge cards dip down and tilt outward
- Images are from Unsplash — replaced any alcohol-related image with a coffee shop image

### iOS vs Android Download Flow
- **iOS**: public TestFlight link (anyone can download directly)
- **Android**: not publicly available yet, so the button opens an **email capture modal** instead
- Button labels: "Download on TestFlight" / "Sign up on Google Play"

### Supabase Waitlist
- Created a `waitlist` table in Supabase
- Enabled Row Level Security (RLS) with a policy allowing anonymous inserts
- Duplicate emails (Postgres error `23505`) show a different message: "You're already on the waitlist."
- `.env.local` is excluded from git — env vars are set directly in Vercel dashboard

### Sections Removed
- Categories section — not needed at launch
- DownloadCta section — redundant with hero buttons

### Scroll Indicator
- Fixed, centered at the bottom of the screen
- Shows "SCROLL" text with a vertical line below
- Fades out on scroll, reappears after **5 seconds of idle**
- Does not reappear if the user is at the bottom of the page

### Favicon
- SVG favicon (`app/icon.svg`)
- Hero gradient background (F8F9FB → C8D6DF) with a simple "P" in `#1A1A2E`, font-weight 400

### Copy Decisions
| Section | Final Copy |
|---|---|
| Pill badge | "Now in testing · iOS & Android" |
| Hero headline | "Pin!t is the home for every place you love." |
| HowItWorks heading | "Save it. Share it." |
| HowItWorks steps | "Save it" + "Share it" (two steps only) |
| SocialProof | "Join our early pinners." |
| Android modal heading | "Testing access" |
| Android modal subtext | "Drop your email and you'll be notified when your access is granted." |
| Android success | "You're on the list." / "You're already on the waitlist." |

---

## Deployment

1. Code pushed to `github.com/Humayd22/pinit-website`
   - `.gitignore` excludes `node_modules/`, `.next/`, `.env.local`, `.DS_Store`
2. Imported repo into Vercel, added env vars in dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Domain purchased on Squarespace (`pinit.website`)
4. Connected to Vercel via DNS records:
   - `A` record: `@` → `216.198.79.1`
   - `CNAME` record: `www` → `690d145695a88ba4.vercel-dns-017.com.`

---

## File Structure (key files)

```
app/
  layout.tsx         # Global layout, loads ScrollIndicator
  page.tsx           # Page composition
  icon.svg           # Favicon
  globals.css        # Tailwind base + custom tokens

components/
  Hero.tsx           # Centered hero with pill, headline, store buttons
  LocationCarousel.tsx  # Arc flow carousel (rAF + imperative DOM)
  StoreButtons.tsx   # TestFlight link + Android modal trigger
  AndroidModal.tsx   # Email capture modal with Supabase insert
  Problem.tsx        # "Sound Familiar?" pain point cards
  HowItWorks.tsx     # "Save it. Share it." two-step section
  SocialProof.tsx    # Early pinner social proof banner
  Footer.tsx         # Contact + Instagram links
  ScrollIndicator.tsx  # Fixed scroll hint with idle reappear logic
  FadeUp.tsx         # Shared fade-up animation wrapper

lib/
  supabase.ts        # Supabase client initialisation
```
