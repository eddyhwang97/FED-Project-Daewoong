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

//////////////카드 스택/스프레드 토글버튼 //////////////
$(() => {
  $(".switch")
    .css({ transition: "1s forwards" })
    .click(() => {
      $(".stack-bg").css({
        backgroundColor: "#000000",
      });
      $(".stack-icon").css({
        backgroundColor: "#ffffff",
      });
      $(".spread-bg").css({
        backgroundColor: "#ffffff",
        zIndex: "1",
      });
      $(".dot").css({
        backgroundColor: "#000000",
        zIndex: "2",
      });
    });
});

// 오버영역에 마우스 오버시 카드가 해당 방향으로 넘어감
// 카드 클릭시 카드가 뒤집어 지면서 화면을 채움
