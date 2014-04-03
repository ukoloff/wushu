---
layout: default
title:  Стоимость
price:
- title: Для детей
  first: 150
  once:  300
  batch:
    4:  1000
    8:  1800
    12: 2500
    16: 3200
    24: 4000
- title: Для взрослых
  first: 200
  once:  400
  batch:
    4:  1400
    8:  2400
    12: 3000
    16: 3600
    24: 4000
columns:
  - Количество занятий в месяц
  - Стоимость абонемента
  - Стоимость одного занятия
---
{% for z in page.price %}
##{{z.title}}
Абонемент на месяц

<table border>
  <tr>
    {% for q in page.columns %}<th>{{ q }}</th>{% endfor %}
  </tr>
  {% for q in z.batch %}
  <tr align='right'>
    <td>{{ q[0] }}</td>
    <td>{{ q[1] }}</td>
    <td>{{ q[1] | divided_by: q[0] }}</td>
  </tr>
  {% endfor %}
</table>

Пробное занятие (только 1 раз) - {{ z.first }} руб.

Разовая оплата - {{ z.once }} руб/1 занятие.

{% endfor %}

**Стоимость персонального занятия для взрослых и детей - 1000 руб/час.**
