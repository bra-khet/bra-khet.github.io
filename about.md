---
layout: default
title: bra-khet
---

<!--
  ╔═══════════════════════════════════════════════════════════════════╗
  ║  STYLE CONTRACT — keep about.md ↔ index.md in sync.             ║
  ║  Colors, card borders, and font choices here mirror index.md.    ║
  ║  Update BOTH files together when the design system changes;      ║
  ║  do NOT change one without the other unless explicitly noted.    ║
  ║                                                                   ║
  ║  404.md carries the same comment. Its single-screen layout       ║
  ║  rarely drifts from the design system, but when it does          ║
  ║  this comment should be updated there too to keep the chain      ║
  ║  consistent.                                                      ║
  ╠═══════════════════════════════════════════════════════════════════╣
  ║  Design tokens (sync with index.md):                             ║
  ║    #00d4ff  primary accent · headings · links                    ║
  ║    #00ff5d  section h3 headers                                   ║
  ║    #00ff41  canvas / matrix hero rain                            ║
  ║    #7a3fff  secondary accent / gradient end                      ║
  ║    #76B900  DLSS 5 / Neural Rendering                            ║
  ║    #00FF9F  Evo 2 genomics                                       ║
  ║    #b06cff  Synth-/Tech- etymology                               ║
  ║    #06b6d4  Anti-AI Ideology                                     ║
  ║    #ff4040  Meme Review                                          ║
  ║    #cc44ff  Anthropic Mythos / AGI neurons                       ║
  ╚═══════════════════════════════════════════════════════════════════╝
-->

<!-- ════════════════════════════════════════════════════════════════
     HERO — Matrix digital rain canvas + glowing title
     Inline script kept here because this .md file has no companion
     JS asset path wired up. Per CLAUDE.md, externalize to
     js/hero-rain.js if the file grows beyond the 5-line threshold.

     Performance notes:
       · Canvas rain: requestAnimationFrame, pauses off-screen via
         IntersectionObserver. Targets 60fps on low-end devices.
       · Glitch keyframes: CSS-only, low reflow cost. CONSIDER
         SCRUBBING if you see dropped frames — remove the `glitch`
         name from the animation shorthand on .hero-title.
       · Scanline overlay: static repeating-gradient, no paint cost.
         CONSIDER SCRUBBING if compositor profiling flags it.
       · prefers-reduced-motion: all animations fully disabled.
     Added weight: ~3.5 KB (inline CSS + JS).
════════════════════════════════════════════════════════════════ -->
<style>
#hero {
  position: relative; width: 100%; height: 42vh; min-height: 220px;
  overflow: hidden; border-radius: 12px; margin: 0 0 2rem;
  border: 1px solid #0a2a1a;
}
#hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.hero-scanlines {
  position: absolute; inset: 0; pointer-events: none; z-index: 1;
  background: repeating-linear-gradient(
    to bottom, transparent 0, transparent 2px,
    rgba(0,0,0,.16) 2px, rgba(0,0,0,.16) 4px);
}
.hero-content {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; z-index: 2; padding: 1rem;
}
.hero-title {
  color: #00ff41; font-family: Monaco, monospace;
  font-size: clamp(1.4rem, 4vw, 2.4rem); font-weight: bold;
  letter-spacing: -.02em; margin: 0 0 .5rem;
  text-shadow: 0 0 4px #00ff41, 0 0 14px #00ff41, 0 0 32px rgba(0,255,65,.5);
  animation: glow-pulse 3s ease-in-out infinite, glitch 9s step-end infinite;
  will-change: text-shadow;
}
.hero-sub {
  color: rgba(0,212,255,.75); font-family: Monaco, monospace;
  font-size: clamp(.7rem, 1.8vw, .85rem); letter-spacing: .12em;
  text-transform: uppercase; text-shadow: 0 0 8px rgba(0,212,255,.4); margin: 0;
}
@keyframes glow-pulse {
  0%,100% { text-shadow: 0 0 4px #00ff41, 0 0 14px #00ff41, 0 0 32px rgba(0,255,65,.5); }
  50%      { text-shadow: 0 0 8px #00ff41, 0 0 28px #00ff41, 0 0 56px rgba(0,255,65,.7); }
}
@keyframes glitch {
  0%,91%,100% { transform: translate(0); clip-path: none; }
  92%          { transform: translate(-2px, 1px); clip-path: inset(8% 0 78% 0); }
  93%          { transform: translate(2px, -1px); clip-path: inset(62% 0 18% 0); }
  94%          { transform: translate(0); clip-path: none; }
}
@media (prefers-reduced-motion: reduce) { .hero-title { animation: none; } }
</style>

<div id="hero" aria-hidden="true">
  <canvas id="hero-canvas"></canvas>
  <div class="hero-scanlines"></div>
  <div class="hero-content">
    <p class="hero-title">bra-khet.github.io</p>
    <p class="hero-sub">OSINT Research Protocol v2.0</p>
  </div>
</div>
<script>
(function(){
  var c=document.getElementById('hero-canvas'),x=c.getContext('2d');
  var k='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
  var cols,drops,raf;
  function resize(){
    c.width=c.offsetWidth; c.height=c.offsetHeight;
    cols=Math.floor(c.width/14); drops=[];
    for(var i=0;i<cols;i++) drops[i]=-(Math.random()*50|0);
  }
  function draw(){
    x.fillStyle='rgba(0,5,0,.05)'; x.fillRect(0,0,c.width,c.height);
    x.fillStyle='#00ff41'; x.font='13px monospace';
    for(var i=0;i<cols;i++){
      x.fillText(k[Math.random()*k.length|0], i*14, drops[i]*14);
      if(drops[i]*14>c.height && Math.random()>.975) drops[i]=0;
      drops[i]++;
    }
  }
  resize(); window.addEventListener('resize', resize);
  new IntersectionObserver(function(e){
    if(e[0].isIntersecting)(function loop(){draw();raf=requestAnimationFrame(loop);})();
    else cancelAnimationFrame(raf);
  }).observe(c);
})();
</script>

<!-- ════════════════════════════════════════════════════════════════
     MISSION STATEMENT
════════════════════════════════════════════════════════════════ -->
<div style="margin: 2rem 0 2.5rem; padding: 1.4rem 1.6rem;
            border: 1px solid #1a2e3a; border-left: 3px solid #00d4ff;
            border-radius: 12px; background: #060d14;">

  <p style="margin: 0 0 0.9rem;">
    <a href="/osint-protocol"
       style="color: #00d4ff; font-size: 0.72rem; font-family: Monaco, monospace;
              text-transform: uppercase; letter-spacing: 0.14em; text-decoration: none;">
      OSINT Research Protocol v2.0 &mdash; Archive &#8599;
    </a>
  </p>

  <p style="color: #c8dce8; font-size: 0.95rem; font-family: Monaco, monospace;
            line-height: 1.75; margin: 0 0 0.85rem;">
    I enjoy researching anything that I think might be worth knowing.
    This is the result of that effort, brought to you through careful,
    deliberate engineering in the age of AI.
  </p>

  <p style="color: #4a7a8a; font-size: 0.8rem; font-family: Monaco, monospace;
            line-height: 1.6; margin: 0;">
    I do my best to maintain this, but I'm only human.
    AI will help with that as much as possible.
  </p>

</div>

<!-- ════════════════════════════════════════════════════════════════
     RESEARCH REPORTS
════════════════════════════════════════════════════════════════ -->
<div style="margin-bottom: 1.25rem;">
  <h2 style="color: #00d4ff; font-family: Monaco, monospace; letter-spacing: -0.02em; margin-bottom: 0.3rem;">
    <a href="/" style="color: inherit; text-decoration: none;">Research Reports &#8599;</a>
  </h2>
  <p style="color: #aaa; font-size: 0.88rem; font-family: Monaco, monospace; margin: 0;">
    All series. Click any title to go to the report.
  </p>
</div>

<ul style="list-style: none; padding: 0; margin: 0 0 1rem;">

  <!-- Anthropic Mythos — #cc44ff (AGI neurons / Capybara tier) -->
  <li style="margin-bottom: 0.6rem; padding: 0.7rem 1rem;
             border: 1px solid #200a38; border-left: 3px solid #cc44ff;
             border-radius: 8px; background: #080010;">
    <a href="/anthropic-mythos/"
       style="color: #cc44ff; font-weight: bold; font-family: Monaco, monospace;
              font-size: 0.88rem; text-decoration: none;">
      &#129504; Anthropic Mythos
    </a>
    <span style="color: #5a3a78; font-family: Monaco, monospace; font-size: 0.78rem;">
      &mdash; v1.0 · March 2026 · CMS leak forensics, Capybara benchmark profile, $14.5B flash crash, alignment risks.
    </span>
  </li>

  <!-- OSINT Protocol — #00d4ff (matches featured CTA on index.md) -->
  <li style="margin-bottom: 0.6rem; padding: 0.7rem 1rem;
             border: 1px solid #1e2a3a; border-left: 3px solid #00d4ff;
             border-radius: 8px; background: #060d14;">
    <a href="/osint-protocol"
       style="color: #00d4ff; font-weight: bold; font-family: Monaco, monospace;
              font-size: 0.88rem; text-decoration: none;">
      &#128373;&#65039;&#8205;&#9794;&#65039; OSINT Protocol v2.0
    </a>
    <span style="color: #3a6070; font-family: Monaco, monospace; font-size: 0.78rem;">
      &mdash; Methodology explainer. How every claim is verified.
    </span>
  </li>

  <!-- AI Water Use — #00b4d8 (matches report primary accent) -->
  <li style="margin-bottom: 0.6rem; padding: 0.7rem 1rem;
             border: 1px solid #0c2a3a; border-left: 3px solid #00b4d8;
             border-radius: 8px; background: #030a14;">
    <a href="/ai-water-use-report-1/"
       style="color: #00b4d8; font-weight: bold; font-family: Monaco, monospace;
              font-size: 0.88rem; text-decoration: none;">
      AI Infrastructure &amp; Water &mdash; Water-Energy Nexus
    </a>
    <span style="color: #1e4a5a; font-family: Monaco, monospace; font-size: 0.78rem;">
      &mdash; v1.2 · LBNL, IEA &amp; HARC data · 2 interactive tools (<a href="/ai-water-use-tool-1/" style="color:#00b4d8;text-decoration:none;">per-query</a>, <a href="/ai-water-use-tool-2/" style="color:#7a3fff;text-decoration:none;">image &amp; video</a>).
    </span>
  </li>

  <!-- Synth- vs. Tech- — #b06cff (matches index.md series heading) -->
  <li style="margin-bottom: 0.6rem; padding: 0.7rem 1rem;
             border: 1px solid #2d1a4a; border-left: 3px solid #b06cff;
             border-radius: 8px; background: #100a18;">
    <a href="/synth-tech-comparison/"
       style="color: #b06cff; font-weight: bold; font-family: Monaco, monospace;
              font-size: 0.88rem; text-decoration: none;">
      Synth- vs. Tech- &mdash; Etymology &amp; Linguistics
    </a>
    <span style="color: #5a3a7a; font-family: Monaco, monospace; font-size: 0.78rem;">
      &mdash; PIE roots through Hellenic philosophy into AI futures.
    </span>
  </li>

  <!-- DLSS 5 — #76B900 (matches index.md series heading) -->
  <li style="margin-bottom: 0.6rem; padding: 0.7rem 1rem;
             border: 1px solid #243000; border-left: 3px solid #76B900;
             border-radius: 8px; background: #060d00;">
    <a href="/dlss-5-report-1-1/"
       style="color: #76B900; font-weight: bold; font-family: Monaco, monospace;
              font-size: 0.88rem; text-decoration: none;">
      DLSS 5 &mdash; Generative Neural Rendering
    </a>
    <span style="color: #3a5200; font-family: Monaco, monospace; font-size: 0.78rem;">
      &mdash; v1.0 PDF · v1.1 interactive · <a href="/3d-light-shading-1/" style="color:#22d3ee;text-decoration:none;">lighting vs. shading primer</a>.
    </span>
  </li>

  <!-- Evo 2 — #00FF9F (matches index.md series heading) -->
  <li style="margin-bottom: 0.6rem; padding: 0.7rem 1rem;
             border: 1px solid #1a4a3a; border-left: 3px solid #00FF9F;
             border-radius: 8px; background: #0a1510;">
    <a href="/evo2-report-1/"
       style="color: #00FF9F; font-weight: bold; font-family: Monaco, monospace;
              font-size: 0.88rem; text-decoration: none;">
      Evo 2 &mdash; Learning the Language of Life
    </a>
    <span style="color: #1a5a3a; font-family: Monaco, monospace; font-size: 0.78rem;">
      &mdash; Arc Institute's 40B-parameter genomic foundation model.
    </span>
  </li>

  <!-- Anti-AI Ideology — #06b6d4 (matches index.md series heading) -->
  <li style="margin-bottom: 0.6rem; padding: 0.7rem 1rem;
             border: 1px solid #0c3044; border-left: 3px solid #06b6d4;
             border-radius: 8px; background: #060e18;">
    <a href="/anti-ai-guilt-report-1"
       style="color: #06b6d4; font-weight: bold; font-family: Monaco, monospace;
              font-size: 0.88rem; text-decoration: none;">
      AI Use &amp; Anti-AI Ideology &mdash; v2.0
    </a>
    <span style="color: #1a5060; font-family: Monaco, monospace; font-size: 0.78rem;">
      &mdash; Cognitive dissonance in r/antiai · <a href="/anti-ai-guilt-info-1" style="color:#ec4899;text-decoration:none;">infographic</a> · full report.
    </span>
  </li>

  <!-- Meme Review — #ff4040 (matches index.md series heading) -->
  <li style="margin-bottom: 0.6rem; padding: 0.7rem 1rem;
             border: 1px solid #2a1010; border-left: 3px solid #ff4040;
             border-radius: 8px; background: #080808;">
    <a href="/tung-tung-tung-sahur/"
       style="color: #ff4040; font-weight: bold; font-family: Monaco, monospace;
              font-size: 0.88rem; text-decoration: none;">
      Meme Review &mdash; Tung Tung Tung Sahur
    </a>
    <span style="color: #6a2020; font-family: Monaco, monospace; font-size: 0.78rem;">
      &mdash; Italian Brainrot · AI / IP law · <a href="/ttt-info-report-1/" style="color:#ff4040;text-decoration:none;">infographic</a> · narrative report.
    </span>
  </li>

</ul>

<!-- Jekyll post loop — picks up any entries in _posts/ -->
<ul style="list-style: none; padding: 0; margin: 0 0 3rem;">
{% for post in site.posts %}
  <li style="margin-bottom: 1.5rem; padding: 1rem 1.25rem;
             border: 1px solid #333; border-radius: 8px; background: #111;">
    <div style="font-size: 0.8rem; color: #888; margin-bottom: 0.3rem;
                font-family: Monaco, monospace;">
      {{ post.date | date: "%B %d, %Y" }}
    </div>
    <a href="{{ post.url }}"
       style="color: #00d4ff; font-size: 1.05rem; font-weight: bold;
              text-decoration: none; font-family: Monaco, monospace;">
      {{ post.title }}
    </a>
  </li>
{% endfor %}
</ul>

<hr style="border-color: #1a2a3a; margin: 2.5rem 0;" />

<!-- ════════════════════════════════════════════════════════════════
     COMMENT / CONTACT
════════════════════════════════════════════════════════════════ -->
<div style="margin: 2rem 0;">

  <h2 style="color: #00d4ff; font-family: Monaco, monospace; letter-spacing: -0.02em;">
    Comment / Contact
  </h2>

  <div style="padding: 1.25rem 1.5rem;
              border: 1px solid #1a2e3a; border-left: 3px solid #00d4ff;
              border-radius: 12px; background: #060d14; margin-bottom: 1.5rem;">

    <p style="color: #7a9ab8; font-size: 0.82rem; font-family: Monaco, monospace;
              line-height: 1.65; margin: 0 0 0.6rem;">
      Comments, corrections, and questions live on
      <strong style="color: #00d4ff;">GitHub Discussions</strong> &mdash;
      fully public and auditable, no third-party form services.
      <strong style="background: rgba(232,200,50,0.1); color: #e8c840;
                     border-radius: 3px; padding: 0.05rem 0.3rem;">
        A GitHub account is required to post.</strong>
      Everything is permanently on-record and citable.
    </p>

    <p style="color: #4a6a7a; font-size: 0.78rem; font-family: Monaco, monospace;
              line-height: 1.6; margin: 0;">
      Found an error in a report? Spotted a bad source citation?
      Open a discussion and I'll review it.
    </p>

  </div>

  <a href="https://github.com/bra-khet/bra-khet.github.io/discussions/new?category=contact"
     target="_blank" rel="noopener"
     style="display: inline-block; padding: 0.85rem 1.8rem;
            background: linear-gradient(135deg, #00d4ff 0%, #0099bb 100%);
            color: #000; font-family: Monaco, monospace; font-weight: bold;
            font-size: 0.92rem; border-radius: 8px; text-decoration: none;
            letter-spacing: -0.01em; box-shadow: 0 4px 20px rgba(0,212,255,0.2);
            transition: box-shadow 0.2s, transform 0.15s;"
     onmouseover="this.style.boxShadow='0 6px 28px rgba(0,212,255,0.45)';this.style.transform='translateY(-2px)';"
     onmouseout="this.style.boxShadow='0 4px 20px rgba(0,212,255,0.2)';this.style.transform='translateY(0)';">
    &#128172; Open a Discussion on GitHub
  </a>

</div>
