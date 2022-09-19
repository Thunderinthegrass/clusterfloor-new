  const swiperContact = new Swiper(".contacts__swiper", {
    navigation: {
      nextEl: ".swiper-button-forth",
      prevEl: ".swiper-button-back",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,},
    effect: "fade",
    loop: "infinite",
  });
  