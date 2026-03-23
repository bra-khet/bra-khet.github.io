/**
 * ai-water-use-report-1.js
 * Water-Energy Nexus of AI Infrastructure — Interactive Report
 *
 * How to test:
 *   1. Scroll page — #reading-progress fills blue → teal to 100% at bottom.
 *   2. Scroll to each section — corresponding TOC link gains `.active` class.
 *   3. Click any accordion trigger — panel expands; other panels collapse.
 *   4. All four Chart.js charts render with correct data from LBNL/HARC/Ceres.
 */

'use strict';

/* ── Reading progress bar ───────────────────────────────────────── */
const progressBar = document.getElementById('reading-progress');

function updateProgress() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? Math.min(window.scrollY / docHeight * 100, 100) : 0;
  if (!progressBar) return;
  progressBar.style.width = pct.toFixed(1) + '%';
  progressBar.setAttribute('aria-valuenow', Math.round(pct));
}

/* ── TOC active-section tracking ────────────────────────────────── */
const tocLinks = Array.from(document.querySelectorAll('.toc-list a'));
const sections = Array.from(document.querySelectorAll('.report-section[id]'));

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

window.addEventListener('scroll', () => {
  updateProgress();
  updateTOC();
}, { passive: true });

updateProgress();
updateTOC();

/* ── Accordion (location deep-dives) ────────────────────────────── */
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    // Collapse all panels
    document.querySelectorAll('.accordion-trigger').forEach(t => {
      t.setAttribute('aria-expanded', 'false');
      const panelId = t.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (panel) panel.setAttribute('aria-hidden', 'true');
    });

    // Expand clicked panel if it was closed
    if (!isExpanded) {
      trigger.setAttribute('aria-expanded', 'true');
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (panel) panel.setAttribute('aria-hidden', 'false');
    }
  });
});

/* ── Chart.js global defaults ───────────────────────────────────── */
Chart.defaults.color         = '#7a9ab8';
Chart.defaults.borderColor   = '#0d2235';
Chart.defaults.font.family   = "'JetBrains Mono', 'Fira Code', monospace";
Chart.defaults.font.size     = 11;
Chart.defaults.animation     = { duration: 600 };

/* ── Chart 1: U.S. National Water Withdrawals by Sector (Doughnut) ─ */
(function initNationalPie() {
  const ctx = document.getElementById('chartNationalPie');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'Thermoelectric Power (~40%)',
        'Agriculture / Irrigation (~37%)',
        'Public Supply (~12%)',
        'Industrial / Manufacturing (~5%)',
        'Data Centers — Direct + Indirect (~1%)',
      ],
      datasets: [{
        data: [40, 37, 12, 5, 1],
        backgroundColor: ['#112e4a', '#0e3a28', '#122030', '#1e1e38', '#00b4d8'],
        borderColor:     ['#1e4a70', '#1a5038', '#1e3850', '#2e2e5a', '#00d4ff'],
        borderWidth: 2,
        hoverOffset: 10,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '58%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 10, boxWidth: 12, font: { size: 10 } },
        },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.parsed}%`,
          },
        },
      },
    },
  });
}());

/* ── Chart 2: Time-Series — Direct & Indirect Consumption 2020→2028 */
(function initTimeSeries() {
  const ctx = document.getElementById('chartTimeSeries');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2020', '2023 (Actual)', '2028 (Projected)'],
      datasets: [
        {
          label: 'Direct Consumption (Billion L)',
          data: [35, 66, 124],
          borderColor: '#00b4d8',
          backgroundColor: 'rgba(0,180,216,.12)',
          borderWidth: 2.5,
          pointRadius: 5,
          pointBackgroundColor: '#00b4d8',
          fill: true,
          tension: 0.35,
          yAxisID: 'y',
        },
        {
          label: 'Indirect via Grid (Billion L)',
          data: [450, 800, 1500],
          borderColor: '#f97316',
          backgroundColor: 'rgba(249,115,22,.08)',
          borderWidth: 2.5,
          pointRadius: 5,
          pointBackgroundColor: '#f97316',
          fill: true,
          tension: 0.35,
          yAxisID: 'y',
        },
        {
          label: 'AI Share of Compute (%)',
          data: [5, 15, 40],
          borderColor: '#22c55e',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#22c55e',
          borderDash: [5, 4],
          fill: false,
          tension: 0.35,
          yAxisID: 'y2',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 12, padding: 10 } },
        tooltip: {
          callbacks: {
            label: ctx => {
              const unit = ctx.datasetIndex === 2 ? '%' : ' B L';
              return ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()}${unit}`;
            },
          },
        },
      },
      scales: {
        x: { grid: { color: '#0d2235' } },
        y: {
          position: 'left',
          grid: { color: '#0d2235' },
          title: { display: true, text: 'Billion Liters', color: '#3d5a72', font: { size: 10 } },
        },
        y2: {
          position: 'right',
          grid: { drawOnChartArea: false },
          title: { display: true, text: 'AI Share of Compute (%)', color: '#3d5a72', font: { size: 10 } },
          max: 55,
          ticks: { callback: v => v + '%' },
        },
      },
    },
  });
}());

/* ── Chart 3: Phoenix — Data Centers vs. Golf Courses (Horiz. Bar) ─ */
(function initPhoenixBar() {
  const ctx = document.getElementById('chartPhoenix');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'All Phoenix Data Centers (Direct)',
        'Single 18-Hole Golf Course',
        'All Regional Golf Courses',
      ],
      datasets: [{
        label: 'Annual Water Use (Million Gallons)',
        data: [385, 164, 60000],
        backgroundColor: ['#00b4d8', '#1a4a3a', '#1a3a5a'],
        borderColor:     ['#00d4ff', '#267055', '#2060a0'],
        borderWidth: 2,
        borderRadius: 4,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.parsed.x.toLocaleString()} M gal/yr`,
          },
        },
      },
      scales: {
        x: {
          type: 'logarithmic',
          grid: { color: '#0d2235' },
          title: { display: true, text: 'Million Gallons / Year (log scale)', color: '#3d5a72', font: { size: 10 } },
        },
        y: { grid: { color: '#0a1a28' } },
      },
    },
  });
}());

/* ── Chart 4: WUE Comparison — Hyperscalers vs. Legacy vs. Peak ─── */
(function initWUEChart() {
  const ctx = document.getElementById('chartWUE');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'AWS 2024',
        'Microsoft 2024',
        'Legacy Open-Loop Avg.',
        'Arizona Peak\n(Summer Heat Wave)',
      ],
      datasets: [{
        label: 'WUE (L/kWh — lower is better)',
        data: [0.15, 0.27, 1.8, 9.0],
        backgroundColor: ['#22c55e', '#16a34a', '#f97316', '#ef4444'],
        borderColor:     ['#4ade80', '#22c55e', '#fb923c', '#f87171'],
        borderWidth: 2,
        borderRadius: 4,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` WUE: ${ctx.parsed.y} L/kWh`,
          },
        },
      },
      scales: {
        x: { grid: { color: '#0d2235' } },
        y: {
          grid: { color: '#0d2235' },
          title: {
            display: true,
            text: 'Liters per kWh (lower = better)',
            color: '#3d5a72',
            font: { size: 10 },
          },
          suggestedMax: 10,
        },
      },
    },
  });
}());
