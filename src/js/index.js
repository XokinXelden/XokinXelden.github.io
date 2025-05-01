import '../scss/style.scss'

import Swiper from 'swiper'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import '../../node_modules/swiper/swiper-bundle.min.js'
import '../../node_modules/swiper/swiper-element.min.js'
import '../../node_modules/swiper/swiper-element-bundle.min.js'

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Navigation, FreeMode],
  spaceBetween: 20,
  slidesPerView: 'auto',
  freeMode: {
    enable: true,
    sticky: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})
// import Swiper from 'swiper'
// import '../../node_modules/swiper/swiper-bundle.js'
// import '../../node_modules/swiper/swiper-bundle.css'

// const swiper = new Swiper('.swiper', {
//   spaceBetween: 20,
//   slidesPerView: 1.5,
//   freeMode: true,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true
//   }
// })

console.log('Works!')
