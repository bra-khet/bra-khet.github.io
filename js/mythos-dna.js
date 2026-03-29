// mythos-dna.js — MythosDNARenderer
// Animated DNA double-helix with rotating rungs.
// Default orientation is vertical (helix axis runs top-to-bottom).
// Set opts.horizontal = true for a wide-short hero-strip canvas.
//
// Usage (standalone vertical):
//   const r = new MythosDNARenderer(canvas, canvas.getContext('2d'));
//   r.start();
//
// Usage (horizontal hero strip, e.g. 700×90):
//   const r = new MythosDNARenderer(canvas, canvas.getContext('2d'),
//               { horizontal: true, color: '#cc44ff' });
//   r.start();
//
// Usage (composite — called from MythosFlair):
//   r.drawFrame(time);

class MythosDNARenderer {
  constructor(canvas, ctx, opts = {}) {
    this.canvas     = canvas;
    this.ctx        = ctx;
    this.cameraZ    = opts.cameraZ    || 800;
    this.color      = opts.color      || '#00ff88';
    this.speed      = opts.speed      || 0.4;
    this.pointCount = opts.pointCount || 60;
    this.pscale     = opts.pscale     || 1.8;
    this.horiz      = opts.horizontal || false;

    // Build helix base coordinates.
    // Vertical (default): helix axis = Y, spread across XZ plane.
    // Horizontal: helix axis = X, spread across YZ plane.
    this._pts = [];
    const n = this.pointCount;
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 4;  // two full turns
      if (!this.horiz) {
        // Vertical: original layout — offset to right side of canvas
        const xOff = opts.xOffset || 220;
        this._pts.push({
          x1: xOff + Math.sin(t)          * 25,  y1: -180 + t * 8,  z1: Math.cos(t)          * 25,
          x2: xOff + Math.sin(t + Math.PI) * 25,  y2: -180 + t * 8,  z2: Math.cos(t + Math.PI) * 25
        });
      } else {
        // Horizontal: helix axis runs along X; centered at canvas origin
        const xSpan = 300;  // horizontal extent of helix
        this._pts.push({
          x1: -xSpan / 2 + t * (xSpan / (Math.PI * 4)),  y1: Math.sin(t)          * 22,  z1: Math.cos(t)          * 22,
          x2: -xSpan / 2 + t * (xSpan / (Math.PI * 4)),  y2: Math.sin(t + Math.PI) * 22,  z2: Math.cos(t + Math.PI) * 22
        });
      }
    }
  }

  _project(px, py, pz, rotY) {
    let x = px, y = py, z = pz;
    const cy = Math.cos(rotY), sy = Math.sin(rotY);
    const x1 = x * cy - z * sy;
    z = x * sy + z * cy;
    x = x1;
    const sc = this.cameraZ / (this.cameraZ + z);
    return {
      x: this.canvas.width  / 2 + x * sc * this.pscale,
      y: this.canvas.height / 2 + y * sc * this.pscale,
      sc
    };
  }

  drawFrame(time) {
    const rotY = time * this.speed;
    const ctx  = this.ctx;
    ctx.strokeStyle = this.color;
    ctx.lineWidth   = this.horiz ? 2 : 3;

    for (let i = 0; i < this._pts.length - 1; i++) {
      const a  = this._pts[i];
      const b  = this._pts[i + 1];
      const p1a = this._project(a.x1, a.y1, a.z1, rotY);
      const p2a = this._project(b.x1, b.y1, b.z1, rotY);
      const p1b = this._project(a.x2, a.y2, a.z2, rotY);
      const p2b = this._project(b.x2, b.y2, b.z2, rotY);

      // Strand A
      ctx.beginPath();
      ctx.moveTo(p1a.x + 20, p1a.y);
      ctx.lineTo(p2a.x + 20, p2a.y);
      ctx.stroke();

      // Strand B
      ctx.beginPath();
      ctx.moveTo(p1b.x - 20, p1b.y);
      ctx.lineTo(p2b.x - 20, p2b.y);
      ctx.stroke();

      // Cross rungs
      if (i % 4 === 0) {
        ctx.lineWidth = this.horiz ? 1 : 1.5;
        ctx.beginPath();
        ctx.moveTo(p1a.x - 20, p1a.y);
        ctx.lineTo(p1a.x + 20, p1a.y);
        ctx.stroke();
        ctx.lineWidth = this.horiz ? 2 : 3;
      }
    }
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
