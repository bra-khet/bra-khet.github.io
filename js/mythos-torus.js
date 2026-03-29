// mythos-torus.js — MythosTorusRenderer
// Standalone parametric torus with Cook-Torrance-inspired specular shading.
// Used by MythosFlair (full composite graphic) or standalone via start().
//
// Usage (standalone):
//   const r = new MythosTorusRenderer(canvas, canvas.getContext('2d'));
//   r.start();   // owns its own RAF loop
//   r.stop();    // cancel loop
//
// Usage (composite — called from MythosFlair):
//   r.drawFrame(time);  // called each frame by the parent loop

class MythosTorusRenderer {
  constructor(canvas, ctx, opts = {}) {
    this.canvas  = canvas;
    this.ctx     = ctx;
    this.cameraZ = opts.cameraZ  || 800;
    this.R       = opts.R        || 120;   // major radius
    this.r       = opts.r        || 40;    // minor radius
    this.segs    = opts.segments || 64;
    this.pscale  = opts.pscale   || 1.8;   // perspective magnification

    // Build parametric torus point cloud
    this._pts = [];
    for (let i = 0; i < this.segs; i++) {
      for (let j = 0; j < this.segs; j++) {
        const u = (i / this.segs) * Math.PI * 2;
        const v = (j / this.segs) * Math.PI * 2;
        const x = (this.R + this.r * Math.cos(v)) * Math.cos(u);
        const y = (this.R + this.r * Math.cos(v)) * Math.sin(u);
        const z = this.r * Math.sin(v);
        this._pts.push({ x, y, z, v });
      }
    }
  }

  // 3-D → 2-D perspective projection with Y-then-X rotation
  _project(px, py, pz, rotX, rotY) {
    let x = px, y = py, z = pz;
    // Rotate Y
    const cy = Math.cos(rotY), sy = Math.sin(rotY);
    const x1 = x * cy - z * sy;
    z = x * sy + z * cy;
    x = x1;
    // Rotate X
    const cx = Math.cos(rotX), sx = Math.sin(rotX);
    const y1 = y * cx - z * sx;
    z = y * sx + z * cx;
    y = y1;
    const sc = this.cameraZ / (this.cameraZ + z);
    return {
      x: this.canvas.width  / 2 + x * sc * this.pscale,
      y: this.canvas.height / 2 + y * sc * this.pscale,
      sc, depth: z
    };
  }

  // Pseudo Cook-Torrance: diffuse + high-shininess specular
  _shade(normalZ, lightZ = 0.8) {
    const d = Math.max(0, normalZ * 0.6 + 0.4);
    const s = Math.pow(Math.max(0, normalZ * lightZ), 32);
    return d + s * 1.8;
  }

  drawFrame(time) {
    const rotY = time * 0.3;
    const rotX = Math.sin(time * 0.1) * 0.2;
    const ctx  = this.ctx;

    const proj = this._pts.map(p => {
      const { x, y, sc, depth } = this._project(p.x, p.y, p.z, rotX, rotY);
      const intensity = this._shade(Math.cos(p.v));
      return { x, y, sc, depth, intensity, alpha: Math.max(0.3, sc) };
    });

    // Painter's algorithm: far-to-near
    proj.sort((a, b) => b.depth - a.depth);

    for (let i = 0; i < proj.length; i += 4) {
      const p = proj[i];
      ctx.globalAlpha = p.alpha;
      ctx.strokeStyle = `hsl(195, 100%, ${60 + p.intensity * 40}%)`;
      ctx.lineWidth   = 1.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2 * p.sc, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  // Standalone: owns its own animation loop + dark background clear
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
