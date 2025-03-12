// 애플페이 JS - applepay.js
import myFn from "./my_function.js";

// console.log("applpay.js");
// 1. 대상선정
// (1) 선택대상 : .apple-logo
const appleLogo = myFn.qs(".apple-logo");
// $(".wrap").hide();
$(appleLogo).click(() => {
  $(".logo").hide();
  $(".wrap").css({
    top: "1%",
    height: "99vh",
    transition: ".6s",
  });
  // 뒷 배경 기능 업애기
  $(".nav-area").hide();
});
////애플페이 페이지 닫기 ////////
$("#top-close-button-applepage").click(() => {
  $(".logo").show();
  $(".wrap").css({
    top: "100%",
    height: "0",
    transition: ".6s",
  });
  $(".nav-area").show();
});
// (2) 이벤트 대상 : .applepay-page

//////////////////// 무한 배너
// 대상 선정 : .brand-box
const brandBox = myFn.qs(".brand-box"); // ul을 추가할 부모 요소
//

// 기준 변수
const ulCount = 5; // <ul>의 개수
const liCount = 10; // 각 <ul> 안의 <li> 개수
const totalItems = 50; // 총 <li>의 개수 (1부터 50까지)

let currentIndex = 1; // <li>의 인덱스를 추적

// brandListUp 호출
window.innnerHTML = brandListUp();
////brandListUp ////////////////
function brandListUp() {
  for (let j = 1; j <= ulCount; j++) {
    // <ul> 생성
    const ul = document.createElement("ul");
    ul.className = `brand-wrap-box${j}`;

    for (let k = 0; k < liCount; k++) {
      if (currentIndex > totalItems) break; // 50개를 초과하면 중단

      // <li> 생성
      const li = document.createElement("li");

      // <img> 생성
      const img = document.createElement("img");
      img.src = `./imgs/applepay/brand/ad_${currentIndex}.png`;

      // <img>를 <li>에 추가
      li.appendChild(img);

      // <li>를 <ul>에 추가
      ul.appendChild(li);

      currentIndex++; // 다음 <li> 인덱스로 이동
    }

    // <ul>을 부모 요소에 추가
    brandBox.appendChild(ul);
  }
} ////brandListUp ////////////////

// rollingBanner 함수호출
window.addEventListener("onload", rollingBanner());
////////rollingBanner ///////////////
function rollingBanner() {
  // 1. 대상선정
  // (1) 움직이는 대상 : #container ul
  const $banner = $(brandBox).find("ul");
  // (2) ul 안 li
  const $li = $banner.find("li");
  // (3) 한번에 움직일 거리 : li.width()
  const liWidth = $li.outerWidth();
  // console.log($banner,$li,liWidth);

  timer();
  let current = 0;
  let $interval;
  // 롤링배너 시작 지연시간
  function timer() {
    let $interval = setInterval(function () {
      autoRollingBanner();
    }, 0);
  }

  function autoRollingBanner() {
    // 짝수 배너 css
    $($banner)
      .even()
      .animate(
        {
          translate: `-${liWidth}px`,
        },
        5000,
        "linear",
        function () {
          $(this).css({ translate: "0" });
          $(this).append($(this).children("li").eq(0));
        } /// 애니메이션 후 첫번째 li 뒤에 붙이기
      ); /// 애니메이션 ////
    current++;
    if (current == 9) current = 0;

    $($banner)
      .odd()
      .css({
        justifyContent: "end",
      })
      .animate(
        {
          translate: `${liWidth}px`,
        },
        5000,
        "linear",
        function () {
          $(this).css({ translate: "0" });
          $(this).prepend($(this).children("li").eq(9));
        } /// 애니메이션 후 첫번째 li 뒤에 붙이기
      ); /// 애니메이션 ////
  } ///autoRollingBanner 함수 //////
} ////////rollingBanner ///////////////

//// scroll act
// 변경대상 : .move-phone
const getBCR = (x) => x.getBoundingClientRect().top;

const scTarget = document.querySelector(".ap-part3");
const scTgHeight = scTarget.offsetHeight - 454;
const $mvPhone = $(".move-phone span");

$mvPhone.find("p").hide();

$(".wrap").scroll(() => {
  let val = getBCR(scTarget);
  if (val < 0 && val > -scTgHeight) {
    // console.log("작동!!!");
    // 설명글 보이기
    if (Math.abs(val) > 100 && Math.abs(val) < 2500) {
      $mvPhone.find("p").show();
    } else {
      $mvPhone.find("p").hide();
    }

    // 1구간 eq(4) 메인
    if (Math.abs(val) > 100 && Math.abs(val) < 500)
      $mvPhone
        .eq(4)
        .show()
        .css({ translate: "0" })
        .prev()
        .css({ translate: "110%" })
        .prev()
        .css({ translate: "220%" })
        .prev()
        .css({ translate: "330%" })
        .prev()
        .css({ translate: "440%" });

    // 2구간 eq(3) 메인
    if (Math.abs(val) > 500 && Math.abs(val) < 1000)
      $mvPhone
        .eq(4)
        .hide()
        .prev()
        .show()
        .css({ translate: "0" })
        .prev()
        .css({ translate: "110%" })
        .prev()
        .css({ translate: "220%" })
        .prev()
        .css({ translate: "330%" });

    // 3구간 eq(2) 메인
    if (Math.abs(val) > 1000 && Math.abs(val) < 1500)
      $mvPhone
        .eq(3)
        .hide()
        .prev()
        .show()
        .css({ translate: "0" })
        .prev()
        .css({ translate: "110%" })
        .prev()
        .css({ translate: "220%" });

    // 4구간 eq(1) 메인
    if (Math.abs(val) > 1500 && Math.abs(val) < 2000)
      $mvPhone
        .eq(2)
        .hide()
        .prev()
        .show()
        .css({ translate: "0" })
        .prev()
        .css({ translate: "110%" });
    // 5구간 eq(0) 메인
    if (Math.abs(val) > 2000 && Math.abs(val) < 2500)
      $mvPhone.eq(1).hide().prev().css({ translate: "0" });
    if (Math.abs(val) > 2500 && Math.abs(val) < 3000)
      $mvPhone.eq(0).find("img").attr("src", "./imgs/applepay/applepay_07.png");
  }
  // 작동 안할시
  else $mvPhone.css({ translate: "0" });
  // console.log(val,scTgHeight);
}); ///// scroll ////

/////////// stick bar 바로가기 기능 /////////////

// 이벤트 대상 .stickabr li
const $goScr = $(".stickybar li");
// console.log($goScr)
// 변경대상 .wrap

// moveTo 호출
moveTo();

function moveTo() {
  let movesec1 = 600;
  let movesec2 = 5300;
  let movesec3 = 5700;

  // 스크롤 값 구하기
  $(".wrap").scroll(() => {
    let val = $(".wrap").scrollTop();
    console.log(val);
  });

  // $goScr.eq(0).click(function () {
  //   // console.log('hi')
  // });
  // $goScr.eq(1).click(function () {
  //   // console.log('hi')
  //   // 해당 스크롤 위치로 이동
  // });
  // $goScr.eq(2).click(function () {
  //   // console.log('hi')
  // });

  // 닫기버튼 색 변하기

  $goScr.each((idx, el) => {
    $(el).click(function () {
      // 클릭된 li색 바꾸기
      $(this)
        .css({ backgroundColor: "black", color: "white" })
        .siblings()
        .css({ backgroundColor: "#ccc", color: "#707070" });
      if (idx == 0) {
        $(".wrap").animate({ scrollTop: movesec1 }, 1000);
      } else if (idx == 1) {
        $(".wrap").animate({ scrollTop: movesec2 }, 500);
      } else if (idx == 2) {
        $(".wrap").animate({ scrollTop: movesec3 }, 500);
      }
    });
  });
}
