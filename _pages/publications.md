---
layout: page
permalink: /research/
title: Research
nav: true
nav_order: 3
toc:
  sidebar: left
---

<div class="publications">

<p>You can also find my research on <a href="https://scholar.google.at/citations?user=ymlNJ_UAAAAJ" target="_blank">Google</a> and <a href="https://www.semanticscholar.org/author/Michael-Pfarrhofer/88739014" target="_blank">Semantic</a> Scholar, most past/present working papers are listed in my <a href="https://arxiv.org/search/?query=Michael+Pfarrhofer&searchtype=author&abstracts=show&order=-announced_date_first&size=50" target="_blank">arXiv</a> profile, and a full publication list is available on <a href="https://ideas.repec.org/e/ppf31.html" target="_blank">RePec</a>.</p>

<h2>Working Papers</h2>

{% bibliography --query @unpublished %}

<h2>Published Papers</h2>

{% bibliography --query @article %}

<h2>Book Chapters</h2>

{% bibliography --query @incollection %}

<h2>Policy and Media</h2>

{% bibliography --query @misc %}

</div>
