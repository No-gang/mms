// 실제로 슬라이드 이벤트
function slideShow() {
  if (change > 0) {
    container.scrollLeft += width;
  } else {
    container.scrollLeft -= width;
  }
}

// 슬라이드 전체를 감싸는 컨테이너
const container = document.querySelector(".dragContainer");
// 슬라이드 태그
const slide = document.querySelector(".dragslide");
// 슬라이드 내부 이미지 박스
const dragbox = document.querySelectorAll(".dragbox");
console.log(dragbox);
// 슬라이드 내부의 박스 크기
let width = dragbox[0].offsetWidth + 30;
// 슬라이드의 최소크기는 이미지 박스의 갯수 크기
slide.style.minWidth = `${dragbox.length * width}px`;
// 드래그 시작한 박스의 위치
let start;
// 드레그를 하고나서의 위치
let change;

// desktop drag event
container.addEventListener("dragstart", (e) => {
  start = e.clientX;
});
container.addEventListener("dragover", (e) => {
  e.preventDefault();
  let touch = e.clientX;
  change = start - touch;
});
container.addEventListener("dragend", slideShow);

//Touch event on mobile, tablet
container.addEventListener("touchstart", (e) => {
  start = e.touches[0].clientX;
});
container.addEventListener("touchmove", (e) => {
  e.preventDefault();
  let touch = e.touches[0];
  change = start - touch.clientX;
});
container.addEventListener("touchend", slideShow);
