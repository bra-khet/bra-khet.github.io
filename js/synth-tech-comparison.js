/**
 * synth-tech-comparison.js
 * Behavioral logic for /synth-tech-comparison/ report page.
 *
 * How to test:
 *  1. Open synth-tech-comparison.html locally (via Jekyll serve or a static HTTP server).
 *  2. Scroll the page — the progress bar should fill; sidebar nav links should update.
 *  3. On a viewport < 768px, confirm the FAB button appears and toggles the sidebar.
 *  4. Click the tab buttons in the Critical Analysis section to swap panels.
 *  5. Click any glossary term to expand/collapse its definition.
 *  6. Click "Show 69 References" to reveal and "Hide References" to collapse the list.
 *
 * Features:
 *  1. Reading progress bar
 *  2. Scrollspy (IntersectionObserver, 30% threshold)
 *  3. Mobile sidebar toggle (FAB + overlay)
 *  4. Tab system (Proponent / Critic)
 *  5. Glossary accordion
 *  6. References toggle
 */

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Reading progress bar ─────────────────────────────────────────
    const progressBar = document.getElementById('progress-bar');

    if (progressBar) {
        const updateProgress = () => {
            const scrollTop    = window.scrollY;
            const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
            const pct          = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

            progressBar.style.width = pct + '%';
            progressBar.setAttribute('aria-valuenow', pct);
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress(); // initial call
    }


    // ── 2. Scrollspy ────────────────────────────────────────────────────
    const sections   = Array.from(document.querySelectorAll('section[id]'));
    const navLinks   = Array.from(document.querySelectorAll('.nav-link[data-section]'));

    /**
     * Map section IDs to their corresponding sidebar nav links for O(1) lookup.
     * @type {Map<string, HTMLElement>}
     */
    const linkMap = new Map();
    navLinks.forEach(link => {
        const id = link.getAttribute('data-section');
        if (id) linkMap.set(id, link);
    });

    // Track which sections are currently intersecting
    const visibleSections = new Set();

    /**
     * Mark the topmost currently-visible section as active in the sidebar.
     * "Topmost" = the section with the smallest getBoundingClientRect().top >= 0,
     * or the last section if scrolled past all of them.
     */
    const setActiveNav = () => {
        // Remove active from all links
        navLinks.forEach(l => l.classList.remove('active'));

        if (visibleSections.size === 0) return;

        // Find the visible section whose top is closest to (but below) the banner
        let best = null;
        let bestTop = Infinity;

        visibleSections.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const top = el.getBoundingClientRect().top;
            if (top < bestTop) {
                bestTop = top;
                best = id;
            }
        });

        if (best && linkMap.has(best)) {
            linkMap.get(best).classList.add('active');
        }
    };

    // IntersectionObserver: fire when 30% of a section is visible
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    visibleSections.add(entry.target.id);
                } else {
                    visibleSections.delete(entry.target.id);
                }
            });
            setActiveNav();
        },
        {
            rootMargin: '-60px 0px -30% 0px', // offset for fixed banner + bottom margin
            threshold: 0.1
        }
    );

    sections.forEach(sec => observer.observe(sec));

    // Smooth-scroll nav links and close mobile sidebar on click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileSidebar();
        });
    });


    // ── 3. Mobile sidebar toggle ────────────────────────────────────────
    const sidebar      = document.getElementById('sidebar');
    const mobMenuBtn   = document.getElementById('mob-menu-btn');
    const mobOverlay   = document.getElementById('mob-overlay');

    /** Open the mobile sidebar */
    const openMobileSidebar = () => {
        if (!sidebar || !mobMenuBtn || !mobOverlay) return;
        sidebar.classList.add('mob-open');
        mobOverlay.classList.add('active');
        mobOverlay.setAttribute('aria-hidden', 'false');
        mobMenuBtn.setAttribute('aria-expanded', 'true');
        mobMenuBtn.textContent = '✕';
        mobMenuBtn.setAttribute('aria-label', 'Close navigation menu');
    };

    /** Close the mobile sidebar */
    const closeMobileSidebar = () => {
        if (!sidebar || !mobMenuBtn || !mobOverlay) return;
        sidebar.classList.remove('mob-open');
        mobOverlay.classList.remove('active');
        mobOverlay.setAttribute('aria-hidden', 'true');
        mobMenuBtn.setAttribute('aria-expanded', 'false');
        mobMenuBtn.textContent = '☰';
        mobMenuBtn.setAttribute('aria-label', 'Open navigation menu');
    };

    if (mobMenuBtn) {
        mobMenuBtn.addEventListener('click', () => {
            const isOpen = sidebar && sidebar.classList.contains('mob-open');
            if (isOpen) {
                closeMobileSidebar();
            } else {
                openMobileSidebar();
            }
        });
    }

    if (mobOverlay) {
        mobOverlay.addEventListener('click', closeMobileSidebar);
    }

    // Close sidebar on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('mob-open')) {
            closeMobileSidebar();
            if (mobMenuBtn) mobMenuBtn.focus();
        }
    });


    // ── 4. Tab system ───────────────────────────────────────────────────
    const tabBtns   = Array.from(document.querySelectorAll('.tab-btn[aria-controls]'));
    const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

    /**
     * Activate a tab by its button element.
     * @param {HTMLElement} activeBtn
     */
    const activateTab = (activeBtn) => {
        const targetId = activeBtn.getAttribute('aria-controls');

        // Update all tab buttons
        tabBtns.forEach(btn => {
            const isActive = btn === activeBtn;
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');

            // Remove both possible active classes, then apply the correct one
            btn.classList.remove('tab-active-synth', 'tab-active-tech');
            if (isActive) {
                // Proponent tab uses synth accent; Critic tab uses tech accent
                if (btn.id === 'tab-proponent') {
                    btn.classList.add('tab-active-synth');
                } else if (btn.id === 'tab-critic') {
                    btn.classList.add('tab-active-tech');
                }
            }
        });

        // Show / hide panels
        tabPanels.forEach(panel => {
            const isTarget = panel.id === targetId;
            panel.classList.toggle('is-active', isTarget);
            // Ensure hidden panels don't interfere with assistive technology
            panel.hidden = !isTarget;
        });
    };

    // Initialise: mark non-active panels as hidden for accessibility
    tabPanels.forEach(panel => {
        panel.hidden = !panel.classList.contains('is-active');
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn));

        // Keyboard navigation: arrow keys within tab list
        btn.addEventListener('keydown', e => {
            const idx = tabBtns.indexOf(btn);
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const next = tabBtns[(idx + 1) % tabBtns.length];
                activateTab(next);
                next.focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prev = tabBtns[(idx - 1 + tabBtns.length) % tabBtns.length];
                activateTab(prev);
                prev.focus();
            }
        });
    });


    // ── 5. Glossary accordion ───────────────────────────────────────────
    const glossTriggers = Array.from(document.querySelectorAll('.gloss-trigger'));

    /**
     * Toggle a single glossary item open or closed.
     * @param {HTMLElement} trigger  The button element
     * @param {boolean}     forceClose  If true, always close regardless of current state
     */
    const toggleGloss = (trigger, forceClose = false) => {
        const bodyId  = trigger.getAttribute('aria-controls');
        const body    = bodyId ? document.getElementById(bodyId) : null;
        if (!body) return;

        const isOpen  = trigger.getAttribute('aria-expanded') === 'true';
        const opening = forceClose ? false : !isOpen;

        trigger.setAttribute('aria-expanded', opening ? 'true' : 'false');
        body.style.maxHeight = opening ? body.scrollHeight + 'px' : '0';
    };

    glossTriggers.forEach(trigger => {
        // Initialize: ensure all bodies start closed
        const bodyId = trigger.getAttribute('aria-controls');
        const body   = bodyId ? document.getElementById(bodyId) : null;
        if (body) body.style.maxHeight = '0';
        trigger.setAttribute('aria-expanded', 'false');

        trigger.addEventListener('click', () => toggleGloss(trigger));
    });


    // ── 6. References toggle ────────────────────────────────────────────
    const refsToggle  = document.getElementById('refs-toggle');
    const refsList    = document.getElementById('refs-list');

    if (refsToggle && refsList) {
        // Initialize closed
        refsList.style.maxHeight = '0';
        refsToggle.setAttribute('aria-expanded', 'false');

        refsToggle.addEventListener('click', () => {
            const isOpen = refsToggle.getAttribute('aria-expanded') === 'true';

            if (isOpen) {
                // Collapse
                refsToggle.setAttribute('aria-expanded', 'false');
                refsList.style.maxHeight = '0';
                refsToggle.textContent = '▼ Show 69 References';
            } else {
                // Expand: use scrollHeight for natural height
                refsToggle.setAttribute('aria-expanded', 'true');
                refsList.style.maxHeight = refsList.scrollHeight + 'px';
                refsToggle.textContent = '▲ Hide References';
            }
        });
    }

});
