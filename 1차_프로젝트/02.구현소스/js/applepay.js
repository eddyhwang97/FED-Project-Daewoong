// 애플페이 JS - applepay.js
import myFn from "./my_function.js";

// console.log("applpay.js");
// 1. 대상선정
// (1) 선택대상 : .apple-logo
const applpay = myFn.qs(".apple-logo");

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

rollingBanner();

// 무한롤링배너
function rollingBanner() {
  
    // 1. 대상선정
    // (2) 움직이는 ul : #container ul
    const $bannerUl = $(brandBox).find('ul')
    // (3) 최초 슬라이드 li 수집

    // 2. 배너 애니메이션

    // 3. 첫번째 li 맨뒤로 이동
    
    const $firstSlide = $($bannerUl).children('li')
    console.log($bannerUl,$firstSlide);
    
    autoRollingBanner();
    
    function autoRollingBanner(){
        let TIME_ANI = 20000;
    
        $($bannerUl).eq(0).animate({
            translate : '-100%'
        }, TIME_ANI)
        let list = $bannerUl.children('li').eq(0);
        console.log(list)
        $bannerUl.append(list.clone());
    }
};

