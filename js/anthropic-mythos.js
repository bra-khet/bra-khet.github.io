'use strict';

// ── Reading progress bar ─────────────────────────────────────────
(function () {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', function () {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? Math.min(window.scrollY / h * 100, 100) : 0;
    bar.style.width = pct.toFixed(1) + '%';
    bar.setAttribute('aria-valuenow', Math.round(pct));
  }, { passive: true });
}());

// ── TOC active-section tracking ──────────────────────────────────
(function () {
  const tocLinks = Array.from(document.querySelectorAll('.toc-list a'));
  const sections = Array.from(document.querySelectorAll('.report-section[id]'));
  if (!tocLinks.length || !sections.length) return;

  function updateTOC() {
    const threshold = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0]?.id ?? '';
    for (const sec of sections) {
      if (sec.offsetTop <= threshold) current = sec.id;
    }
    for (const link of tocLinks) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    }
  }

  window.addEventListener('scroll', updateTOC, { passive: true });
  updateTOC();
}());
