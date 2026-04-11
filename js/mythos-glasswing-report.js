/**
 * mythos-glasswing-report.js
 * Reading progress, TOC tracking, and Glasswing canvas shimmer.
 *
 * Glasswing canvas: iridescent particle-network that mimics light
 * refracting through Greta oto's transparent wing membrane —
 * teal (#00e0d0) ↔ purple (#8040ff) color cycling.
 * RAF loop pauses when the canvas is off-screen (IntersectionObserver).
 */

(function () {
  'use strict';

  /* ── Reading progress ──────────────────────────────────────────── */
  var progressBar = document.getElementById('reading-progress');

  function updateProgress() {
    if (!progressBar) return;
    var doc = document.documentElement;
    var scrolled = doc.scrollTop || document.body.scrollTop;
    var total = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
    var pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
    progressBar.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(pct));
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ── TOC active-section tracking ───────────────────────────────── */
  var tocLinks = Array.from(document.querySelectorAll('.toc-list a'));

  if (tocLinks.length > 0 && 'IntersectionObserver' in window) {
    var sectionIds = tocLinks.map(function (a) {
      return a.getAttribute('href').replace('#', '');
    });

    var visible = new Set();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          visible.add(e.target.id);
        } else {
          visible.delete(e.target.id);
        }
      });

      var active = null;
      for (var i = 0; i < sectionIds.length; i++) {
        if (visible.has(sectionIds[i])) { active = sectionIds[i]; break; }
      }

      tocLinks.forEach(function (a) {
        var isActive = a.getAttribute('href') === '#' + active;
        a.classList.toggle('active', isActive);
      });
    }, { rootMargin: '-20% 0px -65% 0px' });

    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  /* ── Glasswing shimmer canvas ───────────────────────────────────── */
  var canvas = document.getElementById('glasswing-hero-canvas');
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext('2d');
  var nodes = [];
  var raf = null;
  var W = 0, H = 0;

  function resize() {
    var rect = canvas.getBoundingClientRect();
    canvas.width  = Math.floor(rect.width  * (window.devicePixelRatio || 1));
    canvas.height = Math.floor(rect.height * (window.devicePixelRatio || 1));
    W = canvas.width;
    H = canvas.height;
    buildNodes();
  }

  function buildNodes() {
    nodes = [];
    var count = Math.max(12, Math.floor(W * H / 3200));
    for (var i = 0; i < count; i++) {
      nodes.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.35,
        vy:    (Math.random() - 0.5) * 0.35,
        phase: Math.random() * Math.PI * 2,
        speed: 0.006 + Math.random() * 0.006,
        r:     0.6 + Math.random() * 1.2,
      });
    }
  }

  /**
   * Interpolate between glasswing teal (#00e0d0), deep purple (#8040ff),
   * and a cool white — creating an iridescent shimmer effect.
   */
  function shimmerColor(phase, alpha) {
    // Map phase [0, 2π] to a three-stop gradient: teal → purple → teal
    var t = (Math.sin(phase) + 1) / 2;  // 0..1

    var r, g, b;
    if (t < 0.5) {
      // teal (0,224,208) → purple (128,64,255)
      var p = t * 2;
      r = Math.round(0   + p * 128);
      g = Math.round(224 - p * 160);
      b = Math.round(208 + p * 47);
    } else {
      // purple (128,64,255) → cool-white (180,230,255)
      var p2 = (t - 0.5) * 2;
      r = Math.round(128 + p2 * 52);
      g = Math.round(64  + p2 * 166);
      b = 255;
    }
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha.toFixed(3) + ')';
  }

  var MAX_DIST = 110;  // px (canvas units)

  function frame() {
    ctx.fillStyle = 'rgba(2,8,14,0.16)';
    ctx.fillRect(0, 0, W, H);

    // Update nodes
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.phase += n.speed;
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0) n.x = W;
      else if (n.x > W) n.x = 0;
      if (n.y < 0) n.y = H;
      else if (n.y > H) n.y = 0;
    }

    // Draw connections first (behind nodes)
    ctx.lineWidth = 0.7;
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[i].x - nodes[j].x;
        var dy = nodes[i].y - nodes[j].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < MAX_DIST * MAX_DIST) {
          var d = Math.sqrt(d2);
          var strength = 1 - d / MAX_DIST;
          var avgPhase = (nodes[i].phase + nodes[j].phase) / 2;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = shimmerColor(avgPhase, strength * 0.22);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var alpha = 0.35 + 0.5 * Math.sin(n.phase);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = shimmerColor(n.phase, alpha);
      ctx.fill();
    }
  }

  // IntersectionObserver: pause RAF when canvas is off-screen
  var io = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      if (!raf) {
        (function loop() {
          frame();
          raf = requestAnimationFrame(loop);
        }());
      }
    } else {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
    }
  }, { threshold: 0.01 });

  // Boot
  resize();
  io.observe(canvas);

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      resize();
      io.unobserve(canvas);
      io.observe(canvas);
    }, 200);
  });

}());
