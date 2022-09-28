console.log("привет");

const swiper = new Swiper(".header__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  loop: "infinite",
});

swiper.on('slideChange', function(sld) {
  document.body.setAttribute('data-sld', sld.realIndex);
})

const productUseSlider = new Swiper(".product-use__slider", {
  loop: "infinite",
  spaceBetween: 12,
});

const cardPhotoSlider = new Swiper(".card__slider", {
  loop: "infinite",
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

let popupSlider = new Swiper(".modal-slider__block", {
  loop: "infinite",
  spaceBetween: 20,
});

const sliderNavItems = document.querySelectorAll('.slider-nav__item');

sliderNavItems.forEach((el, index) => {
  el.setAttribute('data-index', index);

  el.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);

    popupSlider.slideTo(index);
  })
})

// function popupSliderNav() {
//   let sliderNavBtn = document.querySelector('.popup-slider-nav__btn');
//   let sliderNavInner = document.querySelector('.slider-nav__inner');
  
//   // sliderNavBtn.addEventListener('click', () => {
//   //   sliderNavInner.style.transform = 'translateY(-280px)';
//   // })

// }
// popupSliderNav();

let brandSlider = new Swiper(".production__slider", {
  navigation: {
    nextEl: ".production-banner__arrow-next",
    prevEl: ".production-banner__arrow-prev",
  },
  loop: "infinite",
  spaceBetween: 20,
});

let productionSlider = new Swiper(".brand__slider", {
  navigation: {
    nextEl: ".brand-banner__arrow-next",
    prevEl: ".brand-banner__arrow-prev",
  },
  loop: "infinite",
  spaceBetween: 20,
});

let dilersSlider = new Swiper(".dilers__slider", {
  navigation: {
    nextEl: ".dilers__arrow-next",
    prevEl: ".dilers__arrow-prev",
  },
  loop: "infinite",
});

let equipmentStoreSlider = new Swiper(".equipment-store__slider", {
  navigation: {
    nextEl: ".dilers__arrow-next",
    prevEl: ".dilers__arrow-prev",
  },
  loop: "infinite",
});

const equipmentSlider = new Swiper(".equipment__slider", {
  loop: "infinite",
  effect: "fade",
  // centeredSlides: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const swatchSlider = new Swiper(".swatch__slider", {
  loop: "infinite",
  // effect: "fade",
  centeredSlides: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const equipmentCatalogSlider = new Swiper(".equipment-catalog__slider", {
  loop: "infinite",
  // effect: "fade",
  centeredSlides: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const standSlider = new Swiper(".stand__slider", {
  loop: "infinite",
  // effect: "fade",
  centeredSlides: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

let projectsSlider = new Swiper(".projects-slider", {
  navigation: {
    nextEl: ".projects__arrow-next",
    prevEl: ".projects__arrow-prev",
  },
  loop: "infinite",
});

let projectSlider = new Swiper(".project-slider", {
  navigation: {
    nextEl: ".project__arrow-next",
    prevEl: ".project__arrow-prev",
  },
  loop: "infinite",
});

const storageSlider = new Swiper(".storage__slider", {
  loop: "infinite",
  // effect: "fade",
  centeredSlides: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

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

function mobileMenu() {
  let menuBtn = document.querySelector(".nav-mobile__btn");
  let mobileMenuInner = document.querySelector(".nav-mobile");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("mobile-btn--active");
    mobileMenuInner.classList.toggle("active");
  });
}
mobileMenu();

function headerSearch() {
  let searchBtnOff = document.querySelector(".search__btn_off");
  let searchBtnMobile = document.querySelector(".search__btn_mobile");
  let search = document.querySelector(".search");
  let mobileMenuBtn = document.querySelector(".nav-mobile__btn-wrapper");
  let searchInput = document.querySelector(".search__input");

  searchBtnMobile.addEventListener("click", () => {
    function openSearch() {
      search.classList.add("d-block");
      searchBtnOff.classList.add("d-block");

      searchBtnMobile.classList.add("d-none");
      mobileMenuBtn.classList.add("d-none");
    }
    openSearch();
  });

  function closeSearch() {
    document.addEventListener("click", (e) => {
      if (search.classList.contains("d-block")) {
        if (e.target.classList.contains("search-hide") == false) {
          search.classList.remove("d-block");
          searchBtnMobile.classList.remove("d-none");
          mobileMenuBtn.classList.remove("d-none");
        }
      }
    });
  }
  closeSearch();

  function searchClear() {
    searchBtnOff.addEventListener("click", () => {
      searchInput.value = "";
    });
  }
  searchClear();
}
headerSearch();

function popupForm() {
  const btns = document.querySelectorAll(".modal-btn");
  const modalOverlay = document.querySelector(".modal-overlay ");
  const modals = document.querySelectorAll(".modal");
  const modalCloseBtn = document.querySelector(".modal__close-btn");

  btns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let path = e.currentTarget.getAttribute("data-path");

      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("modal--visible");
      modalOverlay.classList.add("modal-overlay--visible");
    });
  });

  modalOverlay.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target == modalOverlay || e.target == modalCloseBtn) {
      modalOverlay.classList.remove("modal-overlay--visible");
      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });
    }
  });
}
popupForm();

function cardSliderPopup() {
  const btns = document.querySelectorAll(".card__more-btn");
  const modalOverlay = document.querySelector(".slider-overlay");
  const modals = document.querySelectorAll(".modal-slider");
  const modalCloseBtn = document.querySelector(".modal__close-btn");


  btns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let path = e.currentTarget.getAttribute("data-path");

      modals.forEach((el) => {
        el.classList.remove("slider--visible");
      });

      document.querySelector(`[data-target="${path}"]`).classList.add("slider--visible");
      modalOverlay.classList.add("slider-overlay--visible");
    });
  });

  modalOverlay.addEventListener("click", (e) => {

    if (e.target == modalOverlay || e.target == modalCloseBtn) {
      modalOverlay.classList.remove("slider-overlay--visible");
      modals.forEach((el) => {
        el.classList.remove("slider--visible");
      });
    }
  });
  console.log(modalOverlay);
}
cardSliderPopup();


function scrollAnimation() {
  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let k = 0; k < animItems.length; k++) {
        const animItem = animItems[k];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          animItem.classList.remove("_active");
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
      animOnScroll();
    }, 100);
    animOnScroll();
  }
}
scrollAnimation();


function tabs() {

  let tabItem = document.querySelectorAll('.tabs__item');
  let tabNavItem = document.querySelectorAll('.tabs-navigation__item');

  function tab(tabItem, tabNavItem) {
    tabNavItem.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        for (let i = 0; i < tabNavItem.length; i++) {
          tabNavItem[i].classList.remove('tabs-navigation__item--active');
          e.target.classList.add('tabs-navigation__item--active');
          tabItem[i].classList.remove('tab--active');
        }
        tabItem[index].classList.add('tab--active');
        console.log('ggg')
      })
    })
  }
  
  tab(tabItem, tabNavItem);
}
tabs();

function productUsePhotosViewMore() {
  const viewMoreBtn = document.querySelector('.view-more-btn');
  const productUseInnerHidden = document.querySelector('.product-use__inner_hidden');
  
  if (viewMoreBtn){
    viewMoreBtn.addEventListener('click', () => {
      productUseInnerHidden.classList.toggle('d-none');
  
      if(productUseInnerHidden.classList.contains('d-none')) {
        viewMoreBtn.innerHTML = 'Показать ещё';
      }
      else{
        viewMoreBtn.innerHTML = 'Скрыть';
      }
      console.log('ggg');
    })
  }
}
productUsePhotosViewMore();


function isMobileUser() {
  let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
  };

  let body = document.querySelector('body');
  if (isMobile.any()){
    body.classList.add('touch');
  }
  else{
    body.classList.add('mouse');
  }

  let mainNavMobileItem = document.querySelectorAll('.main-nav-mobile__item');
  let subNavMobileItem = document.querySelectorAll('.sub-nav-mobile__item');

  for (let i = 0; i < mainNavMobileItem.length; i++) {
    let subNavListMobile = mainNavMobileItem[i].querySelectorAll('.sub-nav__list-mobile');
    let navMobileArrow = mainNavMobileItem[i].querySelectorAll('.nav-mobile__arrow');

    for (let k = 0; k < navMobileArrow.length; k++) {
      navMobileArrow[k].addEventListener('click', () => {
        navMobileArrow[k].classList.toggle('rotate');
        subNavListMobile[k].classList.toggle('list-active');
      })
    }
  }

  for (let i = 0; i < subNavMobileItem.length; i++) {
    let subSubNavListMobile = subNavMobileItem[i].querySelectorAll('.sub-sub-nav__list-mobile');
    let subNavMobileArrow = subNavMobileItem[i].querySelectorAll('.sub-nav-mobile__arrow');

    for (let k = 0; k < subNavMobileArrow.length; k++) {
      subNavMobileArrow[k].addEventListener('click', () => {
        subNavMobileArrow[k].classList.toggle('rotate');
        subSubNavListMobile[k].classList.toggle('list-active');
      })
    }
  }
}
isMobileUser();



