/**
 * demo-multi-author.js — Demo 4: Joint Authorship
 * Legal concept: Joint authorship requires each co-author to supply
 *   independently copyrightable expression (Feist + 17 U.S.C. § 101).
 *   Raw facts alone (Contributor A) do not qualify; creative expression
 *   (Contributor B) is required. Only when both contribute protectable
 *   expression does the work qualify as a joint work.
 *
 * How to test:
 *   1. Open multi-author-demo.html — two contributor tabs (A and B)
 *   2. Contributor A tab: add public-domain facts (names, dates, numbers)
 *      → each fact is individually uncopyrightable; A's subtotal stays 0
 *   3. Contributor B tab: choose a color theme, layout, and write a narrative
 *      → B's subtotal rises with creative choices
 *   4. Joint authorship meter shows: both must contribute protectable expression
 *   5. A cannot unlock joint authorship with facts alone
 *   6. State is persisted to localStorage — refresh the page to confirm
 *
 * Rules applied: Separation §1, ES Module §3, localStorage §4, Accessibility §3
 */

// ─── Persistent state keys ───
const KEY = 'joint-authorship-demo-v1';

// ─── Default state ───
const DEFAULT_STATE = {
  factsA: [],          // Contributor A's raw facts (strings)
  themeColor: '',      // Contributor B's chosen color (hex)
  layoutChoice: '',    // Contributor B's layout choice
  narrative: '',       // Contributor B's narrative text
};

let state = loadState();

// ─── Colour swatches Contributor B can select ───
const SWATCHES = [
  { hex: '#6366f1', name: 'Indigo'   },
  { hex: '#f59e0b', name: 'Amber'    },
  { hex: '#10b981', name: 'Emerald'  },
  { hex: '#ef4444', name: 'Crimson'  },
  { hex: '#8b5cf6', name: 'Violet'   },
  { hex: '#06b6d4', name: 'Cyan'     },
  { hex: '#f97316', name: 'Orange'   },
  { hex: '#ec4899', name: 'Pink'     },
];

const LAYOUTS = ['Single Column', 'Two-Column Grid', 'Card Mosaic', 'Magazine Layout'];

// ─── Score weights (Contributor B) ───
const B_WEIGHTS = {
  color:     20, // Choosing a non-default colour theme
  layout:    20, // Choosing a non-default layout
  narrative: 40, // Writing narrative text (scaled by length/quality)
};
const B_PROTECT_THRESHOLD = 50; // B's minimum for independent protectability

// ─── Persistence ───
function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : { ...DEFAULT_STATE };
  } catch { return { ...DEFAULT_STATE }; }
}

function saveState() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* quota exceeded */ }
}

// ─── Compute scores ───

// Contributor A: raw facts = always 0 copyrightable points under Feist
function scoreA() { return 0; }

// Contributor B creative score
function scoreB() {
  let s = 0;
  if (state.themeColor)  s += B_WEIGHTS.color;
  if (state.layoutChoice) s += B_WEIGHTS.layout;
  // Narrative: linear up to 300 chars (full weight at 300+ chars)
  const narLen = state.narrative.trim().length;
  s += Math.round(Math.min(narLen / 300, 1) * B_WEIGHTS.narrative);
  return s;
}

// Joint work eligibility:
//   A must have added at least 1 fact (substantive content contribution)
//   B must have independently protectable expression (scoreB ≥ threshold)
function jointScore() {
  const hasA = state.factsA.length > 0;
  const bScore = scoreB();
  if (!hasA) return 0;
  if (bScore < B_PROTECT_THRESHOLD) return 0;
  // Joint score = weighted average (A contributes content, B contributes creativity)
  return Math.round(bScore * 0.7 + Math.min(state.factsA.length / 5, 1) * 30);
}

// ─── Render Contributor A panel ───
function renderContribA() {
  const list = document.getElementById('facts-list');
  if (!list) return;

  if (state.factsA.length === 0) {
    list.innerHTML = '<li style="color:var(--clr-text-muted); font-size:var(--text-sm);">No facts added yet.</li>';
    return;
  }
  list.innerHTML = state.factsA.map((fact, i) => `
    <li style="display:flex; align-items:center; gap:var(--space-sm); padding:var(--space-xs) 0; border-block-end:1px solid var(--clr-border);">
      <span style="flex:1; font-size:var(--text-sm);">${escHtml(fact)}</span>
      <span class="status-badge unprotected" style="font-size:clamp(0.6rem,1vw,0.7rem); padding:0.1em 0.4em;">raw fact</span>
      <button class="btn btn-ghost" style="min-inline-size:auto; padding:0.25rem 0.5rem;"
              onclick="removeFact(${i})"
              aria-label="Remove fact: ${escHtml(fact)}">✕</button>
    </li>`).join('');
}

// ─── Render Contributor B panel ───
function renderContribB() {
  // Colour swatches
  const row = document.getElementById('color-swatches');
  if (row) {
    row.innerHTML = SWATCHES.map(s => `
      <button class="swatch${state.themeColor === s.hex ? ' selected' : ''}"
              style="background:${s.hex};"
              data-hex="${s.hex}"
              title="${s.name}"
              aria-label="${s.name} theme${state.themeColor === s.hex ? ' (selected)' : ''}"
              aria-pressed="${state.themeColor === s.hex}">
      </button>`).join('');
    row.querySelectorAll('.swatch').forEach(btn => {
      btn.addEventListener('click', () => {
        state.themeColor = btn.dataset.hex;
        saveState();
        renderContribB();
        updatePreview();
        updateScore();
        logAction(`B chose colour theme: ${btn.title}.`, 'protected');
      });
    });
  }

  // Layout selector
  const sel = document.getElementById('layout-select');
  if (sel) {
    sel.innerHTML = `<option value="">— Choose layout —</option>` +
      LAYOUTS.map(l => `<option value="${l}"${state.layoutChoice === l ? ' selected' : ''}>${l}</option>`).join('');
  }

  // Narrative textarea
  const nar = document.getElementById('narrative-input');
  if (nar) nar.value = state.narrative;

  // Char count
  updateNarrativeCount();
}

// ─── Preview panel ───
function updatePreview() {
  const panel = document.getElementById('preview-panel');
  if (!panel) return;
  const color = state.themeColor || 'oklch(45% 0.19 265)';
  panel.style.borderColor = color;

  const heading = panel.querySelector('.preview-heading');
  if (heading) {
    heading.style.color = color;
    heading.textContent = state.layoutChoice
      ? `Compiled Work — ${state.layoutChoice}`
      : 'Compiled Work (no layout chosen)';
  }

  const factUl = panel.querySelector('.preview-fact-list');
  if (factUl) {
    factUl.innerHTML = state.factsA.length
      ? state.factsA.map(f => `<li>${escHtml(f)}</li>`).join('')
      : '<li style="color:var(--clr-text-muted);">No facts from Contributor A yet.</li>';
  }

  const nar = panel.querySelector('.preview-narrative');
  if (nar) {
    nar.textContent = state.narrative.trim()
      ? `"${state.narrative.trim()}"`
      : '(No narrative from Contributor B yet.)';
    nar.style.color = state.themeColor || '';
  }
}

// ─── Score UI ───
function updateScore() {
  const bScore = scoreB();
  const jScore = jointScore();
  const bPct   = Math.min(bScore / (B_PROTECT_THRESHOLD + B_WEIGHTS.narrative) * 100, 100);
  const jPct   = Math.min(jScore / 80 * 100, 100);

  const bFill  = document.getElementById('b-fill');
  const bPctEl = document.getElementById('b-pct');
  const jFill  = document.getElementById('joint-fill');
  const jPctEl = document.getElementById('joint-pct');
  const badge  = document.getElementById('status-badge');
  const aBadge = document.getElementById('a-badge');

  if (bFill)  { bFill.style.inlineSize  = `${bPct}%`; }
  if (bPctEl) { bPctEl.textContent = `${bScore} pts`; }
  if (bScore >= B_PROTECT_THRESHOLD) bFill?.classList.add('above-threshold');
  else bFill?.classList.remove('above-threshold');

  if (jFill)  { jFill.style.inlineSize  = `${jPct}%`; }
  if (jPctEl) { jPctEl.textContent = `${jScore} pts`; }
  if (jScore >= 60) jFill?.classList.add('above-threshold');
  else jFill?.classList.remove('above-threshold');

  if (aBadge) {
    aBadge.className = 'status-badge unprotected';
    aBadge.textContent = `✗ ${state.factsA.length} fact(s) — 0 pts (raw data)`;
  }

  if (!badge) return;
  if (jScore >= 60) {
    badge.className = 'status-badge protected';
    badge.textContent = '✓ Joint Work — Both Authors Qualify';
    announce('Joint authorship established: Contributor A provided substantive content; Contributor B provided independently copyrightable creative expression.');
  } else if (bScore >= B_PROTECT_THRESHOLD && state.factsA.length === 0) {
    badge.className = 'status-badge pending';
    badge.textContent = '⟳ B qualifies alone — A has no content';
    announce('Contributor B qualifies independently. Contributor A has not added content, so no joint work yet.');
  } else if (bScore < B_PROTECT_THRESHOLD) {
    badge.className = 'status-badge unprotected';
    badge.textContent = '✗ B below threshold — Not a joint work';
    announce('Contributor B has not reached independent copyrightability. A\'s raw facts alone cannot form a joint work.');
  } else {
    badge.className = 'status-badge pending';
    badge.textContent = '⟳ Evaluating joint authorship…';
  }
}

// ─── Contributor A actions ───
window.removeFact = function(i) {
  state.factsA.splice(i, 1);
  saveState();
  renderContribA();
  updatePreview();
  updateScore();
};

function addFact() {
  const input = document.getElementById('fact-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) { input.focus(); return; }
  state.factsA.push(val);
  input.value = '';
  saveState();
  renderContribA();
  updatePreview();
  updateScore();
  logAction(`A added fact: "${val}" (uncopyrightable raw data).`, 'unprotected');
}

// ─── Contributor B actions ───
function onLayoutChange() {
  state.layoutChoice = document.getElementById('layout-select')?.value || '';
  saveState();
  updatePreview();
  updateScore();
  if (state.layoutChoice) logAction(`B chose layout: "${state.layoutChoice}".`, 'protected');
}

function onNarrativeInput() {
  state.narrative = document.getElementById('narrative-input')?.value ?? '';
  saveState();
  updatePreview();
  updateNarrativeCount();
  updateScore();
}

function updateNarrativeCount() {
  const count = document.getElementById('narrative-count');
  if (count) {
    const len = state.narrative.trim().length;
    count.textContent = `${len} / 300 chars for full creative weight`;
  }
}

// ─── Reset ───
function resetDemo() {
  state = { ...DEFAULT_STATE };
  saveState();
  renderContribA();
  renderContribB();
  updatePreview();
  updateScore();
  clearLog();
  announce('Demo reset.');
}

// ─── Tab switching ───
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.setAttribute('aria-selected', btn.dataset.tab === tabId ? 'true' : 'false');
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.setAttribute('aria-hidden', panel.id !== tabId ? 'true' : 'false');
  });
}

// ─── Action log ───
function logAction(msg, cls = '') {
  const log = document.getElementById('action-log');
  if (!log) return;
  const entry = document.createElement('div');
  entry.className = `log-entry${cls ? ' ' + cls : ''}`;
  const t = new Date().toLocaleTimeString('en-US', { hour12: false });
  entry.textContent = `[${t}] ${msg}`;
  log.prepend(entry);
}

function clearLog() {
  const log = document.getElementById('action-log');
  if (log) log.innerHTML = '';
}

// ─── SR announce ───
function announce(msg) {
  const live = document.getElementById('sr-live');
  if (live) { live.textContent = ''; requestAnimationFrame(() => { live.textContent = msg; }); }
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  renderContribA();
  renderContribB();
  updatePreview();
  updateScore();

  document.getElementById('add-fact-btn')?.addEventListener('click', addFact);
  document.getElementById('fact-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') addFact();
  });

  document.getElementById('layout-select')?.addEventListener('change', onLayoutChange);
  document.getElementById('narrative-input')?.addEventListener('input', onNarrativeInput);
  document.getElementById('reset-btn')?.addEventListener('click', resetDemo);

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    btn.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const tabs = [...document.querySelectorAll('.tab-btn')];
        const idx  = tabs.indexOf(btn);
        const next = e.key === 'ArrowRight' ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length;
        tabs[next].click();
        tabs[next].focus();
      }
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
