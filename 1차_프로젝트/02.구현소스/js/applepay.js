// 애플페이 JS - applepay.js
import myFn from "./my_function.js";

// console.log("applpay.js");
// 1. 대상선정
// (1) 선택대상 : .apple-logo
const appleLogo = myFn.qs(".apple-logo");
// $(".wrap").hide();
$(appleLogo).click(()=>{
  $(".wrap")
  .css({
    top: "0",
    height: "100vh",
    transition: ".6s"
  });
  // 뒷 배경 기능 업애기
  $(".nav-area").hide();
})
////애플페이 페이지 닫기 ////////
$("#top-close-button-applepage").click(()=>{
  $(".wrap").css({
    top: "100%",
    height: "0",
    transition: ".6s"
  })
  $(".nav-area").show();
})
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
const getBCR = x => x.getBoundingClientRect().top;

const scTarget = document.querySelector('.ap-part3');
const scTgHeight = scTarget.offsetHeight-454;
const $mvPhone = $('.move-phone span');

$mvPhone.find('p').css({display: 'none'})

$(window).scroll(()=>{
  let val = getBCR(scTarget);
  if(val<0&&val>-scTgHeight){
    console.log('작동!!!');

    if(Math.abs(val)>1000&&Math.abs(val)<2250)  $mvPhone.find('p').css({display : ''});
    else $mvPhone.find('p').css({display : 'none'});
    if(Math.abs(val)<=50)  $mvPhone.css({translate:'0'});
    if(Math.abs(val)>400)  $mvPhone.eq(3).css({translate:'110%'});
    if(Math.abs(val)>600)  $mvPhone.eq(2).css({translate:'220%'});
    if(Math.abs(val)>800)  $mvPhone.eq(1).css({translate:'330%'});
    if(Math.abs(val)>1000)  $mvPhone.eq(0).css({translate:'440%'});
    if(Math.abs(val)>2250)  $mvPhone.css({translate:'0'});
    
  }
  // console.log(val,scTgHeight);
}); ///// scroll ////



