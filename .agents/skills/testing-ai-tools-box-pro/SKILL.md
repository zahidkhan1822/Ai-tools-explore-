---
name: testing-ai-tools-box-pro
description: Test the AI Tools Box Pro Next.js application end-to-end. Use when verifying UI changes, new tools, or design updates.
---

# Testing AI Tools Box Pro

## Prerequisites

- Node.js 18+ installed
- Dependencies installed (`npm install`)

## Starting the Dev Server

```bash
cd /home/ubuntu/repos/Ai-tools-explore-
npm run dev
```

The server runs on `http://localhost:3000` by default. If port 3000 is occupied, Next.js will use port 3001.

## Key Pages to Test

| Page | URL | What to verify |
|---|---|---|
| Homepage | `/` | Hero section, 10 Featured Free Tools, Ad Block, 5 Popular Tools, 5 Premium Preview, 3 Trending Blogs, 5 Latest AI News, Footer |
| Premium Tools | `/premium-tools` | All 10 premium tools with PRO badges, "Upgrade to Unlock" buttons, bottom CTA |
| Pricing | `/pricing` | Free ($0) vs Pro ($19) plans, MOST POPULAR badge, feature lists, 30-Day Guarantee |

## Key UI Elements

### Navbar (all pages)
- "AI Tools Box Pro" logo links to `/`
- Nav links: Home (`/`), Premium Tools (`/premium-tools`), Pricing (`/pricing`)
- "Upgrade Pro" gold shimmer button links to `/pricing`

### Featured Free Tools (Homepage)
10 tool cards in a responsive grid. Each card has:
- Emoji icon, category badge, tool name, description
- Star rating (e.g. 4.9) and usage count (e.g. "284.5K uses")
- "Use Now →" button

### Premium Tool Cards
Same as free cards but with:
- "PRO" badge with pulse glow animation (top-right)
- Lock icon overlay on hover
- "Upgrade to Unlock" button instead of "Use Now"

### Popular Tools (Homepage)
- Top 5 tools sorted by usage count (highest first)
- First tool should be QR Code Generator (312.4K uses)

### Pricing Page
- Free Plan: $0/month, 5 features
- Pro Plan: $19/month, 10 features, "MOST POPULAR" badge
- 30-Day Money-Back Guarantee section at bottom

## Design Checks

- **Background**: Dark (#0a0a0a) across all pages
- **Gold accents**: #d4af37 on badges, buttons, headings, star ratings
- **Animations**: gold-shimmer on Upgrade Pro button, pulse-glow on PRO badges, card-hover lift effect
- **Gradient borders**: Gold gradient border on cards (visible on hover)

## Build & Lint

```bash
npm run build   # Should complete with 0 errors
npm run lint    # Should pass with no warnings
```

## Data Source

Tool definitions are in `src/data/tools.ts`. The file exports:
- `featuredFreeTools`: 10 free tools
- `premiumTools`: 10 premium tools
- `formatUsageCount()`: Formats numbers like 284500 → "284.5K"

## Devin Secrets Needed

None — this is a static frontend app with no authentication or API keys required.
