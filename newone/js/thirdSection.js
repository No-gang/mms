let leftPosition = 0;
let leftPositionCounter = 0;
// function thirdthSectionImageBoxMove() {
//   if (leftPositionCounter == 0) {
//     leftPosition -= 20;
//     if (leftPosition == -200) {
//       leftPositionCounter = 1;
//     }
//   } else {
//     leftPosition += 20;
//     if (leftPosition == 0) {
//       leftPositionCounter = 0;
//     }
//   }
//   thirdSectionImageBox.style.left = `${leftPosition}%`;
// }
// setInterval(thirdthSectionImageBoxMove, 3000);
function thirdSectionImageBoxLeftMove() {
  leftPosition -= 20;
  if (leftPosition <= -200) {
    leftPosition = -200;
  }
  thirdSectionImageBox.style.left = `${leftPosition}%`;
}
function thirdSectionImageBoxRightMove() {
  leftPosition += 20;
  if (leftPosition >= 0) {
    leftPosition = 0;
  }
  thirdSectionImageBox.style.left = `${leftPosition}%`;
}

const thirdSection = document.querySelector(".thirdSection");

const thirdthSectionTitleSrc = [
  "피자 가게 많다고 겁내지 마세요!!",
  "비스트로 피자는 고객님들이 지켜 드립니다!!",
];
const thirdSectionTitle = document.querySelector(".thirdSectionTitle");
const thirdSectionTitleTopTitle = document.createElement("h2");
const thirdSectionTitleBottomTitle = document.createElement("h2");
thirdSectionTitleTopTitle.classList = "thirdSectionTitleChilds";
thirdSectionTitleBottomTitle.classList = "thirdSectionTitleChilds";
thirdSectionTitle.appendChild(thirdSectionTitleTopTitle);
thirdSectionTitle.appendChild(thirdSectionTitleBottomTitle);
const thirdSectionTitleChilds = document.querySelectorAll(
  ".thirdSectionTitleChilds"
);
thirdSectionTitleChilds.forEach((item, index) => {
  item.innerText = thirdthSectionTitleSrc[index];
});

const thirdSectionImageBox = document.querySelector(".thirdSectionImageBox");
const thirdSectionImageSrc = [
  "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
const thirdSectionImage = new Array(10);
for (let i = 0; i < thirdSectionImage.length; i++) {
  thirdSectionImage[i] = document.createElement("img");
  thirdSectionImage[i].classList = "thirdSectionImage";
  thirdSectionImage[i].src = thirdSectionImageSrc[0];
  thirdSectionImageBox.appendChild(thirdSectionImage[i]);
}

const thirdSectionImageBoxBtn = new Array(2);
const thirdSectionImageBoxBtnSrc = [
  "fas fa-chevron-circle-left",
  "fas fa-chevron-circle-right",
];
for (let i = 0; i < thirdSectionImageBoxBtn.length; i++) {
  thirdSectionImageBoxBtn[i] = document.createElement("i");
  thirdSectionImageBoxBtn[i].classList = thirdSectionImageBoxBtnSrc[i];

  if (i == 0) {
    thirdSectionImageBoxBtn[i].addEventListener(
      "click",
      thirdSectionImageBoxRightMove
    );
  } else {
    thirdSectionImageBoxBtn[i].addEventListener(
      "click",
      thirdSectionImageBoxLeftMove
    );
  }
  thirdSection.appendChild(thirdSectionImageBoxBtn[i]);
}
