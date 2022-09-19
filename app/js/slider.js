const swiper = new Swiper(".contacts__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    loop: "infinite",
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,}
  });
  