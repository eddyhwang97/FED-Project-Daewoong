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
});
///////////////오버시 배경 변하기 기능 /////////////////

///////////////카드 뒤집기 후 카드 디테일 페이지 나타나기////////////
$(".card-detail-page").hide();
$(card).click((e) => {
  $(e.currentTarget).toggleClass("rotate");
  if ($(e.currentTarget).hasClass("rotate")) {
    $(card[0]).css({
      rotate: "y 180deg",
      transition: ".7s",
    });
    $(".nav-area").hide();
    $(".switch").hide();
    $(".main-card-name").addClass("off");
    // 배경 기능 끄기

    setTimeout(() => {
      $(card[0]).find(".card-back").css({
        width: "1000px",
        height: "100vh",
        top: "-72%",
        left: "-140%",
        transition: ".5s",
      });
      $(".card-detail-page")
        .css({
          // zIndex:"55",
          rotate: "y 180deg",
        })
        .show();
    }, 700);
  }
});
/////// 디테일 페이지 닫기 /////////////////
$("#top-close-button").click(() => {
  $(".card-detail-page").hide();

  $(card[0]).find(".card-back").css({
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    transition: ".5s",
  });
  setTimeout(() => {
    $(".nav-area").show();
    $(".switch").show();
    $(".main-card-name").removeClass("off");
    $(card[0]).css({
      rotate: "y 0deg",
    });
  }, 700);
});

///////////////카드 뒤집기  ////////////
