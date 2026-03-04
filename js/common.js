let body = document.querySelector('body');
let hamBtn = document.querySelector('.hamburger-btn');
let navCon = document.querySelector('.glnav-content');
let navClose = document.querySelector('.glnav-close');

function glnavShowing() {
    navCon.classList.replace('glnav-content', 'glnav-content-showing');
    // gnavCon.setAttribute('aria-expanded', 'false');
    // gnavCon.setAttribute("aria-hidden", "true");
    body.classList.replace('scroll', 'no-scroll');
    navClose.addEventListener("click", function () {
        navCon.classList.replace('glnav-content-showing', 'glnav-content');
        body.classList.replace('no-scroll', 'scroll');
    });
}
    hamBtn.addEventListener('click', glnavShowing);

    // function funcClose(btn) {
    //       btn.setAttribute('aria-expanded', 'false');
    //       btn.setAttribute('aria-hidden', 'true');
    // }

    // glnavBtn.addEventListener("click", setAriaHidden);

    // // 背景クリック時
    // glnavBtn.addEventListener('click', function () {

    //   funcClose(glnavBtn);

    //   if (!flgPc) {
    //     funcClose(glnavBtn);
    //     document.body.style.overflow = 'visible';
    //   }
    // });

    // テスト用
    // alert('ボタンがクリックされました');