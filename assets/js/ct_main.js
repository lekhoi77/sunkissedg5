/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

  // Lon chuyển động khi scroll
  
  
  window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.sunkissed_hero');
    const cans = document.querySelectorAll('.can');
    const heroRect = heroSection.getBoundingClientRect();
    const scrollPosition = window.scrollY;
  
    // Kiểm tra nếu khu vực hero vẫn còn trong viewport
    if (heroRect.top <= window.innerHeight && heroRect.bottom >= 0) {
      const relativeScroll = scrollPosition - heroSection.offsetTop;
  
      // Tùy chỉnh sự chuyển động của từng lon
      cans.forEach((can) => {
        let translateX = 0;
        let translateY = 0;
        let rotate = 0;
  
        // Tùy chỉnh sự chuyển động của từng lon
        if (can.classList.contains('loncaphe')) {
          translateX = relativeScroll * 0.05; // Giảm khoảng cách di chuyển
          translateY = relativeScroll * 0.1;  // Giảm khoảng cách di chuyển
          rotate = -10;
        } else if (can.classList.contains('loncam')) {
          translateX = relativeScroll * -0.05; // Giảm khoảng cách di chuyển
          translateY = relativeScroll * 0.05;  // Giảm khoảng cách di chuyển
          rotate = 10;
        } else if (can.classList.contains('lonchanh')) {
          translateX = relativeScroll * 0.1;  // Giảm khoảng cách di chuyển
          translateY = relativeScroll * 0.05; // Giảm khoảng cách di chuyển
          rotate = 20;
        } else if (can.classList.contains('lonvq')) {
          translateX = relativeScroll * -0.05; // Giảm khoảng cách di chuyển
          translateY = relativeScroll * 0.02;  // Giảm khoảng cách di chuyển
          rotate = 20; 
        } else if (can.classList.contains('londuahau')) {
          translateX = relativeScroll * 0.15; // Giảm khoảng cách di chuyển
          translateY = relativeScroll * 0.02;  // Giảm khoảng cách di chuyển
          rotate = -10;
        }
  
        // Di chuyển và xoay lon
        can.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
      });
    } else {
      // Giữ nguyên vị trí mới khi ra khỏi khu vực hero
      cans.forEach(can => {
        const computedStyle = window.getComputedStyle(can);
        const matrix = new WebKitCSSMatrix(computedStyle.transform);
        can.dataset.translateX = matrix.m41;
        can.dataset.translateY = matrix.m42;
        can.dataset.rotate = matrix.a; // Lưu giá trị xoay hiện tại
      });
    }
  });
  
  window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.sunkissed_hero');
    const cans = document.querySelectorAll('.can');
    const heroRect = heroSection.getBoundingClientRect();
  
    // Kiểm tra nếu khu vực hero không còn trong viewport
    if (heroRect.top > window.innerHeight || heroRect.bottom < 0) {
      // Đặt lại vị trí và trạng thái nghiêng ban đầu khi cuộn lên lại
      cans.forEach(can => {
        if (can.classList.contains('rotate-left')) {
          can.style.transform = `translate(${can.dataset.translateX}px, ${can.dataset.translateY}px) rotate(-10deg)`;
        } else if (can.classList.contains('rotate-right')) {
          can.style.transform = `translate(${can.dataset.translateX}px, ${can.dataset.translateY}px) rotate(20deg)`;
        } else if (can.classList.contains('middle1')) {
          can.style.transform = `translate(${can.dataset.translateX}px, ${can.dataset.translateY}px) rotate(10deg)`;
        } else if (can.classList.contains('middle2')) {
          can.style.transform = `translate(${can.dataset.translateX}px, ${can.dataset.translateY}px) rotate(-10deg)`;
        } 
      });
    }
  });