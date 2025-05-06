let ShowHideBlock1 = document.querySelector('.ShowHideBlock1')
let ShowHideBlock2 = document.querySelector('.ShowHideBlock2')
let ShowHide = document.querySelector('.ShowHide')

ShowHideBlock1.addEventListener('click', () => {
  console.log('click')
  if (ShowHide.style.left === '') {
    console.log('1')
    ShowHide.style.left = '0px'
    console.log(ShowHide.style.left)
  } else if (ShowHide.style.left === '0px') {
    console.log('2')
    ShowHide.style.left = ''
  }
})
ShowHideBlock2.addEventListener('click', () => {
  if (ShowHide.style.left === '') {
    console.log('1')
    ShowHide.style.left = '0px'
    console.log(ShowHide.style.left)
  } else if (ShowHide.style.left === '0px') {
    console.log('2')
    ShowHide.style.left = ''
    console.log(ShowHide.style.left)
  }
})
