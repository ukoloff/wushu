---
layout: default
title:  Стоимость
price:
  - n: 4
    d: 1000
    v: 1400
  - n: 8
    d: 1800
    v: 2400
  - n: 12
    d: 2500
    v: 3000
  - n: 16
    d: 3200
    v: 3600
  - n: 24
    d: 4000
    v: 4000
columns:
  - Количество занятий в месяц
  - Стоимость абонемента
  - Стоимость одного занятия
---
##Для детей

Абонемент на месяц

<table border>
  <tr>
    {% for z in page.columns %}<th>{{ z }}</th>{% endfor %}
  </tr>
  {% for z in page.price %}
  <tr>
    <td>{{z.n}}</td>
    <td>{{z.d}}</td>
    <td>{{z.d | divided_by: z.n}}</td>
  </tr>
  {% endfor %}
</table>

Пробное занятие (только 1 раз) - 150 руб.

Разовая оплата - 300 руб/1 занятие.

##Для взрослых

Абонемент на месяц

<table border>
  <tr>
    {% for z in page.columns %}<th>{{ z }}</th>{% endfor %}
  </tr>
  {% for z in page.price %}
  <tr>
    <td>{{z.n}}</td>
    <td>{{z.v}}</td>
    <td>{{z.v | divided_by: z.n}}</td>
  </tr>
  {% endfor %}
</table>

Пробное занятие (только 1 раз) - 200 руб.

Разовая оплата - 400 руб/1 занятие.
