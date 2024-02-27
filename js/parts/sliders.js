
if (document.querySelector('.team .swiper')) {

  var swiperTeam = new Swiper(".team .swiper", {
    // Параметры по умолчанию
    slidesPerView: 6,
    spaceBetween: 32,
    navigation: {
      nextEl: ".team .swiper-button-next",
      prevEl: ".team .swiper-button-prev",
    },
    // Адаптивные настройки
    breakpoints: {
      // при ширине 1500px и меньше
      1500: {
        slidesPerView: 6,
        spaceBetween: 32
      },
      // при ширине 1023px и меньше
      1023: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      // при ширине 1022px и меньше
      1022: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });

};
