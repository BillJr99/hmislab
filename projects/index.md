---
title: Projects
---

# <i class="fas fa-flask"></i>Projects

<!-- section break -->

### Active

{% capture html %}
{% include project-list.html status="active" size="large" %}
{% endcapture %}

{% include centerer.html html=html %}

<!-- section break -->

### Completed

{% capture html %}
{% include project-list.html status="completed" size="small" %}
{% endcapture %}

{% include centerer.html html=html %}
