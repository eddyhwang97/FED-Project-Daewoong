// 현대카드 카드 디테일 페이지 JS - card_detail_page.js
import myFn from "./my_function.js";

console.log("card_detail_page", myFn);

////////// 팝업페이지 보이기 닫기 기능 /////////
// 1. 대상선정
// (1) 선택대상 : .view-card-detail
const viewCard = myFn.qsa(".view-card-detail");

// (2) 이벤트 대상 : #close-button
const closeButton = myFn.qs("#close-button");

// (3) 이벤트 대상 : .select-card-popup
const detailPopup = myFn.qs(".select-card-popup");
// 팝업 안보이게 설정
detailPopup.style.display = "none";

// 2. 이벤트 설정
$(viewCard).click(() => {
  console.log("Click");
  $(detailPopup).fadeIn(600, "easeOutCirc").css({ zIndex: "2" });
});
$(closeButton).click(() => {
  $(detailPopup).fadeOut(600, "easeOutCirc");
});
