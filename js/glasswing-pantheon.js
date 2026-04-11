/**
 * glasswing-pantheon.js
 * Teal glasswing plexus for "The New Pantheon" consortium snapshot.
 * Same particle-network approach; glasswing teal ↔ ocean-blue colour cycle.
 * RAF loop pauses when canvas is off-screen via IntersectionObserver.
 */

(function () {
  'use strict';

  var canvas = document.getElementById('pantheon-canvas');
  if (!canvas || !canvas.getContext) return;

  var ctx  = canvas.getContext('2d');
  var nodes = [];
  var raf  = null;
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
    var count = Math.max(20, Math.floor(W * H / 2600));
    for (var i = 0; i < count; i++) {
      nodes.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.25,
        vy:    (Math.random() - 0.5) * 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: 0.004 + Math.random() * 0.006,
        r:     0.5 + Math.random() * 1.6,
      });
    }
  }

  /**
   * Glasswing teal (0,224,208) → ocean blue (0,120,200) → ice white (180,240,255).
   * Creates an iridescent aquatic shimmer.
   */
  function shimmerColor(phase, alpha) {
    var t = (Math.sin(phase) + 1) / 2;  // 0..1
    var r, g, b;
    if (t < 0.5) {
      // teal (0,224,208) → ocean-blue (0,120,200)
      var p = t * 2;
      r = 0;
      g = Math.round(224 - p * 104);
      b = Math.round(208 - p * 8);
    } else {
      // ocean-blue (0,120,200) → ice-white (180,240,255)
      var p2 = (t - 0.5) * 2;
      r = Math.round(0   + p2 * 180);
      g = Math.round(120 + p2 * 120);
      b = Math.round(200 + p2 * 55);
    }
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha.toFixed(3) + ')';
  }

  var MAX_DIST = 115;

  function frame() {
    ctx.fillStyle = 'rgba(2,11,16,0.16)';
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
    ctx.lineWidth = 0.65;
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[i].x - nodes[j].x;
        var dy = nodes[i].y - nodes[j].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < MAX_DIST * MAX_DIST) {
          var d  = Math.sqrt(d2);
          var strength  = 1 - d / MAX_DIST;
          var avgPhase  = (nodes[i].phase + nodes[j].phase) / 2;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = shimmerColor(avgPhase, strength * 0.21);
          ctx.stroke();
        }
      }
    }

    // Nodes
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var alpha = 0.32 + 0.52 * Math.sin(n.phase);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = shimmerColor(n.phase, alpha);
      ctx.fill();
    }
  }

  // IntersectionObserver: pause RAF when off-screen
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
