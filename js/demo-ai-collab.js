/**
 * demo-ai-collab.js — Demo 3: AI–Human Collaboration
 * Legal concept: USCO 2025 guidance — raw AI output = unprotected;
 *   human selection, arrangement, transformation, and expression = protectable.
 *
 * How to test:
 *   1. Open ai-human-collab-demo.html and click "Generate AI Images"
 *   2. 9 abstract canvas images appear — all flagged [UNPROTECTED - Raw AI Output]
 *   3. Click images to select them (selection = authorial judgment)
 *   4. Use filter sliders to transform selected images (transformation = creative choice)
 *   5. Add captions to selected images (expression = independent authorship)
 *   6. Switch layout mode (Grid/Mosaic/Column) (arrangement = creative structure)
 *   7. Score accumulates; at ≥ 60 points → "Protectable Human-AI Work"
 *
 * Images are generated locally via Canvas API — no external fetch needed.
 * Rules applied: Separation §1, ES Module §3, Performance §4, Accessibility §3
 */

// ─── Image generation (abstract art via Canvas 2D) ───
// Simulates "raw AI output" — colorful abstract shapes, reproducible per seed
function mulberry32(seed) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Colour palettes for each generated image
const PALETTES = [
  ['#6366f1','#a5b4fc','#312e81'],
  ['#f59e0b','#fde68a','#92400e'],
  ['#10b981','#6ee7b7','#064e3b'],
  ['#ef4444','#fca5a5','#7f1d1d'],
  ['#8b5cf6','#ddd6fe','#4c1d95'],
  ['#06b6d4','#a5f3fc','#164e63'],
  ['#f97316','#fed7aa','#7c2d12'],
  ['#84cc16','#d9f99d','#365314'],
  ['#ec4899','#fbcfe8','#831843'],
];

/**
 * Paint a single abstract image onto an offscreen canvas.
 * Returns a data-URL (PNG).
 * @param {number} seed - deterministic seed
 * @param {string[]} palette - array of hex colors
 */
function generateImage(seed, palette) {
  const W = 200, H = 150;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  const r = mulberry32(seed);

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, palette[2]);
  bg.addColorStop(1, palette[0]);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Random shapes (circles + rects) — simulated generative AI brushstrokes
  for (let i = 0; i < 18; i++) {
    ctx.globalAlpha = 0.3 + r() * 0.5;
    ctx.fillStyle = palette[Math.floor(r() * palette.length)];
    if (r() > 0.5) {
      ctx.beginPath();
      ctx.arc(r() * W, r() * H, r() * 40 + 10, 0, Math.PI * 2);
      ctx.fill();
    } else {
      const rw = r() * 80 + 20, rh = r() * 60 + 15;
      ctx.fillRect(r() * (W - rw), r() * (H - rh), rw, rh);
    }
  }
  ctx.globalAlpha = 1;

  // Noise texture (subtle dots)
  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = `rgba(255,255,255,${r() * 0.15})`;
    ctx.fillRect(r() * W, r() * H, 2, 2);
  }

  return canvas.toDataURL('image/png');
}

// ─── State ───
const NUM_IMAGES = 9;
let images = [];          // { id, src, selected, caption, filter }
let layoutMode = 'grid';  // 'grid' | 'mosaic' | 'column'
let generated = false;

// Score weights (USCO 2025 human creativity factors)
const WEIGHTS = {
  select:    20, // selecting 3+ images (editorial judgment)
  transform: 20, // applying non-default filter values
  caption:   25, // adding at least 2 captions with ≥ 10 chars each
  layout:    15, // changing from default grid layout
};
const TOTAL_POSSIBLE = Object.values(WEIGHTS).reduce((a, b) => a + b, 0); // 80
const PROTECT_THRESHOLD = 60;

// ─── Generate images ───
function generateImages() {
  if (generated) return;
  generated = true;
  images = PALETTES.map((palette, i) => ({
    id: i,
    src: generateImage(i * 1337 + 42, palette),
    selected: false,
    caption: '',
    filter: { brightness: 100, contrast: 100, hue: 0 },
  }));
  renderGallery();
  logAction('AI generated 9 abstract images. All flagged [UNPROTECTED – Raw AI Output].', 'unprotected');
  document.getElementById('generate-btn').disabled = true;
  document.getElementById('generate-btn').textContent = '✓ Images Generated';
  updateScore();
}

// ─── Render gallery ───
function renderGallery() {
  const grid = document.getElementById('image-grid');
  if (!grid) return;

  grid.className = `image-grid layout-${layoutMode}`;
  grid.innerHTML = images.map(img => `
    <div class="image-card${img.selected ? ' selected' : ''}"
         data-id="${img.id}"
         tabindex="0"
         role="checkbox"
         aria-checked="${img.selected}"
         aria-label="Image ${img.id + 1}${img.selected ? ', selected' : ''}. Press Enter or Space to ${img.selected ? 'deselect' : 'select'}.">
      <img src="${img.src}"
           alt="AI-generated abstract artwork ${img.id + 1}"
           style="${buildFilterCSS(img.filter)}"
           loading="lazy">
      ${img.selected ? `
        <div class="image-overlay">
          <label for="caption-${img.id}" class="sr-only">Caption for image ${img.id + 1}</label>
          <input type="text"
                 id="caption-${img.id}"
                 class="image-caption-input"
                 placeholder="Add your caption…"
                 aria-label="Caption for image ${img.id + 1}"
                 value="${escHtml(img.caption)}"
                 maxlength="120">
        </div>` : ''}
    </div>`).join('');

  // Click / keyboard select
  grid.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click',   onCardClick);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCardClick.call(card, e); } });
  });

  // Caption inputs
  grid.querySelectorAll('.image-caption-input').forEach(input => {
    input.addEventListener('input', e => {
      e.stopPropagation();
      const id = parseInt(input.id.replace('caption-', ''), 10);
      images[id].caption = input.value;
      updateScore();
    });
    input.addEventListener('click', e => e.stopPropagation());
    input.addEventListener('keydown', e => e.stopPropagation());
  });
}

function buildFilterCSS(f) {
  return `filter: brightness(${f.brightness}%) contrast(${f.contrast}%) hue-rotate(${f.hue}deg);`;
}

// ─── Card select / deselect ───
function onCardClick() {
  if (!generated) return;
  const id = parseInt(this.dataset.id, 10);
  images[id].selected = !images[id].selected;
  const verb = images[id].selected ? 'Selected' : 'Deselected';
  logAction(`${verb} image ${id + 1}.`, images[id].selected ? 'protected' : '');
  renderGallery();
  updateScore();
  updateFilterControls();
}

// ─── Filter controls ───
function updateFilterControls() {
  const selected = images.filter(i => i.selected);
  const panel = document.getElementById('filter-panel');
  if (!panel) return;
  panel.style.display = selected.length > 0 ? 'block' : 'none';
}

function applyFilters() {
  const brightness = parseInt(document.getElementById('filter-brightness')?.value ?? 100, 10);
  const contrast   = parseInt(document.getElementById('filter-contrast')?.value ?? 100, 10);
  const hue        = parseInt(document.getElementById('filter-hue')?.value ?? 0, 10);

  images.forEach(img => {
    if (img.selected) img.filter = { brightness, contrast, hue };
  });
  renderGallery();
  updateScore();
  logAction(`Applied filter: brightness ${brightness}%, contrast ${contrast}%, hue-rotate ${hue}°.`, 'accent');
}

// ─── Layout switch ───
function setLayout(mode) {
  layoutMode = mode;
  document.querySelectorAll('.layout-btn').forEach(b => {
    b.setAttribute('aria-pressed', b.dataset.layout === mode ? 'true' : 'false');
  });
  renderGallery();
  updateScore();
  logAction(`Layout changed to "${mode}".`, 'accent');
}

// ─── Score calculation ───
function computeScore() {
  if (!generated) return 0;
  let score = 0;

  // Selection: 3+ images selected
  const selectedCount = images.filter(i => i.selected).length;
  if (selectedCount >= 3) score += WEIGHTS.select;
  else if (selectedCount >= 1) score += Math.round(WEIGHTS.select * selectedCount / 3);

  // Transformation: at least one image has non-default filter values
  const transformed = images.filter(i =>
    i.selected && (i.filter.brightness !== 100 || i.filter.contrast !== 100 || i.filter.hue !== 0));
  if (transformed.length > 0) score += WEIGHTS.transform;

  // Caption: 2+ selected images with captions ≥ 10 chars
  const captioned = images.filter(i => i.selected && i.caption.trim().length >= 10);
  if (captioned.length >= 2) score += WEIGHTS.caption;
  else if (captioned.length === 1) score += Math.round(WEIGHTS.caption * 0.5);

  // Layout: not default 'grid'
  if (layoutMode !== 'grid') score += WEIGHTS.layout;

  return score;
}

function updateScore() {
  const score = computeScore();
  const fill  = document.getElementById('creativity-fill');
  const pct   = document.getElementById('creativity-pct');
  const badge = document.getElementById('status-badge');

  if (fill)  { fill.style.inlineSize = `${Math.min(score / TOTAL_POSSIBLE * 100, 100)}%`; }
  if (pct)   { pct.textContent = `${score} / ${TOTAL_POSSIBLE} pts`; }

  if (!badge) return;
  if (score >= PROTECT_THRESHOLD) {
    fill?.classList.add('above-threshold');
    badge.className = 'status-badge protected';
    badge.textContent = '✓ Protectable Human–AI Work';
    announce('Sufficient human creativity applied. This arrangement is protectable under USCO 2025 guidance.');
  } else {
    fill?.classList.remove('above-threshold');
    badge.className = score > 0 ? 'status-badge pending' : 'status-badge unprotected';
    badge.textContent = score > 0 ? `⟳ ${score} pts — Keep Adding Human Input` : '✗ Raw AI Output — Unprotected';
    announce(`Score: ${score} of ${TOTAL_POSSIBLE} points. Add more human creativity to cross the threshold.`);
  }
}

// ─── Log / announce ───
function logAction(msg, cls = '') {
  const log = document.getElementById('action-log');
  if (!log) return;
  const entry = document.createElement('div');
  entry.className = `log-entry${cls ? ' ' + cls : ''}`;
  const t = new Date().toLocaleTimeString('en-US', { hour12: false });
  entry.textContent = `[${t}] ${msg}`;
  log.prepend(entry);
}

function announce(msg) {
  const live = document.getElementById('sr-live');
  if (live) { live.textContent = ''; requestAnimationFrame(() => { live.textContent = msg; }); }
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate-btn')?.addEventListener('click', generateImages);
  document.getElementById('apply-filter-btn')?.addEventListener('click', applyFilters);

  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.addEventListener('click', () => setLayout(btn.dataset.layout));
  });

  // Filter slider labels
  ['brightness','contrast','hue'].forEach(name => {
    const slider = document.getElementById(`filter-${name}`);
    const label  = document.getElementById(`filter-${name}-val`);
    slider?.addEventListener('input', () => {
      if (label) label.textContent = `${slider.value}${name === 'hue' ? '°' : '%'}`;
    });
  });

  setupModal();
});

function setupModal() {
  const openBtn  = document.getElementById('open-modal');
  const closeBtn = document.getElementById('close-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (!openBtn || !backdrop) return;
  openBtn.addEventListener('click', () => { backdrop.classList.add('open'); closeBtn?.focus(); });
  closeBtn?.addEventListener('click', () => { backdrop.classList.remove('open'); openBtn.focus(); });
  backdrop.addEventListener('click', e => { if (e.target === backdrop) { backdrop.classList.remove('open'); openBtn.focus(); } });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) { backdrop.classList.remove('open'); openBtn.focus(); }
  });
}
