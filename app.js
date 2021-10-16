const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-1',
  },
});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  }
});
const swiper3 = new Swiper('.swiper-3', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  }
});