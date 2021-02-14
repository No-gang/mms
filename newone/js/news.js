let ScriptSliderPosition = 0;
let ScriptSliderPositionCounter = 0;

function moveToNews() {
  if (ScriptSliderPositionCounter == 0) {
    ScriptSliderPosition -= 100;
    if (ScriptSliderPosition == -(newsNoticeScriptSrc.length - 1) * 100) {
      ScriptSliderPositionCounter = 1;
    }
  } else {
    ScriptSliderPosition += 100;
    if (ScriptSliderPosition == 0) {
      ScriptSliderPositionCounter = 0;
    }
  }
  newsScriptSlider[0].style.top = `${ScriptSliderPosition}%`;
  newsScriptSlider[1].style.top = `${ScriptSliderPosition}%`;
}
// setInterval(moveToNews, 3000);

//newsSection
const newsSection = document.querySelector(".newsSection");
//newsScript
const newsScript = document.querySelectorAll(".newsScript");
//newsScriptSlider
const newsScriptSlider = document.querySelectorAll(".newsScriptSlider");

//newsTitle
const newsTitleSrc = ["공지사항", "언론보도"];
const newsTitle = document.querySelectorAll(".newsTitle");
newsTitle.forEach((item, index) => {
  item.innerText = newsTitleSrc[index];
  item.style.margin = "10px";
});

//newsSlider
const newsNoticeScriptSrc = ["신메뉴", "그냥그런메뉴", "그냥 잡소리"];
const newsMediaScriptSrc = ["신메뉴", "그냥그런메뉴", "그냥 잡소리"];
const newsNoticeScriptSliderChilds = new Array(newsNoticeScriptSrc.length);
const newsMediaScriptSliderChilds = new Array(newsMediaScriptSrc.length);
for (let i = 0; i < newsNoticeScriptSrc.length; i++) {
  newsNoticeScriptSliderChilds[i] = document.createElement("div");
  newsNoticeScriptSliderChilds[i].innerText = newsNoticeScriptSrc[i];
  newsNoticeScriptSliderChilds[i].style.height = "20px";
  newsScriptSlider[0].appendChild(newsNoticeScriptSliderChilds[i]);
}
for (let i = 0; i < newsMediaScriptSrc.length; i++) {
  newsMediaScriptSliderChilds[i] = document.createElement("div");
  newsMediaScriptSliderChilds[i].innerText = newsNoticeScriptSrc[i];
  newsMediaScriptSliderChilds[i].style.height = "20px";
  newsScriptSlider[1].appendChild(newsMediaScriptSliderChilds[i]);
}

//button <i class="fas fa-plus-circle"></i>
const newsBtn = new Array(newsTitleSrc.length);
const Newses = document.querySelectorAll(".Newses");
for (let i = 0; i < newsBtn.length; i++) {
  newsBtn[i] = document.createElement("i");
  newsBtn[i].classList = "fas fa-plus-circle";
  Newses[i].appendChild(newsBtn[i]);
}
