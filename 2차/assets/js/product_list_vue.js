// 데이터 불러오기
import router from "./router.js";
import producList from "../data/product-list.js";
import Data from "../data/data_collection.js";


const categoryData = Data.categoryData;
const imgNameData = Data.imgNameData;
const tabLinkData = Data.tabLinkData;

console.log(producList, categoryData, imgNameData, tabLinkData);



new Vue({
  // 1. 대상선정 : #app
  el: "#main",
  // 2. 라우터설정
  router,
  // 3. 데이터 설정
  data: {
    // (1) 인스턴스 외부의 데이터를 인스턴스내부로 가져옴
    // 리스트목록
    producList: producList,
    // 카테고리 분류 및 하위 탭 목록
    categoryData: categoryData,
    // 이미지 이름별 이미지경로변경 데이터
    imgNameData: imgNameData,
    // 탭링크데이터
    tabLinkData: tabLinkData,
    
  },
  // 4. 메서드 설정
  methods: {},
  // 5. 라이프사이클 메서드 :
  //  mounted -> DOM 랜더링
  mounted() {},
});
