setTimeout(function(){
  var popup, a=document.getElementById('header').getElementsByTagName('a')[0]

  a.onclick=function(){
    if(popup) return hide()
    a.parentElement.appendChild(linpen())
    return false
  }

  function linpen(){
    popup=document.createElement('div')
    popup.innerHTML='<h2>Обратный звонок<a href="#" class="close" title="Закрыть">&times;</a></h2>\
<form>\
Укажите Ваш телефон<br>и мы Вам перезвоним:<br>\
<label><div>Имя</div><input type="text" name="name"></label>\
<label><div>Телефон</div><input type="text" name="tel"></label>\
<label><div>E-mail</div><input type="text" name="mail"></label>\
<label><div>Когда удобно звонить</div><input type="text" name="time"></label>\
<label><div>Примечания</div><textarea name="notes"></textarea></label>\
<br><input type="submit" value="Позвоните мне!">\
</form>\
'
    popup.getElementsByTagName('a')[0].onclick=hide
    z=popup.getElementsByTagName('input')
    z[z.length-1].onclick=hide
    return popup
  }

  function hide(){
    popup.parentNode.removeChild(popup)
    popup=null
    return false
  }
}, 0)
