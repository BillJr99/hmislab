---
title: Blog
---

{% include page-header.html
  eyebrow="Notes from the lab"
  title="Blog"
  intro="Occasional posts: project updates, student spotlights, papers we've shipped, things we've learned."
%}

<div class="blog-list">
{% assign posts_byyear = site.posts | sort: "date" | reverse | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for yeargroup in posts_byyear %}
<section class="blog-year">
  <span class="blog-year_label card_search_hide">{{ yeargroup.name }}</span>

  {% for post in yeargroup.items %}
  <article class="card blog-entry">
    <div class="blog-entry_meta">
      <time class="blog-entry_date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%B %d, %Y' }}</time>
      {% if post.author %}
      <span class="blog-entry_author">
        {% if post.member-page %}
        <a href="{{ post.member-page | prepend: 'members/' | relative_url }}">{{ post.author }}</a>
        {% else %}
        {{ post.author }}
        {% endif %}
      </span>
      {% endif %}
    </div>

    <h2 class="blog-entry_title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>

    {% if post.tags %}
    <div class="blog-entry_tags">
      {% include tags.html tags=post.tags %}
    </div>
    {% endif %}

    <p class="blog-entry_excerpt">{{ post.content | strip_html | truncate: 280 }}</p>

    <a href="{{ post.url | relative_url }}" class="blog-entry_link">
      Read the post
      <span aria-hidden="true">→</span>
    </a>
  </article>
  {% endfor %}
</section>
{% endfor %}
</div>
