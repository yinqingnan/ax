<template>
    <div>
      <!-- 商品列表 -->
      商品列表
    </div>
</template>

<script>
export default {
  data() {
    return {
      Productlist: [
        {
          name: "益生菌原浆",
          effect:
            "调节肠道生态平衡，提高身体的免疫能力、改善便秘以及胃肠道的功能、促进机体营养吸收、预防高然等。",
          specification: "80ml/瓶*6瓶",
          Price: "598元/盒",
          id: "0",
          src: require("../../../assets/img/goods/1.png")
        },
        {
          name: "细胞活性肽",
          effect:
            "肠通便、调节血脂、抗氧化、抑制肿瘤、保持人体细胞健康与活力等。",
          specification: "100ml/瓶*9瓶",
          Price: "1980元/盒",
          id: "1",
          src: require("../../../assets/img/goods/2.png")
        },
        {
          name: "稳糖米",
          effect: "稳糖抗糖、改善肠胃微生态、抑脂减脂等。",
          specification: "4kg/袋",
          Price: "238元/袋",
          id: "2",
          src: require("../../../assets/img/goods/3.png")
        },
        {
          name: "细胞食物(美国进口)",
          effect: "提供细胞营养、排除细胞毒素、提高机体抗病毒能力等",
          specification: "30ml/瓶",
          Price: "498元/盒",
          id: "3",
          src: require("../../../assets/img/goods/4.png")
        },
        {
          name: "植工房",
          effect:
            "剥离失误中的农残、激素、防腐剂、毒菌等，同事保护食材营养不流失",
          specification: "360g/瓶",
          Price: "198元/盒",
          id: "4",
          src: require("../../../assets/img/goods/5.png")
        },
        {
          name: "妈妈好帮手",
          effect: "氧除菌、氧抗毒、氧去渍、氧洁净等",
          specification: "600g/桶",
          Price: "60元/桶",
          id: "5",
          src: require("../../../assets/img/goods/6.png")
        },
        {
          name: "优瑞力克(美国原装进口)",
          effect:
            "抑制嘌呤活性、限制嘌呤氧化、分解嘌呤至正常值，同时祛除何磊筋骨关节病",
          specification: "0.5g*30粒/瓶",
          Price: "498元/瓶",
          id: "6",
          src: require("../../../assets/img/goods/7.png")
        },
        {
          name: "初乳配方羊奶粉",
          effect: "提升机体免疫力",
          specification: "400克/盒，12盒/箱",
          Price: "298/瓶",
          id: "7",
          src: require("../../../assets/img/goods/8.png")
        },
        {
          name: "金白藜红酒(13°)",
          effect: "抗癌防癌、调节三高、消炎抑菌、保肝护肝、养颜没让、延缓衰老",
          specification: "750ml/瓶白藜芦醇含300mg/L",
          Price: "458元/瓶",
          id: "8",
          src: require("../../../assets/img/goods/9.png")
        },
        {
          name: "玛卡威士忌(40°)",
          effect:
            "改善微循环、改善睡眠、抗疲劳，抗贫血，抗风湿、调节血压平衡、调节血糖平衡、调节荷尔蒙分泌，增强生育能力",
          specification: "750ml/瓶",
          Price: "638元/瓶",
          id: "9",
          src: require("../../../assets/img/goods/10.png")
        },
        {
          name: "玛卡龙酒(53°)",
          effect:
            "改善微循环、改善睡眠、抗疲劳，抗贫血，抗风湿、调节血压平衡、调节血糖平衡、调节荷尔蒙分泌，增强生育能力",
          specification: "500ml/瓶",
          Price: "428元/瓶",
          id: "10",
          src: require("../../../assets/img/goods/11.png")
        }
      ]
    };
  }
};
</script>