/**
 * mythos-chained-beast.js
 * Purple neural-plexus animation for the Chained Beast snapshot.
 * Same particle-network approach as glasswing-report but in Mythos purple palette.
 * RAF pauses via IntersectionObserver when canvas is off-screen.
 */

(function () {
  'use strict';

  var canvas = document.getElementById('beast-canvas');
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext('2d');
  var nodes = [];
  var raf = null;
  var W = 0, H = 0;

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    var dpr  = window.devicePixelRatio || 1;
    canvas.width  = Math.floor(rect.width  * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    W = canvas.width;
    H = canvas.height;
    buildNodes();
  }

  function buildNodes() {
    nodes = [];
    var count = Math.max(18, Math.floor(W * H / 2800));
    for (var i = 0; i < count; i++) {
      nodes.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.28,
        vy:    (Math.random() - 0.5) * 0.28,
        phase: Math.random() * Math.PI * 2,
        speed: 0.005 + Math.random() * 0.007,
        r:     0.5 + Math.random() * 1.4,
      });
    }
  }

  /**
   * Mythos purple palette: deep purple (#cc44ff) → electric violet (#8040ff)
   * → cool-white pulse (#c8b8ff) — neural-fire colour cycling.
   */
  function neuralColor(phase, alpha) {
    var t = (Math.sin(phase) + 1) / 2;  // 0..1
    var r, g, b;
    if (t < 0.5) {
      // deep-purple (128,0,200) → electric-violet (204,68,255)
      var p = t * 2;
      r = Math.round(128 + p * 76);
      g = Math.round(0   + p * 68);
      b = Math.round(200 + p * 55);
    } else {
      // electric-violet (204,68,255) → cool-white (200,184,255)
      var p2 = (t - 0.5) * 2;
      r = Math.round(204 - p2 * 4);
      g = Math.round(68  + p2 * 116);
      b = 255;
    }
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha.toFixed(3) + ')';
  }

  var MAX_DIST = 120;

  function frame() {
    ctx.fillStyle = 'rgba(5,0,14,0.15)';
    ctx.fillRect(0, 0, W, H);

    // Update
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

    // Connections
    ctx.lineWidth = 0.6;
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[i].x - nodes[j].x;
        var dy = nodes[i].y - nodes[j].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < MAX_DIST * MAX_DIST) {
          var d  = Math.sqrt(d2);
          var strength = 1 - d / MAX_DIST;
          var avgPhase = (nodes[i].phase + nodes[j].phase) / 2;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = neuralColor(avgPhase, strength * 0.20);
          ctx.stroke();
        }
      }
    }

    // Nodes
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var alpha = 0.30 + 0.55 * Math.sin(n.phase);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = neuralColor(n.phase, alpha);
      ctx.fill();
    }
  }

  // IntersectionObserver: pause when off-screen
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

  resize();
  io.observe(canvas.parentElement);

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      resize();
      io.unobserve(canvas.parentElement);
      io.observe(canvas.parentElement);
    }, 200);
  });

}());
