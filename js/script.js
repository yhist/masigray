$(document).ready();

window.onload = function () {
  // 비주얼 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next',
    }
  });

  // items 슬라이드
  new Swiper('.sw-items', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.sw-items-prev',
      nextEl: '.sw-items-next',
    },
    pagination: {
      el: '.sw-items-pg'
    }
  });

  // bevarage 슬라이드
  new Swiper('.sw-bevarage', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}