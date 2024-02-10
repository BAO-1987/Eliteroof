import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  modules: [Pagination, Navigation],
  loop: true,
  spaceBetween: 10,
  draggable: true,
  grabCursor: true,

  navigation: {
    nextEl: ".reviews__next",
    prevEl: ".reviews__prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});