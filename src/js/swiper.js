import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import '../../node_modules/swiper/modules/pagination.scss'
import '../../node_modules/swiper/modules/pagination.mjs'
import '../../node_modules/swiper/modules/navigation.mjs'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  spaceBetween: 20,
  slidesPerView: 1.5,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})

console.log('хуила безрукая')
