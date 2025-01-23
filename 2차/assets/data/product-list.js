// 탬버린즈 상품 데이터 JS - product-list.js

// 데이터뽑아오기 ///////////
// temp1 ///////
// const temp1 = [];
// let idxN = 0;
// document.querySelectorAll(`.product-other`).forEach((el) => {
//   ++idxN;
//   temp1.push({
//     idx: idxN,
//     productTitle: el.querySelector("h2").innerText,
//     productNote: el.querySelector("em").innerText,
//     productPrice: el.querySelector("strong").innerText,
//   });
// });
// // 출력하기
// console.log(temp1);

// // temp2 ///////
// const temp2 = [];
// document.querySelectorAll(`.ProductListItem_product-small__TCb4m`).forEach((el) => {
//   temp2.push({
//     productTitle: el.querySelector("h2").innerText,
//     // productNote: el.querySelector("em").innerText,
//     // productPrice: el.querySelector("strong").innerText,
//   });
// });
// // 출력하기
// console.log(temp2);

// 카테고리별 제품 메인 제품리스트 ///////////////
const productList = {
  /*********************** 
   * [제품 리스트 객체화]
    - 일렬번호(idx)
    -큰카테고리(categoty) -  큰카테고리 (소분류) 이렇게 써놨습니다 제품에 맞는 소분류 써주시면됩니다!
                EVENING GLOW (이브닝 글로우)
                PERFUME (퍼퓸, 퍼퓸 밤)
                HAND&LIP (쉘 퍼퓸 핸드, 에그 립밤, 체인 핸드)
                BODY (샤워리 바디, 퍼퓸드 핸드 앤 바디)
                HOME FRAGRANCE (카 디퓨저, 룸 프래그런스, 퍼퓸 캔들)
             
    -소분류(subCategory) - 현재 데이터가 소분류로 나눠져 놓은거라 그대로 추가하시면됩니다!
    -이미지 경로()pImage - 
    -제품명(pTitle) - 
    -제품가격(pNote) -
    -제품노트(pPrice) - 
    -구매개수(pSellingCont) - 임의 숫자
    __________________________________

   productLIst = [ =>배열안에 객체로 만들어주세요
   {
      idx: 1,
      categoty: "EVENING GLOW",
      subCategory: "이브닝글로우",
      pImage: "./img/evening_glow/img_evening_glow_01.jpg",
      pTitle: "퍼퓸 이브닝글로우",
      pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      pPrice: "₩ 149,000",
      pSellingCont : 31231
      
    },
    {
      idx: 2,
      categoty: "EVENING GLOW",
      subCategory: "이브닝글로우",
      pImage: "./img/evening_glow/img_evening_glow_01.jpg",
      pTitle: "쉘 퍼퓸 핸드 이브닝글로우",
      pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      pPrice: "₩ 149,000",
      pSellingCont : 31231
      
    },
    ....
   {  idx: 16,
      categoty: "PERFUME",
      subCategory: "퍼퓸
      pImage: "./img/perfumes/img_perfumes_01.jpg",
      pTitle: "퍼퓸 밤 이브닝글로우",
      pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      pPrice: "₩ 46,500",
      pSellingCont : 31231
    }
   {4번 제품정보},
   {5번 제품정보},
  .....
   ] 
    
 
    
   
    ***********************/
  이브닝글로우: [
    {
      idx: 3,
      productTitle: "에그 립밤 로즈우디 글로우",
      productNote: "자몽 | 우아한 장미 | 머스크",
      productPrice: "₩ 28,900",
      productImage: "./img/evening_glow/img_evening_glow_03.jpg",
    },
    {
      idx: 4,
      productTitle: "퍼퓸 밤 이브닝글로우",
      productNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 46,500",
      productImage: "./img/evening_glow/img_evening_glow_04.jpg",
    },
    {
      idx: 5,
      productTitle: "퍼퓸 이브닝글로우",
      productNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 42,000",
      productImage: "./img/evening_glow/img_evening_glow_05.jpg",
    },
    {
      idx: 6,
      productTitle: "메탈 웨어 쉘",
      productNote: "쉘 퍼퓸 핸드 15mL 메탈 링",
      productPrice: "₩ 38,000",
      productImage: "./img/evening_glow/img_evening_glow_06.jpg",
    },
    {
      idx: 7,
      productTitle: "레더 웨어 에그립밤",
      productNote: "에그 립밤 레더 케이스",
      productPrice: "₩ 35,000",
      productImage: "./img/evening_glow/img_evening_glow_07.jpg",
    },
    {
      idx: 8,
      productTitle: "레더 웨어 퍼퓸 밤",
      productNote: "퍼퓸 밤 레더 케이스",
      productPrice: "₩ 42,000",
      productImage: "./img/evening_glow/img_evening_glow_08.jpg",
    },
    {
      idx: 9,
      productTitle: "레더 웨어 퍼퓸",
      productNote: "퍼퓸 11mL 레더 케이스",
      productPrice: "₩ 42,000",
      productImage: "./img/evening_glow/img_evening_glow_09.jpg",
    },
  ],

  퍼퓸: [
    {
      idx: 1,
      productTitle: "에그 퍼퓸 펌키니",
      productNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
      productPrice: "₩ 45,800",
      productImage: "./img/perfumes/img_perfumes_01.jpg"
    },
    {
      idx: 2,
      productTitle: "에그 퍼퓸 카모",
      productNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 45,800",
      productImage: "./img/perfumes/img_perfumes_02.jpg"
    },
    {
      idx: 3,
      productTitle: "에그 퍼퓸 홀리메탈",
      productNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
      productPrice: "₩ 45,800",
      productImage: "./img/perfumes/img_perfumes_03.jpg"
    },
    {
      idx: 4,
      productTitle: "퍼퓸 이브닝글로우",
      productNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 42,000",
      productImage: "./img/perfumes/img_perfumes_04.jpg"
    },
    {
      idx: 5,
      productTitle: "퍼퓸 카모",
      productNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 42,000",
      productImage: "./img/perfumes/img_perfumes_05.jpg"
    },
    {
      idx: 6,
      productTitle: "퍼퓸 화이트다즐링",
      productNote: "화이트 샴페인 | 다즐링 티 | 크리미한 머스크",
      productPrice: "₩ 42,000",
      productImage: "./img/perfumes/img_perfumes_05.jpg"
    },
    {
      idx: 7,
      productTitle: "퍼퓸 이브닝글로우",
      productNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 149,000",
      productImage: "./img/perfumes/img_perfumes_07.jpg"
    },
    {
      idx: 8,
      productTitle: "퍼퓸 펌키니",
      productNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
      productPrice: "₩ 149,000",
      productImage: "./img/perfumes/img_perfumes_08.jpg"
    },
    {
      idx: 9,
      productTitle: "퍼퓸 홀리메탈",
      productNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
      productPrice: "₩ 149,000",
      productImage: "./img/perfumes/img_perfumes_09.jpg"
    },
  ],

  퍼퓸밤: [
    {
      idx: 1,
      productTitle: "퍼퓸 밤 이브닝글로우",
      productNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 46,500",
      productImage: "./img/perfumes_balm/img_perfumes_balm_01.jpg"
    },
    {
      idx: 2,
      productTitle: "퍼퓸 밤 홀리메탈",
      productNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
      productPrice: "₩ 46,500",
      productImage: "./img/perfumes_balm/img_perfumes_balm_02.jpg"
    },
    {
      idx: 3,
      productTitle: "퍼퓸 밤 펌키니",
      productNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
      productPrice: "₩ 46,500",
      productImage: "./img/perfumes_balm/img_perfumes_balm_03.jpg"
    },
    {
      idx: 4,
      productTitle: "퍼퓸 밤 카모",
      productNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 46,500",
      productImage: "./img/perfumes_balm/img_perfumes_balm_04.jpg"
    },
    {
      idx: 5,
      productTitle: "퍼퓸 밤 라레",
      productNote: "이슬을 머금은 풋사과 | 화이트 튤립 | 샌달우드",
      productPrice: "₩ 46,500",
      productImage: "./img/perfumes_balm/img_perfumes_balm_05.jpg"
    },
    {
      idx: 6,
      productTitle: "퍼퓸 밤 버가샌달",
      productNote: "지중해의 베르가못 | 쌉싸래한 청귤 | 샌달우드",
      productPrice: "₩ 46,500",
      productImage: "./img/perfumes_balm/img_perfumes_balm_06.jpg"
    },
    {
      idx: 7,
      productTitle: "퍼퓸 밤 스웨이드페어",
      productNote: "시원한 배 | 스웨이드 | 쌉쌀한 갈바넘",
      productPrice: "₩ 46,500",
      productImage: "./img/perfumes_balm/img_perfumes_balm_07.jpg"
    },
  ],
  쉘퍼퓸핸드: [
    {
      idx: 1,
      productTitle: "쉘 퍼퓸 핸드 이브닝글로우",
      productNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_01.jpg"
    },
    {
      idx: 2,
      productTitle: "쉘 퍼퓸 핸드 펌키니",
      productNote: "달콤한 호박 | 차조기잎 | 코코넛밀크",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_02.jpg"
    },
    {
      idx: 3,
      productTitle: "쉘 퍼퓸 핸드 볼드시트러스",
      productNote: "다채로운 시트러스 | 캐럿시드 | 고소한 결명자",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_03.jpg"
    },
    {
      idx: 4,
      productTitle: "쉘 퍼퓸 핸드 홀리메탈",
      productNote: "측백나무잎 | 차가운 금속 | 화이트 머스크",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_04.jpg"
    },
    {
      idx: 5,
      productTitle: "쉘 퍼퓸 핸드 카모",
      productNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_05.jpg"
    },
    {
      idx: 6,
      productTitle: "쉘 퍼퓸 핸드 라레",
      productNote: "이슬을 머금은 풋사과 | 화이트 튤립 | 샌달우드",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_06.jpg"
    },
    {
      idx: 7,
      productTitle: "쉘 퍼퓸 핸드 버가샌달",
      productNote: "지중해의 베르가못 | 쌉싸래한 청귤 | 샌달우드",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_07.jpg"
    },
    {
      idx: 8,
      productTitle: "쉘 퍼퓸 핸드 페이구",
      productNote: "무화과나무 | 엠브레트 씨앗 | 달콤 씁쓸한",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_08.jpg"
    },
    {
      idx: 9,
      productTitle: "쉘 퍼퓸 핸드 베인",
      productNote: "월계수 잎 | 은방울꽃 | 정돈된 가죽",
      productPrice: "₩ 32,000",
      productImage: "./img/shell_perfume_hand/img_shell_perfume_hand_09.jpg"
    },
    {
      idx: 10,
      productTitle: "퍼퓸핸드 미니 듀오 세트 베스트(PUMKINI+FEY9)",
      productNote: "PUMKINI+FEY9",
      productPrice: "₩ 35,000",
    },
    {
      idx: 11,
      productTitle: "퍼퓸핸드 미니 듀오 세트 베스트(CHAMO+VEIN)",
      productNote: "CHAMO+VEIN",
      productPrice: "₩ 35,000",
    },
  ],

  에그립밤: [
    {
      idx: 1,
      productTitle: "에그 립밤 로즈우디 글로우",
      productNote: "자몽 | 우아한 장미 | 머스크",
      productPrice: "₩ 28,900",
    },
    {
      idx: 2,
      productTitle: "에그 립밤 로즈우디",
      productNote: "자몽 | 우아한 장미 | 머스크",
      productPrice: "₩ 28,900",
    },
    {
      idx: 3,
      productTitle: "에그 립밤 밀크티",
      productNote: "베르가못 | 은은한 블랙티 | 코코넛",
      productPrice: "₩ 28,900",
    },
    {
      idx: 4,
      productTitle: "에그 립밤 언센티드",
      productNote: "언센티드(무향)",
      productPrice: "일시 품절",
    },
    {
      idx: 5,
      productTitle: "에그 립밤 우디그린",
      productNote: "신선한 만다린 과즙 | 아로마틱 허브 | 부쿠",
      productPrice: "₩ 28,900",
    },
  ],
  체인핸드: [
    {
      idx: 1,
      productTitle: "체인 핸드 7",
      productNote: "로즈우드 | 코코넛 향 | 우아함",
      productPrice: "₩ 24,000",
    },
    {
      idx: 2,
      productTitle: "체인 핸드 000",
      productNote: "샌달우드 | 패츌리 | 흙 내음",
      productPrice: "₩ 24,000",
    },
    {
      idx: 3,
      productTitle: "체인 핸드 421",
      productNote: "바닐라 우디 | 너티함",
      productPrice: "₩ 24,000",
    },
  ],
  샤워리바디: [
    {
      idx: 1,
      productTitle: "샤워리바디워시 얼리모닝듀",
      productNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
      productPrice: "₩ 34,500",
    },
    {
      idx: 2,
      productTitle: "샤워리바디워시 비가리코",
      productNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
      productPrice: "₩ 34,500",
    },
    {
      idx: 3,
      productTitle: "샤워리바디워시 님버스",
      productNote: "도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크",
      productPrice: "₩ 34,500",
    },
    {
      idx: 4,
      productTitle: "샤워리바디 듀오 얼리모닝듀",
      productNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
      productPrice: "₩ 70,000",
    },
    {
      idx: 5,
      productTitle: "샤워리바디 듀오 비가리코",
      productNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
      productPrice: "₩ 70,000",
    },
    {
      idx: 6,
      productTitle: "샤워리바디 듀오 님버스",
      productNote: "도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크",
      productPrice: "₩ 70,000",
    },
    {
      idx: 7,
      productTitle: "샤워리바디로션 얼리모닝듀",
      productNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
      productPrice: "₩ 39,000",
    },
    {
      idx: 8,
      productTitle: "샤워리바디로션 비가리코",
      productNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
      productPrice: "₩ 39,000",
    },
    {
      idx: 9,
      productTitle: "샤워리바디로션 포그",
      productNote: "물안개 낀 숲 | 젖은 나무 | 캐시미어 우드",
      productPrice: "₩ 39,000",
    },
  ],

  퍼퓸드핸드앤바디: [
    {
      idx: 1,
      productTitle: "퍼퓸드 핸드워시 카모",
      productNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
      productPrice: "₩ 34,000",
    },
    {
      idx: 2,
      productTitle: "퍼퓸드 핸드워시 000",
      productNote: "샌달우드 | 패츌리 | 흙 내음",
      productPrice: "₩ 34,000",
    },
    {
      idx: 3,
      productTitle: "퍼퓸드 핸드워시 7",
      productNote: "로즈우드 | 코코넛 향 | 우아함",
      productPrice: "₩ 34,000",
    },
  ],
  카디퓨저: [
    {
      idx: 1,
      productTitle: "카 디퓨저 비가리코",
      productNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
      productPrice: "₩ 85,000",
    },
    {
      idx: 2,
      productTitle: "카 디퓨저 카모",
      productNote: "진득한 카모마일ㅣ부드러운 나무결ㅣ머스크",
      productPrice: "₩ 85,000",
    },
    {
      idx: 3,
      productTitle: "카 디퓨저 블루포레스트",
      productNote: "안개 낀 사이프레스 숲ㅣ달콤한 허브ㅣ따뜻한 앰버",
      productPrice: "₩ 85,000",
    },
    {
      idx: 4,
      productTitle: "카 디퓨저 릴리코코",
      productNote: "물기 어린 릴리ㅣ푸른 대나무ㅣ크리미한 코코넛",
      productPrice: "₩ 85,000",
    },
    {
      idx: 5,
      productTitle: "카 디퓨저 비가리코 리필",
      productNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
      productPrice: "₩ 31,000",
    },
    {
      idx: 6,
      productTitle: "카 디퓨저 미니 비가리코",
      productNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
      productPrice: "₩ 46,500",
    },
    {
      idx: 7,
      productTitle: "카 디퓨저 미니 카모",
      productNote: "진득한 카모마일ㅣ부드러운 나무결ㅣ머스크",
      productPrice: "₩ 46,500",
    },
    {
      idx: 8,
      productTitle: "카 디퓨저 미니 블루포레스트",
      productNote: "안개 낀 사이프레스 숲ㅣ달콤한 허브ㅣ따뜻한 앰버",
      productPrice: "₩ 46,500",
    },
  ],
  카디퓨저스몰: [
    {
      idx: 1,
      productTitle: "카 디퓨저 미니 릴리코코",
    },
  ],
  룸프래그런스: [
    {
      idx: 1,
      productTitle: "룸 스프레이 파피루스",
      productNote: "파피루스ㅣ그린티ㅣ샌달우드",
      productPrice: "품절",
    },
    {
      idx: 2,
      productTitle: "디퓨저 파피루스",
      productNote: "파피루스ㅣ그린티ㅣ샌달우드",
      productPrice: "오프라인 한정 판매",
    },
    {
      idx: 3,
      productTitle: "룸 스프레이 파인네스트",
      productNote: "유칼립투스ㅣ파인니들ㅣ히노키우드",
      productPrice: "품절",
    },
    {
      idx: 4,
      productTitle: "디퓨저 파인네스트",
      productNote: "유칼립투스ㅣ파인니들ㅣ히노키우드",
      productPrice: "오프라인 한정 판매",
    },
    {
      idx: 5,
      productTitle: "룸 스프레이 멈버드",
      productNote: "유자ㅣ국화ㅣ머스크",
      productPrice: "품절",
    },
    {
      idx: 6,
      productTitle: "디퓨저 멈버드",
      productNote: "유자ㅣ국화ㅣ머스크",
      productPrice: "오프라인 한정 판매",
    },
    {
      idx: 7,
      productTitle: "룸 스프레이 먹",
      productNote: "그을린 소나무ㅣ먹물ㅣ패출리",
      productPrice: "품절",
    },
    {
      idx: 8,
      productTitle: "디퓨저 먹",
      productNote: "그을린 소나무ㅣ먹물ㅣ패출리",
      productPrice: "오프라인 한정 판매",
    },
  ],
  퍼퓸캔들: [
    {
      idx: 1,
      productTitle: "퍼퓸 캔들 펌키니",
      productNote: "달콤한 호박 | 차조기잎 | 코코넛밀크",
      productPrice: "₩ 83,000",
    },
    {
      idx: 2,
      productTitle: "퍼퓸 캔들 홀리메탈",
      productNote: "측백나무잎 | 차가운 금속 | 화이트 머스크",
      productPrice: "₩ 83,000",
    },
    {
      idx: 3,
      productTitle: "퍼퓸 캔들 베이더인더레이크",
      productNote: "쑥 | 안개 낀 호수 | 촉촉한 이끼",
      productPrice: "₩ 83,000",
    },
    {
      idx: 4,
      productTitle: "퍼퓸 캔들 레이트어텀",
      productNote: "비터오렌지 | 사탕수수 풀내음 | 머스크",
      productPrice: "₩ 83,000",
    },
    {
      idx: 5,
      productTitle: "퍼퓸 캔들 미니 세트",
      productNote: "캔들 네 가지 향",
      productPrice: "₩ 148,000",
    },
  ],
};
console.log(productList);

// console.log("arr1",arr1)
// 데이터 export
export default productList;
