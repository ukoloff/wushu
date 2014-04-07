# wushu[.ukoloff.tk]

Тестовый сайт на GitHub Pages

## Используемые технологии

* [GitHub Pages](https://pages.github.com/) - хостинг **статических** сайтов
  - [Git](http://git-scm.com/)
  - [GitHub](https://github.com/)
* [Jekyll](http://jekyllrb.com/) - программа для генерации статических сайтов
  - Языки разметки
    + [HTML](http://ru.wikipedia.org/wiki/HTML) - основной язык разметки вебстраниц
    + [Markdown](http://ru.wikipedia.org/wiki/Markdown) - простой язык, транслируемый в HTML
    + [Textile](http://ru.wikipedia.org/wiki/Textile_(%D1%8F%D0%B7%D1%8B%D0%BA_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B8))
  - [Liquid](http://liquidmarkup.org/) - язык шаблонов для генерации сложных страниц
  - [CSS](http://ru.wikipedia.org/wiki/CSS) - язык описания дизайна Веб-страниц
  - [YAML](http://ru.wikipedia.org/wiki/YAML)
* [Disqus](http://disqus.com/) - сервис комментариев
* [Dot TK](http://www.dot.tk/) - бесплатная регистрация доменных имён .tk

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

Рекомендуется добавить в настройки SublimeText (Preferenses / Settings - User)

  ```
    "default_line_ending": "unix",
    "ensure_newline_at_eof_on_save": true,
    "fade_fold_buttons": false,
    "tab_size": 2,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "use_tab_stops": true,
    "word_wrap": false
   ```
### GitHub

Требуется зарегистрировать учётную запись на [GitHub](https://github.com/)

### Dot TK

Если нужно доменное имя в домене .tk, потребуется учётная запись в [Dot TK](http://www.dot.tk/)
(можно использовать учётные записи  [Facebook](https://www.facebook.com/) или
[Google](https://www.google.ru/))

## Файлы в репозитории

### [/run.bat](/run.bat)

Запуск Jekyll на локальной машине в отладочном режиме.

Всё содержимое каталога компилируется (в папку `_site`),
запускается веб-сервер, веб-браузер и начинается процесс отслеживания изменений файлов
в репозитории. При изменении (почти) любого файла он тут же перекомпилируется.

Не отслеживаются только изменения в файле конфигурации (_config.yml), если изменения внесены в него,
Jekyll требуется перезапустить.
