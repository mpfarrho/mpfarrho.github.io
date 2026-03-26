---
layout: page
permalink: /research/
title: Research
nav: true
nav_order: 3
---

<div class="publications">

<h2>Working Papers</h2>

{% bibliography --query @unpublished %}

<h2>Published Papers</h2>

{% bibliography --query @article,@incollection %}

</div>
