---
title: Resources
---

{% include page-header.html
  eyebrow="Things we've made and things we recommend"
  title="Resources"
  intro="Software the lab has released, and a small reading list of tutorials and lectures we point students to most often."
%}

<div class="resources-page">

{%- assign featured = site.data.resources | where: "type", "featured" -%}
{%- assign tutorials = site.data.resources | where: "type", "tutorial" -%}

{%- if featured.size > 0 -%}
<section class="resources-section resources-section--featured">
  <div class="resources-section_header">
    <span class="resources-section_eyebrow">Software from the lab</span>
    <p class="resources-section_lead">Tools, frameworks, and demos the lab has released. Source is open where the project allows.</p>
  </div>

  <div class="resources-list">
    {%- for resource in featured -%}
      <article class="card resource-entry" data-type="featured">
        {%- if resource.link -%}
        <a class="resource-entry_thumbnail" href="{{ resource.link }}" tabindex="-1" aria-hidden="true">
          {%- if resource.image -%}
          <img src="{{ resource.image | relative_url }}" alt="" loading="lazy"
            onerror="this.src='{{ '/images/placeholder.svg' | relative_url }}'; this.onerror = null;" />
          {%- else -%}
          <img src="{{ '/images/placeholder.svg' | relative_url }}" alt="" loading="lazy" />
          {%- endif -%}
        </a>
        {%- else -%}
        <div class="resource-entry_thumbnail">
          {%- if resource.image -%}
          <img src="{{ resource.image | relative_url }}" alt="" loading="lazy" />
          {%- else -%}
          <img src="{{ '/images/placeholder.svg' | relative_url }}" alt="" loading="lazy" />
          {%- endif -%}
        </div>
        {%- endif -%}

        <div class="resource-entry_text">
          <h2 class="resource-entry_title">
            {%- if resource.link -%}
            <a href="{{ resource.link }}">{{ resource.title }}</a>
            {%- else -%}
            {{ resource.title }}
            {%- endif -%}
          </h2>
          {%- if resource.description -%}
          <p class="resource-entry_description">{{ resource.description }}</p>
          {%- endif -%}
          {%- if resource.repo -%}
          <div class="resource-entry_tags">
            {%- include tags.html repo=resource.repo -%}
          </div>
          {%- endif -%}
        </div>
      </article>
    {%- endfor -%}
  </div>
</section>
{%- endif -%}

{%- if tutorials.size > 0 -%}
<section class="resources-section resources-section--tutorials">
  <div class="resources-section_header">
    <span class="resources-section_eyebrow">Tutorials and lectures</span>
    <p class="resources-section_lead">External videos and courses we recommend to students starting in the lab.</p>
  </div>

  <div class="resources-list resources-list--compact">
    {%- for resource in tutorials -%}
      <article class="card resource-entry resource-entry--compact" data-type="tutorial">
        {%- if resource.link -%}
        <a class="resource-entry_thumbnail" href="{{ resource.link }}" tabindex="-1" aria-hidden="true">
          {%- if resource.image -%}
          <img src="{{ resource.image | relative_url }}" alt="" loading="lazy" />
          {%- else -%}
          <img src="{{ '/images/placeholder.svg' | relative_url }}" alt="" loading="lazy" />
          {%- endif -%}
        </a>
        {%- endif -%}
        <div class="resource-entry_text">
          <h3 class="resource-entry_title">
            {%- if resource.link -%}
            <a href="{{ resource.link }}">{{ resource.title }}</a>
            {%- else -%}
            {{ resource.title }}
            {%- endif -%}
          </h3>
          {%- if resource.description -%}
          <p class="resource-entry_description">{{ resource.description }}</p>
          {%- endif -%}
        </div>
      </article>
    {%- endfor -%}
  </div>
</section>
{%- endif -%}

</div>
