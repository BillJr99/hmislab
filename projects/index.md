---
title: Projects
---

<div class="projects-page">

<div class="projects-header">
<div class="projects-header_inner">

<span class="projects-header_eyebrow">What we're working on</span>
<h1 class="projects-header_title">Projects</h1>
<p class="projects-header_intro">
What follows is the lab's working portfolio. Active projects are the work in motion, often with outside collaborators. Completed projects are software we have released and the published or presented work that came out of independent studies and undergraduate research.
</p>

</div>
</div>

{%- assign active_projects = site.data.projects | where: "status", "active" -%}
{%- assign completed_projects = site.data.projects | where: "status", "completed" -%}
{%- assign completed_software = completed_projects | where: "type", "software" -%}
{%- assign completed_student = completed_projects | where: "type", "student" -%}
{%- assign completed_research = completed_projects | where: "type", "research" -%}

{%- if active_projects.size > 0 -%}
<section class="projects-active">
  <div class="projects-active_header">
    <span class="projects-active_eyebrow">Active</span>
    <p class="projects-active_lead">What we are building right now, with collaborators and students.</p>
  </div>

  <div class="projects-active_features">
    {%- for project in active_projects -%}
      {%- assign side = "image-left" -%}
      {%- assign idx = forloop.index0 -%}
      {%- assign mod = idx | modulo: 2 -%}
      {%- if mod == 1 -%}{%- assign side = "image-right" -%}{%- endif -%}
      {%- include project-feature.html project=project side=side -%}
    {%- endfor -%}
  </div>
</section>
{%- endif -%}

{%- if completed_projects.size > 0 -%}
<section class="projects-completed">
  <div class="projects-completed_header">
    <span class="projects-completed_eyebrow">Completed</span>
    <p class="projects-completed_lead">Software we have released, papers we have written, and the undergraduate work behind much of it.</p>
  </div>

  {%- if completed_software.size > 0 -%}
  <div class="projects-completed_subgroup">
    <span class="projects-completed_sublabel">Software</span>
    <div class="projects-completed_entries">
      {%- for project in completed_software -%}
        {%- include project-entry.html project=project -%}
      {%- endfor -%}
    </div>
  </div>
  {%- endif -%}

  {%- if completed_research.size > 0 -%}
  <div class="projects-completed_subgroup">
    <span class="projects-completed_sublabel">Past Research Projects</span>
    <div class="projects-completed_entries">
      {%- for project in completed_research -%}
        {%- include project-entry.html project=project -%}
      {%- endfor -%}
    </div>
  </div>
  {%- endif -%}

  {%- if completed_student.size > 0 -%}
  <div class="projects-completed_subgroup">
    <span class="projects-completed_sublabel">Student Research</span>
    <div class="projects-completed_entries">
      {%- for project in completed_student -%}
        {%- include project-entry.html project=project -%}
      {%- endfor -%}
    </div>
  </div>
  {%- endif -%}
</section>
{%- endif -%}

</div>
