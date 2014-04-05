# wushu[.ukoloff.tk]

Тестовый сайт на GitHub Pages

## Используемые технологии

* [GitHub Pages](https://pages.github.com/)
  - [Git](http://git-scm.com/)
  - [GitHub](https://github.com/)
* [Jekyll](http://jekyllrb.com/)
  - Языки разметки
    + [HTML](http://ru.wikipedia.org/wiki/HTML)
    + [Markdown](http://ru.wikipedia.org/wiki/Markdown)
    + [Textile](http://ru.wikipedia.org/wiki/Textile_(%D1%8F%D0%B7%D1%8B%D0%BA_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B8))
  - [Liquid](http://liquidmarkup.org/)
  - [CSS](http://ru.wikipedia.org/wiki/CSS)
  - [YAML](http://ru.wikipedia.org/wiki/YAML)

## Установка

### Jekyll

Для установки Jekyll нужно:

1. Установить сначала язык [Ruby](https://www.ruby-lang.org/)

  Лучше всего скачать его с http://rubyinstaller.org/downloads/ (версия 2.0.0, лучше 32-битную версию)

2. Установить компилятор для Ruby-пакетов DevKit

  Скачать его с той же страницы, распаковать в любую папку (например C:\Ruby200\DevKit) и запустить команды
  ```sh
  ruby dk.rb init
  ruby dk.rb install
  ```
3. Установить необходимые пакеты

  ```sh
  gem install jekyll
  gem install jekyll-redirect-from
  gem install wdm
  ```

### Git

Можно пользоваться утилитой командной строки `git`, но это явно не вариант для начинающих. Так что
вариантов два:

- [GitHub для Windows](https://windows.github.com/) - минимум функций, английский язык
- [SourceTree](http://www.sourcetreeapp.com/) - множество возможностей, русский язык, через месяц
требуется бесплатная регистрация

### Редактор

Крайне рекомендуется пользоваться качественным редактором, например [SublimeText](http://www.sublimetext.com/) -
периодически предлагает заплатить, но работает и так ;-)

