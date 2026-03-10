const page = document.querySelector(".page");
const headerBar = document.querySelector(".bHeader");
const body = document.querySelector(".body");
const hamBtn = document.querySelector(".hamburger-btn");
const nav = document.querySelector(".gnav");
const navClose = document.querySelector(".gnav-close");

// scroll判定
let pos = 0;
// ページ最下部判定
const bodyHeight = document.body.clientHeight; // bodyの高さ
const windowHeight = window.innerHeight; // windowの高さ
const bottomPoint = bodyHeight - windowHeight;

// グローバルナビゲーションの表示と非表示
function gnavShowing() {
  nav.classList.replace("gnav", "gnav-showing");
  page.classList.add("no-scroll");
  body.classList.add("no-scroll");

  navClose.addEventListener("click", gnavclosing);
}

function gnavclosing() {
  nav.classList.replace("gnav-showing", "gnav");
  page.classList.remove("no-scroll");
  body.classList.remove("no-scroll");
}
hamBtn.addEventListener("click", gnavShowing);

// 画面幅が広くなったらナビを閉じる
const width = window.matchMedia("(max-width: 750px)");
width.addEventListener("change", gnavclosing);

// ナビ追従
function handleScroll() {
  // 上にスクロールしたとき
  // ページ底ではGナビ出さない
  if (window.scrollY < pos && bottomPoint >= pos + 128) {
    headerBar.classList.remove("hide");

    // トップ判定（0にならない誤差対策でひとまず2）
    if (window.scrollY > 2) {
      headerBar.classList.add("shadow");
    } else {
      headerBar.classList.remove("shadow");
    }
  } else {
    // 下にスクロールしたとき
    // TOPでは消さない
    if (window.scrollY > 64) {
      headerBar.classList.add("hide");
      headerBar.classList.remove("shadow");
    }
  }
  pos = window.scrollY;
}

window.addEventListener("scroll", handleScroll);
