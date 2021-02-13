const bannerImageSrc = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
let checkBtn;
let checkBtnPosition = 0;

function moveBanner(event) {
  const target = event.target;
  if (target.className === "BannerBtnLeft") {
    checkBtnPosition += 100;
    if (checkBtnPosition > 0) checkBtnPosition = 0;
    bannerSlider.style.left = `${checkBtnPosition}%`;
    checkBtn.style.backgroundColor = "red";
    target.style.backgroundColor = "blue";
    checkBtn = target;
  } else {
    checkBtnPosition -= 100;
    if (checkBtnPosition < -((bannerImageSrc.length - 1) * 100))
      checkBtnPosition = -((bannerImageSrc.length - 1) * 100);
    bannerSlider.style.left = `${checkBtnPosition}%`;
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

const bannerImage = [];
for (let i = 0; i < bannerImageSrc.length; i++) {
  bannerImage[i] = new Image();
  bannerImage[i].src = bannerImageSrc[i];
}
const banner = document.createElement("section");
banner.style.width = "100%";
banner.style.height = "100vh";
banner.style.background = "red";
banner.style.position = "relative";
banner.style.overflow = "hidden";
banner.style.zIndex = "0";
body.appendChild(banner);

const bannerSlider = document.createElement("div");
bannerSlider.style.width = "200%";
bannerSlider.style.height = "100%";
bannerSlider.style.display = "flex";
bannerSlider.style.position = "absolute";
bannerSlider.style.left = "0%";
bannerSlider.style.transition = "left 0.5s";
banner.appendChild(bannerSlider);

const bannerImgSection = new Array(bannerImageSrc.length);
for (let i = 0; i < bannerImageSrc.length; i++) {
  bannerImgSection[i] = document.createElement("section");
}
bannerImgSection.forEach((section, index) => {
  section.style.width = "100%";
  section.style.height = "100%";
  section.style.backgroundImage = `url("${bannerImage[index].src}")`;
  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  bannerSlider.appendChild(section);
});

const bannerSlideBtn = [];
for (let i = 0; i < 2; i++) {
  bannerSlideBtn[i] = document.createElement("div");
}
bannerSlideBtn.forEach((btn, index) => {
  btn.style.width = "30px";
  btn.style.height = "30px";
  btn.style.borderRadius = "50%";
  btn.style.background = "red";
  btn.style.cursor = "pointer";
  btn.style.position = "absolute";
  btn.style.bottom = "3%";
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
  banner.appendChild(btn);
});
