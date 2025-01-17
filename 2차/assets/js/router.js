// 뷰 라우터 셋팅 JS : router.js

// [ 라우터 옵션 셋팅하기 ] ///
// (1) 라우터 출력 템플릿 만들기 ///
const Evening_glow = {
  template: `
    <div class="evening_glow router">Evening_glow</div>`,
};
const Perfumes = {
  template: `
    <div class="perfumes router">Perfumes</div>`,
};
const Perfume_balm = {
  template: `
    <div class="perfume_balm router">Perfumes</div>`,
};
const Shell_perfume_hand = {
  template: `
    <div class="shell_perfume_hand router">Shell_perfume_hand</div>`,
};
const Egg_lipbalm = {
  template: `
    <div class="egg_lipbalm router">Egg_lipbalm</div>`,
};
const Chain_hand = {
  template: `
    <div class="chain_hand router">Chain_hand</div>`,
};
const Showery_body = {
  template: `
    <div class="showery_body router">Showery_body</div>`,
};
const Perfumed_hand = {
  template: `
    <div class="perfumed_hand router">Perfumed_hand</div>`,
};
const Car_diffuser = {
  template: `
    <div class="car_diffuser router">Car_diffuser</div>`,
};
const Room_fragrance = {
  template: `
    <div class="room_fragrance router">Room_fragrance</div>`,
};
const Perfume_candle = {
  template: `
    <div class="perfume_candle router">Perfume_candle</div>`,
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
