const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.transform = "translate(0, 0px)";
  }
  if (window.scrollY == 0) {
    header.style.transform = "translate(0, 40px)";
  }
});

const logo = new Image();
logo.src = "./images/image-removebg-preview.png";
const logoImage = document.createElement("img");
logoImage.src = logo.src;
logoImage.style.height = "7rem";
logoImage.style.background = "white";
logoImage.addEventListener("click", () => {
  location.href = "index.html";
});

const questionBox = document.createElement("div");
questionBox.style.width = "110px";
questionBox.style.display = "flex";
questionBox.style.flexDirection = " column";
questionBox.style.alignItems = "center";
const questionText = document.createElement("div");
questionText.innerText = "창/업/상/담";
questionText.style.marginBottom = "10px";
questionText.style.fontWeight = "100";
questionText.style.fontSize = "1rem";
const questionNumber = document.createElement("div");
questionNumber.innerText = "1544-2591";
questionNumber.style.color = "red";
questionBox.appendChild(questionText);
questionBox.appendChild(questionNumber);

const header = document.createElement("header");
header.style.backgroundColor = "black";
header.style.width = "100%";
header.style.height = "100px";
header.style.position = "fixed";
header.style.zIndex = "1";
header.style.transform = "translate(0, 40px)";
header.style.transition = "transform .6s ease";
header.classList = "matinHeader";
body.appendChild(header);

const headerNav = document.createElement("nav");
headerNav.style.height = "100%";
headerNav.style.margin = "0 auto";
headerNav.style.justifyContent = "space-between";
header.appendChild(headerNav);

const headerUl = document.createElement("ul");
headerUl.style.height = "100%";
headerUl.style.display = "flex";
headerUl.style.alignItems = "center";
headerUl.style.justifyContent = "center";
headerNav.appendChild(headerUl);

const menuList = [
  "BRAND",
  "MENU",
  "STORE",
  logoImage,
  "FRANCHISE",
  "NEW",
  questionBox,
];
const headerLis = new Array(menuList.length);
const headerAnchor = new Array(menuList.length);

for (let i = 0; i < menuList.length; i++) {
  headerLis[i] = document.createElement("li");
  headerAnchor[i] = document.createElement("a");
}
headerAnchor.forEach((element, index) => {
  if (typeof menuList[index] != "string") {
    element.appendChild(menuList[index]);
  } else {
    element.innerText = menuList[index];
  }
});
headerLis.forEach((li, index) => {
  li.appendChild(headerAnchor[index]);
  li.style.fontSize = "1.3rem";
  li.style.color = "white";
  li.style.margin = "0 20px";
  li.style.cursor = "pointer";
  headerUl.appendChild(li);
});
