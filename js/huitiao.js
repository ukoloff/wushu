setTimeout(function(){
  var popup, a=document.getElementById('header').getElementsByTagName('a')[0]

  a.onclick=function(){
    if(popup){
      popup.remove()
      popup=null
      return false
    }
    popup=document.createElement('div')
    popup.innerHTML='Hi there!'
    a.parentElement.appendChild(popup)
    return false
  }
}, 0)
