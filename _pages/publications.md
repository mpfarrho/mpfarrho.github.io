---
layout: research
permalink: /research/
title: Research
description: Research, working papers and publications of Michael Pfarrhofer, Assistant Professor at WU Vienna.
nav: true
nav_order: 2
# Publication sections rendered by _layouts/research.liquid: one TOC entry and
# one {% bibliography %} block per section. The query is a jekyll-scholar
# BibTeX type filter; titles may contain inline HTML entities (emitted raw).
sections:
  - id: working
    title: Working papers
    query: "@unpublished"
  - id: published
    title: Published papers
    query: "@article"
  - id: chapters
    title: Book chapters
    query: "@incollection"
  - id: media
    title: Policy &amp; media
    query: "@misc"
---

<p class="lead">
  You can also find my research on
  <a href="https://scholar.google.at/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a> and
  <a href="https://www.semanticscholar.org/author/{{ site.data.socials.semanticscholar_id }}">Semantic Scholar</a>; most past and present working papers are
  listed in my <a href="https://arxiv.org/a/{{ site.data.socials.arxiv_id }}">arXiv profile</a>, and a full publication list is available on
  <a href="{{ site.data.socials.repec.url }}">RePEc</a>.
</p>
