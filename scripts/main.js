
window.addEventListener('DOMContentLoaded', () => {


  const icons = document.querySelectorAll('.icon')
  const soundWoosh = document.querySelector('.soundWoosh')


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
