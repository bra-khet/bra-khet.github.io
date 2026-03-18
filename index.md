---
layout: default
title: bra-khet
---

<div style="margin-bottom: 2rem;">
  <h2 style="color: #00d4ff;">Research Reports</h2>
  <p style="color: #aaa; font-size: 0.95rem;">Technical analysis and research documents.</p>
</div>

<ul style="list-style: none; padding: 0; margin: 0;">
{% for post in site.posts %}
  <li style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #333; border-radius: 8px; background: #111;">
    <div style="font-size: 0.8rem; color: #888; margin-bottom: 0.3rem;">
      {{ post.date | date: "%B %d, %Y" }}
    </div>
    <a href="{{ post.url }}" style="color: #00d4ff; font-size: 1.1rem; font-weight: bold; text-decoration: none;">
      {{ post.title }}
    </a>
  </li>
{% endfor %}
</ul>
