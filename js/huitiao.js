setTimeout(function(){
  var popup, a=document.getElementById('header').getElementsByTagName('a')[0]

  a.onclick=function(){
    if(popup) return hide()
    a.parentElement.appendChild(linpen())
    return false
  }

  function linpen(){
    popup=document.createElement('div')
    popup.innerHTML='Hi there!'
    return popup
  }

  function hide(){
    popup.remove()
    popup=null
    return false
  }
}, 0)
