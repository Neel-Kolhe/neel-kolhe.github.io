---
title: "Other Writings"
permalink: /writings/
author_profile: true
---

{% include base_path %}

{% for post in site.data.writings %}
  {% include archive-single.html %}
{% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
