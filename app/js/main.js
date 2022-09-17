console.log("привет");

const swiper = new Swiper(".header__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  loop: "infinite",
});

const productUseSlider = new Swiper(".product-use__slider", {
  loop: "infinite",
  spaceBetween: 12,
  // centeredSlides: true,
});

swiper.on('slideChange', function(sld) {
  document.body.setAttribute('data-sld', sld.realIndex);
})

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
productUsePhotosViewMore();
