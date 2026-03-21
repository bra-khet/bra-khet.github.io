/**
 * demo-compilation.js — Demo 5: Website Compilation
 * Legal concept: Thin copyright in curated websites (UI design + commentary)
 *   even when underlying data is public domain.
 *   The creative selection, arrangement, and annotation of PD content
 *   crosses the Feist creativity threshold.
 *
 * How to test:
 *   1. Open website-compilation-demo.html
 *   2. Toggle "Raw List" → view: just public-domain recipe names (0 pts, PD)
 *   3. Click "Enable Curated View" → categories/styling appear (+10 pts)
 *   4. Click "Add Anecdote" on up to 3 recipes and write personal notes (+15 pts each)
 *   5. Use the Wine Pairing tool — select a food category, get a suggested pairing (+25 pts)
 *   6. Score accumulates; at ≥ 50 pts → "Thin Copyright in Website Compilation"
 *
 * Rules applied: Separation §1, ES Module §3, Accessibility §3, Design §1-5
 */

// ─── Public-domain recipe database ───
// All underlying recipes are in the public domain (pre-1928 publications)
const RECIPES = [
  { id: 0, name: 'Boston Brown Bread',   origin: 'New England, 1847',   category: 'Breads',    pairing: 'vegetable' },
  { id: 1, name: 'Lobster Newberg',       origin: 'New York, 1876',     category: 'Seafood',   pairing: 'seafood'   },
  { id: 2, name: 'Waldorf Salad',         origin: 'New York, 1896',     category: 'Salads',    pairing: 'poultry'   },
  { id: 3, name: 'Oysters Rockefeller',   origin: 'New Orleans, 1899',  category: 'Seafood',   pairing: 'seafood'   },
  { id: 4, name: 'Eggs Benedict',         origin: 'New York, 1894',     category: 'Breakfast', pairing: 'poultry'   },
  { id: 5, name: 'Chicken à la King',     origin: 'New York, 1898',     category: 'Poultry',   pairing: 'poultry'   },
  { id: 6, name: 'Beef Wellington',       origin: 'England, 1914',      category: 'Beef',      pairing: 'red'       },
  { id: 7, name: 'Vichyssoise',           origin: 'New York, 1917',     category: 'Soups',     pairing: 'vegetable' },
  { id: 8, name: 'Angel Food Cake',       origin: 'Midwest USA, 1882',  category: 'Desserts',  pairing: 'dessert'   },
  { id: 9, name: 'Graham Cracker Crust',  origin: 'USA, 1898',          category: 'Desserts',  pairing: 'dessert'   },
];

// ─── Wine pairing knowledge (the creative tool) ───
const WINE_PAIRINGS = {
  seafood:   { suggestion: 'Muscadet or Chablis',           note: 'Crisp minerality complements briny seafood.' },
  poultry:   { suggestion: 'White Burgundy or Viognier',    note: 'Rich white wines match roasted poultry sauces.' },
  red:       { suggestion: 'Cabernet Sauvignon or Malbec',  note: 'Tannic reds stand up to rich red meats.' },
  vegetable: { suggestion: 'Sauvignon Blanc or Pinot Gris', note: 'Herbaceous whites echo vegetable flavours.' },
  dessert:   { suggestion: 'Sauternes or Tawny Port',       note: 'Sweet dessert wines balance sugary dishes.' },
};

// ─── State ───
let curatedView  = false;
let anecdotes    = {};   // { recipeId: string }
let winePairing  = null; // selected pairing category
let wineToolUsed = false;

// Score weights
const WEIGHTS = {
  curation:  10, // enabling curated view (selection + arrangement)
  anecdote:  15, // each anecdote added (max 3 = 45 pts)
  wineTool:  25, // using the wine pairing tool
};
const PROTECT_THRESHOLD = 50;
const MAX_ANECDOTES = 3;

// ─── Render recipe list ───
function renderRecipes() {
  const container = document.getElementById('recipe-container');
  if (!container) return;

  if (!curatedView) {
    // Raw list view — just public-domain data
    container.innerHTML = `
      <ul style="list-style:disc; padding-inline-start:var(--space-lg);">
        ${RECIPES.map(r => `
          <li style="padding:var(--space-xs) 0; font-size:var(--text-sm);">
            <strong>${escHtml(r.name)}</strong>
            <span style="color:var(--clr-text-muted);"> — ${escHtml(r.origin)}</span>
          </li>`).join('')}
      </ul>
      <p style="margin-block-start:var(--space-md); font-size:var(--text-sm); color:var(--clr-unprotected); font-weight:600;">
        ✗ Raw public-domain list — no copyright protection
      </p>`;
    return;
  }

  // Curated view — grouped by category with personal anecdotes
  const categories = [...new Set(RECIPES.map(r => r.category))];
  container.innerHTML = `<div class="recipe-grid">` +
    RECIPES.map(r => {
      const hasAnecdote = !!anecdotes[r.id]?.trim();
      const anecdoteCount = Object.values(anecdotes).filter(v => v?.trim()).length;
      const canAddMore = anecdoteCount < MAX_ANECDOTES || hasAnecdote;

      return `
        <article class="recipe-card" aria-label="${escHtml(r.name)}">
          <div class="recipe-meta">
            <span style="font-size:clamp(0.6rem,1vw,0.7rem); font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--clr-accent);">${escHtml(r.category)}</span>
          </div>
          <h4>${escHtml(r.name)}</h4>
          <p style="font-size:var(--text-sm); color:var(--clr-text-muted); margin-block-end:var(--space-sm);">
            ${escHtml(r.origin)}
          </p>
          ${hasAnecdote || canAddMore ? `
            <div class="recipe-anecdote">
              <label for="anecdote-${r.id}" style="font-size:var(--text-sm); font-weight:600; color:var(--clr-text-muted);">
                Your personal note (creative expression):
              </label>
              <textarea id="anecdote-${r.id}"
                        data-recipe-id="${r.id}"
                        class="anecdote-input"
                        placeholder="Share a memory or context for this recipe…"
                        aria-label="Personal anecdote for ${escHtml(r.name)}"
                        ${!canAddMore ? 'disabled' : ''}
                        rows="2">${escHtml(anecdotes[r.id] ?? '')}</textarea>
              ${hasAnecdote ? `<div style="font-size:clamp(0.6rem,1vw,0.7rem); color:var(--clr-protected); margin-block-start:var(--space-xs);">✓ +15 pts — creative expression</div>` : ''}
            </div>` : `
            <p style="font-size:var(--text-sm); color:var(--clr-text-muted); font-style:italic;">
              (Max ${MAX_ANECDOTES} anecdotes reached — already protectable selection)
            </p>`}
        </article>`;
    }).join('') + `</div>`;

  // Bind anecdote inputs
  container.querySelectorAll('.anecdote-input').forEach(ta => {
    ta.addEventListener('input', onAnecdoteInput);
  });
}

function onAnecdoteInput(e) {
  const id = parseInt(e.target.dataset.recipeId, 10);
  anecdotes[id] = e.target.value;
  updateScore();
  if (e.target.value.trim().length >= 10) {
    logAction(`Added personal anecdote to "${RECIPES[id].name}" (+15 pts).`, 'protected');
  }
}

// ─── Toggle curated view ───
function toggleCuration() {
  curatedView = !curatedView;
  const btn = document.getElementById('toggle-curation-btn');
  const viewLabel = document.getElementById('view-label');

  if (btn) {
    btn.textContent = curatedView ? '← Show Raw List' : 'Enable Curated View →';
    btn.className   = curatedView ? 'btn btn-secondary' : 'btn btn-primary';
  }
  if (viewLabel) {
    viewLabel.textContent = curatedView ? 'Curated Meal Planner (your creative arrangement)' : 'Raw Public-Domain List';
  }

  renderRecipes();
  updateScore();
  logAction(
    curatedView
      ? 'Curated view enabled — categories, styling, and arrangement applied (+10 pts).'
      : 'Returned to raw list — curation points removed.',
    curatedView ? 'protected' : 'unprotected'
  );
}

// ─── Wine pairing tool ───
function onWineCategory(category) {
  winePairing  = category;
  wineToolUsed = true;

  document.querySelectorAll('.wine-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
    btn.setAttribute('aria-pressed', btn.dataset.category === category ? 'true' : 'false');
  });

  const result  = document.getElementById('wine-result');
  const pairing = WINE_PAIRINGS[category];
  if (result && pairing) {
    result.classList.add('visible');
    result.innerHTML = `
      <strong>Suggested pairing for ${category} dishes:</strong>
      ${escHtml(pairing.suggestion)}<br>
      <span style="color:var(--clr-text-muted);">${escHtml(pairing.note)}</span>`;
  }

  updateScore();
  logAction(`Wine pairing tool used: "${category}" → ${WINE_PAIRINGS[category]?.suggestion} (+25 pts).`, 'protected');
}

// ─── Score calculation ───
function computeScore() {
  let score = 0;
  if (curatedView) score += WEIGHTS.curation;

  const anecdoteCount = Object.values(anecdotes)
    .filter(v => v?.trim().length >= 10).length;
  score += Math.min(anecdoteCount, MAX_ANECDOTES) * WEIGHTS.anecdote;

  if (wineToolUsed) score += WEIGHTS.wineTool;

  return score;
}

function updateScore() {
  const score  = computeScore();
  const fill   = document.getElementById('creativity-fill');
  const pct    = document.getElementById('creativity-pct');
  const badge  = document.getElementById('status-badge');
  const maxScore = WEIGHTS.curation + WEIGHTS.anecdote * MAX_ANECDOTES + WEIGHTS.wineTool;

  if (fill)  { fill.style.inlineSize = `${Math.min(score / maxScore * 100, 100)}%`; }
  if (pct)   { pct.textContent = `${score} / ${maxScore} pts`; }
  if (score >= PROTECT_THRESHOLD) fill?.classList.add('above-threshold');
  else fill?.classList.remove('above-threshold');

  if (!badge) return;
  if (score >= PROTECT_THRESHOLD) {
    badge.className = 'status-badge protected';
    badge.textContent = '✓ Thin Copyright — Website Compilation';
    announce(`Score: ${score} pts. This curated website compilation has crossed the Feist creativity threshold.`);
  } else if (score > 0) {
    badge.className = 'status-badge pending';
    badge.textContent = `⟳ ${score} pts — Adding Creative Elements`;
    announce(`Score: ${score} pts. Continue adding creative elements to cross the 50-point threshold.`);
  } else {
    badge.className = 'status-badge unprotected';
    badge.textContent = '✗ Public Domain — No Creative Selection';
    announce('Score: 0 pts. Raw public-domain data has no copyright protection.');
  }
}

// ─── Reset ───
function resetDemo() {
  curatedView  = false;
  anecdotes    = {};
  winePairing  = null;
  wineToolUsed = false;

  const btn = document.getElementById('toggle-curation-btn');
  if (btn) { btn.textContent = 'Enable Curated View →'; btn.className = 'btn btn-primary'; }

  const viewLabel = document.getElementById('view-label');
  if (viewLabel) viewLabel.textContent = 'Raw Public-Domain List';

  const result = document.getElementById('wine-result');
  if (result) { result.classList.remove('visible'); result.innerHTML = ''; }

  document.querySelectorAll('.wine-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
  });

  renderRecipes();
  updateScore();
  clearLog();
  announce('Demo reset.');
}

// ─── Log ───
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

function announce(msg) {
  const live = document.getElementById('sr-live');
  if (live) { live.textContent = ''; requestAnimationFrame(() => { live.textContent = msg; }); }
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes();
  updateScore();

  document.getElementById('toggle-curation-btn')?.addEventListener('click', toggleCuration);
  document.getElementById('reset-btn')?.addEventListener('click', resetDemo);

  document.querySelectorAll('.wine-btn').forEach(btn => {
    btn.addEventListener('click', () => onWineCategory(btn.dataset.category));
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
