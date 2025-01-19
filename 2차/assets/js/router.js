// 뷰 라우터 셋팅 JS : router.js

// [ 라우터 옵션 셋팅하기 ] ///
// (1) 라우터 출력 템플릿 만들기 ///
const Evening_glow = {
  template: `
    `,
};
const Perfumes = {
  template: `
    `,
};
const Perfume_balm = {
  template: `
    `,
};
const Shell_perfume_hand = {
  template: `
    `,
};
const Egg_lipbalm = {
  template: `
    `,
};
const Chain_hand = {
  template: `
    `,
};
const Showery_body = {
  template: `
    `,
};
const Perfumed_hand = {
  template: `
    `,
};
const Car_diffuser = {
  template: `
    `,
};
const Room_fragrance = {
  template: `
    `,
};
const Perfume_candle = {
  template: `
    `,
};

export default new VueRouter({
  routes: [
    {
      path: "/evening_glow",
      component: Evening_glow,
    },
  ],
  routes: [
    {
      path: "/perfumes",
      component: Perfumes,
    },
  ],
  routes: [
    {
      path: "/perfume_balm",
      component: Perfume_balm,
    },
  ],
  routes: [
    {
      path: "/shell_perfume_hand",
      component: Shell_perfume_hand,
    },
  ],
  routes: [
    {
      path: "/egg_lipbalm",
      component: Egg_lipbalm,
    },
  ],
  routes: [
    {
      path: "/chain_hand",
      component: Chain_hand,
    },
  ],
  routes: [
    {
      path: "/showery_body",
      component: Showery_body,
    },
  ],
  routes: [
    {
      path: "/perfumed_hand",
      component: Perfumed_hand,
    },
  ],
  routes: [
    {
      path: "/car_diffuser",
      component: Car_diffuser,
    },
  ],
  routes: [
    {
      path: "/room_fragrance",
      component: Room_fragrance,
    },
  ],
  routes: [
    {
      path: "/perfume_candle",
      component: Perfume_candle,
    },
  ],
}); ///////// VueRouter ////////////////

/* 
<div class="sub-top">
    <div class="sub-title">
        <ul class="category-tab">
            <li>
                <a href="#"></a>
            </li>
        </ul>
    </div>
</div>
*/
