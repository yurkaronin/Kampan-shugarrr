
if (document.querySelector('.team .swiper')) {

  var swiperTeam = new Swiper(".team .swiper", {
    slidesPerView: 6,
    spaceBetween: 32,
    // freeMode: true,
    navigation: {
      nextEl: ".team .swiper-button-next",
      prevEl: ".team .swiper-button-prev",
    },
  });
};
