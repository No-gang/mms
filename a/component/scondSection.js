const BoxImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

const secondSection = document.createElement("section");
secondSection.style.width = "100%";
secondSection.style.height = "80vh";
secondSection.style.display = "flex";
secondSection.style.flexDirection = "column";
secondSection.style.justifyContent = "space-around";
secondSection.style.backgroundColor = "skyblue";
body.appendChild(secondSection);

const secondSectionTitle = document.createElement("div");
const secondSectionSubTitle = document.createElement("h4");
const secondSectionMainTitle = document.createElement("h1");
secondSection.appendChild(secondSectionTitle);
secondSectionTitle.appendChild(secondSectionSubTitle);
secondSectionTitle.appendChild(secondSectionMainTitle);
secondSection.style.minWidth = "500px";
secondSectionSubTitle.innerText = "먹어도 먹어도  멈출수 없는 그맛";
secondSectionMainTitle.innerText = "비스트로피자의 특별한 메뉴";

const secondSectionBanner = document.createElement("article");
secondSection.appendChild(secondSectionBanner);
secondSectionBanner.style.display = "flex";
secondSectionBanner.style.flexDirection = "row";
secondSectionBanner.style.justifyContent = " center";

const secondSectionBannerBox = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBox[i] = document.createElement("div");
  secondSectionBannerBox[i].classList = "secondSectionBannerBox";
  secondSectionBannerBox[i].style.margin = "10px";
  secondSectionBannerBox[i].style.minWidth = "500px";
  secondSectionBannerBox[i].style.position = "relative";
  secondSectionBannerBox[i].style.height = "500px";
  secondSectionBannerBox[i].style.overflow = "hidden";
  secondSectionBannerBox[i].style.cursor = "pointer";
  secondSectionBannerBox[i].addEventListener("mouseover", () => {
    secondSectionBannerBoxImage[i].style.transform = "scale(1.2)";
    secondSectionBannerTextBox[i].style.transform = "translateY(0px)";
  });
  secondSectionBannerBox[i].addEventListener("mouseout", () => {
    secondSectionBannerBoxImage[i].style.transform = "scale(1)";
    secondSectionBannerTextBox[i].style.transform = "translateY(50px)";
  });
  secondSectionBanner.appendChild(secondSectionBannerBox[i]);
}

const secondSectionBannerBoxImage = new Array(BoxImages.length);
for (let i = 0; i < secondSectionBannerBox.length; i++) {
  secondSectionBannerBoxImage[i] = document.createElement("img");
  secondSectionBannerBoxImage[i].src = BoxImages[i];
  secondSectionBannerBoxImage[i].style.width = "100%";
  secondSectionBannerBoxImage[i].style.height = "100%";
  secondSectionBannerBoxImage[i].style.position = "absolute";
  secondSectionBannerBoxImage[i].style.transition = "transform 0.5s";
  secondSectionBannerBox[i].appendChild(secondSectionBannerBoxImage[i]);
}

const secondSectionBannerTextBox = new Array(BoxImages.length);
for (let i = 0; i < secondSectionBannerBox.length; i++) {
  secondSectionBannerTextBox[i] = document.createElement("div");
  secondSectionBannerTextBox[i].style.width = "100%";
  secondSectionBannerTextBox[i].style.height = "30%";
  secondSectionBannerTextBox[i].style.position = "absolute";
  secondSectionBannerTextBox[i].style.bottom = "0px";
  secondSectionBannerTextBox[i].style.display = "flex";
  secondSectionBannerTextBox[i].style.flexDirection = "column";
  secondSectionBannerTextBox[i].style.justifyContent = "space-between";
  secondSectionBannerTextBox[i].style.backgroundColor = "white";
  secondSectionBannerTextBox[i].style.transition = "transform 0.5s";
  secondSectionBannerTextBox[i].style.transform = "translateY(50px)";
  secondSectionBannerTextBox[i].style.paddingTop = "10px";
  secondSectionBannerBox[i].appendChild(secondSectionBannerTextBox[i]);
}

const secondBannerMainTitle = ["PI", "EVENT", "SET"];
const secondBannerSubTitle = ["ZZA", "MENU", "MENU"];
const secondSectionBannerBoxTitle = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxTitle[i] = document.createElement("div");
  secondSectionBannerBoxTitle[i].style.display = "flex";
  secondSectionBannerBoxTitle[i].style.justifyContent = "center";
  secondSectionBannerTextBox[i].appendChild(secondSectionBannerBoxTitle[i]);
}
const secondSectionBannerBoxLTitle = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxLTitle[i] = document.createElement("h2");
  secondSectionBannerBoxLTitle[i].innerText = secondBannerMainTitle[i];
  secondSectionBannerBoxLTitle[i].style.color = "red";
  secondSectionBannerBoxTitle[i].appendChild(secondSectionBannerBoxLTitle[i]);
}
const secondSectionBannerBoxRTitle = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxRTitle[i] = document.createElement("h2");
  secondSectionBannerBoxRTitle[i].innerText = secondBannerSubTitle[i];
  secondSectionBannerBoxTitle[i].appendChild(secondSectionBannerBoxRTitle[i]);
}

const secondBannerTopScript = [
  "비스트로피자는",
  "세상에 이렇게 맛있는",
  "세트메뉴는 환상적이다!!",
];
const secondBannerBottonScript = [
  "역시 피자가 최고지!!",
  "이벤트 메뉴가 있어?",
  "비스트로 세트메뉴",
];
const secondSectionBannerBoxScript = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxScript[i] = document.createElement("div");
  secondSectionBannerTextBox[i].appendChild(secondSectionBannerBoxScript[i]);
}
const secondSectionBannerBoxTScript = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxTScript[i] = document.createElement("p");
  secondSectionBannerBoxTScript[i].style.textAlign = "center";
  secondSectionBannerBoxTScript[i].innerText = secondBannerTopScript[i];
  secondSectionBannerBoxScript[i].appendChild(secondSectionBannerBoxTScript[i]);
}
const secondSectionBannerBoxBScript = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxBScript[i] = document.createElement("p");
  secondSectionBannerBoxBScript[i].style.textAlign = "center";
  secondSectionBannerBoxBScript[i].innerText = secondBannerBottonScript[i];
  secondSectionBannerBoxScript[i].appendChild(secondSectionBannerBoxBScript[i]);
}

const secondSectionBannerBoxBtn = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxBtn[i] = document.createElement("div");
  secondSectionBannerBoxBtn[i].innerText = "메뉴보러 가기 >";
  secondSectionBannerBoxBtn[i].style.textAlign = "center";
  secondSectionBannerBoxBtn[i].style.backgroundColor = "red";
  secondSectionBannerBoxBtn[i].style.color = "white";
  secondSectionBannerBoxBtn[i].style.fontSize = "1.3rem";
  secondSectionBannerBoxBtn[i].style.padding = "10px";
  secondSectionBannerTextBox[i].appendChild(secondSectionBannerBoxBtn[i]);
}
