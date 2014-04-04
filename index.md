---
layout: default
title: Ушу в Екатеринбурге
---
## 欢迎!

{% for z in site.posts %}
  <h3>{% if z.important%}+{% endif %}<a href="{{ z.url }}">{{ z.title }}</a></h1>
  <div class='content'>
    {{z.excerpt}}
  </div>
{% endfor %}

----
[Все новости](/xinwen/)
