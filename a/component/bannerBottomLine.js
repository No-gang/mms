let ScriptSrc = ["신메뉴", "그냥그런 메뉴asdasd", "그냥 잡소리"];
let ScriptSliderPosition = 0;
let ScriptSliderPositionCounter = 0;

function moveToNews() {
  if (ScriptSliderPositionCounter == 0) {
    ScriptSliderPosition -= 100;
    if (ScriptSliderPosition == -(ScriptSrc.length - 1) * 100) {
      ScriptSliderPositionCounter = 1;
    }
  } else {
    ScriptSliderPosition += 100;
    if (ScriptSliderPosition == 0) {
      ScriptSliderPositionCounter = 0;
    }
  }
  noticeScriptSlider.style.top = `${ScriptSliderPosition}%`;
  mediaScriptSlider.style.top = `${ScriptSliderPosition}%`;
}
setInterval(moveToNews, 3000);

const bannerBottomLine = document.createElement("section");
bannerBottomLine.style.width = "100%";
bannerBottomLine.style.height = "50px";
// bannerBottomLine.style.backgroundColor = "red";
bannerBottomLine.style.display = "flex";
bannerBottomLine.style.justifyContent = "center";
bannerBottomLine.style.alignItems = "center";
body.appendChild(bannerBottomLine);

const noticeBanner = document.createElement("div");
noticeBanner.classList = "newsBanners";
// noticeBanner.style.backgroundColor = "blue";
const noticeTitle = document.createElement("span");
noticeTitle.classList = "newsTitles";
noticeTitle.innerText = "공지사항";

const noticeScript = document.createElement("div");
noticeScript.classList = "newsScripts";
const noticeScriptSlider = document.createElement("div");
noticeScriptSlider.classList = "newsScriptSlider";
noticeScript.appendChild(noticeScriptSlider);
const noticeScriptSliderSrc = [ScriptSrc.length];
for (let i = 0; i < ScriptSrc.length; i++) {
  noticeScriptSliderSrc[i] = document.createElement("div");
  noticeScriptSliderSrc[i].innerText = ScriptSrc[i];
  noticeScriptSliderSrc[i].style.height = "20px";
  noticeScriptSlider.appendChild(noticeScriptSliderSrc[i]);
}

const noticeBtn = document.createElement("btn");
noticeBtn.classList = "newsBtn";
bannerBottomLine.appendChild(noticeBanner);
noticeBanner.appendChild(noticeTitle);
noticeBanner.appendChild(noticeScript);
noticeBanner.appendChild(noticeBtn);

const mediaBanner = document.createElement("div");
mediaBanner.classList = "newsBanners";
// mediaBanner.style.backgroundColor = "green";
const mediaTitle = document.createElement("span");
mediaTitle.classList = "newsTitles";
mediaTitle.innerText = "언론보도";

const mediaScript = document.createElement("div");
mediaScript.classList = "newsScripts";
const mediaScriptSlider = document.createElement("div");
mediaScriptSlider.classList = "newsScriptSlider";
mediaScript.appendChild(mediaScriptSlider);
const mediaScriptSliderSrc = [ScriptSrc.length];
for (let i = 0; i < ScriptSrc.length; i++) {
  mediaScriptSliderSrc[i] = document.createElement("div");
  mediaScriptSliderSrc[i].innerText = ScriptSrc[i];
  mediaScriptSliderSrc[i].style.height = "20px";
  mediaScriptSlider.appendChild(mediaScriptSliderSrc[i]);
}

const mediaBtn = document.createElement("btn");
mediaBtn.classList = "newsBtn";
bannerBottomLine.appendChild(mediaBanner);
mediaBanner.appendChild(mediaTitle);
mediaBanner.appendChild(mediaScript);
mediaBanner.appendChild(mediaBtn);

const newsBanners = document.querySelectorAll(".newsBanners");
newsBanners.forEach((item) => {
  item.style.display = "flex";
  item.style.width = "500px";
  item.style.justifyContent = "space-between";
  item.style.alignItems = "center";
});

const newsTitles = document.querySelectorAll(".newsTitles");
newsTitles.forEach((item) => {
  item.style.fontWeight = "bold";
});

const newsBtn = document.querySelectorAll(".newsBtn");
newsBtn.forEach((item) => {
  item.innerText = "+";
  item.style.width = "30px";
  item.style.height = "30px";
  item.style.lineHeight = "30px";
  item.style.textAlign = "center";
  item.style.borderRadius = "50%";
  item.style.backgroundColor = "black";
  item.style.color = "white";
  item.style.cursor = "pointer";
  item.style.margin = "10px";
});

const newsScripts = document.querySelectorAll(".newsScripts");
newsScripts.forEach((item) => {
  item.style.width = "50%";
  item.style.height = "20px";
  item.style.overflow = "hidden";
  item.style.position = "relative";
});

const newsScriptSlider = document.querySelectorAll(".newsScriptSlider");
newsScriptSlider.forEach((item) => {
  item.style.cursor = "pointer";
  item.style.top = "0%";
  item.style.transition = "top 0.5s";
  item.style.position = "absolute";
  item.style.height = `${20 * ScriptSrc.length}px`;
  //   item.style.backgroundColor = "green";
});
