// 현대카드 메인 JS -hymain.js
// console.log("hymain.js");

// 마우스오버시 카드 넘어가는 이벤트 ///////////
// 1. 대상선정
// 1-1. 마우스오버 대상
const hoverArea = document.querySelectorAll(".nav-area");
// 1-2. 이벤트 대상
const hoverCard = document.querySelector(".card");

console.log("대상: ", hoverArea);



///좌로넘기기 엔터
hoverArea[0].addEventListener("mouseenter", () => {
  hoverCard.style.rotate = "Y -30deg";
  hoverCard.style.translate = "-200px";
  hoverCard.style.transition = " 0.4s ease-in-out";
}); 
///좌로넘기기 나가기
hoverArea[0].addEventListener("mouseleave", () => {
  hoverCard.style.rotate = "Y 0deg";
  hoverCard.style.translate = "0px";
  hoverCard.style.transition = " .4s ease-in-out";
}); 
///우로넘기기 엔터
hoverArea[1].addEventListener("mouseenter", () => {
  hoverCard.style.rotate = "Y 30deg";
  hoverCard.style.translate = "200px";
  hoverCard.style.transition = " 0.4s ease-in-out";
}); 
///우로넘기기 나가기
hoverArea[1].addEventListener("mouseleave", () => {
  hoverCard.style.rotate = "Y 0deg";
  hoverCard.style.translate = "0px";
  hoverCard.style.transition = " .4s ease-in-out";
});
//  마우스오버 영역 이벤트 종료 /////////





