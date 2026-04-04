# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site Overview

`bra-khet.github.io` is a Jekyll-based GitHub Pages site serving as a personal OSINT research publishing platform. It publishes interactive research reports, data visualizations, and technical analyses with a dark/cyberpunk aesthetic.

Remote theme: `pages-themes/hacker@v0.2.0` (via `jekyll-remote-theme`).

## Local Development

```bash
# Requires Ruby + Bundler (not checked in — install manually if needed)
bundle exec jekyll serve        # serves at http://127.0.0.1:4000
bundle exec jekyll build        # builds to ./_site/
```

No npm, no Gemfile in the repo. For edits to standalone HTML reports, browser-refreshing the file directly is sufficient since they have no Jekyll dependencies (`layout: null`).

## Architecture: Two Tiers

### 1. Markdown pages (`layout: default`)
`index.md`, `about.md`, `404.md` — rendered through the hacker theme's default layout. Styling is inline. No custom `_layouts/` or `_includes/` directories exist; the remote theme supplies the shell.

### 2. Standalone HTML reports (`layout: null`)
Every research report (e.g. `anthropic-mythos.html`, `ai-water-use-report-1.html`) is self-contained HTML with Jekyll front matter only for `permalink` and `title`. Each report has:
- `css/[page-slug].css` — all styles for that page
- `js/[page-slug].js` — all scripts for that page

**`page-template.html` is the canonical boilerplate** for new reports. It contains the complete nav banner, reading progress bar, sidebar TOC, and JS patterns in commented blocks ready to copy.

## Design System

### Global Tokens (defined in `about.md` style comment — authoritative)
| Variable | Hex | Use |
|---|---|---|
| Primary accent | `#00d4ff` | headings, links |
| Section h3 | `#00ff5d` | |
| Canvas/matrix rain | `#00ff41` | |
| Secondary accent | `#7a3fff` | gradient ends |

### Per-Series Accent Colors
| Series | Color |
|---|---|
| Anthropic Mythos | `#cc44ff` |
| AI Water Use | `#00b4d8` |
| Synth-/Tech- | `#b06cff` |
| DLSS 5 | `#76B900` |
| Evo 2 | `#00FF9F` |
| Anti-AI Ideology | `#06b6d4` |
| Meme Review | `#ff4040` |

### Typefaces
All reports load from Google Fonts: `Inter` (body) + `JetBrains Mono` (code, labels, nav). The nav banner uses the hacker theme's `Monaco` monospace fallback stack.

## Style Contract: Keep Three Files in Sync

`index.md`, `about.md`, and `404.md` share a design system. The **authoritative token list lives in `about.md`'s opening HTML comment**. When the design system changes, update all three.

When adding a new report, update **both**:
1. `index.md` — add a report card (bordered `<div>` with series accent color + CTA links)
2. `about.md` — add a list item (`<li>`) in the Research Reports `<ul>`

The comment at the top of `index.md` reads: _"LATEST REPORTS - Claude, update about.md if you modify/add below"_.

## Report Page Pattern

Every standalone report follows this structure:

```html
---
layout: null
title: "Report Title"
permalink: /page-slug/
---
<!DOCTYPE html>
...
<link rel="stylesheet" href="{{ site.baseurl }}/css/[page-slug].css">
...
<!-- Fixed nav banner: #hacker-nav-banner -->
<!-- Reading progress bar: #reading-progress -->
<!-- Sidebar: .sidebar > .toc-list -->
<!-- Main: <main id="main-content"> containing .report-section[id] elements -->
...
<script src="{{ site.baseurl }}/js/[page-slug].js" defer></script>
```

The TOC active-section tracking JS and progress bar JS are both in `page-template.html`'s commented JS block.

## Skills Available

Local skills in `.claude/` auto-load for matching tasks:

- **`research-report-website-designer`** — full interactive HTML report with Tailwind + Chart.js + Leaflet from a research input. Use for new major reports.
- **`report-page-writer`** — lightweight single-page HTML document (no Tailwind). Use for simpler formatted reports.
- **`osint-researcher`** — deep OSINT research and structured analysis output.
- **`fact-aggregator`** — exhaustive raw data/stats collection for a topic.

## Content Source Files

`md/` contains source markdown for reports (research notes, drafts). These are not Jekyll posts — they don't appear in `_posts/` and are not rendered as pages unless a corresponding `.html` file references or mirrors them.

`pdf/` holds downloadable PDF versions of some reports.
