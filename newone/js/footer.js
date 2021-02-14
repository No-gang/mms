const footerBoxes = document.querySelectorAll(".footerBoxes");
footerBoxes.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    footerScriptBoxArrow[index].style.transform = "translateX(30px)";
  });
  item.addEventListener("mouseout", () => {
    footerScriptBoxArrow[index].style.transform = "translateX(0px)";
  });
});

const footerBoxImage = new Array(footerBoxes.length);
for (let i = 0; i < footerBoxes.length; i++) {
  footerBoxImage[i] = document.createElement("img");
  footerBoxImage[i].src =
    "https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_960_720.png";
  footerBoxes[i].appendChild(footerBoxImage[i]);
}

const footerScriptBox = new Array(footerBoxes.length);
for (let i = 0; i < footerBoxes.length; i++) {
  footerScriptBox[i] = document.createElement("div");
  footerScriptBox[i].classList = "footerScriptBox";
  footerBoxes[i].appendChild(footerScriptBox[i]);
}

const footerScriptMainTitleSrc = [
  "왜 비스트로피자여야 하는가?",
  "창업절차는 어떻게 해야하는가?",
];
const footerScriptMainTitle = new Array(footerScriptMainTitleSrc.length);
for (let i = 0; i < footerScriptMainTitleSrc.length; i++) {
  footerScriptMainTitle[i] = document.createElement("h4");
  footerScriptMainTitle[i].innerText = footerScriptMainTitleSrc[i];
  footerScriptBox[i].appendChild(footerScriptMainTitle[i]);
}

const footerScriptSubTitle = new Array(footerBoxes.length);
for (let i = 0; i < 2; i++) {
  footerScriptSubTitle[i] = document.createElement("div");
  footerScriptSubTitle[i].classList = "footerScriptSubTitle";
  footerScriptBox[i].appendChild(footerScriptSubTitle[i]);
}
const footerScriptSubTitleSrc = [
  "스마트한 상권분석과 친절한 교육,",
  "비스트로피자로 창업을 시작해보세요",
  "그리고 오픈지원까지 해주는 창업 시스템!!",
  "하나부터 열까지 창업절차에 대해 볼 수 있습니다",
];
const footerScriptSubScript = new Array(footerScriptSubTitleSrc.length);
for (let i = 0; i < footerScriptSubTitleSrc.length; i++) {
  footerScriptSubScript[i] = document.createElement("p");
  footerScriptSubScript[i].innerText = footerScriptSubTitleSrc[i];
  if (i % 2 == 0) {
    footerScriptSubTitle[1].appendChild(footerScriptSubScript[i]);
  } else {
    footerScriptSubTitle[0].appendChild(footerScriptSubScript[i]);
  }
}

const footerScriptBoxArrow = new Array(2);
for (let i = 0; i < 2; i++) {
  footerScriptBoxArrow[i] = document.createElement("i");
  footerScriptBoxArrow[i].classList = "far fa-arrow-alt-circle-right";
  footerScriptBox[i].appendChild(footerScriptBoxArrow[i]);
}

const footerUl = document.querySelector(".footerUl");
const footerListSrc = [
  "회사소개",
  "가맹문의",
  "매장찾기",
  "개인정보취급방침",
  "이메일수집거부",
];
const footerList = new Array(footerListSrc.length);
for (let i = 0; i < footerListSrc.length; i++) {
  footerList[i] = document.createElement("li");
  footerList[i].innerText = footerListSrc[i];
  footerUl.appendChild(footerList[i]);
  if (i != footerListSrc.length - 1) footerList[i].after("/");
}

const footer = document.querySelector("footer");
const footerAddr = document.createElement("p");
footerAddr.classList = "footerAddr";
footerAddr.innerText =
  "Company : 주식회사 글로비 | 대표이사 : 정석환 | 주소 : 대구광역시 북구 대현로 50(대현동 415-5) | 사업자등록번호 : 714-88-01260 | T. 1544-2591";
footer.appendChild(footerAddr);

const footerCopy = document.createElement("p");
footerCopy.classList = "footerCopy";
footerCopy.innerText =
  "Copyrightsⓒ 주식회사 글로비 All rights reserved. Design by cubefc";
footer.appendChild(footerCopy);
