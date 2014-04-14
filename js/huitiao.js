setTimeout(function(){
  var a=document.getElementById('header').getElementsByTagName('a')[0]
  a.onclick=function(){
    alert('Hi there!')
    return false
  }
}, 0)
