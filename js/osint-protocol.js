/**
 * osint-protocol.js — OSINT Protocol v2.0 Explainer interactive engine
 *
 * How to test:
 *   - Open osint-protocol.html in a browser.
 *   - Resize viewport below 860px — sidebar should hide.
 *   - Click accordion triggers — panels open/close, ARIA toggles correctly.
 *   - Tab through all interactive elements — focus rings must be visible.
 *   - Check reading progress bar fills smoothly on scroll.
 *   - Run Lighthouse: LCP < 2.5s, INP < 200ms, CLS < 0.1 expected.
 *
 * Rules applied: Modern ES module pattern, DOMContentLoaded entry,
 *   requestAnimationFrame for progress updates, keyboard-accessible accordion.
 */

'use strict';

/* ── Reading progress bar ──────────────────────────────────────── */
function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;

  let ticking = false;

  function updateProgress() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    bar.style.width  = pct + '%';
    bar.setAttribute('aria-valuenow', Math.round(pct));
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
}

/* ── Accordion ─────────────────────────────────────────────────── */
function initAccordion() {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const panelId  = trigger.getAttribute('aria-controls');
      const panel    = document.getElementById(panelId);
      if (!panel) return;

      // Collapse all siblings in the same accordion first
      const accordion = trigger.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion-trigger').forEach(t => {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            const sibPanelId = t.getAttribute('aria-controls');
            const sibPanel   = document.getElementById(sibPanelId);
            if (sibPanel) sibPanel.classList.remove('open');
          }
        });
      }

      // Toggle this item
      const newState = !expanded;
      trigger.setAttribute('aria-expanded', String(newState));
      panel.classList.toggle('open', newState);
    });

    // Keyboard: Space / Enter already handled natively for button elements.
    // Arrow keys for enhanced UX across items in the same accordion.
    trigger.addEventListener('keydown', e => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();

      const accordion = trigger.closest('.accordion');
      if (!accordion) return;

      const all     = [...accordion.querySelectorAll('.accordion-trigger')];
      const idx     = all.indexOf(trigger);
      const next    = e.key === 'ArrowDown'
        ? all[(idx + 1) % all.length]
        : all[(idx - 1 + all.length) % all.length];
      next.focus();
    });
  });
}

/* ── Sidebar TOC active highlight ──────────────────────────────── */
function initTocHighlight() {
  const links    = [...document.querySelectorAll('.toc-list a')];
  if (!links.length) return;

  const sections = links
    .map(a => document.getElementById(a.getAttribute('href').replace('#', '')))
    .filter(Boolean);

  function onScroll() {
    const scrollMid = window.scrollY + window.innerHeight * 0.3;
    let active = sections[0];

    for (const section of sections) {
      if (section.offsetTop <= scrollMid) active = section;
    }

    links.forEach(a => {
      const targetId = a.getAttribute('href').replace('#', '');
      a.classList.toggle('active', targetId === active?.id);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ── Entry point ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initReadingProgress();
  initAccordion();
  initTocHighlight();
});
