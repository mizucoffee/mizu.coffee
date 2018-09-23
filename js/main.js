let current = 0
let inAnimation = false
let icon
let works
let page3_2
let page_count = 0
const page = []
const colors = ['#FFDDCD','#FFFBCD','#CDFFD4','#CDFEFF','#CDE3FF']

function plus() {
  if(current >= page_count) return
  current++
  inAnimation = true
  animation()
}

function minus() {
  if(current <= 0) return
  current--
  inAnimation = true
  animation()
}

function jump(i) {
  if(i < 0 || i > page_count) return
  current = i
  inAnimation = true
  animation()
}

function animation() {
  page.forEach(e => e.classList.remove('active'))
  page[current].classList.add('active')
  icon.className= `icon${current}`
  works.classList.remove('active')
  page3_2.classList.remove('active')
  if(current == 2) works.classList.add('active')
  if(current == 3) page3_2.classList.add('active')
  document.body.style.background = colors[current]
  setTimeout(() => inAnimation = false,1000)
}

window.onload = () => {
  icon = document.getElementById('icon')
  works = document.getElementsByClassName('works')[0]
  page3_2 = document.getElementsByClassName('page3-2')[0]
  page_count = document.getElementsByTagName('section').length - 1
  for (let i = 0; i <= page_count; i++)
    page[i] = document.getElementsByClassName(`page${i}`)[0]

  addEventListener('wheel', event => {
    if(inAnimation) return
    if(0 == event.deltaY) return
    if(0 < event.deltaY) plus()
    if(0 > event.deltaY) minus()
  })

  addEventListener('keydown', event => {
    switch(event.keyCode) {
      case 32:
      case 34:
      case 40:
        plus()
        break;
      case 33:
      case 38:
        minus()
        break;
    }
    if(event.keyCode >= 97 && event.keyCode <= 97 + page_count) jump(event.keyCode - 97)
  })

  let touch

  addEventListener('touchstart', event => {
    if(inAnimation) return
    touch = event.touches[0].pageY
  })

  addEventListener('touchmove', event => {
    if(inAnimation) return
    if( touch > event.changedTouches[0].pageY) plus()
    if( touch < event.changedTouches[0].pageY) minus()
  })
}
