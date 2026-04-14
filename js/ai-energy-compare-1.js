'use strict';

// ── Reading progress bar ─────────────────────────────────────────
(function () {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;

  let ticking = false;

  function updateProgress() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? Math.min(window.scrollY / h * 100, 100) : 0;
    bar.style.width = pct.toFixed(1) + '%';
    bar.setAttribute('aria-valuenow', Math.round(pct));
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
}());

// ── TOC active-section tracking ──────────────────────────────────
(function () {
  const tocLinks = Array.from(document.querySelectorAll('.toc-list a'));
  const sections = Array.from(document.querySelectorAll('.report-section[id]'));
  if (!tocLinks.length || !sections.length) return;

  let ticking = false;

  function updateTOC() {
    const threshold = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0]?.id ?? '';
    for (const sec of sections) {
      if (sec.offsetTop <= threshold) current = sec.id;
    }
    for (const link of tocLinks) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateTOC);
      ticking = true;
    }
  }, { passive: true });

  updateTOC();
}());

// ── Infographic row click → scroll to card + flash ───────────────
(function () {
  const rows = document.querySelectorAll('.infographic-row[data-target]');

  function flashCard(id) {
    const card = document.getElementById(id);
    if (!card) return;
    card.classList.add('card--flash');
    setTimeout(function () { card.classList.remove('card--flash'); }, 900);
  }

  rows.forEach(function (row) {
    row.addEventListener('click', function (e) {
      // Let [→] anchor handle its own native navigation; only intercept
      // clicks on the row body itself so we can also trigger the flash
      const target = row.dataset.target;
      const card = document.getElementById(target);
      if (!card) return;

      // Smooth-scroll the card into view
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Flash after a brief delay to let the scroll start
      setTimeout(function () { flashCard(target); }, 120);
    });

    // Keyboard support: Enter or Space activates the row
    row.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        row.click();
      }
    });
  });
}());
