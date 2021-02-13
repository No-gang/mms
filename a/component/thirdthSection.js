let leftPosition = 0;
let leftPositionCounter = 0;

function thirdthSectionImageBoxMove() {
  if (leftPositionCounter == 0) {
    leftPosition -= 20;
    if (leftPosition == -200) {
      leftPositionCounter = 1;
    }
  } else {
    leftPosition += 20;
    if (leftPosition == 0) {
      leftPositionCounter = 0;
    }
  }
  thirdthSectionImageBox.style.left = `${leftPosition}%`;
}
function thirdthSectionImageBoxLeftMove() {
  leftPosition -= 20;
  console.log(leftPosition);
  if (leftPosition <= -200) {
    leftPosition = -200;
  }
  thirdthSectionImageBox.style.left = `${leftPosition}%`;
}
function thirdthSectionImageBoxRightMove() {
  leftPosition += 20;
  if (leftPosition >= 0) {
    leftPosition = 0;
  }
  thirdthSectionImageBox.style.left = `${leftPosition}%`;
}
// setInterval(thirdthSectionImageBoxMove, 3000);

const thirdthSection = document.createElement("section");
thirdthSection.style.width = "100%";
thirdthSection.style.height = "100vh";
thirdthSection.style.overflow = "hidden";
thirdthSection.style.position = "relative";
thirdthSection.style.background = "#CE6D39";
body.appendChild(thirdthSection);

const thirdthSectionTitle = document.createElement("div");
const thirdthSectionTopTitle = document.createElement("h2");
const thirdthSectionBottomTitle = document.createElement("h2");
thirdthSection.appendChild(thirdthSectionTitle);
thirdthSectionTitle.appendChild(thirdthSectionTopTitle);
thirdthSectionTitle.appendChild(thirdthSectionBottomTitle);
thirdthSectionTopTitle.classList = "thirdthSectionTitles";
thirdthSectionBottomTitle.classList = "thirdthSectionTitles";
thirdthSectionTitle.style.height = "20%";
thirdthSectionTitle.style.display = "flex";
thirdthSectionTitle.style.flexDirection = "column";
thirdthSectionTitle.style.justifyContent = "center";
thirdthSectionTitle.style.minWidth = "600px";
const thirdthSectionTitleSrc = [
  "피자 가게 많다고 겁내지 마세요!!",
  "비스트로 피자는 고객님들이 지켜 드립니다!!",
];
const thirdthSectionTitles = document.querySelectorAll(".thirdthSectionTitles");
thirdthSectionTitles.forEach((item, index) => {
  item.innerText = thirdthSectionTitleSrc[index];
  item.style.textAlign = "center";
  item.style.color = "white";
});

const thirdthSectionImageBox = document.createElement("section");
thirdthSection.appendChild(thirdthSectionImageBox);
thirdthSectionImageBox.style.position = "relative";
thirdthSectionImageBox.style.width = "300vw";
thirdthSectionImageBox.style.height = "70%";
thirdthSectionImageBox.style.display = "flex";
thirdthSectionImageBox.style.justifyContent = "space-around";
thirdthSectionImageBox.style.alignItems = "center";
thirdthSectionImageBox.style.left = "0";
thirdthSectionImageBox.style.transition = "left 0.5s";

const thirdthSectionImageSrc = [
  "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
const thirdthSectionImages = new Array(10);
for (let i = 0; i < thirdthSectionImages.length; i++) {
  thirdthSectionImages[i] = document.createElement("img");
}
thirdthSectionImages.forEach((item) => {
  item.src = thirdthSectionImageSrc[0];
  item.style.height = "70%";
  item.style.margin = "0px 30px";
  thirdthSectionImageBox.appendChild(item);
});

const thirdthSectionImageBoxBtn = new Array(2);
const thirdthSectionImageBoxBtnSrc = ["<", ">"];
for (let i = 0; i < thirdthSectionImageBoxBtn.length; i++) {
  thirdthSectionImageBoxBtn[i] = document.createElement("span");
  thirdthSectionImageBoxBtn[i].innerText = thirdthSectionImageBoxBtnSrc[i];
  thirdthSectionImageBoxBtn[i].style.width = "50px";
  thirdthSectionImageBoxBtn[i].style.height = "50px";
  thirdthSectionImageBoxBtn[i].style.color = "white";
  thirdthSectionImageBoxBtn[i].style.backgroundColor = "rgba(0,0,0,0.5)";
  thirdthSectionImageBoxBtn[i].style.fontSize = "2rem";
  thirdthSectionImageBoxBtn[i].style.textAlign = "center";
  thirdthSectionImageBoxBtn[i].style.lineHeight = "50px";
  thirdthSectionImageBoxBtn[i].style.position = "absolute";
  thirdthSectionImageBoxBtn[i].style.top = "50%";
  thirdthSectionImageBoxBtn[i].style.cursor = "pointer";
  thirdthSectionImageBoxBtn[i].style.zIndex = "999";
  if (i == 0) {
    thirdthSectionImageBoxBtn[i].style.left = "20%";
    thirdthSectionImageBoxBtn[i].addEventListener(
      "click",
      thirdthSectionImageBoxRightMove
    );
  } else {
    thirdthSectionImageBoxBtn[i].style.left = "80%";
    thirdthSectionImageBoxBtn[i].addEventListener(
      "click",
      thirdthSectionImageBoxLeftMove
    );
  }
  thirdthSection.appendChild(thirdthSectionImageBoxBtn[i]);
}
