// 현대카드 카드 디테일 페이지 JS - card_detail_page.js
import myFn from "./my_function.js";

// console.log("card_detail_page", myFn);

// ///////선택된 카드 바꾸는 기능
// // 카드 객체 값\
let popCard = {
  graffiti: [
    "./imgs/navercard/img_navercard_1.png",
    "./imgs/navercard/img_navercard_back_1.png",
  ],

  line: [
    "./imgs/navercard/img_navercard_2.png",
    "./imgs/navercard/img_navercard_back_2.png",
  ],

  type: [
    "./imgs/navercard/img_navercard_3.png",
    "./imgs/navercard/img_navercard_back_3.png",
  ],

  joy: [
    "./imgs/navercard/img_navercard_4.png",
    "./imgs/navercard/img_navercard_back_4.png",
  ],

  tube: [
    "./imgs/navercard/img_navercard_5.png",
    "./imgs/navercard/img_navercard_back_5.png",
  ],

  core: [
    "./imgs/navercard/img_navercard_6.png",
    "./imgs/navercard/img_navercard_back_6.png",
  ],
};

// <!-- Initialize Swiper -->
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
});

// 스와이퍼 슬라이드 안에 코드넣기

////////// 팝업페이지 보이기 닫기 기능 /////////
// 1. 팝업 숨기기
$(".select-card-popup").hide();

// popCard객체의 배열화!
const keyPopCard = Object.keys(popCard);
// console.log(keyPopCard);

// // 2. 디테일 카드 클릭시 팝업 나오기
$(".view-card-detail").click((idx, e) => {
  $(".swiper-slide").each((idx, el) => {
    // console.log(idx,el,keyPopCard[idx]);
    let hCode = 
      `
  <div class="popup-wrap">
    <h2 class="blind">선택카드디테일 팝업페이지</h2>
    <div class="cont-box">
      <div class="col-1"></div>
      <div class="col-10">
        <section class="card-name-sec">
          <p>${keyPopCard[idx]}</p>
          <p>플라스틱플레이트</p>
        </section>
        <section class="card-detail-sec">
          <div class="card-detail-sec-fornt">
           <img src="${popCard[keyPopCard[idx]][0]}">
            <aside>-앞면-</aside>
          </div>
          <div class="card-detail-sec-back">
          <img src="${popCard[keyPopCard[idx]][1]}">
            <aside>-뒷면-</aside>
          </div>
        </section>
        
        <section class="card-txt-sec">
          <p>
            네이버플러스 멤버십의 로고와 컬러를 친숙한
            키보드로 재해석했습니다.
          </p>
          <p>심플한 레이아웃과 볼드한 키보드 디자인으로</p>
          <p>
            네이버플러스 멤버십의 로고 이미지를 위트 있게
            담아냈습니다.
          </p>
        </section>
      </div>
      <div class="col-1"></div>
    </div>
  </div>`
    ;
    // html 넣기
    $(el).html(hCode);
  }); ///코드 넣기 ///



  $(".select-card-popup").fadeIn(400);

  // 클릭된 요소의 순번
  let seq = $(event.currentTarget).index();
  // console.log(seq);

  // 처음 열때 인댁싱 파일 지정필수
  swiper.activeIndex = seq;

  // 그 후 이동시 이동함수 필수
  swiper.slideTo(seq,0);

});

// 3. 클로즈 버튼 클릭시 팝업 닫기
$("#close-button").click(() => {
  $(".mySwiper").fadeOut(400);
});

// '.view-card-detail 클릭시 span 값 불러오기
// $(".view-card-detail").click(function () {


  // text 값 불러오기

  // let txt = "";

  // // txt값 할당하기
  // txt = $(this, "span").text().trim().toLowerCase();
  // console.log(txt);

  // // txt 값 넣기
  // $(".card-name-sec p").first().text(txt);

  // // txt 값에 따라 이미지 넣기

  
  //     $(".card-detail-sec-fornt").find("img").attr("src", popCard[txt][0]);
  //     $(".card-detail-sec-back").find("img").attr("src", popCard[txt][1]);

  //  스위치문 이용하여 값 넣기
  // switch (txt) {
  //   case Graffiti:
  //     $(".card-detail-sec-fornt").find("img").attr("src");
  //     $(".card-detail-sec-back").find("img").attr("src", popCard.Graffiti[0]);
  //     break;
  // }
  // console.log(popCard.Graffiti[0]);

  // 팝업 보이기
  // $(".select-card-popup").fadeIn(400);
// });
