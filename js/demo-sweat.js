/**
 * demo-sweat.js — Demo 2: Sweat of the Brow vs. Creative Spark
 * Legal concept: Feist rejected "sweat of the brow" — labor alone ≠ authorship.
 *   Only creative selection/arrangement of data earns thin copyright.
 *
 * How to test:
 *   1. Open sweat-vs-spark.html — chart auto-populates 1 000 data points (raw labor)
 *   2. All points are gray = "Unprotected Labor Output"
 *   3. Use the Quality Threshold slider to set your editorial standard (creative judgment)
 *   4. Enter a collection title (creative naming) and click "Apply Curation"
 *   5. Points meeting the threshold highlight green; score rises
 *   6. At ≥ 40% score → "THIN COPYRIGHT — Creative Selection" banner appears
 *   7. Notice: no matter how many hours (x-axis) without curation, score stays 0%
 *
 * Chart.js is loaded via CDN (explicitly permitted for this demo).
 * Rules applied: ES Module §3, Performance §4, Accessibility §3, Design §1-5
 */

// ─── Seeded PRNG (Mulberry32) for reproducible data across reloads ───
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(0xDEADBEEF);

// ─── Generate 1 000 data points ───
// x = effort/hours (1–100), y = output quality (0–10, random)
// These represent Raw Telephone Directory entries — all unprotected under Feist
const DATA_POINTS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  x: rand() * 99 + 1,          // hours of labor
  y: rand() * 10,               // raw output quality score
  curated: false,
}));

// ─── State ───
let chart = null;
let currentThreshold = 5;       // quality threshold slider value
let collectionTitle = '';
let curationApplied = false;

const SCORE_THRESHOLD = 40;     // score % needed to cross into "thin copyright"

// ─── Build Chart.js scatter plot ───
function buildChart() {
  const ctx = document.getElementById('scatter-chart')?.getContext('2d');
  if (!ctx) return;

  chart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Raw Labor Output (Unprotected)',
          data: DATA_POINTS,
          backgroundColor: 'oklch(55% 0.02 245 / 0.35)',
          pointRadius: 3,
          pointHoverRadius: 5,
        },
        {
          label: 'Curated Selection (Thin Copyright)',
          data: [],
          backgroundColor: 'oklch(52% 0.16 145 / 0.8)',
          pointRadius: 5,
          pointHoverRadius: 7,
          pointStyle: 'star',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 400 },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 12 }, color: 'oklch(22% 0.02 245)' },
        },
        tooltip: {
          callbacks: {
            label: ctx => {
              const p = ctx.raw;
              return `Effort: ${p.x.toFixed(1)}h | Quality: ${p.y.toFixed(2)}${p.curated ? ' ★ Curated' : ''}`;
            },
          },
        },
        // Annotation: "Effort Alone ≠ Copyright" label
        annotation: undefined,
      },
      scales: {
        x: {
          title: { display: true, text: 'Effort / Labor Input (hours)', font: { weight: 'bold' } },
          min: 0, max: 105,
        },
        y: {
          title: { display: true, text: 'Output Quality Score (0–10)', font: { weight: 'bold' } },
          min: 0, max: 11,
        },
      },
    },
  });
}

// ─── Apply curation based on current threshold ───
function applyCuration() {
  const title = document.getElementById('collection-title')?.value.trim();
  collectionTitle = title;

  if (!collectionTitle) {
    document.getElementById('title-error').textContent = 'Please enter a collection title — this is your creative naming choice.';
    document.getElementById('collection-title')?.focus();
    return;
  }
  document.getElementById('title-error').textContent = '';

  const threshold = parseFloat(document.getElementById('quality-slider')?.value ?? 5);

  // Mark points above threshold as curated
  DATA_POINTS.forEach(p => { p.curated = p.y >= threshold; });
  curationApplied = true;

  updateChart();
  updateScore();
  logAction(`Applied curation: threshold ≥ ${threshold.toFixed(1)}, title "${title}"`);
}

// ─── Reset curation ───
function resetCuration() {
  DATA_POINTS.forEach(p => { p.curated = false; });
  curationApplied = false;
  collectionTitle = '';
  if (document.getElementById('collection-title')) document.getElementById('collection-title').value = '';
  updateChart();
  updateScore();
  logAction('Reset — all curation removed. Back to raw labor output.');
}

// ─── Sync chart datasets ───
function updateChart() {
  if (!chart) return;
  const raw     = DATA_POINTS.filter(p => !p.curated);
  const curated = DATA_POINTS.filter(p =>  p.curated);

  chart.data.datasets[0].data = raw;
  chart.data.datasets[1].data = curated;
  chart.data.datasets[1].label = collectionTitle
    ? `"${collectionTitle}" — Curated Selection (Thin Copyright)`
    : 'Curated Selection (Thin Copyright)';
  chart.update();
}

// ─── Compute creativity score ───
// Score formula:
//   titleScore   = title provided? 0.25 : 0 (creative naming = authorial choice)
//   thresholdScore = specificity of threshold (distance from median, normalised) * 0.40
//   selectionScore = fraction selected must be 5–35% of total (sweet spot) * 0.35
function computeScore() {
  if (!curationApplied) return 0;

  const curated = DATA_POINTS.filter(p => p.curated);
  const pct = curated.length / DATA_POINTS.length; // fraction selected

  // Selection score: best when 5–35% selected; zero if none or >70%
  let selectionScore = 0;
  if (pct > 0 && pct <= 0.7) {
    if (pct <= 0.35) selectionScore = pct / 0.35;          // ramp up to 35%
    else              selectionScore = 1 - (pct - 0.35) / 0.35; // ramp down
  }

  // Threshold specificity: how far from mean-quality 5 (more specific = more creative)
  const thresholdVal = parseFloat(document.getElementById('quality-slider')?.value ?? 5);
  const specificity  = Math.abs(thresholdVal - 5) / 5; // 0–1

  const titleScore     = collectionTitle.length > 0 ? 1 : 0;
  const thresholdScore = specificity;

  const raw = (titleScore * 0.25 + thresholdScore * 0.40 + selectionScore * 0.35) * 100;
  return Math.round(raw);
}

// ─── Update score + status UI ───
function updateScore() {
  const score = computeScore();
  const fill  = document.getElementById('creativity-fill');
  const pct   = document.getElementById('creativity-pct');
  const badge = document.getElementById('status-badge');
  const info  = document.getElementById('selection-info');

  if (fill)  { fill.style.inlineSize = `${score}%`; }
  if (pct)   { pct.textContent = `${score}%`; }

  const curated = DATA_POINTS.filter(p => p.curated);
  if (info) {
    info.textContent = curationApplied
      ? `${curated.length} of 1,000 points selected (${(curated.length / 10).toFixed(1)}%)`
      : 'No curation applied yet — all 1,000 points are unprotected raw labor.';
  }

  if (!badge) return;
  if (score >= SCORE_THRESHOLD) {
    fill?.classList.add('above-threshold');
    badge.className = 'status-badge protected';
    badge.textContent = '✓ Thin Copyright — Creative Selection';
    announce(`Score ${score}% — thin copyright protection through creative curation.`);
  } else {
    fill?.classList.remove('above-threshold');
    badge.className = curationApplied ? 'status-badge pending' : 'status-badge unprotected';
    badge.textContent = curationApplied ? '⟳ Curation Applied — Insufficient Specificity' : '✗ Unprotected — Sweat of the Brow';
    announce(`Score ${score}% — effort alone does not create copyright under Feist.`);
  }
}

// ─── Action log ───
function logAction(msg) {
  const log = document.getElementById('action-log');
  if (!log) return;
  const entry = document.createElement('div');
  entry.className = 'log-entry accent';
  const t = new Date().toLocaleTimeString('en-US', { hour12: false });
  entry.textContent = `[${t}] ${msg}`;
  log.prepend(entry);
}

// ─── SR announce ───
function announce(msg) {
  const live = document.getElementById('sr-live');
  if (live) { live.textContent = ''; requestAnimationFrame(() => { live.textContent = msg; }); }
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  // Wait for Chart.js CDN to load (it's deferred)
  function tryBuild() {
    if (typeof Chart !== 'undefined') {
      buildChart();
      updateScore();
    } else {
      setTimeout(tryBuild, 80);
    }
  }
  tryBuild();

  // Slider live preview
  const slider = document.getElementById('quality-slider');
  const sliderVal = document.getElementById('slider-value');
  slider?.addEventListener('input', () => {
    if (sliderVal) sliderVal.textContent = parseFloat(slider.value).toFixed(1);
  });

  document.getElementById('apply-btn')?.addEventListener('click', applyCuration);
  document.getElementById('reset-btn')?.addEventListener('click', resetCuration);

  // Modal
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
