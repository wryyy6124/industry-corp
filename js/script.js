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

  // 関数定義
  const humbugerMenu = {
    // DOM取得
    $body: $doc.querySelector("#Hamburger"),

    $drawer: {
      bg: $doc.querySelector(".header__nav-body"),
      menu: $doc.querySelector(".header__nav-list"),
    },

    // トグル
    toggleMenu() {
      $doc.body.classList.toggle("is_active");
    },

    // クローズのみ
    closeMenu() {
      $doc.body.classList.remove("is_active");
    },

    // 各イベントの起動
    init() {
      this.$body.addEventListener("click", this.toggleMenu);
      this.$drawer.bg.addEventListener("click", this.closeMenu);
      this.$drawer.menu.addEventListener("click", (e) => e.stopPropagation());
    },
  };

  // スクリプト実行
  humbugerMenu.init();
});
