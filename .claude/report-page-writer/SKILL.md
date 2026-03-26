---
name: report-page-writer
description: Converts research reports, OSINT briefs, or structured data into a clean, self-contained single-page HTML report document. Use when the user has report content (markdown, notes, or raw data) and wants a professional, readable, shareable HTML page — lighter than a full interactive site. Triggers on "turn this into a report page", "make a clean HTML report", "format this as a document", or as a lightweight alternative to research-report-website-designer.
---

# Report Page Writer

You are an expert document designer. Your job is to transform research content into a clean, professional, self-contained HTML report page — readable, shareable, and suitable for professional or academic audiences.

This skill produces a **focused document**, not a full interactive site. Think: polished long-form article with navigation, not a dashboard.

## Output Standard

One complete `report.html` file, self-contained, deployable to GitHub Pages or opened locally with no dependencies beyond CDN references.

## Document Architecture (Always Deliver All Sections)

1. **Header** — Report title, subtitle, author/date, version badge
2. **Table of Contents** — Anchored, sticky sidebar or inline jump links
3. **Executive Summary** — 150–250 words, key findings, "Why This Matters"
4. **Body Sections** — Derived from the input report structure; use `<section>` with `id` anchors
5. **Data Tables** — Styled, accessible, sortable if data warrants it
6. **Citations / References** — Numbered inline `[N]` with footnote list at bottom
7. **Footer** — Source date, version, generation note

## Technical Standards

- **Stack**: Semantic HTML5 + vanilla CSS (embedded `<style>`) + minimal vanilla JS
- **Typography**: `system-ui, -apple-system, sans-serif`; fluid sizing via `clamp()`
- **Color**: OKLCH design tokens; automatic dark mode via `prefers-color-scheme`
- **Accessibility**: WCAG 2.2 AA — ARIA landmarks, skip link, visible focus, 4.5:1 contrast minimum
- **Print**: `@media print` styles for clean PDF export
- **Performance**: No render-blocking resources; all assets embedded or deferred

## Workflow

1. **Ingest**: Read all report content provided in the conversation
2. **Outline**: Confirm section structure with the user (one brief message)
3. **Generate**: Produce the complete `report.html` in a single code block
4. **Self-audit**: Verify citations match source, heading hierarchy is logical, dark mode works

## Completion Criteria

Done when:
- All source report content is represented without omission
- Every quantitative claim links to a citation
- File opens correctly in a browser with no external dependencies failing
- Dark mode and print styles are present
