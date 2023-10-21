const rem = function (rem) {
  if ($(window).width() > 768) {
    return 0.005208335 * $(window).width() * rem;
  } else {
    // где 375 это ширина моб версии макета
    return (100 / 375) * (0.1 * $(window).width()) * rem;
  }
};
var sliderBaner = new Swiper(".baner__swiper", {
  loop: false,
  effect: "fade",
  slidesPerView: 1,
  freeMode: true,
  slideActiveClass: "active",
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  speed: 0,
  // loopedSlides: 6,
  pagination: {
    el: ".baner__swiper-pagination",
  },
  navigation: {
    nextEl: ".baner__btn-next",
    prevEl: ".baner__btn-prev",
  },
});
$(".baner__swiper-slide-number").children("img").addClass("active");
sliderBaner.on("slideChange", function (x) {
  document.querySelector(
    ".baner__swiper-slide-number"
  ).innerHTML = `<img src="./img/icon/slide-num/${
    x.activeIndex + 1
  }.svg" alt="">`;
  setTimeout(() => {
    $(".baner__swiper-slide-number").children("img").addClass("active");
  }, 1);
});
if (document.querySelector(".main-slider")) {
  setTimeout(() => {
    mainSlider.update();
  }, 100);
}

const sliderGallery = new Swiper(".gallery__swiper", {
  navigation: {
    nextEl: ".gallery__btn-next",
    prevEl: ".gallery__btn-prev",
  },
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: rem(0),
  speed: 1500,
  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: rem(0),
      speed: 1500,
      autoplay: {
        delay: 5000,
      },
    },
  },
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
});
function addZero(num) {
  return num > 9 ? num : "0" + num;
}

var sliderProduction = new Swiper(".production__swiper", {
  loop: true,
  pagination: {
    el: ".production__swiper-pagination",
  },
  navigation: {
    nextEl: ".production__btn-next",
    prevEl: ".production__btn-prev",
  },
});
sliderProduction.on("realIndexChange", function (x) {
  const left = x.realIndex ? x.realIndex : "3";
  const right = x.realIndex + 2 < 4 ? x.realIndex + 2 : "1";
  $(".production__swiper-left-num").html(
    `0${left} <span>/0${x.slides.length}</span>`
  );
  $(".production__swiper-right-num").html(
    `0${right} <span>/0${x.slides.length}</span>`
  );
});
const sliderPartners = new Swiper(".partners__swiper", {
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: rem(2),
  navigation: {
    nextEl: ".partners__btn-next",
    prevEl: ".partners__btn-prev",
  },
  pagination: {
    el: ".partners__swiper-pagination",
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: rem(10.5),
    },
  },
});
sliderPartners.on("realIndexChange", function (x) {
  changePartners(x);
});
function changePartners(x) {
  let total;
  if ($(window).width() > 768) {
    total = 4;
  } else {
    total = 2;
  }
  const left =
    x.realIndex / total ? x.realIndex / total : x.slides.length / total;
  const right =
    x.realIndex / total + 2 < x.slides.length / total + 1
      ? x.realIndex / total + 2
      : "1";
  $(".partners__swiper-left-num").html(
    `0${left} <span>/0${x.slides.length / total}</span>`
  );
  $(".partners__swiper-right-num").html(
    `0${right} <span>/0${x.slides.length / total}</span>`
  );
}
changePartners(sliderPartners);
$(window).resize(function () {
  changePartners(sliderPartners);
  changeFactory(sliderFactory);
});

var sliderFactory = new Swiper(".factory__swiper", {
  loop: true,
  pagination: {
    el: ".factory__swiper-pagination",
  },
  slidesPerView: 1,
  spaceBetween: rem(4),
  navigation: {
    nextEl: ".factory__btn-next",
    prevEl: ".factory__btn-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: "auto",
    },
  },
});
sliderFactory.on("realIndexChange", function (x) {
  changeFactory(x);
});
function changeFactory(x) {
  $(".factory__swiper--number").html(
    `0${x.realIndex + 1} <span>/0${x.slides.length}</span>`
  );
  const left = x.realIndex ? x.realIndex : x.slides.length;
  const right = x.realIndex + 2 < x.slides.length + 1 ? x.realIndex + 2 : "1";
  $(".factory__swiper-left-num").html(
    `0${left} <span>/0${x.slides.length}</span>`
  );
  $(".factory__swiper-right-num").html(
    `0${right} <span>/0${x.slides.length}</span>`
  );
}
changeFactory(sliderFactory);

const sliderCertificates = new Swiper(".certificates__swiper", {
  loop: true,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".certificates__btn-next",
    prevEl: ".certificates__btn-prev",
  },
  pagination: {
    el: ".certificates__swiper-pagination",
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

const sliderOtherProducts = new Swiper(".other-products__swiper", {
  loop: true,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".other-products__btn-next",
    prevEl: ".other-products__btn-prev",
  },
  pagination: {
    el: ".other-products__swiper-pagination",
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween:
        6 * parseFloat(getComputedStyle(document.documentElement).fontSize),
    },
  },
});

const header = document.querySelector("header");
const burgerBtn = header.querySelector(".header__burger");
const lines = document.querySelector(".lines");

burgerBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});

const lang = document.querySelector(".header__language");
const langBox = lang.querySelector(".header__language-box");
const langListBox = lang.querySelectorAll(".header__language-list-box");
langBox.addEventListener("click", () => {
  lang.classList.toggle("open");
});

langListBox.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < 2; i++) {
      langBox.append(btn.children[0]);
      btn.append(langBox.children[0]);
    }
    lang.classList.remove("open");
  });
});

$(".world-container-map svg path").on("click", function () {
  const info = $(
    `.world-container-map-info-item[data-card='${$(this).attr("id")}']`
  );

  $(this).toggleClass("active");
  info.toggleClass("active");
});
$(".world-container-filter--item").on("click", function () {
  $(this)
    .parents(".world-container-filter")
    .find(".world-container-filter--item")
    .removeClass("active");
  $(this).addClass("active");
});

wow = new WOW({
  boxClass: "wow",
  animateClass: "animate__animated",
  offset: 100,
  mobile: true,
  live: true,
});
wow.init();

$(document).ready(function () {
  $(".switcher__btn").on("click", function (evt) {
    evt.preventDefault();
    let $this = $(this);
    let index = $this.index();
    let $switcher = $this.closest(".switcher");
    let $switcher_container = $switcher.find(".switcher__container");
    let $switcher_contents = $switcher_container.find(".switcher__content");
    $this.siblings(".switcher__btn").removeClass("active");
    $this.addClass("active");
    $switcher_contents.removeClass("active");
    $($switcher_contents[index]).addClass("active");
  });
});

// Открытие формы при нажатии нак кнопку
$(document).ready(function () {
  $(".button").on("click", function () {
    $(".form").addClass("active");
  });

  function closeModal() {
    $(".form").removeClass("active");
  }

  // Закрытие формы при нажатии на крестик
  $(".close-btn").on("click", closeModal);

  // Закрытие формы при нажатии на esc
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  });
});
