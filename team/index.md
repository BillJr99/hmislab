---
title: Team
---

<div class="team-page">

<div class="team-header">
<div class="team-header_inner">

<span class="team-header_eyebrow">Who's in the lab</span>
<h1 class="team-header_title">Team</h1>
<p class="team-header_intro">
Undergraduates do most of the work here. The lab is small, the doors are open, and most projects are real research with real outcomes. If you see someone whose work sounds interesting, write to them.
</p>

</div>
</div>

{%- assign pi = site.members | where: "role", "pi" | first -%}
{%- if pi -%}
<section class="team-pi">
  {%- include member-feature.html member=pi -%}
</section>
{%- endif -%}

{%- assign current_count = site.members | where: "group", "current" | size -%}
{%- if pi -%}{%- assign current_undergrads = current_count | minus: 1 -%}
{%- else -%}{%- assign current_undergrads = current_count -%}{%- endif -%}

{%- capture current_lead -%}{{ current_undergrads }} undergraduates exploring authentic problem spaces.{%- endcapture -%}

{%- include team-grid.html
  modifier="current"
  eyebrow="Current"
  lead=current_lead
  group="current"
  exclude_role="pi"
-%}

{%- assign alum_count = site.members | where: "group", "alum" | size -%}

{%- capture alumni_lead -%}{{ alum_count }} undergraduates whose work is part of how the lab learned to do this.{%- endcapture -%}

{%- include team-grid.html
  modifier="alumni"
  eyebrow="Alumni"
  lead=alumni_lead
  group="alum"
-%}

</div>
