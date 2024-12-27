// 카드 디테일 페이지 넣기 JS - insert-detail-page.js

// 카드 이미지 data
import CardImgData from "./data/card_img_data.js";

// 카드 디테일 페이지 data
import CardDetailPageData from "./data/card_detail_page_data.js";

const CDPArr = Object.values(CardDetailPageData);
console.log(CDPArr);
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
$(".card-detail-page").hide();

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
      $(".main-card").prepend(CardDetailPageData.nexon, cdpView());
    } else if (idN == 1) {
      $(".main-card").prepend(CardDetailPageData.naver, cdpView());
    } else if (idN == 2) {
      $(".main-card").prepend(CardDetailPageData.musinsa, cdpView());
    } else if (idN == 3) {
      $(".main-card").prepend(CardDetailPageData.starbucks, cdpView());
    }
    function cdpView() {
      $cardBox.fadeOut(500, () => {
        $(".card-detail-page").css({
          width: "1000px",
          height: "99vh",
          transition: ".5s",
          zIndex: 9999,
        });
        $navArea.hide();
      });
    }
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
