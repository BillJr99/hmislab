---
title: Home
hero: true
hero_eyebrow: HMIS Lab - Ursinus College
hero_title: 'Computing that makes life <em>better</em>.'
hero_subtitle: Use-inspired research at the intersection of teaching, learning, and biomedicine, with a commitment to AI that explains itself.
hero_cta_primary_label: See our research
hero_cta_primary_href: research
hero_cta_secondary_label: Meet the team
hero_cta_secondary_href: team
---

{% include pi-welcome.html %}

{% for spread in site.data.featured.home %}
{% include spread.html
  side=spread.side
  eyebrow=spread.eyebrow
  title=spread.title
  body=spread.body
  image=spread.image
  alt=spread.alt
  link=spread.link
  link_label=spread.link_label
%}
{% endfor %}

{% include team-peek.html %}
