# claude-progress.md — bra-khet.github.io

Session: 2026-07-26 — Index reshuffle + Locutorium promo + Real Art planning

## Major deliverables (this initiative)

| ID | Deliverable | Status |
|----|-------------|--------|
| **D1** | Locutorium hero / promo at top of `index.md` (Cividis indigo→amber) | **Done** (sprint) |
| **D2** | Move OSINT Protocol CTA + teaser below Core Research | **Done** (sprint) |
| **D3** | Sync `about.md` (tokens, featured project, OSINT order) | **Done** (sprint) |
| **D4** | Rework bottom **Real Art** section into curated projects/media showcase | **Planned** — options below; implement next |
| **D5** | Progress docs + commits | In progress |

## Sprint contract completed

**This sprint:** Put Locutorium in the former top OSINT slot with Studio-matching buttons, and park OSINT under the report list.

### What shipped
- `index.md`
  - New **Locutorium** hero panel: deep indigo gradient, amber primary pill CTA, secondary outline chips, CSS waveform motif, reduced-motion + mobile flex rules
  - Links: orientation hub, Design Studio, Field Guide (all under `https://bra-khet.github.io/locutorium/…`)
  - OSINT CTA + methodology card moved **after** Light Rendering / Core Research, **before** Archive teaser
  - Freshness note updated to July 2026 narrative
- `about.md`
  - Locutorium Cividis tokens added to style-contract comment
  - Featured project card (Locutorium) above Research Reports list
  - OSINT list item moved after Glasswing
- `TODO.md`, `claude-progress.md` created

### Palette reference (Locutorium → index)
Copied (not imported) from Locutorium `demo/src/styles/tokens.css` so the Pages site stays standalone:

| Token | Hex | Role |
|-------|-----|------|
| `--studio-bg-deep` | `#12001f` | Deep ground / primary text on amber |
| `--studio-panel` | `#1d1f6e` | Panel indigo |
| `--studio-surface-raised` | `#241a4a` | Raised surface |
| `--studio-amber` | `#ffd54f` | Primary accent / CTA fill |
| `--studio-amber-action` | `#d4a020` | CTA gradient end |
| `--studio-amber-edge` | `#8a6f1a` | Borders / button edge |
| `--studio-amber-dim` | `#c9a63d` | Eyebrow labels |
| `--studio-indigo-muted` | `#8a86b0` | Secondary text / quiet chips |
| `--studio-text` | `#e8e6f0` | Body on indigo |

## Index layout (after this sprint)

1. About heading + blurb  
2. **Locutorium hero** (promoted product)  
3. Anthropic Mythos CTA  
4. Freshness note  
5. Mythos Series + Core Research cards  
6. **OSINT Protocol** (methodology, demoted from top)  
7. Archive teaser  
8. **Real Art** (still single image — next sprint)  

## D4 — Real Art rework: design options

**Goal:** Keep the ironic title **Real Art**, but turn the section into a clean, attractive showcase of selected work (repos, tools, art, video) that still fits the hacker theme — simple, not cluttered.

### Option A — Static curated project cards (recommended first ship)
- Hand-authored grid of 3–6 cards in `index.md` (same pattern as research cards).
- Each card: name, one-line blurb, language/tag chips, links (repo / live / report).
- Pros: zero runtime deps, full control, matches existing index style, works offline on Pages.
- Cons: stats go stale unless you update by hand.
- **Best fit for:** Locutorium, ASCILINE-quarked, planette, SteamClip, tug-of-ai-wars, ai-metadata-manager, opiumbird art, etc.

### Option B — Bespoke “repo radar” with live GitHub stats
- Small client script (`js/real-art-repos.js`) calling `https://api.github.com/repos/bra-khet/{name}` for stars, language, `updated_at`, description.
- Render attractive mono stats row (★ · lang · pushed).
- Pros: living numbers; feels like a personal dashboard.
- Cons: unauthenticated API rate limits (60/hr/IP); CORS is fine for public API; need graceful fallback when blocked; no private repos.
- Mitigation: cache in `localStorage` for 6–24h; ship static fallbacks in HTML.

### Option C — Mixed media mosaic
- Cards + image tiles (existing `/assets/img/`) + optional `<video>` or YouTube/iframe embeds.
- Sectioned rows: **Software** · **Visuals** · **Experiments**.
- Pros: richest presentation; supports “artwork” half of the joke.
- Cons: embeds are heavy; need privacy/consent care for third-party iframes; more layout work.

### Option D — GitHub profile / repo list embeds
- Use tools like [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) cards as `<img>`, or third-party widgets.
- Pros: fast to stub.
- Cons: off-brand colors, external dependency, less control, can look “widgety” next to custom research cards.

### Option E — Dedicated `/projects/` page
- Index gets a short teaser + “See all →”; full grid lives on its own permalink (report-style or layout:default).
- Pros: room to grow without bloating home; can add filters later.
- Cons: extra navigation hop; more files to maintain.

### Recommended path
1. **Ship Option A** with a subtitle under Real Art (e.g. *selected repos, tools, and visuals — including the ones people claim aren’t real*).
2. Optionally layer **Option B** stats onto those cards once the static grid feels right.
3. Keep **Option C** image/video as a second row if you want art pieces (opiumbird, etc.) to stay visible.
4. Skip D unless you want a temporary placeholder; prefer E only if the curated set exceeds ~8 items.

### Candidate seed list (from public `bra-khet` repos — pick at implement time)
| Project | Why |
|---------|-----|
| **locutorium** | Flagship product; already hero’d above |
| **ASCILINE-quarked** | Distinctive real-time ASCII video engine |
| **planette** | “Globe desktop buddy” — playful software |
| **tug-of-ai-wars** | Hosted game / experiment on Pages |
| **SteamClip** | Small useful tool (1★) |
| **ai-metadata-manager** | AI media provenance — on-theme |
| **html-renderfriend** | HTML→PNG utility |
| **lora-guides** | Dataset/LoRA curation guides |
| Art assets in `/assets/img/` | Keep visual joke with 1–2 images |

### Open decisions for next sprint
1. Static only (A) vs static + live stats (A+B)?
2. Include Locutorium again in Real Art, or only off-hero projects?
3. Keep single-image opiumbird as a featured visual tile?
4. Subtitle copy preference?

## Next sprint suggestion
Implement **Real Art Option A** (curated cards) + light subtitle; leave live GitHub stats as a follow-up unless chosen now.

## Notes
- Locutorium repo was **read-only** for palette/product copy (`C:\Users\robin\claude-code\locutorium`).
- Do not import Locutorium CSS into this Jekyll site; tokens are duplicated by design.
