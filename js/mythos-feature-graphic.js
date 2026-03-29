// mythos-feature-graphic.js - Self-contained pseudo-3D geometric abstract for Anthropic mythos
// Features: rotating shaded torus (Cook-Torrance-inspired specular), neuron nodes, pulsing wires, DNA helix segment
// Zero dependencies. Works on GitHub Pages / Jekyll. Dark neon cyber theme.

class MythosFlair {
  constructor() {
    this.canvas = document.getElementById('mythos-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.time = 0;
    this.cameraZ = 800; // perspective distance

    // 3D points for torus (parametric)
    this.torusPoints = [];
    this.torusSegments = 64; // resolution
    const R = 120; // major radius
    const r = 40;  // minor radius
    for (let i = 0; i < this.torusSegments; i++) {
      for (let j = 0; j < this.torusSegments; j++) {
        const u = (i / this.torusSegments) * Math.PI * 2;
        const v = (j / this.torusSegments) * Math.PI * 2;
        const x = (R + r * Math.cos(v)) * Math.cos(u);
        const y = (R + r * Math.cos(v)) * Math.sin(u);
        const z = r * Math.sin(v);
        this.torusPoints.push({ x, y, z, u, v });
      }
    }

    // Neuron nodes (spheres)
    this.nodes = [];
    for (let i = 0; i < 80; i++) {
      this.nodes.push({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 200,
        z: (Math.random() - 0.5) * 300,
        radius: 4 + Math.random() * 4,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // DNA helix base points (two offset strands)
    this.dnaPoints = [];
    for (let i = 0; i < 60; i++) {
      const t = i / 60 * Math.PI * 4;
      this.dnaPoints.push({
        x1: 220 + Math.sin(t) * 25,
        y1: -180 + t * 8,
        z1: Math.cos(t) * 25,
        x2: 220 + Math.sin(t + Math.PI) * 25,
        y2: -180 + t * 8,
        z2: Math.cos(t + Math.PI) * 25
      });
    }

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  // Simple 3D rotation + perspective projection
  project(point, rotX, rotY, rotZ) {
    let { x, y, z } = point;
    // Rotate Y (main torus spin)
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const x1 = x * cosY - z * sinY;
    z = x * sinY + z * cosY;
    x = x1;
    // Rotate X
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const y1 = y * cosX - z * sinX;
    z = y * sinX + z * cosX;
    y = y1;
    // Perspective
    const scale = this.cameraZ / (this.cameraZ + z);
    return {
      x: this.width / 2 + x * scale * 1.8,
      y: this.height / 2 + y * scale * 1.8,
      scale: scale,
      depth: z // for shading
    };
  }

  // Pseudo-Cook-Torrance specular highlight (simple dot-product specular + fresnel)
  getShading(normalZ, lightDirZ = 0.8) {
    const diffuse = Math.max(0, normalZ * 0.6 + 0.4);
    const specular = Math.pow(Math.max(0, normalZ * lightDirZ), 32); // high shininess
    return { diffuse, specular };
  }

  animate() {
    this.time += 0.015;
    this.ctx.fillStyle = '#0a0a1f';
    this.ctx.fillRect(0, 0, this.width, this.height);

    const rotY = this.time * 0.3;
    const rotX = Math.sin(this.time * 0.1) * 0.2;

    // Draw torus wireframe with depth shading
    this.ctx.strokeStyle = '#00ffff';
    this.ctx.lineWidth = 1.5;
    const projectedTorus = this.torusPoints.map(p => {
      const proj = this.project(p, rotX, rotY, 0);
      const normalZ = Math.cos(p.v); // approximate surface normal
      const shade = this.getShading(normalZ);
      return { ...proj, shade, alpha: Math.max(0.3, proj.scale) };
    });

    // Sort by depth for painter's algorithm (pseudo-3D)
    projectedTorus.sort((a, b) => b.depth - a.depth);

    for (let i = 0; i < projectedTorus.length; i += 4) { // subsample for performance
      const p = projectedTorus[i];
      this.ctx.globalAlpha = p.alpha;
      const intensity = p.shade.diffuse + p.shade.specular * 1.8;
      this.ctx.strokeStyle = `hsl(195, 100%, ${60 + intensity * 40}%)`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
      this.ctx.stroke();
    }
    this.ctx.globalAlpha = 1;

    // Neuron nodes + pulsing glow (wires)
    this.ctx.shadowBlur = 15;
    this.nodes.forEach((node, i) => {
      const proj = this.project(node, rotX * 0.5, this.time * 0.8, 0);
      node.pulse = (node.pulse + 0.1) % (Math.PI * 2);
      const pulseScale = 1 + Math.sin(node.pulse) * 0.3;
      this.ctx.shadowColor = '#ff00ff';
      this.ctx.fillStyle = '#ff00ff';
      this.ctx.globalAlpha = 0.9;
      this.ctx.beginPath();
      this.ctx.arc(proj.x, proj.y, node.radius * proj.scale * pulseScale, 0, Math.PI * 2);
      this.ctx.fill();

      // Connect to nearby nodes (wires)
      if (i % 3 === 0) {
        for (let j = i + 1; j < this.nodes.length; j += 7) {
          const other = this.nodes[j];
          const proj2 = this.project(other, rotX * 0.5, this.time * 0.8, 0);
          const dist = Math.hypot(proj.x - proj2.x, proj.y - proj2.y);
          if (dist < 120) {
            this.ctx.strokeStyle = `rgba(0, 255, 255, ${0.6 * (1 - dist / 120)})`;
            this.ctx.lineWidth = 1.2 * proj.scale;
            this.ctx.beginPath();
            this.ctx.moveTo(proj.x, proj.y);
            this.ctx.lineTo(proj2.x, proj2.y);
            this.ctx.stroke();
          }
        }
      }
    });
    this.ctx.shadowBlur = 0;
    this.ctx.globalAlpha = 1;

    // DNA helix (right side, vertical)
    this.ctx.strokeStyle = '#00ff88';
    this.ctx.lineWidth = 3;
    for (let i = 0; i < this.dnaPoints.length - 1; i++) {
      const p1 = this.project(this.dnaPoints[i], 0, this.time * 0.4, 0);
      const p2 = this.project(this.dnaPoints[i + 1], 0, this.time * 0.4, 0);
      // offset DNA strands slightly
      this.ctx.beginPath();
      this.ctx.moveTo(p1.x + 20, p1.y);
      this.ctx.lineTo(p2.x + 20, p2.y);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(p1.x - 20, p1.y);
      this.ctx.lineTo(p2.x - 20, p2.y);
      this.ctx.stroke();
      // cross rungs
      if (i % 4 === 0) {
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x - 20, p1.y);
        this.ctx.lineTo(p1.x + 20, p1.y);
        this.ctx.stroke();
        this.ctx.lineWidth = 3;
      }
    }

    requestAnimationFrame(this.animate);
  }
}

// Auto-init when script loads
new MythosFlair();