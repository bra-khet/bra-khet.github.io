---
layout: default
title: "|0⟩"
---

<h2 style="color: #00d4ff;">
  <a href="https://bra-khet.github.io/about"
     style="color: inherit; text-decoration: none;">
    About
  </a>
</h2>

<p style="color: #ccc;">Research reports and technical analysis, hosted at
  <span style="color: #00ff5d; white-space: nowrap;">/bra-khet.github.io</span>
</p>

<hr style="border-color: #333; margin: 2rem 0;" />

<!-- ════════════════════════════════════════════════════════════════
     LOCUTORIUM PROJECT HERO
     Promoted product surface (was OSINT Protocol CTA).
     Palette mirrors Locutorium Design Studio tokens (Cividis indigo→amber):
       deep #12001f · panel #1d1f6e · raised #241a4a
       amber #ffd54f / action #d4a020 / edge #8a6f1a
       indigo muted #8a86b0 · text #e8e6f0
     Primary destination: https://bra-khet.github.io/locutorium/
     Update about.md design tokens + project blurb when this block changes.
════════════════════════════════════════════════════════════════ -->
<style>
/* CHANGED: Locutorium index hero — Cividis waveform + CTA hover states
   WHY: Match Studio orientation buttons without pulling extension CSS into Jekyll */
@keyframes loc-wave {
  0%, 100% { height: 22%; opacity: 0.55; }
  50%      { height: var(--pk, 70%); opacity: 0.95; }
}
.loc-hero-cta-primary:hover {
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 22px rgba(255, 213, 79, 0.38) !important;
}
.loc-hero-cta-secondary:hover {
  transform: translateY(-1px) !important;
  border-color: rgba(255, 213, 79, 0.55) !important;
  background: rgba(36, 26, 74, 0.85) !important;
  color: #ffd54f !important;
}
@media (prefers-reduced-motion: reduce) {
  .loc-hero-wave span { animation: none !important; height: var(--pk, 50%) !important; }
}
@media (max-width: 560px) {
  .loc-hero-actions { flex-direction: column !important; align-items: stretch !important; }
  .loc-hero-cta-primary, .loc-hero-cta-secondary { justify-content: center !important; text-align: center !important; }
}
</style>

<div style="margin: 1.25rem 0 2.25rem; padding: 1.4rem 1.5rem 1.35rem;
            border: 1px solid #8a6f1a;
            border-radius: 14px;
            background:
              radial-gradient(130% 140% at 0% 0%, rgba(255, 213, 79, 0.12), transparent 58%),
              radial-gradient(90% 120% at 100% 100%, rgba(29, 31, 110, 0.55), transparent 55%),
              linear-gradient(165deg, #1d1f6e 0%, #241a4a 42%, #12001f 100%);
            box-shadow: 0 8px 28px rgba(255, 213, 79, 0.08), 0 2px 0 rgba(255, 213, 79, 0.06) inset;">

  <p style="margin: 0 0 0.45rem; color: #c9a63d; font-family: Monaco, monospace;
            font-size: 0.7rem; font-weight: bold; letter-spacing: 0.14em; text-transform: uppercase;">
    Project &middot; Local-first voice notes
  </p>

  <h2 style="margin: 0 0 0.35rem; color: #e8e6f0; font-family: Monaco, monospace;
             font-size: clamp(1.35rem, 3.5vw, 1.85rem); letter-spacing: -0.02em; font-weight: bold;">
    The Locutorium
  </h2>

  <p style="margin: 0 0 0.75rem; color: #ffd54f; font-family: Monaco, monospace;
            font-size: 1.02rem; letter-spacing: -0.01em;">
    Give your voice <span style="color: #e8e6f0;">a character.</span>
  </p>

  <p style="margin: 0 0 1rem; color: #a8a4c0; font-family: Monaco, monospace;
            font-size: 0.86rem; line-height: 1.65; max-width: 58ch;">
    Privacy-first &mdash; produce an audio-visual clip with a look and voice,
    anonymized with fully-customizable voice filters.
  
  </p>

  <p style="margin: 0 0 1rem; color: #a8a4c0; font-family: Monaco, monospace;
            font-size: 0.86rem; line-height: 1.65; max-width: 62ch;">
    No data leaves your machine until you choose to share it.
   </p>

  <!-- Decorative waveform (Studio hub motif) -->
  <div class="loc-hero-wave" aria-hidden="true"
       style="display: flex; align-items: flex-end; gap: 3px; height: 28px; margin: 0 0 1.15rem;">
    <span style="width: 4px; border-radius: 2px; background: linear-gradient(180deg, #ffd54f, #8a6f1a); animation: loc-wave 1.6s ease-in-out infinite; animation-delay: 0s; --pk: 38%;"></span>
    <span style="width: 4px; border-radius: 2px; background: linear-gradient(180deg, #ffd54f, #8a6f1a); animation: loc-wave 1.6s ease-in-out infinite; animation-delay: .10s; --pk: 72%;"></span>
    <span style="width: 4px; border-radius: 2px; background: linear-gradient(180deg, #ffd54f, #8a6f1a); animation: loc-wave 1.6s ease-in-out infinite; animation-delay: .20s; --pk: 100%;"></span>
    <span style="width: 4px; border-radius: 2px; background: linear-gradient(180deg, #ffd54f, #8a6f1a); animation: loc-wave 1.6s ease-in-out infinite; animation-delay: .05s; --pk: 58%;"></span>
    <span style="width: 4px; border-radius: 2px; background: linear-gradient(180deg, #ffd54f, #8a6f1a); animation: loc-wave 1.6s ease-in-out infinite; animation-delay: .15s; --pk: 88%;"></span>
    <span style="width: 4px; border-radius: 2px; background: linear-gradient(180deg, #ffd54f, #8a6f1a); animation: loc-wave 1.6s ease-in-out infinite; animation-delay: .25s; --pk: 45%;"></span>
    <span style="width: 4px; border-radius: 2px; background: linear-gradient(180deg, #ffd54f, #8a6f1a); animation: loc-wave 1.6s ease-in-out infinite; animation-delay: .08s; --pk: 66%;"></span>
    <span style="width: 4px; border-radius: 2px; background: linear-gradient(180deg, #ffd54f, #8a6f1a); animation: loc-wave 1.6s ease-in-out infinite; animation-delay: .18s; --pk: 32%;"></span>
  </div>

  <div class="loc-hero-actions" style="display: flex; flex-wrap: wrap; gap: 0.65rem; align-items: center;">
    <!-- Primary CTA — amber bake-button language from Studio -->
    <a class="loc-hero-cta-primary"
       href="https://bra-khet.github.io/locutorium/"
       style="display: inline-flex; align-items: center; gap: 0.4rem;
              padding: 0.72rem 1.35rem; border-radius: 999px; text-decoration: none;
              font-family: Monaco, monospace; font-weight: bold; font-size: 0.9rem;
              color: #12001f;
              background: linear-gradient(180deg, #ffd54f 0%, #d4a020 100%);
              border: 1px solid #8a6f1a;
              box-shadow: 0 2px 12px rgba(255, 213, 79, 0.22);
              transition: transform 0.08s ease, box-shadow 0.15s ease;">
      Discover the project... &#8594;
    </a>
    <!-- Secondary — indigo outline chip (nav/secondary Studio language) -->
    <a class="loc-hero-cta-secondary"
       href="https://bra-khet.github.io/locutorium/design-studio/"
       style="display: inline-flex; align-items: center; gap: 0.4rem;
              padding: 0.68rem 1.15rem; border-radius: 999px; text-decoration: none;
              font-family: Monaco, monospace; font-weight: bold; font-size: 0.85rem;
              color: #e8e6f0;
              background: rgba(10, 0, 20, 0.42);
              border: 1px solid rgba(138, 134, 176, 0.38);
              transition: transform 0.08s ease, border-color 0.12s ease, background 0.12s ease, color 0.12s ease;">
      Locutorium Design Studio
    </a>
    <a class="loc-hero-cta-secondary"
       href="https://bra-khet.github.io/locutorium/tutorial/"
       style="display: inline-flex; align-items: center; gap: 0.4rem;
              padding: 0.68rem 1.15rem; border-radius: 999px; text-decoration: none;
              font-family: Monaco, monospace; font-size: 0.82rem;
              color: #8a86b0;
              background: transparent;
              border: 1px solid rgba(138, 134, 176, 0.22);
              transition: transform 0.08s ease, border-color 0.12s ease, background 0.12s ease, color 0.12s ease;">
      Field Guide Tutorial
    </a>
  </div>

  <p style="margin: 0.9rem 0 0; color: #8a86b0; font-family: Monaco, monospace;
            font-size: 0.72rem; letter-spacing: 0.03em;">
    Chromium browsers &middot; no install for the hosted Studio &middot; v6.1.0
  </p>
</div>

<!-- ════════════════════════════════════════════════════════════════
     ANTHROPIC MYTHOS CTA — Cyberpunk AGI neurons pulsing
════════════════════════════════════════════════════════════════ -->
<style>
@keyframes neural-pulse {
  0%   { text-shadow: 0 0 7px #cc44ff, 0 0 18px rgba(204,68,255,0.5), 0 0 32px rgba(122,63,255,0.2); }
  50%  { text-shadow: 0 0 14px #dd66ff, 0 0 36px rgba(204,68,255,0.75), 0 0 60px rgba(122,63,255,0.4), 0 0 90px rgba(204,68,255,0.15); }
  100% { text-shadow: 0 0 7px #cc44ff, 0 0 18px rgba(204,68,255,0.5), 0 0 32px rgba(122,63,255,0.2); }
}
</style>

<style>
@media (max-width: 600px) { .mythos-mini-canvas { display: none !important; } }
</style>

<div style="margin: 2rem 0 0.5rem; text-align: center; position: relative;">
  <!-- Mini neuron canvases — decorative, hidden on mobile -->
  <canvas class="mythos-mini-canvas" id="mythos-mini-l" width="80" height="56"
    style="position: absolute; left: 8%; top: 50%; transform: translateY(-50%);
           border-radius: 7px; background: #06000e;
           border: 1px solid rgba(204,68,255,0.18); opacity: 0.8;"
    aria-hidden="true"></canvas>
  <canvas class="mythos-mini-canvas" id="mythos-mini-r" width="80" height="56"
    style="position: absolute; right: 8%; top: 50%; transform: translateY(-50%);
           border-radius: 7px; background: #06000e;
           border: 1px solid rgba(204,68,255,0.18); opacity: 0.8;"
    aria-hidden="true"></canvas>

  <a href="/anthropic-mythos/"
     style="display: inline-block; padding: 1.15rem 2.6rem;
            background: linear-gradient(135deg, #06000e 0%, #120024 60%, #0c0018 100%);
            color: #cc44ff; font-family: Monaco, monospace; font-weight: bold;
            font-size: 1.08rem; border-radius: 10px; text-decoration: none;
            border: 1px solid rgba(204,68,255,0.38);
            letter-spacing: 0.09em;
            animation: neural-pulse 2.6s ease-in-out infinite;
            box-shadow: 0 0 20px rgba(204,68,255,0.18), 0 0 50px rgba(122,63,255,0.07), inset 0 0 30px rgba(204,68,255,0.04);
            transition: box-shadow 0.2s, transform 0.15s, border-color 0.2s;"
     onmouseover="this.style.boxShadow='0 0 36px rgba(204,68,255,0.45), 0 0 70px rgba(122,63,255,0.22), inset 0 0 40px rgba(204,68,255,0.08)';this.style.borderColor='rgba(204,68,255,0.7)';this.style.transform='translateY(-2px)';"
     onmouseout="this.style.boxShadow='0 0 20px rgba(204,68,255,0.18), 0 0 50px rgba(122,63,255,0.07), inset 0 0 30px rgba(204,68,255,0.04)';this.style.borderColor='rgba(204,68,255,0.38)';this.style.transform='translateY(0)';">
    &#129504;&nbsp; ANTHROPIC MYTHOS &nbsp;&#8725;&#8725;&nbsp;<span style="font-weight: normal; font-size: 0.82rem; opacity: 0.6; letter-spacing: 0.04em;">capybara tier · leaked</span>
  </a>
</div>

<script src="/js/mythos-neurons.js"></script>
<script>
(function () {
  ['mythos-mini-l', 'mythos-mini-r'].forEach(function (id) {
    var c = document.getElementById(id);
    if (c && typeof MythosNeuronRenderer !== 'undefined') {
      new MythosNeuronRenderer(c, c.getContext('2d'), {
        mini: true, nodeCount: 5, color: '#cc44ff', pscale: 0.32
      }).start();
    }
  });
}());
</script>



<!-- ════════════════════════════════════════════════════════════════
     REORGANIZED HUBS (June 2026) - Core Research + Mythos Series + Archive teaser.
     Claude: update about.md + /archive when changing promoted items.
     (See plan.md for full decisions: energy/water-main/Evo/etc archived; water tools kept accessible.)
════════════════════════════════════════════════════════════════ -->

<!-- Site freshness note -->
<p style="color: #556677; font-size: 0.7rem; font-family: Monaco, monospace; text-align: center; margin: 0 0 1rem; letter-spacing: 0.03em;">
  Site curated July 2026 • Locutorium project hero at top • Core research below • OSINT Protocol after reports • Time-bound material → <a href="/archive" style="color:#7a9ab8; text-decoration:none;">Archive</a>
</p>

<h3 style="color: #00ff5d; margin-top: 1rem; font-family: Monaco, monospace; letter-spacing: -0.02em;">
  Mythos Series
</h3>

<!-- ── Anthropic Mythos (signature, kept prominent) -->
<h4 style="color: #cc44ff; font-family: Monaco, monospace; font-size: 0.9rem;
           margin: 1.5rem 0 0.6rem; letter-spacing: -0.01em;">
  Anthropic Mythos
</h4>

<div style="margin-top: 0.5rem; padding: 1rem 1.25rem;
            border: 1px solid #200a38;
            border-left: 3px solid #cc44ff;
            border-radius: 12px; background: #080010;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);">

  <p style="color: #7a4a99; font-size: 0.85rem; margin: 0.3rem 0 0.5rem; font-family: Monaco, monospace;">
    March 2026 &middot; Research Report v1.0
  </p>
  <p style="color: #5a3a78; font-size: 0.8rem; margin: 0 0 0.75rem; font-family: Monaco, monospace; line-height: 1.55;">
    Breaking news feature on Anthropic's accidental CMS disclosure of Claude Mythos (codenamed Capybara),
    a fourth-tier model surpassing Opus. Covers the forensic leak timeline, benchmark profile (+20pp MATH,
    92% HumanEval, Terminal-Bench dominance), $14.5B cybersecurity flash crash, alignment faking risks,
    and the Defenders-First rollout strategy.
  </p>
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
    <a href="/anthropic-mythos/"
       style="padding: 0.55rem 1.1rem; background: transparent; color: #cc44ff;
              border: 1px solid #cc44ff; border-radius: 6px; text-decoration: none;
              font-weight: bold; font-size: 0.85rem; font-family: Monaco, monospace;"
       onmouseover="this.style.background='#cc44ff';this.style.color='#000';"
       onmouseout="this.style.background='transparent';this.style.color='#cc44ff';">
      &#127760; Full Report
    </a>
    <a href="/anthropic-mythos-snapshot/"
       style="padding: 0.55rem 1.1rem; background: transparent; color: rgba(204,68,255,0.5);
              border: 1px solid rgba(204,68,255,0.3); border-radius: 6px; text-decoration: none;
              font-size: 0.82rem; font-family: Monaco, monospace;"
       onmouseover="this.style.color='#cc44ff';this.style.borderColor='#cc44ff';"
       onmouseout="this.style.color='rgba(204,68,255,0.5)';this.style.borderColor='rgba(204,68,255,0.3)';">
      &#9889; Visual Snapshot
    </a>
  </div>

</div>





<h3 style="color: #00ff5d; margin-top: 1.75rem; font-family: Monaco, monospace; letter-spacing: -0.02em;">
  Core Research
</h3>

 <!-- ── Synth- vs. Tech- (evergreen) ─────────────────────────────────────────── -->
<h4 style="color: #b06cff; font-family: Monaco, monospace; font-size: 0.9rem;
           margin: 1.25rem 0 0.5rem; letter-spacing: -0.01em;">
  Synth- vs. Tech-
</h4>

<div style="margin-top: 0.5rem; padding: 1rem 1.25rem;
            border: 1px solid #2d1a4a;
            border-left: 3px solid #b06cff;
            border-radius: 12px; background: #100a18;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);">

  <p style="color: #8a6aaa; font-size: 0.85rem; margin: 0.3rem 0 0.5rem; font-family: Monaco, monospace;">
    March 2026 &middot; Research Report v1.0
  </p>
  <p style="color: #7a5a9a; font-size: 0.8rem; margin: 0 0 0.75rem; font-family: Monaco, monospace; line-height: 1.55;">
    A deep etymological investigation tracing the divergent paths of <em>synth-</em> and <em>tech-</em>
    from Proto-Indo-European roots through Hellenic philosophy and the Industrial Revolution,
    into contemporary corpus linguistics and AI futures.
  </p>
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
    <a href="/synth-tech-comparison/"
       style="padding: 0.55rem 1.1rem; background: transparent; color: #b06cff;
              border: 1px solid #b06cff; border-radius: 6px; text-decoration: none;
              font-weight: bold; font-size: 0.85rem; font-family: Monaco, monospace;"
       onmouseover="this.style.background='#b06cff';this.style.color='#000';"
       onmouseout="this.style.background='transparent';this.style.color='#b06cff';">
      &#127760; Interactive Report
    </a>
  </div>

</div>

<!-- ── Lighting vs. Shading primer (standalone evergreen; DLSS main report archived) ───────── -->
<h4 style="color: #22d3ee; font-family: Monaco, monospace; font-size: 0.9rem;
           margin: 1.25rem 0 0.5rem; letter-spacing: -0.01em;">
  Light Rendering Explainer
</h4>

<div style="margin-top: 0.25rem; padding: 1rem 1.25rem;
            border: 1px solid #1a2a3a;
            border-left: 3px solid #22d3ee;
            border-radius: 12px; background: #0a1418;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);">

  <p style="color: #5a8a9a; font-size: 0.85rem; margin: 0.3rem 0 0.5rem; font-family: Monaco, monospace;">
    March 2026 &middot; Foundational Primer
  </p>
  <p style="color: #4a7a8a; font-size: 0.8rem; margin: 0 0 0.75rem; font-family: Monaco, monospace; line-height: 1.55;">
    Before neural rendering or modern 3D engines make sense, you need to understand the fundamental
    divide between how light arrives at a surface and how that surface decides what to do with it.
    The hidden physics that every path tracer, Unreal engine, and neural renderer is built on top of.
  </p>
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
    <a href="/3d-light-shading-1/"
       style="padding: 0.55rem 1.1rem; background: transparent; color: #22d3ee;
              border: 1px solid #22d3ee; border-radius: 6px; text-decoration: none;
              font-weight: bold; font-size: 0.85rem; font-family: Monaco, monospace;"
       onmouseover="this.style.background='#22d3ee';this.style.color='#000';"
       onmouseout="this.style.background='transparent';this.style.color='#22d3ee';">
      &#127760; Interactive Report — Lighting vs. Shading
    </a>
  </div>

</div>

<!-- ════════════════════════════════════════════════════════════════
     OSINT PROTOCOL — moved below Core Research (July 2026).
     Was top-of-page feature CTA; Locutorium now holds that slot.
     Update about.md if promoted status or link text changes.
════════════════════════════════════════════════════════════════ -->
<div style="margin: 2rem 0 0.5rem; text-align: center;">
  <a href="/osint-protocol"
     style="display: inline-block; padding: 0.65rem 1.5rem;
            background: #0a1f2e; color: #00d4ff; font-family: Monaco, monospace; font-weight: bold;
            font-size: 0.95rem; border-radius: 8px; text-decoration: none;
            border: 1px solid rgba(0,212,255,0.45);
            letter-spacing: -0.01em;
            box-shadow: 0 2px 12px rgba(0,212,255,0.12);
            transition: box-shadow 0.2s, transform 0.15s, border-color 0.2s;"
     onmouseover="this.style.boxShadow='0 4px 18px rgba(0,212,255,0.28)';this.style.borderColor='#00d4ff';this.style.transform='translateY(-1px)';"
     onmouseout="this.style.boxShadow='0 2px 12px rgba(0,212,255,0.12)';this.style.borderColor='rgba(0,212,255,0.45)';this.style.transform='translateY(0)';">
    &#128373;&#65039;&#8205;&#9794;&#65039; OSINT Protocol v2.0 &nbsp;&nbsp;<span style="font-weight: normal; font-size: 0.8rem; opacity: 0.75;">explainer &amp; reference</span>
  </a>
</div>

<div style="margin: 1rem 0 0.5rem; padding: 1.1rem 1.4rem;
            border: 1px solid #1e2a3a; border-left: 3px solid #00d4ff;
            border-radius: 10px; background: #080d14;">
  <p style="color: #7a9ab8; font-size: 0.72rem; font-family: Monaco, monospace;
            text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 0.5rem;">
    Methodology &mdash; Understanding My OSINT Protocol
  </p>
  <p style="color: #9ab8d0; font-size: 0.88rem; font-family: Monaco, monospace;
            line-height: 1.65; margin: 0;">
    Before (or after) reading reports, learn how I verify information using a
    standardized OSINT protocol. Reproducible steps and scored sources make every
    claim verifiable.
  </p>
</div>

<!-- ── Archive teaser (time-bound + personal references; see /archive for full list with hard links) -->
<div style="margin-top: 2rem; padding: 1rem 1.1rem; border: 1px solid #222a38; border-radius: 10px; background: #0a0f18;">
  <p style="color: #00ff5d; font-size: 0.8rem; font-family: Monaco, monospace; margin: 0 0 0.4rem; letter-spacing: 0.04em; text-transform: uppercase;">
    Archive — Time-Bound Reports &amp; Reference Tools
  </p>
  <p style="color: #7a8a9a; font-size: 0.78rem; font-family: Monaco, monospace; margin: 0 0 0.6rem; line-height: 1.5;">
    Curated June 2026. Time-sensitive dispatches, community snapshots, and personal references (e.g. energy comparison, water report baseline) have been moved here for clarity. All original permalinks remain live.
  </p>
  <p style="color: #5a6a7a; font-size: 0.76rem; font-family: Monaco, monospace; margin: 0;">
    <strong>Includes:</strong> AI Water Use report (v1.2 baseline — tools preserved for reference), AI Energy Comparison, Evo 2, DLSS 5 main report, SteamGPT, Altman Attack (Apr 10 2026), Tung Tung Tung Sahur + infographic, r/antiai analyses + methodology defense, and other time-bound pages.
    <br><a href="/archive" style="color: #9ab8d0; text-decoration: underline;">Full Archive page with dates, reasons, and direct hard links (including Water calculators, Energy reference, and Soft Hyphen tool) →</a>
  </p>
</div>

<!-- ════════════════════════════════════════════════════════════════
     GALLERY (trimmed comments for freshness; one active piece kept)
════════════════════════════════════════════════════════════════ -->
<h1 style="color: #00ff5d; margin-top: 2rem; font-family: Monaco, monospace; letter-spacing: -0.02em;">
  Real Art
</h1>
<div class="gallery">
  <div class="gallery-item">
    <img src="/assets/img/opiumbird3.png" alt="(✿◡‿◡)">
  </div>
</div>

<hr class="divider" />
