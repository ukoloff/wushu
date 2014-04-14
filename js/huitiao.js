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
Введите номер телефона\
</form>\
'
    popup.getElementsByTagName('a')[0].onclick=hide
    return popup
  }

  function hide(){
    popup.remove()
    popup=null
    return false
  }
}, 0)
