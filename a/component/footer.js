const footer = document.createElement("footer");
footer.style.width = "100%";
footer.style.height = "30vh";
footer.style.color = "white";
footer.style.display = "flex";
footer.style.flexDirection = "column";
footer.style.justifyContent = "center";
footer.style.position = "relative";
footer.style.backgroundColor = "#754F44";
body.appendChild(footer);

const footerBox = document.createElement("div");
footerBox.style.width = "50%";
footerBox.style.height = "50%";
footerBox.style.position = "absolute";
footerBox.style.top = "-70px";
footerBox.style.left = "50%";
footerBox.style.transform = "translate(-50%)";
footerBox.style.display = "flex";
footerBox.style.backgroundColor = "red";
footer.appendChild(footerBox);

const footerLeftBox = document.createElement("div");
const footerRightBox = document.createElement("div");
footerBox.appendChild(footerLeftBox);
footerBox.appendChild(footerRightBox);
footerLeftBox.classList = "footerBoxes";
footerRightBox.classList = "footerBoxes";
footerLeftBox.style.backgroundColor = "blue";
footerRightBox.style.backgroundColor = "green";
const footerBoxes = document.querySelectorAll(".footerBoxes");
footerBoxes.forEach((item, index) => {
  item.style.width = "100%";
  item.style.height = "100%";
  item.style.display = "flex";
  item.style.cursor = "pointer";
  item.addEventListener("mouseover", () => {
    footerScriptBoxArrow[index].style.transform = "translateX(30px)";
  });
  item.addEventListener("mouseout", () => {
    footerScriptBoxArrow[index].style.transform = "translateX(0px)";
  });
});

const footerBoxImage = new Array(2);
for (let i = 0; i < 2; i++) {
  footerBoxImage[i] = document.createElement("img");
  footerBoxImage[i].src =
    "https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_960_720.png";
  footerBoxImage[i].style.height = "100%";
  footerBoxes[i].appendChild(footerBoxImage[i]);
}

const footerScriptBox = new Array(2);
for (let i = 0; i < 2; i++) {
  footerScriptBox[i] = document.createElement("div");
  footerScriptBox[i].style.display = "flex";
  footerScriptBox[i].style.flexDirection = "column";
  footerScriptBox[i].style.justifyContent = "space-around";
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

const footerScriptSubTitle = new Array(2);
for (let i = 0; i < 2; i++) {
  footerScriptSubTitle[i] = document.createElement("div");
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
  footerScriptBoxArrow[i] = document.createElement("span");
  footerScriptBoxArrow[i].style.width = "30px";
  footerScriptBoxArrow[i].style.height = "30px";
  footerScriptBoxArrow[i].style.backgroundColor = "white";
  footerScriptBoxArrow[i].style.borderRadius = "50%";
  footerScriptBoxArrow[i].style.color = "rgba(0,0,0,1)";
  footerScriptBoxArrow[i].style.fontSize = "1.5rem";
  footerScriptBoxArrow[i].style.textAlign = "center";
  footerScriptBoxArrow[i].style.lineHeight = "30px";
  footerScriptBoxArrow[i].style.fontWeight = "bold";
  footerScriptBoxArrow[i].style.transition = "transform 0.5s";
  footerScriptBoxArrow[i].innerText = ">";
  footerScriptBox[i].appendChild(footerScriptBoxArrow[i]);
}

const footerListWarp = document.createElement("ul");
footerListWarp.style.display = "flex";
footerListWarp.style.justifyContent = "center";
footerListWarp.style.marginBottom = "30px";
footer.appendChild(footerListWarp);

const footerListSrc = [
  "회사소개",
  "가맹문의",
  "매장찾기",
  "개인정보취급방침",
  "이메일수집거부",
];
const footerLists = new Array(footerListSrc.length);
for (let i = 0; i < footerListSrc.length; i++) {
  footerLists[i] = document.createElement("li");
  footerLists[i].innerText = footerListSrc[i];
  footerLists[i].style.margin = "0 10px";
  footerLists[i].style.fontWeight = "bold";
  footerListWarp.appendChild(footerLists[i]);
  if (i != footerListSrc.length - 1) {
    footerLists[i].after("/");
  }
}

const footerAddr = document.createElement("p");
footerAddr.innerText =
  "Company : 주식회사 글로비 | 대표이사 : 정석환 | 주소 : 대구광역시 북구 대현로 50(대현동 415-5) | 사업자등록번호 : 714-88-01260 | T. 1544-2591";
footerAddr.style.textAlign = "center";
footer.appendChild(footerAddr);
const footerCopy = document.createElement("p");
footerCopy.innerText =
  "Copyrightsⓒ 주식회사 글로비 All rights reserved. Design by cubefc";
footerCopy.style.textAlign = "center";
footer.appendChild(footerCopy);
