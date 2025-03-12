// 현대카드 메인 카드관련 기능 JS - main_card.js
import myFn from "./my_function.js";

// console.log("main_card.js");


//////////////카드 넘기기 기능 /////////////
const $cardBox = $(".card-box");
const $card = $(".card");
const $navArea = $(".nav-area");
const $hoverArea = $(".hover-area");
// console.log($card, $navArea);

// nav-area 넘치는 요소 숨기기
$(".card-nav-area").css({ overflow: "hidden" });

// 다음 카드보기 //////////////
$navArea.eq(1).click(function () {
  $cardBox.append($cardBox.children($card).first());
}); // 다음 카드보기 //////////////

// 이전 카드보기 //////////////
$navArea.eq(0).click(function () {
  $cardBox.prepend($cardBox.children($card).last());
}); // 이전 카드보기 //////////////

// $navArea 오버시 배경 색 변경 및 카드 움직임 ////////////
// next area mouseover /////
$navArea.eq(1).mouseover(function () {
  $hoverArea.eq(1).css({
    backgroundColor: "#ee554d",
    transition: ".2s",
  });
  // // 카드 움직임
  // $card.eq(1).css({
  //   left: "50%",
  //   rotate: "y 30deg",
  // });
  // mouseleave ///
  $(this).mouseleave(() => {
    $hoverArea.eq(1).css({
      backgroundColor: "",
      transition: ".2s",
    });
    // $card.eq(1).css({
    //   left: "0",
    //   rotate: "y 0deg",
    // });
  }); // mouseleave ///
}); // next area mouseover /////

// prev area mouseover /////
$navArea.eq(0).mouseover(function () {
  $hoverArea.eq(0).css({
    backgroundColor: "#4d63ee",
    transition: ".2s",
  });
  // 카드 움직임
  // $card.eq(1).css({
  //   left: "-50%",
  //   rotate: "y -30deg",
  // });
  // mouseleave ///
  $(this).mouseleave(() => {
    $hoverArea.eq(0).css({
      backgroundColor: "",
      transition: ".2s",
    });
    // $card.eq(1).css({
    //   left: "0",
    //   rotate: "y 0deg",
    // }); // mouseleave /
  });

  //
});
// $navArea 오버시 배경 색 변경 및 카드 움직임 ////////////

