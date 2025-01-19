// 데이터 모음 - data_collection

// 카테고리별 영어데이터

const imgNameData = {
  "이브닝 글로우": "evening_glow",
  퍼퓸: "perfumes",
  "퍼퓸 밤": "perfume_balm",
  "쉘 퍼퓸 핸드": "shell_perfume_hand",
  "에그 립밤": "egg_lipbalm",
  "체인 핸드": "chain_hand",
  샤워리바디: "showery_body",
  "퍼퓸드 핸드앤바디": "perfumed_hand",
  "카 디퓨저": "car_diffuser",
  "룸 프래그런스": "room_fragrance",
  "퍼퓸 캔들": "perfume_candle",
};

//  - 카테고리 데이터

const categoryData = {
  "EVENING GLOW": ["이브닝글로우"],
  PERFUME: ["퍼퓸", "퍼퓸 밤"],
  "HAND&LIP": ["쉘 퍼퓸 핸드", "에그 립밤", "체인 핸드"],
  BODY: ["샤워리바디", "퍼퓸드핸드앤바디"],
  "HOME FRAGRANCE": ["카디퓨저", "룸 프래그런스", "퍼퓸 캔들"],
};
const tabLinkData = {
  "EVENING GLOW": {
    link: { path: "/evening_glow" },
    menu: {
      "이브닝 글로우": { name: "/evening_glow" } },
    },
  },
  PERFUME: {
    link: { path: "/perfume" },
    menu: {
      퍼퓸: { name: "/perfumes" } ,
      "퍼퓸 밤": { name: "/perfume_balm" } ,
    },
  },
  "HAND&LIP": {
    link: { path: "/hand&lip" },
    menu: {
      "쉘 퍼퓸 핸드": { name: "/shell_perfume_hand" } ,
      "에그 립밤": { name: "/egg_lipbalm" } ,
      "체인 핸드": { name: "/chain_hand" } ,
    },
  },
  BODY: {
    link: { path: "/body" },
    menu: {
      샤워리바디: { name: "/showery_body" } ,
      "퍼퓸드 핸드앤바디": { name: "/perfumed_hand" } ,
    },
  },
  "HOME FRAGRANCE": {
    link: { path: "/homefragrance" },
    menu: {
      "카 디퓨저": { name: "/car_diffuser" } ,
      "룸 프래그런스": { name: "/room_fragrance" } ,
      "퍼퓸 캔들": { name:: "/perfume_candle" } ,
    },
  },
};

export default { categoryData, imgNameData, tabLinkData };
