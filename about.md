---
layout: default
title: bra-khet
---

<!-- ════════════════════════════════════════════════════════════════
     MISSION STATEMENT
════════════════════════════════════════════════════════════════ -->
<div style="margin: 2rem 0 2.5rem; padding: 1.4rem 1.6rem;
            border: 1px solid #1a2e3a; border-left: 3px solid #00d4ff;
            border-radius: 12px; background: #060d14;">

  <p style="color: #00d4ff; font-size: 0.72rem; font-family: Monaco, monospace;
            text-transform: uppercase; letter-spacing: 0.14em; margin: 0 0 0.9rem;">
    OSINT Research Protocol v2.0 &mdash; Archive
  </p>

  <p style="color: #c8dce8; font-size: 0.95rem; font-family: Monaco, monospace;
            line-height: 1.75; margin: 0 0 0.85rem;">
    Hey &mdash; I'm a hobbyist analyst who can't stop chasing interesting problems
    across whatever domain happens to be on fire that week. This site is the output:
    structured, sourced, reproducible research on topics I actually find fascinating.
  </p>

  <p style="color: #7a9ab8; font-size: 0.875rem; font-family: Monaco, monospace;
            line-height: 1.7; margin: 0 0 0.85rem;">
    The archive covers neural rendering &amp; DLSS 5, Evo&nbsp;2 genomic models,
    synth-/tech- etymology, anti-AI cognitive dissonance, meme IP law, and 3D
    graphics fundamentals &mdash; with more in the pipeline. Everything runs through
    the same OSINT protocol: scored sources, reproducible steps, explicit uncertainty.
    No vibes-based claims.
  </p>

  <p style="color: #4a7a8a; font-size: 0.8rem; font-family: Monaco, monospace;
            line-height: 1.6; margin: 0;">
    Think of it as a personal research journal that happens to be public and citable.
    If something's wrong, the methodology section will tell you exactly where to poke holes.
  </p>

</div>

<!-- ════════════════════════════════════════════════════════════════
     RESEARCH REPORTS (dynamic post list)
════════════════════════════════════════════════════════════════ -->
<div style="margin-bottom: 1.5rem;">
  <h2 style="color: #00d4ff; font-family: Monaco, monospace; letter-spacing: -0.02em;">
    Research Reports
  </h2>
  <p style="color: #aaa; font-size: 0.88rem; font-family: Monaco, monospace;">
    Technical analysis and research documents, newest first.
  </p>
</div>

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
     COMMENT / CONTACT VIA GITHUB DISCUSSIONS
════════════════════════════════════════════════════════════════ -->
<div style="margin: 2rem 0;">

  <h2 style="color: #00d4ff; font-family: Monaco, monospace; letter-spacing: -0.02em;">
    Comment
  </h2>

  <div style="padding: 1.25rem 1.5rem;
              border: 1px solid #1a2e3a; border-left: 3px solid #00d4ff;
              border-radius: 12px; background: #060d14; margin-bottom: 1.5rem;">

    <p style="color: #7a9ab8; font-size: 0.82rem; font-family: Monaco, monospace;
              line-height: 1.65; margin: 0 0 0.6rem;">
      Comments, corrections, and questions live on
      <strong style="color: #00d4ff;">GitHub Discussions</strong> &mdash;
      fully public and auditable, no third-party form services.
      A GitHub account is required to post; everything is permanently
      on-record and citable.
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
