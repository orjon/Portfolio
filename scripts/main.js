window.addEventListener('DOMContentLoaded', () => {

  const icons = document.querySelectorAll('.icon')
  const soundWoosh = document.querySelector('.soundWoosh')
  // const basicScroll = require('basicscroll')

  //
  // const root = document.documentElement
  // const style = document.documentElement.style
  //
  //
  //
  // function randomizeAnimDist() {
  //   let animDist = Math.random()*100
  //   console.log(animDist)
  //   style.setProperty('--animDist1', animDist)
  //   // root.style.setProperty('--animDist1', (animDist) + 'px')
  //   // animDist = Math.random()*100
  //   // console.log(animDist)
  //   // root.style.setProperty('--animDist2', (animDist) + 'px')
  //   // animDist = Math.random()*100
  //   // console.log(animDist)
  //   // root.style.setProperty('--animDist3', (animDist) + 'px')
  //   // animDist = Math.random()*100
  //   // console.log(animDist)
  //   // root.style.setProperty('--animDist4', (animDist) + 'px')
  //   // animDist = Math.random()*100
  //   // console.log(animDist)
  //   // root.style.setProperty('--animDist5', (animDist) + 'px')
  //   // animDist = Math.random()*100
  //   // console.log(animDist)
  //   // root.style.setProperty('--animDist6', (animDist) + 'px')
  // }
  //
  // setInterval(randomizeAnimDist,500)

  icons.forEach(name => {
    name.addEventListener('mouseover', () => {
      soundWoosh.playbackRate = 1
      soundWoosh.currentTime = 0
      soundWoosh.play()
    })
  })

  // const instance = basicScroll.create({
  //   elem: document.getElementById('circleWhite'),
  //   from: 'top-bottom',
  //   to: 'middle-middle',
  //   props: {
  //     '--opacity': {
  //       from: .99,
  //       to: .5
  //     }
  //   }
  // })
  //
  // instance.start()



})
