// ------------------------------
// documentオブジェクト取得
// ------------------------------
const $doc = document;

// ------------------------------
// DOM読み込み後に実行
// ------------------------------
$doc.addEventListener("DOMContentLoaded", () => {
  const $Hamburger = $doc.querySelector("#Hamburger");

  $Hamburger.addEventListener("click", () => {
    $doc.body.classList.toggle("is_active");
  });
});
