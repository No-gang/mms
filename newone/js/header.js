const bannerImageSrc = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
// check된 타겟 저장하는 글로벌 변수
let checkBtn;
// 슬라이드 left 위치
let checkBtnPosition = 0;

function moveBanner(event) {
  const target = event.target;
  if (target.className === "BannerBtnLeft") {
    checkBtnPosition += 100;
    if (checkBtnPosition > 0) checkBtnPosition = 0;
    headerSlider.style.left = `${checkBtnPosition}%`;
    checkBtn.style.backgroundColor = "red";
    target.style.backgroundColor = "blue";
    checkBtn = target;
  } else {
    checkBtnPosition -= 100;
    if (checkBtnPosition < -((bannerImageSrc.length - 1) * 100))
      checkBtnPosition = -((bannerImageSrc.length - 1) * 100);
    headerSlider.style.left = `${checkBtnPosition}%`;
    checkBtn.style.backgroundColor = "red";
    target.style.backgroundColor = "blue";
    checkBtn = target;
  }
}

// setInterval(() => {
//   if (bannerSlider.style.left !== "0px") {
//     bannerSlider.style.left = "0px";
//     bannerSlideBtn[0].style.backgroundColor = "blue";
//     bannerSlideBtn[1].style.backgroundColor = "red";
//   } else {
//     bannerSlider.style.left = "-100%";
//     bannerSlideBtn[1].style.backgroundColor = "blue";
//     bannerSlideBtn[0].style.backgroundColor = "red";
//   }
// }, 8000);

const header = document.querySelector("header");

const headerSlider = document.querySelector(".headerSlider");
headerSlider.style.width = `${bannerImageSrc.length * 100}%`;

const bannerImage = new Array(bannerImageSrc.length);
for (let i = 0; i < bannerImageSrc.length; i++) {
  bannerImage[i] = new Image();
  bannerImage[i].src = bannerImageSrc[i];
}

const headerSliderImage = new Array(bannerImageSrc.length);
for (let i = 0; i < bannerImageSrc.length; i++) {
  headerSliderImage[i] = document.createElement("div");
}
headerSliderImage.forEach((section, index) => {
  section.style.backgroundImage = `url("${bannerImage[index].src}")`;
  headerSlider.appendChild(section);
});

const bannerSlideBtn = [];
for (let i = 0; i < bannerImageSrc.length; i++) {
  bannerSlideBtn[i] = document.createElement("div");
}
bannerSlideBtn.forEach((btn, index) => {
  if (index == 0) {
    btn.style.left = "45%";
    btn.classList = "BannerBtnLeft";
    btn.style.backgroundColor = "blue";
    checkBtn = btn;
  } else {
    btn.style.left = "55%";
    btn.classList = "BannerBtnRight";
  }
  btn.addEventListener("click", moveBanner);
  header.appendChild(btn);
});
