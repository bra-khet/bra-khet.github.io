/**
 * demo-feist.js — Demo 1: Feist Phonebook
 * Legal concept: Feist Publications v. Rural Telephone (1991)
 *   Raw alphabetical facts = unprotected; curated arrangement + commentary = thin copyright
 *
 * How to test:
 *   1. Open feist-phonebook-demo.html — left pane shows sorted raw data (0% score)
 *   2. Drag rows in the right pane to reorder, or use ↑/↓ arrow keys when focused
 *   3. Add commentary in the text inputs beside each subscriber
 *   4. Watch the creativity meter; threshold is 33% (Feist "modicum of creativity")
 *   5. Cross threshold → status changes UNPROTECTED → PROTECTABLE COMPILATION
 *
 * Rules applied: Separation §1, ES Module §3, Performance §4, Accessibility §3
 */

// ─── Raw subscriber data (simulates Rural Telephone's phone directory) ───
const SUBSCRIBERS = [
  { name: 'Adams, Patricia',  address: '142 Oak Lane',       phone: '555-0101' },
  { name: 'Baker, James',     address: '87 Pine Street',     phone: '555-0102' },
  { name: 'Carter, Maria',    address: '23 Elm Avenue',      phone: '555-0103' },
  { name: 'Davis, Robert',    address: '456 Maple Drive',    phone: '555-0104' },
  { name: 'Evans, Susan',     address: '789 Cedar Blvd',     phone: '555-0105' },
  { name: 'Foster, William',  address: '12 Birch Road',      phone: '555-0106' },
  { name: 'Garcia, Linda',    address: '34 Walnut Court',    phone: '555-0107' },
  { name: 'Harris, Michael',  address: '56 Spruce Way',      phone: '555-0108' },
  { name: 'Irving, Barbara',  address: '78 Aspen Place',     phone: '555-0109' },
  { name: 'Johnson, Charles', address: '90 Willow Lane',     phone: '555-0110' },
  { name: 'King, Dorothy',    address: '11 Poplar Street',   phone: '555-0111' },
  { name: 'Lewis, Thomas',    address: '22 Cypress Avenue',  phone: '555-0112' },
  { name: 'Moore, Nancy',     address: '33 Sequoia Drive',   phone: '555-0113' },
  { name: 'Nelson, Gary',     address: '44 Redwood Blvd',    phone: '555-0114' },
  { name: 'Owens, Betty',     address: '55 Magnolia Road',   phone: '555-0115' },
  { name: 'Parker, Richard',  address: '66 Hawthorn Court',  phone: '555-0116' },
  { name: 'Quinn, Sandra',    address: '77 Laurel Way',      phone: '555-0117' },
  { name: 'Rogers, Daniel',   address: '88 Holly Place',     phone: '555-0118' },
  { name: 'Smith, Helen',     address: '99 Ivy Lane',        phone: '555-0119' },
  { name: 'Turner, Joseph',   address: '100 Juniper Street', phone: '555-0120' },
];

// Alphabetical order (the "raw fact" arrangement — unprotectable under Feist)
const ALPHA_ORDER = [...SUBSCRIBERS].sort((a, b) => a.name.localeCompare(b.name));

// ─── Mutable state ───
let curatedOrder = [...ALPHA_ORDER];
let comments = {};        // { name: string }
let dragSrcIndex = null;

const THRESHOLD = 33; // Feist's "modicum of creativity" — minimum to cross

// ─── Creativity scoring ───
// Score = 60% arrangement divergence + 40% commentary richness
// Arrangement divergence: fraction of records not in alphabetical position (0–1)
// Commentary richness: total comment characters / 250, capped at 1
function computeScore() {
  let misplaced = 0;
  curatedOrder.forEach((sub, i) => {
    if (sub.name !== ALPHA_ORDER[i]?.name) misplaced++;
  });
  const arrangementScore = misplaced / curatedOrder.length;

  const totalChars = Object.values(comments).reduce((s, v) => s + v.length, 0);
  const commentScore = Math.min(totalChars / 250, 1);

  return Math.round((arrangementScore * 0.6 + commentScore * 0.4) * 100);
}

// ─── Render left pane — raw alphabetical table ───
function renderRawTable() {
  const tbody = document.getElementById('raw-tbody');
  if (!tbody) return;
  tbody.innerHTML = ALPHA_ORDER.map(sub => `
    <tr>
      <td>${esc(sub.name)}</td>
      <td>${esc(sub.address)}</td>
      <td>${esc(sub.phone)}</td>
    </tr>`).join('');
}

// ─── Render right pane — draggable curated list ───
function renderCuratedList() {
  const list = document.getElementById('curated-list');
  if (!list) return;

  list.innerHTML = curatedOrder.map((sub, i) => `
    <li class="drag-item"
        draggable="true"
        data-index="${i}"
        tabindex="0"
        role="option"
        aria-selected="false"
        aria-label="${esc(sub.name)}, position ${i + 1} of ${curatedOrder.length}. Press ↑↓ to reorder.">
      <span class="drag-handle" aria-hidden="true">⠿</span>
      <div style="flex:1; min-inline-size:0;">
        <strong style="font-size:var(--text-sm);">${esc(sub.name)}</strong>
        <span style="color:var(--clr-text-muted); font-size:var(--text-sm);"> — ${esc(sub.address)}</span>
      </div>
      <input type="text"
             class="comment-input"
             data-name="${esc(sub.name)}"
             placeholder="Add commentary…"
             aria-label="Commentary for ${esc(sub.name)}"
             value="${esc(comments[sub.name] ?? '')}"
             style="max-inline-size:10rem; padding:0.25rem 0.5rem; border:1.5px solid var(--clr-border); border-radius:var(--radius); background:var(--clr-bg); color:var(--clr-text); font-size:var(--text-sm); font-family:inherit;">
    </li>`).join('');

  // Drag events
  list.querySelectorAll('.drag-item').forEach(item => {
    item.addEventListener('dragstart', onDragStart);
    item.addEventListener('dragover',  onDragOver);
    item.addEventListener('drop',      onDrop);
    item.addEventListener('dragend',   onDragEnd);
    item.addEventListener('keydown',   onKeyDown);
  });

  // Comment events
  list.querySelectorAll('.comment-input').forEach(input => {
    input.addEventListener('input', e => {
      const name = e.target.dataset.name;
      comments[name] = e.target.value;
      updateScore();
    });
    // Stop drag when typing
    input.addEventListener('mousedown', e => e.stopPropagation());
  });
}

// ─── Drag handlers ───
function onDragStart(e) {
  dragSrcIndex = parseInt(this.dataset.index, 10);
  e.dataTransfer.effectAllowed = 'move';
  this.classList.add('dragging');
}

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  document.querySelectorAll('#curated-list .drag-item').forEach(el => el.classList.remove('drag-over'));
  this.classList.add('drag-over');
}

function onDrop(e) {
  e.preventDefault();
  const destIndex = parseInt(this.dataset.index, 10);
  if (dragSrcIndex !== null && dragSrcIndex !== destIndex) {
    const [moved] = curatedOrder.splice(dragSrcIndex, 1);
    curatedOrder.splice(destIndex, 0, moved);
    renderCuratedList();
    updateScore();
    announce(`Moved ${moved.name} to position ${destIndex + 1}.`);
  }
  dragSrcIndex = null;
}

function onDragEnd() {
  this.classList.remove('dragging');
  document.querySelectorAll('#curated-list .drag-item').forEach(el => el.classList.remove('drag-over'));
  dragSrcIndex = null;
}

// ─── Keyboard reorder (↑ / ↓ arrow keys) ───
function onKeyDown(e) {
  const idx = parseInt(this.dataset.index, 10);
  if (e.key === 'ArrowUp' && idx > 0) {
    e.preventDefault();
    const [moved] = curatedOrder.splice(idx, 1);
    curatedOrder.splice(idx - 1, 0, moved);
    renderCuratedList();
    updateScore();
    document.querySelectorAll('#curated-list .drag-item')[idx - 1]?.focus();
    announce(`Moved ${moved.name} up to position ${idx}.`);
  } else if (e.key === 'ArrowDown' && idx < curatedOrder.length - 1) {
    e.preventDefault();
    const [moved] = curatedOrder.splice(idx, 1);
    curatedOrder.splice(idx + 1, 0, moved);
    renderCuratedList();
    updateScore();
    document.querySelectorAll('#curated-list .drag-item')[idx + 1]?.focus();
    announce(`Moved ${moved.name} down to position ${idx + 2}.`);
  }
}

// ─── Update score + UI ───
function updateScore() {
  const score = computeScore();
  const fill    = document.getElementById('creativity-fill');
  const pct     = document.getElementById('creativity-pct');
  const badge   = document.getElementById('status-badge');

  if (!fill || !pct || !badge) return;

  fill.style.inlineSize = `${score}%`;
  pct.textContent = `${score}%`;

  if (score >= THRESHOLD) {
    fill.classList.add('above-threshold');
    badge.className = 'status-badge protected';
    badge.textContent = '✓ Protectable Compilation';
    announce(`Score ${score}% — above the Feist creativity threshold. This compilation is protectable.`);
  } else {
    fill.classList.remove('above-threshold');
    badge.className = 'status-badge unprotected';
    badge.textContent = '✗ Unprotected — Raw Facts';
    announce(`Score ${score}% — below threshold. Purely alphabetical facts remain unprotected under Feist.`);
  }
}

// ─── Reset ───
function resetDemo() {
  curatedOrder = [...ALPHA_ORDER];
  comments = {};
  renderCuratedList();
  updateScore();
  announce('Demo reset to original alphabetical order.');
}

// ─── Modal open/close ───
function setupModal() {
  const openBtn  = document.getElementById('open-modal');
  const closeBtn = document.getElementById('close-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (!openBtn || !backdrop) return;

  openBtn.addEventListener('click', () => {
    backdrop.classList.add('open');
    closeBtn?.focus();
  });

  closeBtn?.addEventListener('click', () => {
    backdrop.classList.remove('open');
    openBtn.focus();
  });

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) { backdrop.classList.remove('open'); openBtn.focus(); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      backdrop.classList.remove('open');
      openBtn.focus();
    }
  });
}

// ─── SR announce helper ───
function announce(msg) {
  const live = document.getElementById('sr-live');
  if (live) { live.textContent = ''; requestAnimationFrame(() => { live.textContent = msg; }); }
}

// ─── HTML escape ───
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  renderRawTable();
  renderCuratedList();
  updateScore();
  setupModal();

  document.getElementById('reset-btn')?.addEventListener('click', resetDemo);
});
