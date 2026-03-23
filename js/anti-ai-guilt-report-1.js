/**
 * anti-ai-guilt-report-1.js
 * How to test:
 *   1. Scroll page — progress bar fills to 100% at bottom.
 *   2. Scroll to each section — TOC link for that section gains `.active` class.
 *   3. Tab to skip-link at top, press Enter — focus jumps to #main-content.
 */

'use strict';

const progressBar = document.getElementById('reading-progress');
const tocLinks    = Array.from(document.querySelectorAll('.toc-list a'));
const sections    = Array.from(document.querySelectorAll('.report-section[id]'));

function updateProgress() {
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = pct.toFixed(1) + '%';
}

function updateTOC() {
  const threshold = window.scrollY + window.innerHeight * 0.35;
  let current = sections[0]?.id ?? '';
  for (const section of sections) {
    if (section.offsetTop <= threshold) current = section.id;
  }
  for (const link of tocLinks) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  }
}

let ticking = false;
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateProgress();
      updateTOC();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
updateProgress();
updateTOC();
