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

<h2>Working Papers</h2>

{% bibliography --query @unpublished %}

<h2>Published Papers</h2>

{% bibliography --query @article %}

<h2>Book Chapters</h2>

{% bibliography --query @incollection %}

<h2>Policy and Media</h2>

{% bibliography --query @misc %}

</div>
