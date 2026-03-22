/**
 * demo-ai-collab.js — AI–Human Collaboration: Copyright Threshold Demo
 * Legal concept: USCO 2025 + Feist 499 U.S. 340, 345 (1991).
 *   The "modicum of creativity" bar is CONSTITUTIONALLY LOW.
 *   Selecting one AI image + making any single creative edit is legally sufficient.
 *
 * How to test:
 *   1. Page loads — one procedural AI image appears on the Fabric canvas.
 *   2. Click the image → +5 pts (Selection). Status = pending.
 *   3. Do ONE thing — brush stroke, adjust a filter slider, or move the image
 *      → +5 pts (Transformation). Score = 10 ≥ PROTECT_THRESHOLD → "✓ Protectable"
 *      → Entire page theme shifts to green (eureka moment).
 *   4. Bonus actions (not required): add text caption ≥5 chars (+10), reposition
 *      image (+10), export composition (+10). Max = 40 pts.
 *   5. "Import Image" lets you load your own photo to edit instead.
 *   6. "Regenerate" creates a new procedural image with a different palette/seed.
 *
 * Image generation: CPU-only Perlin fBm with domain warping — no WebGL, no GPU,
 * no external fetch. Runs on any device with a <canvas> element.
 * PRNG: mulberry32 (deterministic for a given seed).
 *
 * Requires global `fabric` from Fabric.js 5.3.1 (loaded synchronously in HTML).
 * Rules applied: Separation §1, ES Module §3, Performance §4, Accessibility §3
 */

// ── Deterministic PRNG (mulberry32) ──────────────────────────────────────────
function mulberry32(seed) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// ── 2D Perlin noise (classic permutation-table implementation) ─────────────
/**
 * Returns a noise(x, y) function seeded by `seed`.
 * Output range: approximately [-1, +1].
 */
function buildPerlin(seed) {
  const rng = mulberry32(seed);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  // Fisher-Yates shuffle with seeded RNG
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = p[i]; p[i] = p[j]; p[j] = tmp;
  }
  const perm = new Uint8Array(512);
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp  = (a, b, t) => a + t * (b - a);
  const grad  = (h, x, y) => {
    const c = h & 3;
    const u = c < 2 ? x : y, v = c < 2 ? y : x;
    return ((c & 1) ? -u : u) + ((c & 2) ? -v : v);
  };

  return (x, y) => {
    const xi = Math.floor(x) & 255, yi = Math.floor(y) & 255;
    const xf = x - Math.floor(x),   yf = y - Math.floor(y);
    const u = fade(xf), v = fade(yf);
    const aa = perm[perm[xi]   + yi],     ab = perm[perm[xi]   + yi + 1];
    const ba = perm[perm[xi+1] + yi],     bb = perm[perm[xi+1] + yi + 1];
    return lerp(
      lerp(grad(aa, xf,   yf),   grad(ba, xf-1, yf),   u),
      lerp(grad(ab, xf,   yf-1), grad(bb, xf-1, yf-1), u),
      v
    );
  };
}

// ── Fractal Brownian Motion (layered noise for organic complexity) ─────────
/**
 * Stacks `octaves` noise samples at increasing frequencies / decreasing
 * amplitudes — the "fBm" technique that mimics cloud, marble, and
 * diffusion-model textures.
 */
function fbm(noiseFn, x, y, octaves = 5) {
  let v = 0, amp = 0.5, freq = 1, max = 0;
  for (let o = 0; o < octaves; o++) {
    v   += amp * noiseFn(x * freq, y * freq);
    max += amp;
    amp  *= 0.52;
    freq *= 2.1;
  }
  return v / max; // normalised to approx [-1, +1]
}

// ── Colour palettes ───────────────────────────────────────────────────────
const PALETTES = [
  ['#6366f1','#a5b4fc','#312e81'],  // 0 indigo
  ['#f59e0b','#fde68a','#92400e'],  // 1 amber
  ['#10b981','#6ee7b7','#064e3b'],  // 2 emerald
  ['#ef4444','#fca5a5','#7f1d1d'],  // 3 red
  ['#8b5cf6','#ddd6fe','#4c1d95'],  // 4 violet
  ['#06b6d4','#a5f3fc','#164e63'],  // 5 cyan   (default)
  ['#f97316','#fed7aa','#7c2d12'],  // 6 orange
  ['#84cc16','#d9f99d','#365314'],  // 7 lime
  ['#ec4899','#fbcfe8','#831843'],  // 8 pink
];

// Runtime palette / seed state (mutable, cycle via Regenerate)
let currentPaletteIdx = 5;
let currentSeed       = 42;

// ── Procedural image generation (CPU-only Perlin fBm + domain warping) ────
/**
 * Paints a single "AI-like" abstract image onto an offscreen canvas using:
 *   1. Three independent Perlin noise fields (different seeds)
 *   2. Domain warping  — coord offsets before the main fBm sample
 *      produce the dreamlike swirling shapes people associate with
 *      diffusion-model output.
 *   3. Tri-colour gradient mapped through the noise value.
 *
 * Performance: 320×240 @ 5 octaves ≈ 80–300 ms on phone / <50 ms on desktop.
 *
 * @param {number}   seed    — PRNG seed
 * @param {string[]} palette — [primary, light, dark] hex colours
 * @param {number}   W       — output width  (default 320)
 * @param {number}   H       — output height (default 240)
 * @returns {string} PNG data-URL
 */
function generateProceduralImage(seed, palette, W = 320, H = 240) {
  const cv  = document.createElement('canvas');
  cv.width  = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(W, H);
  const d   = img.data;

  // Three noise fields: main, warp-x, warp-y
  const n1 = buildPerlin(seed);
  const n2 = buildPerlin(seed + 7919);
  const n3 = buildPerlin(seed + 104729);

  // Parse hex to [r,g,b]
  const hex2rgb = h => {
    const n = parseInt(h.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const c0 = hex2rgb(palette[0]); // primary
  const c1 = hex2rgb(palette[1]); // light highlight
  const c2 = hex2rgb(palette[2]); // dark shadow

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      // Map pixel to ~3.5×2.8 noise-space
      const nx = px / W * 3.5;
      const ny = py / H * 2.8;

      // Domain warp: offset coords by separate fBm samples
      const wx = nx + 1.8 * fbm(n2, nx,       ny      );
      const wy = ny + 1.8 * fbm(n3, nx + 5.2, ny + 1.3);

      // Main sample → normalise to [0, 1]
      const t = (fbm(n1, wx, wy) + 1) * 0.5;

      // Tri-colour gradient
      let r, g, b;
      if (t < 0.42) {
        const s = t / 0.42;
        r = c2[0] + (c0[0] - c2[0]) * s;
        g = c2[1] + (c0[1] - c2[1]) * s;
        b = c2[2] + (c0[2] - c2[2]) * s;
      } else if (t < 0.78) {
        const s = (t - 0.42) / 0.36;
        r = c0[0] + (c1[0] - c0[0]) * s;
        g = c0[1] + (c1[1] - c0[1]) * s;
        b = c0[2] + (c1[2] - c0[2]) * s;
      } else {
        // Subtle highlight bloom at peaks
        const s = (t - 0.78) / 0.22;
        r = c1[0] + (255 - c1[0]) * s * 0.28;
        g = c1[1] + (255 - c1[1]) * s * 0.28;
        b = c1[2] + (255 - c1[2]) * s * 0.28;
      }

      const i = (py * W + px) * 4;
      d[i]   = r | 0;
      d[i+1] = g | 0;
      d[i+2] = b | 0;
      d[i+3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return cv.toDataURL('image/png');
}

// ── Scoring constants ─────────────────────────────────────────────────────
const WEIGHTS = {
  select:    5,   // selecting the AI image — editorial judgment
  transform: 5,   // any filter, brush stroke, scale, rotate — creative touch
  caption:  10,   // IText object ≥ 5 chars — independent literary authorship
  arrange:  10,   // moving image from original position — composition
  export:   10,   // exporting the work — publication intent
};
const TOTAL_POSSIBLE    = 40;
const PROTECT_THRESHOLD = 10;  // select(5) + any single edit(5) = sufficient

// ── Mutable runtime state ─────────────────────────────────────────────────
const state = {
  hasSelected:    false,
  hasTransformed: false,
  hasCaption:     false,
  hasArranged:    false,
  hasExported:    false,
  imageOrigLeft:  0,
  imageOrigTop:   0,
  currentTool:    'select',
};

// ── Fabric canvas instance ────────────────────────────────────────────────
let fc = null;

const CANVAS_W = 600;
const CANVAS_H = 450;

// Single image: 320×240 source displayed at scale 1.6875 → 540×405, centred
const IMG_SRC_W = 320;
const IMG_SRC_H = 240;
const IMG_SCALE = 1.6875;
const IMG_LEFT  = Math.round((CANVAS_W - IMG_SRC_W * IMG_SCALE) / 2);  // 30
const IMG_TOP   = Math.round((CANVAS_H - IMG_SRC_H * IMG_SCALE) / 2);  // 22

// ── Initialise Fabric canvas and load the AI image ────────────────────────
function initCanvas() {
  fc = new fabric.Canvas('workspace-canvas', {
    width:                  CANVAS_W,
    height:                 CANVAS_H,
    backgroundColor:        '#0a0a14',
    preserveObjectStacking: true,
    selection:              true,
  });

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  loadProceduralImage(currentSeed, PALETTES[currentPaletteIdx]);

  fc.on('selection:created', onSelect);
  fc.on('selection:updated', onSelect);
  fc.on('object:modified',   onModified);
  fc.on('path:created',      onPathCreated);
  fc.on('text:changed',      onTextChanged);
}

/** Generate a new procedural image and add it as the sole fabric.Image. */
function loadProceduralImage(seed, palette) {
  // Remove existing AI images (keep overlays like text/brush)
  const existing = fc.getObjects().filter(o => o.type === 'image' && o.data?.isAI);
  existing.forEach(o => fc.remove(o));

  logAction('Generating procedural image…', '');
  announce('Generating AI image, please wait.');

  // Defer to next frame so the log message renders before the blocking loop
  requestAnimationFrame(() => {
    const dataURL = generateProceduralImage(seed, palette);

    fabric.Image.fromURL(dataURL, img => {
      img.set({
        left:              IMG_LEFT,
        top:               IMG_TOP,
        scaleX:            IMG_SCALE,
        scaleY:            IMG_SCALE,
        hasRotatingPoint:  false,
        cornerSize:        8,
        cornerStyle:       'circle',
        borderColor:       '#a5b4fc',
        cornerColor:       '#a5b4fc',
      });
      img.data = { isAI: true };

      state.imageOrigLeft = IMG_LEFT;
      state.imageOrigTop  = IMG_TOP;

      fc.add(img);
      fc.sendToBack(img);
      fc.renderAll();

      logAction('Procedural AI image loaded. [UNPROTECTED — Raw AI Output] until you make a creative choice.', 'unprotected');
      announce('Canvas ready. Click the image to select it — that is your first creative act.');
    });
  });
}

/** Keep canvas visually responsive while preserving the logical 600×450 space. */
function resizeCanvas() {
  const container = document.getElementById('workspace-container');
  if (!container || !fc) return;
  const cw = container.clientWidth;
  if (cw > 0 && cw < CANVAS_W) {
    const z = cw / CANVAS_W;
    fc.setZoom(z);
    fc.setWidth(Math.round(CANVAS_W * z));
    fc.setHeight(Math.round(CANVAS_H * z));
  } else {
    fc.setZoom(1);
    fc.setWidth(CANVAS_W);
    fc.setHeight(CANVAS_H);
  }
}

// ── Canvas event handlers ─────────────────────────────────────────────────

function onSelect(e) {
  const obj = (e.selected || [])[0] || fc.getActiveObject();
  if (!obj || obj.type !== 'image') return;
  if (!state.hasSelected) {
    state.hasSelected = true;
    logAction('Image selected — editorial judgment. +5 pts.', 'protected');
    updateScore();
    announce('Image selected. Score updated. Now make any single edit to cross the threshold.');
  }
}

function onModified(e) {
  const obj = e.target;
  if (!obj || obj.type !== 'image') return;

  if (!state.hasTransformed) {
    state.hasTransformed = true;
    logAction('Image transformed (moved/scaled) — human composition choice. +5 pts.', 'accent');
    updateScore();
  }

  const moved = Math.abs(obj.left - state.imageOrigLeft) > 6
             || Math.abs(obj.top  - state.imageOrigTop)  > 6;
  if (moved && !state.hasArranged) {
    state.hasArranged = true;
    logAction('Image repositioned — arrangement as authorial act (§103(a)). +10 pts.', 'protected');
    updateScore();
  }
}

function onPathCreated() {
  if (!state.hasTransformed) {
    state.hasTransformed = true;
    logAction('Brush stroke applied over AI image — human mark on AI output. +5 pts.', 'accent');
    updateScore();
    announce('Brush stroke recorded. Threshold may now be crossed.');
  }
}

function onTextChanged(e) {
  const obj = e.target;
  if (!obj) return;
  const content = (obj.text || '').trim();
  if (content.length >= 5 && !state.hasCaption) {
    state.hasCaption = true;
    logAction(`Caption added ("${content.substring(0, 40)}${content.length > 40 ? '…' : ''}") — independent literary authorship. +10 pts.`, 'protected');
    updateScore();
  }
}

// ── Tool control ──────────────────────────────────────────────────────────

function setTool(tool) {
  state.currentTool = tool;

  if (tool === 'brush') {
    fc.isDrawingMode = true;
    if (!fc.freeDrawingBrush) fc.freeDrawingBrush = new fabric.PencilBrush(fc);
    fc.freeDrawingBrush.width = 6;
    fc.freeDrawingBrush.color = '#ff6b6b';
  } else {
    fc.isDrawingMode = false;
  }

  if (tool === 'text') {
    addTextObject();
    setTool('select');
    return;
  }

  document.querySelectorAll('.tool-btn').forEach(b => {
    b.setAttribute('aria-pressed', b.dataset.tool === tool ? 'true' : 'false');
  });
}

function addTextObject() {
  const text = new fabric.IText('My caption', {
    left:            200, top: 180,
    fontSize:        22,
    fill:            '#ffffff',
    fontFamily:      'system-ui, -apple-system, sans-serif',
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding:         6,
    borderColor:     '#a5b4fc',
    cornerColor:     '#a5b4fc',
  });
  fc.add(text);
  fc.setActiveObject(text);
  text.enterEditing();
  fc.renderAll();
  logAction('Text object added. Edit it (≥ 5 chars) for +10 caption pts.', 'accent');
  announce('Text object placed on canvas. Start typing your caption.');
}

// ── Apply Fabric image filters to the selected image ─────────────────────

function applyFilters() {
  const obj = fc.getActiveObject();
  if (!obj || obj.type !== 'image') {
    logAction('Click the AI image on the canvas first, then move the sliders.', '');
    announce('No image selected. Click the image on the canvas, then adjust the sliders.');
    return;
  }

  const brightness = parseFloat(document.getElementById('slider-brightness')?.value ?? 0);
  const contrast   = parseFloat(document.getElementById('slider-contrast')?.value   ?? 0);
  const hue        = parseFloat(document.getElementById('slider-hue')?.value        ?? 0);

  obj.filters = [];
  if (brightness !== 0) obj.filters.push(new fabric.Image.filters.Brightness({ brightness }));
  if (contrast   !== 0) obj.filters.push(new fabric.Image.filters.Contrast({ contrast }));
  if (hue        !== 0) obj.filters.push(new fabric.Image.filters.HueRotation({ rotation: hue }));
  obj.applyFilters();
  fc.renderAll();

  if (!state.hasTransformed) {
    state.hasTransformed = true;
    logAction(`Filter applied — brightness ${fmtN(brightness)}, contrast ${fmtN(contrast)}, hue ${fmtN(hue)}. +5 pts.`, 'accent');
    updateScore();
  } else {
    logAction(`Filter updated — brightness ${fmtN(brightness)}, contrast ${fmtN(contrast)}, hue ${fmtN(hue)}.`);
  }
}

function fmtN(n) { return (n >= 0 ? '+' : '') + n.toFixed(2); }

// ── Import user image from file picker ───────────────────────────────────

function importImage() {
  const input = document.getElementById('import-file-input');
  if (!input) return;
  input.value = '';
  input.click();
}

function onImportFileChange(e) {
  const file = e.target.files?.[0];
  if (!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();
  reader.onload = ev => {
    const dataURL = ev.target.result;
    // Remove existing AI images
    const existing = fc.getObjects().filter(o => o.type === 'image' && o.data?.isAI);
    existing.forEach(o => fc.remove(o));

    fabric.Image.fromURL(dataURL, img => {
      // Fit the image within the canvas while preserving aspect ratio
      const scaleX = (CANVAS_W - 40) / img.width;
      const scaleY = (CANVAS_H - 40) / img.height;
      const scale  = Math.min(scaleX, scaleY, 2);
      const left   = Math.round((CANVAS_W - img.width  * scale) / 2);
      const top    = Math.round((CANVAS_H - img.height * scale) / 2);

      img.set({
        left, top, scaleX: scale, scaleY: scale,
        hasRotatingPoint: false, cornerSize: 8, cornerStyle: 'circle',
        borderColor: '#a5b4fc', cornerColor: '#a5b4fc',
      });
      img.data = { isAI: true };

      state.imageOrigLeft = left;
      state.imageOrigTop  = top;

      fc.add(img);
      fc.sendToBack(img);
      fc.renderAll();

      logAction(`Your image imported — "${file.name}". Runs 100% locally, nothing uploaded. Now edit to claim authorship.`, 'accent');
      announce(`Image "${file.name}" imported. Click it to select, then edit to earn creativity points.`);
    });
  };
  reader.readAsDataURL(file);
}

// ── Regenerate procedural image ───────────────────────────────────────────

function regenerateImage() {
  // Advance seed and cycle palette
  currentSeed       = (currentSeed + 1337) ^ 0x5EADBEEF;
  currentPaletteIdx = (currentPaletteIdx + 1) % PALETTES.length;
  loadProceduralImage(currentSeed, PALETTES[currentPaletteIdx]);
  logAction('New procedural image generated.', '');
}

// ── Delete selected non-image object ─────────────────────────────────────

function deleteSelected() {
  const obj = fc.getActiveObject();
  if (!obj) return;
  if (obj.type === 'image') {
    logAction('AI-generated images cannot be deleted — only annotated.', '');
    return;
  }
  fc.remove(obj);
  fc.renderAll();
  logAction('Object removed from canvas.');
}

// ── Clear all overlays (brush paths + text), keep images ─────────────────

function clearOverlays() {
  const toRemove = fc.getObjects().filter(o => o.type !== 'image');
  if (toRemove.length === 0) { logAction('No overlays to clear.'); return; }
  toRemove.forEach(o => fc.remove(o));
  fc.renderAll();
  logAction('Brush strokes and text overlays cleared.');
}

// ── Export composition ────────────────────────────────────────────────────

function exportComposition() {
  if (!state.hasExported) {
    state.hasExported = true;
    logAction('Composition finalised and exported — publication intent. +10 pts.', 'protected');
    updateScore();
  }
  const dataURL = fc.toDataURL({ format: 'png', quality: 0.92, multiplier: 1 });
  const a = document.createElement('a');
  a.href = dataURL;
  a.download = 'human-ai-composition.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  announce('Composition exported as PNG.');
}

// ── Score calculation ─────────────────────────────────────────────────────

function computeScore() {
  return (state.hasSelected    ? WEIGHTS.select    : 0)
       + (state.hasTransformed ? WEIGHTS.transform : 0)
       + (state.hasCaption     ? WEIGHTS.caption   : 0)
       + (state.hasArranged    ? WEIGHTS.arrange   : 0)
       + (state.hasExported    ? WEIGHTS.export    : 0);
}

function updateScore() {
  const score = computeScore();
  const fill  = document.getElementById('creativity-fill');
  const pct   = document.getElementById('creativity-pct');
  const badge = document.getElementById('status-badge');
  const track = document.querySelector('[role="meter"]');

  const pctW = Math.min(score / TOTAL_POSSIBLE * 100, 100);
  if (fill)  fill.style.inlineSize = `${pctW}%`;
  if (pct)   pct.textContent = `${score} / ${TOTAL_POSSIBLE} pts`;
  if (track) {
    track.setAttribute('aria-valuenow', score);
    track.setAttribute('aria-valuemax',  TOTAL_POSSIBLE);
  }

  if (!badge) return;

  if (score >= PROTECT_THRESHOLD) {
    fill?.classList.add('above-threshold');
    badge.className   = 'status-badge protected';
    badge.textContent = '✓ Protectable Human–AI Work';

    // ── Eureka theme shift ──
    document.body.classList.add('eureka');
    const flash = document.getElementById('eureka-flash');
    flash?.classList.add('active');
    setTimeout(() => flash?.classList.remove('active'), 180); // flash in, then CSS fades out

    announce('Threshold crossed. Even this minimal creative input satisfies the constitutional "modicum of creativity" under Feist 499 U.S. 345 and USCO 2025. The whole page just turned green — that is the legal result of one selection + one edit.');
  } else {
    fill?.classList.remove('above-threshold');
    document.body.classList.remove('eureka');
    document.getElementById('eureka-flash')?.classList.remove('active');
    badge.className   = score > 0 ? 'status-badge pending' : 'status-badge unprotected';
    badge.textContent = score > 0
      ? `⟳ ${score} pts — One more edit crosses the threshold`
      : '✗ Raw AI Output — Unprotected';
    announce(`Score: ${score} of ${TOTAL_POSSIBLE}. Select the image then make any single edit to reach the 10-point threshold.`);
  }
}

// ── ARIA live region + action log ─────────────────────────────────────────

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
  if (!live) return;
  live.textContent = '';
  requestAnimationFrame(() => { live.textContent = msg; });
}

// ── DOMContentLoaded entry point ──────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initCanvas();

  document.getElementById('tool-select')?.addEventListener('click',   () => setTool('select'));
  document.getElementById('tool-brush')?.addEventListener('click',    () => setTool('brush'));
  document.getElementById('tool-text')?.addEventListener('click',     () => setTool('text'));
  document.getElementById('tool-delete')?.addEventListener('click',   deleteSelected);
  document.getElementById('clear-overlays-btn')?.addEventListener('click', clearOverlays);
  document.getElementById('export-btn')?.addEventListener('click',    exportComposition);
  document.getElementById('apply-filters-btn')?.addEventListener('click', applyFilters);
  document.getElementById('import-btn')?.addEventListener('click',    importImage);
  document.getElementById('regenerate-btn')?.addEventListener('click', regenerateImage);

  const importInput = document.getElementById('import-file-input');
  importInput?.addEventListener('change', onImportFileChange);

  // Live slider value labels
  ['brightness', 'contrast', 'hue'].forEach(name => {
    const slider = document.getElementById(`slider-${name}`);
    const label  = document.getElementById(`slider-${name}-val`);
    slider?.addEventListener('input', () => {
      if (label) label.textContent = parseFloat(slider.value).toFixed(2);
    });
  });

  setupModal();
});

// ── Modal ─────────────────────────────────────────────────────────────────

function setupModal() {
  const openBtn  = document.getElementById('open-modal');
  const closeBtn = document.getElementById('close-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (!openBtn || !backdrop) return;
  openBtn.addEventListener('click',  () => { backdrop.classList.add('open'); closeBtn?.focus(); });
  closeBtn?.addEventListener('click', () => { backdrop.classList.remove('open'); openBtn.focus(); });
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) { backdrop.classList.remove('open'); openBtn.focus(); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      backdrop.classList.remove('open'); openBtn.focus();
    }
  });
}
