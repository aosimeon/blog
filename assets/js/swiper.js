let mySwiper1 = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  watchOverflow: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})

let mySwiper2 = new Swiper('.s2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  watchOverflow: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 640px

  }
})