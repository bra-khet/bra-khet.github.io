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
      {% if post.tags.size > 0 %}
        &nbsp;·&nbsp;
        {% for tag in post.tags limit:3 %}
          <span style="background: #222; color: #00d4ff; padding: 1px 6px; border-radius: 3px; font-size: 0.75rem;">{{ tag }}</span>
        {% endfor %}
      {% endif %}
    </div>
    <a href="{{ post.url }}" style="color: #00d4ff; font-size: 1.1rem; font-weight: bold; text-decoration: none;">
      {{ post.title }}
    </a>
    {% if post.excerpt %}
      <p style="color: #aaa; margin: 0.4rem 0 0; font-size: 0.9rem;">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>
