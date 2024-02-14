
if (document.querySelector('.team .mySwiper')) {

  var swiperTeam = new Swiper(".team .mySwiper", {
    slidesPerView: 6,
    spaceBetween: 32,
    // freeMode: true,
    navigation: {
      nextEl: ".team .swiper-button-next",
      prevEl: ".team .swiper-button-prev",
    },
  });
};
