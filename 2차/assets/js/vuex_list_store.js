// 뷰 리스트 JS - vuex_list.js

import data from "../data/data_collection.js";
import productList from "../data/product-list.js";
// 호출

// 변수
const categoryData = data.categoryData;
const tabData= Object.keys(categoryData);
const subTitleData = Object.values(categoryData);
console.log(productList, categoryData,tabData, subTitleData);

export default new Vuex.Store({
  // 1. 데이터 셋팅구역 : state ///////////
  state: {
    // 큰 카테고리
    categoryData: categoryData,
    tabData: tabData,
    subTitleData: subTitleData,
    productList: productList,
    subTilte:'',


  },
  // 2. 데이터 변경 메서드구역 : mutations ////////
  mutation: {},
  // 3. 비동기처리 메서드구역 : actions ///////////
  action: {},
});
