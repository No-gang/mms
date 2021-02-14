const BoxImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

const secondSectionTitle = document.querySelector(".secondSectionTitle");
const secondSectionSubTitle = document.createElement("h4");
const secondSectionMainTitle = document.createElement("h1");
secondSectionTitle.appendChild(secondSectionSubTitle);
secondSectionTitle.appendChild(secondSectionMainTitle);
secondSectionSubTitle.innerText = "먹어도 먹어도  멈출수 없는 그맛";
secondSectionMainTitle.innerText = "비스트로피자의 특별한 메뉴";

const secondSectionBanner = document.querySelector(".secondSectionBanner");
const secondSectionBannerBox = document.querySelectorAll(
  ".secondSectionBannerBox"
);
secondSectionBannerBox.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    secondSectionBannerBoxImage[index].style.transform = "scale(1.2)";
    secondSectionBannerTextBox[index].style.transform = "translateY(0px)";
  });
  item.addEventListener("mouseout", () => {
    secondSectionBannerBoxImage[index].style.transform = "scale(1)";
    secondSectionBannerTextBox[index].style.transform = "translateY(51px)";
  });
});

const secondSectionBannerBoxImage = new Array(BoxImages.length);
for (let i = 0; i < secondSectionBannerBox.length; i++) {
  secondSectionBannerBoxImage[i] = document.createElement("img");
  secondSectionBannerBoxImage[i].src = BoxImages[i];
  secondSectionBannerBoxImage[i].classList = "secondSectionBannerBoxImage";
  secondSectionBannerBox[i].appendChild(secondSectionBannerBoxImage[i]);
}

const secondSectionBannerTextBox = new Array(BoxImages.length);
for (let i = 0; i < secondSectionBannerBox.length; i++) {
  secondSectionBannerTextBox[i] = document.createElement("div");
  secondSectionBannerTextBox[i].classList = "secondSectionBannerTextBox";
  secondSectionBannerBox[i].appendChild(secondSectionBannerTextBox[i]);
}

const secondBannerMainTitle = ["PI", "EVENT", "SET"];
const secondBannerSubTitle = ["ZZA", "MENU", "MENU"];
const secondSectionBannerBoxTitle = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxTitle[i] = document.createElement("div");
  secondSectionBannerBoxTitle[i].classList = "secondSectionBannerBoxTitle";
  secondSectionBannerTextBox[i].appendChild(secondSectionBannerBoxTitle[i]);
}
const secondSectionBannerBoxLTitle = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxLTitle[i] = document.createElement("h2");
  secondSectionBannerBoxLTitle[i].innerText = secondBannerMainTitle[i];
  secondSectionBannerBoxLTitle[i].classList = "secondSectionBannerBoxLTitle";
  secondSectionBannerBoxTitle[i].appendChild(secondSectionBannerBoxLTitle[i]);
}
const secondSectionBannerBoxRTitle = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxRTitle[i] = document.createElement("h2");
  secondSectionBannerBoxRTitle[i].innerText = secondBannerSubTitle[i];
  secondSectionBannerBoxRTitle[i].classList = "secondSectionBannerBoxRTitle";
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
  secondSectionBannerBoxTScript[i].innerText = secondBannerTopScript[i];
  secondSectionBannerBoxScript[i].appendChild(secondSectionBannerBoxTScript[i]);
}
const secondSectionBannerBoxBScript = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxBScript[i] = document.createElement("p");
  secondSectionBannerBoxBScript[i].innerText = secondBannerBottonScript[i];
  secondSectionBannerBoxScript[i].appendChild(secondSectionBannerBoxBScript[i]);
}

const secondSectionBannerBoxBtn = new Array(BoxImages.length);
for (let i = 0; i < BoxImages.length; i++) {
  secondSectionBannerBoxBtn[i] = document.createElement("div");
  secondSectionBannerBoxBtn[i].innerText = "메뉴보러 가기 >";
  secondSectionBannerBoxBtn[i].classList = "secondSectionBannerBoxBtn";
  secondSectionBannerTextBox[i].appendChild(secondSectionBannerBoxBtn[i]);
}
