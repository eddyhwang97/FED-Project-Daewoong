// 현대카드 메인 카드관련 기능 JS - main_card.js
import myFn from "./my_function.js";

// console.log("hymain.js");

//////////////카드 넘기기 기능 /////////////
// 1. 이벤트 대상
// 1-1. 오버영역 .nav-area
const navArea = myFn.qsa(".nav-area");
// 1-2. 넘겨지는 대상 .card
const card = myFn.qsa(".spreadcard");
// const hvoercard = myFn.qsaEl(card)
// 1-3. 뒷배경 .hover-area
const hoverArea = myFn.qsa(".hover-area");

///////////////카드 뒤집기 ////////////
$(card).click(function() {
  $(this).toggleClass("rotate-card");
  $(this).attr("style", "");
  if ($(this).hasClass("rotate-card")) {
    $(".nav-area").css({ display: "none" });
    $(".switch").css({ display: "none" });
    $(".main-card-name").addClass("off");
  } else {
    $(".nav-area").css({ display: "" });
    $(".switch").css({ display: "" });
    $(".main-card-name").removeClass("off");
  }
  console.log(this,idx);
});
