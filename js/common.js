// ------------------------------
// documentオブジェクトを格納
//
// const $doc = document;
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
    // DOM取得
    $hamburger: $doc.querySelector("#Hamburger"),

    drawer: {
      $bg: $doc.querySelector(".header__nav-body"),
      $menu: $doc.querySelector(".header__nav-list"),
    },

    // トグルメニュー
    toggleMenu() {
      $doc.body.classList.toggle("boot_drawer");
    },

    // クローズメニュー
    closeMenu() {
      $doc.body.classList.remove("boot_drawer");
    },

    // ブレイクポイントの監視
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

    // スクリプト起動
    init() {
      this.$hamburger.addEventListener("click", this.toggleMenu.bind(this));
      this.drawer.$bg.addEventListener("click", this.closeMenu.bind(this));
      this.drawer.$menu.addEventListener("click", (e) => e.stopPropagation());

      this.watchBreakpoint();
    },
  };

  humbugerMenu.init();
});
