// 카드 디테일 페이지 넣기 JS - insert-detail-page.js

// 카드 이미지 data
import CardImgData from "./data/card_img_data.js";

// 카드 디테일 페이지 data
import CardDetailPageData from "./data/card_detail_page_data.js";

const CDPVal = Object.values(CardDetailPageData);
const CDPArr = Object.keys(CardDetailPageData);
const CIDArr = Object.keys(CardImgData);
console.log(CDPVal,CDPArr,CIDArr);
// 대상 선정
// 1. 카드 박스 .card-box
const $cardBox = $(".card-box");
// 2. 카드
const $card = $(".card");
// 3. .nav-area
const $navArea = $(".nav-area");
// 4. 오버영역 .hover-area
const $hoverArea = $(".hover-area");
// 5. 카드 디테일 페이지 .card-detail-page
// .card-detial-page display none 처리

// $cardBox.children($card) (가운데 카드) 카드 클릭 시 .main-card 안에 디데일 페이지 넣기
$cardBox.children($card).each(function (idx, el) {
  $(this).attr("id", idx);

  $(this).click(function () {
    const idN = $(this).attr("id");
    // console.log(idN);

    // 카드 뒤집기
    $(this).css({
      rotate: "y 180deg",
      transition: ".5s",
    });

    // 카드에 맞는 디테일 페이지 값 넣기
    if (idN == 0) {
      $(".main-card").prepend(CDPVal[idN], cdpView());
    } else if (idN == 1) {
      $(".main-card").prepend(CDPVal[idN], cdpView());
    } else if (idN == 2) {
      $(".main-card").prepend(CDPVal[idN], cdpView());
    } else if (idN == 3) {
      $(".main-card").prepend(CDPVal[idN], cdpView());
    }

    function cdpView() {
      $cardBox.delay(600).show(0, () => {
        $(".card-detail-page").css({
          width: "1000px",
          height: "99vh",
          transition: ".5s",
          zIndex: 9999,
        });
        $navArea.hide();
      });
    } ////cdpView /////////

    // 팝업창 설정 /////////
    // .select-card-popup //////////
    $(".select-card-popup").hide();

    $(".view-card-detail").click(() => {
      console.log("hi");
      // 팝업창 넣기
      $(".swiper-slide").html(CardDetailPageData.cardPopup);
      // 팝업창 나타나기
      $(".select-card-popup").fadeIn();
      // 팝업창 닫기
      $("#close-button").click(() => {
        $(".select-card-popup").fadeOut();
      })



      // 클릭된 요소의 순번
      let seq = $(event.currentTarget).index();
      // console.log(seq);

      // 스와이퍼 API
      // 처음 열때 인댁싱 파일 지정필수
      swiper.activeIndex = seq;

      // 그 후 이동시 이동함수 필수
      swiper.slideTo(seq, 0);
    }); ////// view card 클릭 -> 팝업창 //////////

    // // <!-- Initialize Swiper --> /////////////
    //////// 스와이퍼 기능
    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        // type: "fraction",
      },
      mousewheel: true,
      keyboard: true,
    }); /////스와이퍼

    // 디테일 페이지 닫기 //////
    $("#top-close-button").click(() => {
      $(".card-detail-page").detach();
      $cardBox.show(0, function () {
        $cardBox.children($card).css({
          rotate: "y 0deg",
          transition: ".5s",
        });
      });
      $navArea.show();
    }); // 디테일 페이지 닫기 //////
  }); ////click ////////////////////
}); ///each /////////////////////////////////
