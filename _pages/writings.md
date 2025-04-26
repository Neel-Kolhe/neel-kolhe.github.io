---
title: "Other Writings"
permalink: /writings/
author_profile: true
---

{% include base_path %}

{% for writing in site.data.writings %}
  <div class="list__item">
    <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
      <h2 class="archive__item-title" itemprop="headline">
        <a href="{{ writing.url }}">{{ writing.title }}</a>
      </h2>
      {% if writing.excerpt %}<p class="archive__item-excerpt" itemprop="description">{{ writing.excerpt }}</p>{% endif %}
      {% if writing.date %}<p class="page__meta">{{ writing.date | date: "%B %d, %Y" }}</p>{% endif %}
    </article>
  </div>
{% endfor %}
