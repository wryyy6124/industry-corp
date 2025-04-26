// ------------------------------
// documentオブジェクト取得
// ------------------------------
const $doc = document;

// ------------------------------
// DOM読み込み後に実行
// ------------------------------
$doc.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------
  // ハンバーガーメニュー（SP・タブレット時のみ）
  // ------------------------------------------------------------
  const humbugerMenu = {
    $hamburger: $doc.querySelector("#Hamburger"),

    drawer: {
      $bg: $doc.querySelector(".header__nav-body"),
      $menu: $doc.querySelector(".header__nav-list"),
    },

    toggleMenu() {
      $doc.body.classList.toggle("boot_drawer");
    },

    closeMenu() {
      $doc.body.classList.remove("boot_drawer");
    },

    watchBreakpoint() {
      const mq = window.matchMedia("(min-width: 1024px)");

      const handleChange = (e) => {
        if (e.matches) {
          this.closeMenu();
        }
      };

      handleChange(mq);
      mq.addEventListener("change", handleChange);
    },

    init() {
      this.$hamburger.addEventListener("click", this.toggleMenu.bind(this));
      this.drawer.$bg.addEventListener("click", this.closeMenu.bind(this));
      this.drawer.$menu.addEventListener("click", (e) => e.stopPropagation());

      this.watchBreakpoint();
    },
  };

  humbugerMenu.init();

  // ------------------------------------------------------------
  // Swiper
  // ------------------------------------------------------------
  const serviceSwiper = new Swiper("#serviceSwiper", {
    loop: true,
    centeredSlides: true,

    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      768: {
        slidesPerView: 2.4,
        spaceBetween: 15,
      },

      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
