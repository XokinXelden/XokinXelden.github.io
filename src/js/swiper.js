import '../scss/Sw-Style.scss'
import Swiper, { Pagination, Navigation } from 'swiper'
import '../../node_modules/swiper/modules/pagination.scss'
import '../../node_modules/swiper/modules/pagination.mjs'
import '../../node_modules/swiper/modules/navigation.mjs'

const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  slidesPerView: 1.5,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})
