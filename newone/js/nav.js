window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.style.transform = "translate(0, 0px)";
  }
  if (window.scrollY == 0) {
    nav.style.transform = "translate(0, 40px)";
  }
});

const nav = document.querySelector("nav");
const navUl = document.querySelector(".navUl");

const logoImage = new Image();
logoImage.src = "./images/image-removebg-preview.png";
const logo = document.createElement("img");
logo.src = logoImage.src;

// nav bar 우측에 있는 문의 번호칸
const questionBox = document.createElement("div");
const questionText = document.createElement("div");
const questionIcon = document.createElement("i");
questionText.appendChild(questionIcon);
questionIcon.classList = "fas fa-phone-volume";
questionIcon.innerText = " 창/업/상/담";
const questionNumber = document.createElement("div");
questionNumber.innerText = "1544-2591";
questionBox.appendChild(questionText);
questionBox.appendChild(questionNumber);

const menuList = [
  "BRAND",
  "MENU",
  "FRANCHISE",
  logoImage,
  "STORE",
  "COMMUNITY",
  questionBox,
];

const navLi = new Array(menuList.length);
const headerAnchor = new Array(menuList.length);
for (let i = 0; i < menuList.length; i++) {
  navLi[i] = document.createElement("li");
  headerAnchor[i] = document.createElement("a");
}
headerAnchor.forEach((element, index) => {
  if (typeof menuList[index] != "string") {
    element.appendChild(menuList[index]);
  } else {
    element.innerText = menuList[index];
  }
  if (index != 6) {
    element.href = "index.html";
    element.addEventListener("mouseover", () => {
      element.style.color = "red";
    });
    element.addEventListener("mouseout", () => {
      element.style.color = "white";
    });
  } else {
    element.href = "tel:01000000000";
  }
});
navLi.forEach((li, index) => {
  li.appendChild(headerAnchor[index]);
  navUl.appendChild(li);
});
