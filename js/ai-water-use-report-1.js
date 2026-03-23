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

/* ═══════════════════════════════════════════════════════════════════
   INTERACTIVE DEMOS — sourced from ai-water-use-fact-2.md
   ─────────────────────────────────────────────────────────────────
   Core constant:
     E_KWH  = 0.003415 kWh per AI query (Ren et al. 2023, arXiv:2304.03271)
              Derived: 500 ml ÷ 30 queries ÷ 4.88 L/kWh total = 3.415 Wh/query
   Grid indirect intensities (L/kWh consumed at thermoelectric plants):
     G_NAT  = 4.52  US national average          (LBNL 2024)
     G_AZ   = 4.80  Arizona coal-heavy mix        (EIA 2024 est.)
     G_TX   = 3.20  ERCOT ~35% wind penetration  (EIA 2024 est.)
   Reference volumes:
     Beef:    15,400 L/kg   (Mekonnen & Hoekstra 2012 / FAO AQUASTAT)
     Alfalfa: 20,276 L/acre/day  (6 ac-ft/yr ÷ 365, ADWR)
     AZ golf: 1,892,706 L/day    (~500K gal/day, ASGA survey)
     TX golf: 1,892,706 L/day    (~500K gal/day, TGCA survey)
     TX turf: 11,776 L/acre/day  (3,111 gal/day bermuda, TWRI)
══════════════════════════════════════════════════════════════════ */

/* ── Shared constants ───────────────────────────────────────────── */
const E_KWH = 0.003415;
const G_NAT = 4.52;
const G_AZ  = 4.80;
const G_TX  = 3.20;

/* ── Shared utility: format liters to human-readable ───────────── */
function fmtW(l) {
  if (l < 1)     return { n: (l * 1000).toFixed(l < 0.01 ? 1 : 0), u: 'ml' };
  if (l < 10)    return { n: l.toFixed(2),            u: 'L'  };
  if (l < 100)   return { n: l.toFixed(1),            u: 'L'  };
  if (l < 1000)  return { n: l.toFixed(0),            u: 'L'  };
  if (l < 10000) return { n: (l / 1000).toFixed(2),   u: 'kL' };
  if (l < 1e6)   return { n: (l / 1000).toFixed(1),   u: 'kL' };
  return           { n: (l / 1e6).toFixed(2),          u: 'ML' };
}
function fmtWStr(l) {
  const f = fmtW(l);
  return f.n + '\u202f' + f.u;   // narrow no-break space between number and unit
}

/* ═══════════════════════════════════════════════════════════════════
   DEMO 1 — Water Footprint Explorer (§06, always visible)
══════════════════════════════════════════════════════════════════ */
(function initFootprintDemo() {
  const card = document.getElementById('demo-footprint');
  if (!card) return;

  /* State */
  let q = 30, wue = 0.36, gridOn = true, dur = 1;

  /* Reference comparison items for chart */
  const REFS = [
    { label: 'Tooth brushing \u00b7 2 min',   l: 8,      cls: 'rgba(255,200,80,.55)'  },
    { label: 'Dishwasher \u00b7 1 run',        l: 13,     cls: 'rgba(255,200,80,.55)'  },
    { label: 'Toilet flushes \u00b7 5\u00d7',  l: 30,     cls: 'rgba(255,180,60,.55)'  },
    { label: 'Shower \u00b7 10 min',            l: 65,     cls: 'rgba(255,160,40,.6)'   },
    { label: 'Household indoor \u00b7 day',     l: 341,    cls: 'rgba(255,140,20,.55)'  },
    { label: '1 kg beef produced',              l: 15400,  cls: 'rgba(80,200,80,.55)'   },
    { label: '1 acre alfalfa \u00b7 day',       l: 20276,  cls: 'rgba(60,180,60,.5)'    },
    { label: 'GPT-3 training (total)',           l: 700000, cls: 'rgba(249,115,22,.45)'  },
  ];

  function calcLiters() {
    return q * E_KWH * (wue + (gridOn ? G_NAT : 0)) * dur;
  }

  /* Format percentage for equivalence cards */
  function pctFmt(val, ref) {
    const p = (val / ref) * 100;
    if (p < 0.0001) return '<0.0001%';
    if (p < 0.001)  return p.toFixed(5) + '%';
    if (p < 0.01)   return p.toFixed(4) + '%';
    if (p < 0.1)    return p.toFixed(3) + '%';
    if (p < 1)      return p.toFixed(2) + '%';
    if (p < 10)     return p.toFixed(1) + '%';
    return p.toFixed(0) + '%';
  }

  /* Analogy tag text */
  function tagText(l) {
    if (l < 0.06)  return '\u2248 a few sips of water';
    if (l < 0.25)  return '\u2248 a small coffee cup';
    if (l < 0.65)  return '\u2248 one standard water bottle';
    if (l < 2)     return '\u2248 a large glass of water';
    if (l < 9)     return 'less than one tooth-brushing session';
    if (l < 15)    return 'less than one dishwasher run';
    if (l < 70)    return 'still less than a 10-minute shower';
    if (l < 350)   return 'within the range of daily household use';
    if (l < 1500)  return 'several days of household indoor water';
    return 'approaching agricultural-scale use';
  }

  let fpChart = null;

  function updateDisplay() {
    const liters = calcLiters();
    const daily  = q * E_KWH * (wue + (gridOn ? G_NAT : 0));  // always per-day for equi-cards
    const f = fmtW(liters);
    const durLabel = dur === 1 ? '/\u202fday' : dur === 7 ? '/\u202fweek' : '/\u202fyear';

    const numEl  = document.getElementById('fp-num');
    const unitEl = document.getElementById('fp-unit');
    const tagEl  = document.getElementById('fp-tag');
    if (numEl)  numEl.textContent  = f.n;
    if (unitEl) unitEl.textContent = f.u + '\u2009' + durLabel;
    if (tagEl)  tagEl.textContent  = tagText(liters);

    /* Equivalence cards — always show daily water % regardless of dur toggle */
    [
      { id: 'eq-shower', ref: 65    },
      { id: 'eq-dish',   ref: 13    },
      { id: 'eq-house',  ref: 341   },
      { id: 'eq-beef',   ref: 15400 },
    ].forEach(({ id, ref }) => {
      const el = document.getElementById(id);
      if (el) el.textContent = pctFmt(daily, ref);
    });

    /* Update AI bar in chart */
    if (fpChart) {
      fpChart.data.datasets[0].data[0] = Math.max(liters, 0.001); // log scale needs > 0
      fpChart.update('none');
    }
  }

  function buildChart() {
    const ctx = document.getElementById('fp-chart');
    if (!ctx || typeof Chart === 'undefined') return;

    const labels = ['Your AI use \u2192', ...REFS.map(r => r.label)];
    const data   = [Math.max(calcLiters(), 0.001), ...REFS.map(r => r.l)];
    const colors = ['rgba(0,180,216,.85)', ...REFS.map(r => r.cls)];

    fpChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: colors,
          borderColor: colors.map(c => c.replace(/[\d.]+\)$/, '1)')),
          borderWidth: 1,
          borderRadius: 3,
        }],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 350 },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => '  ' + fmtWStr(ctx.raw),
            },
          },
        },
        scales: {
          x: {
            type: 'logarithmic',
            min: 0.01,
            max: 1200000,
            grid: { color: 'rgba(13,34,53,.8)' },
            ticks: {
              color: 'rgba(61,90,114,.8)',
              font: { family: "'JetBrains Mono', monospace", size: 9 },
              callback: function (v) {
                const map = {
                  0.01: '10\u202fml', 0.1: '100\u202fml', 1: '1\u202fL',
                  10: '10\u202fL', 100: '100\u202fL', 1000: '1\u202fkL',
                  10000: '10\u202fkL', 100000: '100\u202fkL', 1000000: '1\u202fML',
                };
                return map[v] !== undefined ? map[v] : '';
              },
            },
          },
          y: {
            grid: { display: false },
            ticks: {
              color: function (ctx) {
                return ctx.index === 0 ? 'rgba(0,180,216,.9)' : 'rgba(122,154,184,.65)';
              },
              font: { family: "'JetBrains Mono', monospace", size: 9 },
            },
          },
        },
      },
    });
  }

  /* ── Event bindings ─────────────────────────────────────────── */
  const slider = document.getElementById('fp-slider');
  const qDisp  = document.getElementById('fp-q-val');
  if (slider) {
    slider.addEventListener('input', function () {
      q = +slider.value;
      if (qDisp) qDisp.textContent = q;
      updateDisplay();
    });
  }

  card.querySelectorAll('[data-fp-wue]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      card.querySelectorAll('[data-fp-wue]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      wue = +btn.dataset.fpWue;
      updateDisplay();
    });
  });

  const scopeEl = document.getElementById('fp-scope');
  if (scopeEl) {
    scopeEl.addEventListener('change', function () {
      gridOn = scopeEl.checked;
      updateDisplay();
    });
  }

  card.querySelectorAll('[data-fp-dur]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      card.querySelectorAll('[data-fp-dur]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      dur = +btn.dataset.fpDur;
      updateDisplay();
    });
  });

  buildChart();
  updateDisplay();
}());

/* ═══════════════════════════════════════════════════════════════════
   DEMO 2 — Arizona Alfalfa Comparator (lazy — inside accordion)
══════════════════════════════════════════════════════════════════ */
function initAZDemo() {
  const card = document.getElementById('demo-az');
  if (!card || card.dataset.init) return;
  card.dataset.init = '1';

  const AZ_REFS = {
    alfalfa: { label: '1 Acre Alfalfa \u00b7 day',    l: 20276    },
    golf:    { label: 'AZ Golf Course \u00b7 day',     l: 1892706  },
    field:   { label: '300-Acre Alfalfa \u00b7 day',   l: 6082800  },
  };

  let q = 30, mode = 'alfalfa';

  function calc() { return q * E_KWH * (0.36 + G_AZ); }

  function update() {
    const liters = calc();
    const ref    = AZ_REFS[mode];
    const f      = fmtW(liters);
    const pct    = Math.min(99, Math.max(0.2, (liters / ref.l) * 100));
    const secs   = (liters / ref.l) * 86400;
    const ratio  = Math.round(ref.l / liters).toLocaleString();

    const set = function (id, val) {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    const setHtml = function (id, val) {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    };
    const setW = function (id, pctVal) {
      const el = document.getElementById(id);
      if (el) el.style.width = pctVal;
    };

    set('az-num', f.n);
    set('az-unit', f.u + '\u2009/\u202fday');
    set('az-val-ai', fmtWStr(liters));
    set('az-val-ref', fmtWStr(ref.l));
    set('az-ref-lbl', ref.label);
    setW('az-bar-ai', pct.toFixed(3) + '%');
    setW('az-bar-ref', '100%');

    /* Callout text — convert seconds to most readable unit */
    let timeStr;
    if (secs < 60)   timeStr = secs.toFixed(1) + ' seconds';
    else if (secs < 3600) timeStr = (secs / 60).toFixed(1) + ' minutes';
    else             timeStr = (secs / 3600).toFixed(1) + ' hours';

    const refThing = mode === 'golf' ? 'an AZ golf course\'s daily irrigation'
                   : mode === 'field' ? 'one 300-acre alfalfa field\'s daily irrigation'
                   : 'irrigating one acre of alfalfa';

    setHtml('az-callout',
      '<strong>' + q + '</strong> queries/day (' + fmtWStr(liters) + ') = ' +
      '<strong>' + timeStr + '</strong> of ' + refThing +
      ' \u00b7 the reference demands <strong>' + ratio + '\u00d7</strong> more water than your entire day of AI use'
    );
  }

  const slider = document.getElementById('az-slider');
  const qDisp  = document.getElementById('az-q-val');
  if (slider) {
    slider.addEventListener('input', function () {
      q = +slider.value;
      if (qDisp) qDisp.textContent = q;
      update();
    });
  }

  card.querySelectorAll('[data-az-mode]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      card.querySelectorAll('[data-az-mode]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mode = btn.dataset.azMode;
      update();
    });
  });

  update();
}

/* ═══════════════════════════════════════════════════════════════════
   DEMO 3 — Texas Turf & Golf Comparator (lazy — inside accordion)
══════════════════════════════════════════════════════════════════ */
function initTXDemo() {
  const card = document.getElementById('demo-tx');
  if (!card || card.dataset.init) return;
  card.dataset.init = '1';

  const TX_REFS = {
    golf: { label: 'TX Golf Course \u00b7 day',        l: 1892706  },
    turf: { label: '1 Acre Turfgrass (TX) \u00b7 day', l: 11776    },
    dc:   { label: 'Avg TX Data Center \u00b7 day',    l: 3785411  },
  };

  let q = 30, mode = 'golf';

  function calc() { return q * E_KWH * (0.36 + G_TX); }

  function update() {
    const liters = calc();
    const ref    = TX_REFS[mode];
    const f      = fmtW(liters);
    const pct    = Math.min(99, Math.max(0.2, (liters / ref.l) * 100));
    const secs   = (liters / ref.l) * 86400;
    const ratio  = Math.round(ref.l / liters).toLocaleString();

    const set = function (id, val) {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    const setHtml = function (id, val) {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    };
    const setW = function (id, pctVal) {
      const el = document.getElementById(id);
      if (el) el.style.width = pctVal;
    };

    set('tx-num', f.n);
    set('tx-unit', f.u + '\u2009/\u202fday');
    set('tx-val-ai', fmtWStr(liters));
    set('tx-val-ref', fmtWStr(ref.l));
    set('tx-ref-lbl', ref.label);
    setW('tx-bar-ai', pct.toFixed(3) + '%');
    setW('tx-bar-ref', '100%');

    /* Callout text */
    let timeStr;
    if (secs < 0.01)     timeStr = (secs * 1000).toFixed(0) + ' milliseconds';
    else if (secs < 1)   timeStr = (secs * 1000).toFixed(1) + ' milliseconds';
    else if (secs < 60)  timeStr = secs.toFixed(2) + ' seconds';
    else if (secs < 3600) timeStr = (secs / 60).toFixed(1) + ' minutes';
    else                 timeStr = (secs / 3600).toFixed(1) + ' hours';

    let calloutText;
    if (mode === 'turf') {
      calloutText =
        '<strong>' + q + '</strong> queries/day = ' +
        '<strong>' + timeStr + '</strong> of irrigating one acre of Texas Bermuda turfgrass \u00b7 ' +
        'ERCOT\u2019s ~35% wind capacity reduces the TX grid water footprint ~30% vs. the national average';
    } else if (mode === 'dc') {
      const dcPct = (liters / ref.l * 100).toFixed(4);
      calloutText =
        'Your <strong>' + q + '</strong> queries (' + fmtWStr(liters) + ') = ' +
        '<strong>' + dcPct + '%</strong> of an average Texas data center\u2019s daily use \u00b7 ' +
        'the facility uses <strong>' + ratio + '\u00d7</strong> more water than your personal AI footprint';
    } else {
      calloutText =
        '<strong>' + q + '</strong> queries/day = ' +
        '<strong>' + timeStr + '</strong> of an 18-hole Texas golf course\u2019s daily irrigation \u00b7 ' +
        'ERCOT\u2019s renewable mix means TX\u2019s indirect grid water is ~30% below the U.S. national average';
    }
    setHtml('tx-callout', calloutText);
  }

  const slider = document.getElementById('tx-slider');
  const qDisp  = document.getElementById('tx-q-val');
  if (slider) {
    slider.addEventListener('input', function () {
      q = +slider.value;
      if (qDisp) qDisp.textContent = q;
      update();
    });
  }

  card.querySelectorAll('[data-tx-mode]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      card.querySelectorAll('[data-tx-mode]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mode = btn.dataset.txMode;
      update();
    });
  });

  update();
}

/* ── Lazy-init demos 2 & 3 when their accordion panels open ─────── */
(function hookAccordionDemos() {
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const panelId = trigger.getAttribute('aria-controls');
      if (panelId !== 'acc-az' && panelId !== 'acc-tx') return;
      requestAnimationFrame(function () {
        const panel = document.getElementById(panelId);
        if (!panel || panel.getAttribute('aria-hidden') !== 'false') return;
        if (panelId === 'acc-az') initAZDemo();
        if (panelId === 'acc-tx') initTXDemo();
      });
    });
  });
}());
