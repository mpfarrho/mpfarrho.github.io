---
layout: research
permalink: /research/
title: Research
subtitle: Publications &amp; working papers
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

<nav class="profiles" aria-label="Research profiles">
  <a href="https://scholar.google.at/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a>
  <a href="https://www.semanticscholar.org/author/{{ site.data.socials.semanticscholar_id }}">Semantic Scholar</a>
  <a href="https://arxiv.org/a/{{ site.data.socials.arxiv_id }}">arXiv</a>
  <a href="{{ site.data.socials.repec.url }}">{{ site.data.socials.repec.title }}</a>
</nav>
