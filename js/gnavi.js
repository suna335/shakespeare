const page = document.querySelector(".page");
const body = document.querySelector(".body");

const nav = document.querySelector(".gnav");
const navClose = document.querySelector(".gnav-close");
const navPc = document.querySelector(".gnav-pc");
const navMobile = document.querySelector(".gnav-mobile");

const hamBtn = document.querySelector(".hamburger-btn");
const hamBtnClose = document.querySelector(".hamburger-btn-close");

const width = window.matchMedia("(max-width: 600px)");
let pos = 0;

// グローバルナビゲーションの表示と非表示
function gnavShowing() {
  nav.classList.replace("gnav", "gnav-showing");
  page.classList.add("no-scroll");
  body.classList.add("no-scroll");

  hamBtnClose.addEventListener("click", gnavclosing);
  navClose.addEventListener("click", gnavclosing);
}

function gnavclosing() {
  nav.classList.replace("gnav-showing", "gnav");
  page.classList.remove("no-scroll");
  body.classList.remove("no-scroll");
}
hamBtn.addEventListener("click", gnavShowing);

function reload() {
  window.location.reload();
}

// 画面幅が広くなったらナビを閉じる
width.addEventListener("change", reload);

// ナビ追従
function handleScroll(e) {
  if (window.scrollY < pos && window.scrollY > 64) {
    // 上にスクロールしたとき
    this.name.classList.remove("hide");
    this.name.classList.add("shadow");
  } else if (window.scrollY > pos && window.scrollY > 128) {
    // 下にスクロールした時
    this.name.classList.add("hide");
  }

  // トップで影なし
  if (Math.floor(window.scrollY) <= 0) {
    this.name.classList.remove("shadow");
  }

  pos = window.scrollY;
}

// 画面幅によってナビ対象変更
if (width.matches) {
  window.addEventListener("scroll", {
    name: navMobile,
    handleEvent: handleScroll,
  });
} else {
  window.addEventListener("scroll", {
    name: navPc,
    handleEvent: handleScroll,
  });
}
