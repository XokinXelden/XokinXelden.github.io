let ShowHideBlock1 = document.querySelector('.ShowHideBlock1')
let ShowHideBlock2 = document.querySelector('.ShowHideBlock2')
let ShowHide = document.querySelector('.ShowHide')
let ShowHideBack = document.querySelector('.blur-background')

ShowHideBlock1.addEventListener('click', () => {
  console.log('click')
  if (ShowHide.style.left === '') {
    console.log('1')
    ShowHide.style.left = '0px'
    ShowHideBack.style.animation = 'RBShow 0.3s forwards'
    ShowHideBack.style.pointerEvents = 'auto'
    console.log(ShowHide.style.left)
  } else if (ShowHide.style.left === '0px') {
    console.log('2')
    ShowHide.style.left = ''
    ShowHideBack.style.animation = 'RBHide 0.3s forwards'
    ShowHideBack.style.pointerEvents = 'none'
  }
})
ShowHideBlock2.addEventListener('click', () => {
  if (ShowHide.style.left === '') {
    console.log('1')
    ShowHide.style.left = '0px'
    ShowHideBack.style.animation = 'RBShow 0.3s forwards'
    ShowHideBack.style.pointerEvents = 'auto'
    console.log(ShowHide.style.left)
  } else if (ShowHide.style.left === '0px') {
    console.log('2')
    ShowHide.style.left = ''
    ShowHideBack.style.animation = 'RBHide 0.3s forwards'
    ShowHideBack.style.pointerEvents = 'none'
    console.log(ShowHide.style.left)
  }
})

let ShowHideBlockFeed1 = document.querySelector(
  '.R-HideBlock-feedback__close-btn'
)
let ShowHideBlockFeed2 = document.querySelector('.icons__chat')
let ShowHideFeed = document.querySelector('.R-HideBlock-feedback')

ShowHideBlockFeed1.addEventListener('click', () => {
  console.log('click')
  if (ShowHideFeed.style.opacity === '0') {
    console.log('Проявляю')
    ShowHideFeed.style.opacity = '1'
    ShowHideFeed.style.animation = 'RBShow 0.3s forwards'
    ShowHideFeed.style.pointerEvents = 'auto'
    console.log(ShowHideFeed.style.opacity)
  } else if (ShowHideFeed.style.opacity === '1') {
    console.log('Делаю прозрачным')
    ShowHideFeed.style.opacity = '0'
    ShowHideFeed.style.animation = 'RBHide 0.3s forwards'
    ShowHideFeed.style.pointerEvents = 'none'
  }
})
ShowHideBlockFeed2.addEventListener('click', () => {
  console.log('click')
  if (ShowHideFeed.style.opacity === '0') {
    console.log('Проявляю')
    ShowHideFeed.style.opacity = '1'
    ShowHideFeed.style.animation = 'RBShow 0.3s forwards'
    ShowHideFeed.style.pointerEvents = 'auto'
    console.log(ShowHideFeed.style.opacity)
  } else if (ShowHideFeed.style.opacity === '1') {
    console.log('Делаю прозрачным')
    ShowHideFeed.style.opacity = '0'
    ShowHideFeed.style.animation = 'RBHide 0.3s forwards'
    ShowHideFeed.style.pointerEvents = 'none'
    console.log(ShowHideFeed.style.opacity)
  }
})

let ShowHideBlockCall1 = document.querySelector('.R-HideBlock-call__close-btn')
let ShowHideBlockCall2 = document.querySelector('.icons__call')
let ShowHideCall = document.querySelector('.R-HideBlock-call')

ShowHideBlockCall1.addEventListener('click', () => {
  console.log('click')
  if (ShowHideCall.style.opacity === '0') {
    console.log('Проявляю')
    ShowHideCall.style.opacity = '1'
    ShowHideCall.style.animation = 'RBShow 0.5s forwards'
    ShowHideCall.style.pointerEvents = 'auto'
    console.log(ShowHideFeed.style.opacity)
  } else if (ShowHideCall.style.opacity === '1') {
    console.log('Делаю прозрачным')
    ShowHideCall.style.opacity = '0'
    ShowHideCall.style.animation = 'RBHide 0.5s forwards'
    ShowHideCall.style.pointerEvents = 'none'
  }
})
ShowHideBlockCall2.addEventListener('click', () => {
  console.log('click')
  if (ShowHideCall.style.opacity === '0') {
    console.log('Проявляю')
    ShowHideCall.style.opacity = '1'
    ShowHideCall.style.animation = 'RBShow 0.5s forwards'
    ShowHideCall.style.pointerEvents = 'auto'
    console.log(ShowHideCall.style.opacity)
  } else if (ShowHideCall.style.opacity === '1') {
    console.log('Делаю прозрачным')
    ShowHideCall.style.opacity = '0'
    ShowHideCall.style.animation = 'RBHide 0.5s forwards'
    ShowHideCall.style.pointerEvents = 'none'
    console.log(ShowHideCall.style.opacity)
  }
})
