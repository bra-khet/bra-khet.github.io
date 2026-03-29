// mythos-neurons.js — MythosNeuronRenderer
// Orbiting neuron node spheres with pulsing glow and wire connections.
// Supports a mini mode for small decorative canvases (50–100 px).
//
// Usage (standalone full):
//   const r = new MythosNeuronRenderer(canvas, canvas.getContext('2d'));
//   r.start();
//
// Usage (mini decoration, ~80×56 canvas):
//   const r = new MythosNeuronRenderer(canvas, canvas.getContext('2d'),
//               { mini: true, nodeCount: 5, color: '#cc44ff' });
//   r.start();
//
// Usage (composite — called from MythosFlair):
//   r.drawFrame(time);

class MythosNeuronRenderer {
  constructor(canvas, ctx, opts = {}) {
    this.canvas      = canvas;
    this.ctx         = ctx;
    this.cameraZ     = opts.cameraZ     || 800;
    this.color       = opts.color       || '#ff00ff';
    this.connectDist = opts.connectDist || 120;
    this.mini        = opts.mini        || false;
    // mini mode: tighter spread, smaller perspective magnification, no wires
    this.pscale      = opts.pscale      || (this.mini ? 0.35 : 1.8);
    this.speed       = opts.speed       || (this.mini ? 0.35 : 0.8);
    const spread     = this.mini ? 0.22 : 1.0;

    const n = opts.nodeCount !== undefined
      ? opts.nodeCount
      : (this.mini ? 6 : 80);

    this._nodes = [];
    for (let i = 0; i < n; i++) {
      this._nodes.push({
        x:      (Math.random() - 0.5) * 400 * spread,
        y:      (Math.random() - 0.5) * 200 * spread,
        z:      (Math.random() - 0.5) * 300 * spread,
        radius: this.mini ? (1.5 + Math.random() * 2.5) : (4 + Math.random() * 4),
        pulse:  Math.random() * Math.PI * 2
      });
    }
  }

  _project(px, py, pz, rotX, rotY) {
    let x = px, y = py, z = pz;
    const cy = Math.cos(rotY), sy = Math.sin(rotY);
    const x1 = x * cy - z * sy;
    z = x * sy + z * cy;
    x = x1;
    const cx = Math.cos(rotX), sx = Math.sin(rotX);
    const y1 = y * cx - z * sx;
    z = y * sx + z * cx;
    y = y1;
    const sc = this.cameraZ / (this.cameraZ + z);
    return {
      x: this.canvas.width  / 2 + x * sc * this.pscale,
      y: this.canvas.height / 2 + y * sc * this.pscale,
      sc
    };
  }

  drawFrame(time) {
    const rotX = Math.sin(time * 0.1) * 0.1;
    const rotY = time * this.speed;
    const ctx  = this.ctx;

    ctx.shadowBlur = this.mini ? 8 : 15;

    this._nodes.forEach((node, i) => {
      const { x, y, sc } = this._project(node.x, node.y, node.z, rotX, rotY);
      node.pulse = (node.pulse + 0.1) % (Math.PI * 2);
      const ps   = 1 + Math.sin(node.pulse) * 0.3;

      ctx.shadowColor = this.color;
      ctx.fillStyle   = this.color;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(x, y, node.radius * sc * ps, 0, Math.PI * 2);
      ctx.fill();

      // Wire connections — full mode only
      if (!this.mini && i % 3 === 0) {
        for (let j = i + 1; j < this._nodes.length; j += 7) {
          const p2 = this._project(
            this._nodes[j].x, this._nodes[j].y, this._nodes[j].z,
            rotX, rotY
          );
          const d = Math.hypot(x - p2.x, y - p2.y);
          if (d < this.connectDist) {
            const a = 0.6 * (1 - d / this.connectDist);
            ctx.strokeStyle = `rgba(0,255,255,${a.toFixed(3)})`;
            ctx.lineWidth   = 1.2 * sc;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    });

    ctx.shadowBlur  = 0;
    ctx.globalAlpha = 1;
  }

  start() {
    this._t = 0;
    const loop = () => {
      this._t += 0.015;
      this.ctx.fillStyle = '#0a0a1f';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawFrame(this._t);
      this._raf = requestAnimationFrame(loop);
    };
    loop();
  }

  stop() { if (this._raf) cancelAnimationFrame(this._raf); }
}
