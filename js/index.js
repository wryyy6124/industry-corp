// ------------------------------
// documentオブジェクトを格納済み
// グローバル定義している為、参照が可能です。
//
// const $doc = document;
// ------------------------------

// ------------------------------
// DOM読み込み後に実行
// ------------------------------
$doc.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------
  // Swiper
  // ------------------------------------------------------------

  // 事業内容セクションのスライダーの挙動を定義
  new Swiper("#serviceSwiper", {
    // ループ処理：有効
    loop: true,

    // スライダーの位置基準：画面中央
    centeredSlides: true,

    // レスポンシブ対応
    breakpoints: {
      // SP
      360: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      // TAB
      768: {
        slidesPerView: 1.92,
        spaceBetween: 15,
      },

      // PC
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },

    // ページネーション機能
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // ナビゲーション
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 自動再生
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
