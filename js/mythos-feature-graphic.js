// mythos-feature-graphic.js — MythosFlair (composite orchestrator)
// Combines MythosTorusRenderer + MythosNeuronRenderer + MythosDNARenderer
// on a single shared canvas for the full pseudo-3D Mythos visualization.
//
// Dependencies (must be loaded before this file):
//   js/mythos-torus.js
//   js/mythos-neurons.js
//   js/mythos-dna.js
//
// Auto-initializes on any element with id="mythos-canvas".

class MythosFlair {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId || 'mythos-canvas');
    if (!this.canvas) return;

    if (
      typeof MythosTorusRenderer   === 'undefined' ||
      typeof MythosNeuronRenderer  === 'undefined' ||
      typeof MythosDNARenderer     === 'undefined'
    ) {
      console.warn('MythosFlair: missing renderer dependencies.');
      return;
    }

    this.ctx  = this.canvas.getContext('2d');
    this.time = 0;

    this.torus   = new MythosTorusRenderer(this.canvas, this.ctx);
    this.neurons = new MythosNeuronRenderer(this.canvas, this.ctx);
    this.dna     = new MythosDNARenderer(this.canvas, this.ctx);

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  animate() {
    this.time += 0.015;
    this.ctx.fillStyle = '#0a0a1f';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.torus.drawFrame(this.time);
    this.neurons.drawFrame(this.time);
    this.dna.drawFrame(this.time);

    requestAnimationFrame(this.animate);
  }
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () { new MythosFlair(); });
} else {
  new MythosFlair();
}
