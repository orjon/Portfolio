window.addEventListener('DOMContentLoaded', () => {

  const icons = document.querySelectorAll('.icon')
  const soundWoosh = document.querySelector('.soundWoosh')

  window.onload = function (){
    checkWindowSize()
  }

  window.onresize = function(){
    checkWindowSize()
  }

  function checkWindowSize(){
    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    if (windowWidth < windowHeight){
      document.documentElement.style.setProperty('--oSize', '70vw')
      document.documentElement.style.setProperty('--fontSizeHello', '4vw')
    } else {
      document.documentElement.style.setProperty('--oSize', '70vh')
      document.documentElement.style.setProperty('--fontSizeHello', '4vh')
    }
  }


  icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      var sound = new Audio()
      sound.src = soundWoosh.src
      sound.playbackRate = 1
      sound.currentTime = 0
      // sound.play()
    })
  })

})
