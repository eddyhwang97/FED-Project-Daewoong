// 현대카드 메인 카드관련 기능 JS - main_card.js
import myFn from "./my_function.js";

// console.log("main_card.js");

// .card-detial-page 숨기기
$(".card-detail-page").hide();

//////////////카드 넘기기 기능 /////////////
const $cardBox = $(".card-box");
const $card = $(".card");
const $navArea = $(".nav-area");
const $hoverArea = $(".hover-area");
// console.log($card, $navArea);

// nav-area 넘치는 요소 숨기기
$(".card-nav-area").css({ overflow: "hidden" });

// 다음 이전 카드보기 //////////////
$navArea.eq(1).click(function () {
  $cardBox.append($cardBox.children($card).first());
}); // 다음 이전 카드보기 //////////////

// 이전 카드보기 //////////////
$navArea.eq(0).click(function () {
  $cardBox.prepend($cardBox.children($card).last());
}); // 이전 카드보기 //////////////

// 카드 뒤집고 카드 디테일페이지 보이기/////////////
$cardBox.children($card).click(function () {
  console.log(this);
  $('.hd-logo').css({zIndex: 0})

  // 카드 뒤집기
  $(this).css({
    rotate: "y 180deg",
    transition: ".5s",
  });

  // 카드 디테일 페이지 열기
  $(".card-detail-page")
    .delay(500)
    .show(0, function () {
      // console.log(this)
      $(this).css({
        width: "min(1000px,96vw)",
        height: "99vh",
        transition: ".3s",
        zIndex: 9999,
      });
      $navArea.hide();
    });
});

// 디테일 페이지 닫기 //////
$("#top-close-button").click(function () {
  $(".card-detail-page")
    .css({
      width: "",
      height: "",
      transition: ".5s",
      zIndex: 0,
    }) ///디테일페이지 css ///
    .delay(500)
    .fadeOut(0, () => {
      $cardBox.children($card).css({
        rotate: "y 0deg",
        transition: ".5s",
      });
      $('.hd-logo').css({zIndex: 1})
      $navArea.show(500);
    }); ///$card css ////
});

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
