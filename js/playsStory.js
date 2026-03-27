const hamlet = document.querySelector(".hamlet-story");
const juliusCaesar = document.querySelector(".juliusCaesar-story");
const venice = document.querySelector(".merchantOfVenice-story");
const henry6 = document.querySelector(".henry6-story");
const winterTale = document.querySelector(".winterTale-story");

// テキストファイル外部読み込み
async function story(className, fileName) {
  let response = await fetch("txt/" + fileName + ".txt");
  let text = await response.text();
  className.innerText = text;
}

// アコーディオンUI対応
function accordion(e) {
  if (!e.currentTarget.checked) {
    this.name.scrollIntoView();
  }
}

// ページごとに必要な分だけ読み込む
// 四大悲劇
if (hamlet) {
  const kingLear = document.querySelector(".kingLear-story");
  const othello = document.querySelector(".othello-story");
  const macbeth = document.querySelector(".macbeth-story");
  let hamletCheckBox = document.querySelector(".checkbox-hamlet");
  let kingLearCheckBox = document.querySelector(".checkbox-kingLear");
  let othelloCheckBox = document.querySelector(".checkbox-othello");
  let macbethCheckBox = document.querySelector(".checkbox-macbeth");

  // 外部.txt
  story(hamlet, "hamlet");
  story(kingLear, "kingLear");
  story(othello, "othello");
  story(macbeth, "macbeth");

  // アコーディオン処理
  hamletCheckBox.addEventListener("change", {
    name: hamlet,
    handleEvent: accordion,
  });

  kingLearCheckBox.addEventListener("change", {
    name: kingLear,
    handleEvent: accordion,
  });

  othelloCheckBox.addEventListener("change", {
    name: othello,
    handleEvent: accordion,
  });

  macbethCheckBox.addEventListener("change", {
    name: macbeth,
    handleEvent: accordion,
  });
}

// その他悲劇
if (juliusCaesar) {
  const titusAndronicus = document.querySelector(".titusAndronicus-story");
  const romeoAndJuliet = document.querySelector(".romeoAndJuliet-story");
  let juliusCaesarCheckBox = document.querySelector(".checkbox-juliusCaesar");
  let titusCheckBox = document.querySelector(".checkbox-titusAndronicus");
  let romeJuliCheckBox = document.querySelector(".checkbox-romeoAndJuliet");

  story(juliusCaesar, "juliusCaesar");
  story(titusAndronicus, "titusAndronicus");
  story(romeoAndJuliet, "romeoAndJuliet");

  titusCheckBox.addEventListener("change", {
    name: titusAndronicus,
    handleEvent: accordion,
  });
  juliusCaesarCheckBox.addEventListener("change", {
    name: juliusCaesar,
    handleEvent: accordion,
  });
  romeJuliCheckBox.addEventListener("change", {
    name: romeoAndJuliet,
    handleEvent: accordion,
  });
}

// 喜劇
if (venice) {
  const midsummer = document.querySelector(".midsummerNightDream-story");
  const asYouLikeIt = document.querySelector(".asYouLikeIt-story");
  let veniceCheckBox = document.querySelector(".checkbox-merchantOfVenice");
  let midSMRCheckBox = document.querySelector(".checkbox-midsummerNightDream");
  let asYouLikeItCheckBox = document.querySelector(".checkbox-asYouLikeIt");

  story(venice, "merchantOfVenice");
  story(midsummer, "midsummerNightDream");
  story(asYouLikeIt, "asYouLikeIt");

  veniceCheckBox.addEventListener("change", {
    name: venice,
    handleEvent: accordion,
  });
  midSMRCheckBox.addEventListener("change", {
    name: midsummer,
    handleEvent: accordion,
  });
  asYouLikeItCheckBox.addEventListener("change", {
    name: asYouLikeIt,
    handleEvent: accordion,
  });
}

// 史劇
if (henry6) {
  const richard3 = document.querySelector(".richard3-story");
  let henry6CheckBox = document.querySelector(".checkbox-henry6");
  let richard3CheckBox = document.querySelector(".checkbox-richard3");

  story(henry6, "henry6");
  story(richard3, "richard3");

  henry6CheckBox.addEventListener("change", {
    name: henry6,
    handleEvent: accordion,
  });
  richard3CheckBox.addEventListener("change", {
    name: richard3,
    handleEvent: accordion,
  });
}

// ロマンス劇
if (winterTale) {
  const tempest = document.querySelector(".tempest-story");
  let winterTaleCheckBox = document.querySelector(".checkbox-winterTale");
  let tempestCheckBox = document.querySelector(".checkbox-tempest");

  story(winterTale, "winterTale");
  story(tempest, "tempest");

  winterTaleCheckBox.addEventListener("change", {
    name: winterTale,
    handleEvent: accordion,
  });
  tempestCheckBox.addEventListener("change", {
    name: tempest,
    handleEvent: accordion,
  });
}
