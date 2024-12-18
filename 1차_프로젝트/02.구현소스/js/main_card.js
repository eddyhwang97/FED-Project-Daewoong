// 현대카드 메인 카드관련 기능 JS - main_card.js
import myFn from "./my_function.js";

// console.log("main_card.js");

//////////////카드 넘기기 기능 /////////////
// 1. 이벤트 대상
// 1-1. 오버영역 .nav-area
const navArea = myFn.qsa(".nav-area");
// 1-2. 넘겨지는 대상 .card
const card = myFn.qsa(".card");
// const hvoercard = myFn.qsaEl(card)
// 1-3. 뒷배경 .hover-area
const hoverArea = myFn.qsa(".hover-area");

// console.log("대상", navArea, card, hoverArea);
addEventListener;
// 2. 이벤트 설정
// 오버영역 마우스 오버시 카드가 해당 방향으로 넘어감
navArea.forEach((el, idx) => {
  // console.log("대상", el, "순번", idx);
  el.addEventListener("mouseover", function () {
    //호출확인
    // console.log("in", el, idx);
    if (idx == 0) {
      hoverArea[0].style.backgroundColor = "#4D63EE";
      card[0].style.translate = "-70%";
      card[0].style.rotate = "y -40deg";
    } else if (idx == 1) {
      hoverArea[1].style.backgroundColor = "#EE554D";
      card[0].style.translate = "70%";
      card[0].style.rotate = "y 40deg";
    }
  });
  el.addEventListener("mouseout", function () {
    // 호출확인
    // console.log("out");
    hoverArea[idx].style.backgroundColor = "transparent";
    card[0].style.translate = "0%";
    card[0].style.rotate = "y 0deg";
  });
  
  /////////////// 다음/이전 카드 //////////////
  
})
///////////////오버시 배경 변하기 기능 /////////////////

///////////////카드 뒤집기 ////////////
$(card).click((e) => {
  $(e.currentTarget).toggleClass("rotate-card");
  $(e.currentTarget).attr("style", "");
  if ($(e.currentTarget).hasClass("rotate-card")) {
    $(".nav-area").css({ display: "none" });
    $(".switch").css({ display: "none" });
    $(".main-card-name").addClass("off");
  } else {
    $(".nav-area").css({ display: "" });
    $(".switch").css({ display: "" });
    $(".main-card-name").removeClass("off");
  }
});
///////////////카드 뒤집기  ////////////





