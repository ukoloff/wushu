---
layout: default
title: Ушу в Екатеринбурге
---
## 欢迎!

{% for imp in (0..1) %}
  {% for z in site.posts %}
    {% assign active = 0 %}
    {% if z.important %}
      {% if imp == 0 %}{% assign active = 1 %}{% endif %}
    {% else %}
      {% if imp > 0 %}{% assign active = 1 %}{% endif %}
    {% endif %}
    {% if active > 0 %}
<h3><a href="{{ z.url }}">{{ z.title }}</a></h1>
<div class='content'>
  {{z.excerpt}}
</div>
    {% endif %}
  {% endfor %}
{% endfor %}

----
[Все новости](/xinwen/)
