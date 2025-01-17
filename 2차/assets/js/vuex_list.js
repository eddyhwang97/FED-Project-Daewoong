// 뷰 리스트 JS - vuex_list.js

import store from "./vuex_list_store.js";



// [1] 전역 컴포넌트 만들기 ///////
// (1) 카테고리메뉴 컴포넌트
Vue.component("category-comp", {
  // 템플릿
  template: `
<div class="sub-top">
    <div class="sub-title">PERFURM
        <ul class="category-tab">
        ${store.state.tabData[1]}
            <li>
                <a href="#"></a>
            </li>
        </ul>
    </div>
</div>
`,
  // 데이터
  data() {
    return {};
  },
  // 메서드
  methods: {},
});

///////////////////////////////////

// (2) 리스트영역 컴포넌트
Vue.component("list-comp", {
  // (1) 템플릿 설정
  template: `
    <li class="product-select-box">
      <a class="product-view-nav" href="./product-view-hm.html" alt="제품 상세히보기">
        <section class="product-img-wrap">
            <img src="./img/perfumes/img_perfumes_01.jpg" alt="테스트이미지"/>
        </section>
        <div class="product-info">
          <h2 class="product-title">제품명</h2>
          <em class="product-note">노트</em>
          <strong class="product-price">가격</strong>
          <span class="product-note-count">노트개수</span>
        </div>
      </a>
    </li>
    `, ///template ///

  data() {
    return {};
  }, ///data

  methods: {},
});

// 뷰 인스턴스
new Vue({
  // 대상
  el: "#main",
  store,
  data: {
  },
  methods: {},
});
