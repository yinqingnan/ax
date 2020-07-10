<template>
  <div>
    <!-- 健康管理 -->
    <div class="detail-wrap" style="margin-bottom: 48px;position: relative;z-index: -1;">
      <p class="title">为您的健康保驾护航</p>
      <p class="auxiliary">The escort for your health</p>
      <ul class="detail-list">
        <li
          v-if="this.$store.state.language"
          class="detail-item"
        >生物科技：成都艾鑫忠鸿生物科技有限公司成立于2013年03月，是一家由在生物领域具有资深科研人才组建的创新型科技生物企业。作为一家国内优秀的纯植物提取、研发的企业和优质供应商，公司一直致力于纯天然植物保健品、营养品的供应销售。</li>
        <li
          v-else
          class="detail-item"
        >Biotechnology: Chengdu aixinzhonghong Biotechnology Co., Ltd., established in March 2013, is an innovative scientific and technological biological enterprise established by senior scientific research personnel in the biological field. As a domestic excellent pure plant extraction, research and development enterprises and high-quality suppliers, the company has been committed to the supply and sales of pure natural plant health products and nutrition products.</li>

        <div v-if="this.$store.state.language">
          <li v-for="(item,index) in Productlist" :key="index" class="commodity">
            <div style="text-align: center;overflow: hidden;">
              <img
                :src="item.src"
                alt
                style="height:270px;transform: scale(1.1);-ms-transform: scale(1.2);"
              />
            </div>
            <p
              style="text-align: justify;letter-spacing: 0.2px;color: #2f2f2f;font-size: 18px;line-height:28px;margin-top: 13px;"
            >{{item.name}}</p>
            <p
              style="text-align: justify;letter-spacing: 0.2px;color: #2f2f2f;font-size: 14px;line-height:16px;margin:4px 0px 13px 0px;text-indent: 30px;color:#757575"
            >{{item.effect}}</p>
            <div style="display: flex;justify-content: space-between;">
              <h2
                style="text-align: justify;letter-spacing: 0.2px;color: #2f2f2f;font-size: 16px;"
              >规格:{{item.specification}}</h2>
              <h2
                style="text-align: justify;letter-spacing: 0.2px;color: #2f2f2f;font-size: 16px;"
              >售价:{{item.Price}}</h2>
            </div>
          </li>
        </div>
        <!-- 英文版 -->
        <div v-else>
          <li v-for="(item,index) in Productlist1" :key="index" class="commodity">
            <div style="text-align: center;overflow: hidden;">
              <img
                :src="item.src"
                alt
                style="height:270px;transform: scale(1.1);-ms-transform: scale(1.2);"
              />
            </div>
            <p
              style="text-align: justify;color: #2f2f2f;font-size: 18px;line-height:28px;margin-top: 13px;"
            >{{item.name}}</p>
            <p
              style="text-align: justify;color: #2f2f2f;font-size: 14px;line-height:16px;margin:4px 0px 13px 0px;text-indent: 30px;color:#757575"
            >{{item.effect}}</p>
            <div style="display: flex;justify-content: space-between;">
              <h2
                style="text-align: justify;width: 50%;color: #2f2f2f;font-size: 16px;text-align: left;"
              >Specification:{{item.specification}}</h2>
              <h2
                style="text-align: justify;width: 50%;color: #2f2f2f;font-size: 16px;text-align: right;"
              >Price:{{item.Price}}</h2>
            </div>
          </li>
        </div>
      </ul>
    </div>
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
            "调节肠道生态平衡，提高身体的免疫能力、改善便秘以及胃肠道的功能、促进机体营养吸收、预防感染等。",
          specification: "80ml/瓶*6瓶",
          Price: "598元/盒",
          id: "0",
          src: require("../../assets/img/goods/1.png")
        },
        {
          name: "细胞活性肽",
          effect:
            "肠通便、调节血脂、抗氧化、抑制肿瘤、保持人体细胞健康与活力等。",
          specification: "100ml/瓶*9瓶",
          Price: "1980元/盒",
          id: "1",
          src: require("../../assets/img/goods/2.png")
        },
        {
          name: "稳糖米",
          effect: "稳糖抗糖、改善肠胃微生态、抑脂减脂等。",
          specification: "4kg/袋",
          Price: "238元/袋",
          id: "2",
          src: require("../../assets/img/goods/3.png")
        },
        {
          name: "细胞食物(美国进口)",
          effect: "提供细胞营养、排除细胞毒素、提高机体抗病毒能力等",
          specification: "30ml/瓶",
          Price: "498元/盒",
          id: "3",
          src: require("../../assets/img/goods/4.png")
        },
        {
          name: "植工房",
          effect:
            "剥离失误中的农残、激素、防腐剂、毒菌等，同事保护食材营养不流失",
          specification: "360g/瓶",
          Price: "198元/盒",
          id: "4",
          src: require("../../assets/img/goods/5.png")
        },
        {
          name: "妈妈好帮手",
          effect: "氧除菌、氧抗毒、氧去渍、氧洁净等",
          specification: "600g/桶",
          Price: "60元/桶",
          id: "5",
          src: require("../../assets/img/goods/6.png")
        },
        {
          name: "优瑞力克(美国原装进口)",
          effect:
            "抑制嘌呤活性、限制嘌呤氧化、分解嘌呤至正常值，同时祛除各类筋骨关节病",
          specification: "0.5g*30粒/瓶",
          Price: "498元/瓶",
          id: "6",
          src: require("../../assets/img/goods/7.png")
        },
        {
          name: "初乳配方羊奶粉",
          effect: "提升机体免疫力",
          specification: "400克/盒，12盒/箱",
          Price: "298/瓶",
          id: "7",
          src: require("../../assets/img/goods/8.png")
        },
        {
          name: "金白藜红酒(13°)",
          effect: "抗癌防癌、调节三高、消炎抑菌、保肝护肝、养颜美容、延缓衰老",
          specification: "750ml/瓶白藜芦醇含300mg/L",
          Price: "458元/瓶",
          id: "8",
          src: require("../../assets/img/goods/9.png")
        },
        {
          name: "玛卡威士忌(40°)",
          effect:
            "改善微循环、改善睡眠、抗疲劳，抗贫血，抗风湿、调节血压平衡、调节血糖平衡、调节荷尔蒙分泌，增强生育能力",
          specification: "750ml/瓶",
          Price: "638元/瓶",
          id: "9",
          src: require("../../assets/img/goods/10.png")
        },
        {
          name: "玛卡龙酒(53°)",
          effect:
            "改善微循环、改善睡眠、抗疲劳，抗贫血，抗风湿、调节血压平衡、调节血糖平衡、调节荷尔蒙分泌，增强生育能力",
          specification: "500ml/瓶",
          Price: "428元/瓶",
          id: "10",
          src: require("../../assets/img/goods/11.png")
        }
      ],
      Productlist1: [
        {
          name: "Protoplasm of probiotics",
          effect:
            "It can regulate the intestinal ecological balance, improve the body's immune capacity, improve constipation and gastrointestinal function, promote the body's nutrition absorption, and prevent infection.",
          specification: "80ml/bottle*6 bottles",
          Price: "598yuan/box",
          id: "0",
          src: require("../../assets/img/goods/1.png")
        },
        {
          name: "Cellular active peptide",
          effect:
            "Bowel catharsis, regulation of blood lipids, antioxidant, tumor inhibition, maintain the health and vitality of human cells",
          specification: "100ml/bottle*9 bottles",
          Price: "1980yuan/box",
          id: "1",
          src: require("../../assets/img/goods/2.png")
        },
        {
          name: "Rice with stable sugar",
          effect:
            "It can stabilize sugar and resist sugar, improve gastrointestinal microecology, inhibit fat and reduce fat.",
          specification: "4kg/bag",
          Price: "238 yuan/bag",
          id: "2",
          src: require("../../assets/img/goods/3.png")
        },
        {
          name: "Cell food (imported from USA)",
          effect:
            "It can provide cell nutrition, eliminate cytotoxin and improve the antiviral ability of organism",
          specification: "30ml/bottle",
          Price: "498 yuan/box",
          id: "3",
          src: require("../../assets/img/goods/4.png")
        },
        {
          name: "Planting workshop",
          effect:
            "In the process of peeling off the pesticide residues, hormones, preservatives and poisonous bacteria, colleagues should protect the food materials from loss of nutrition",
          specification: "360g/bottle",
          Price: "198 yuan/box",
          id: "4",
          src: require("../../assets/img/goods/5.png")
        },
        {
          name: "Mom is a good helper",
          effect:
            "Oxygen sterilization, oxygen anti-virus, oxygen stain removal, oxygen cleaning, etc",
          specification: "600g/barrel",
          Price: "60 yuan/barrel",
          id: "5",
          src: require("../../assets/img/goods/6.png")
        },
        {
          name: "Eurilex (imported from USA)",
          effect:
            "It can inhibit purine activity, limit purine oxidation, decompose purine to normal value, and eliminate all kinds of osteoarthritis",
          specification: "0.5g*30 capsules/bottle",
          Price: "498 yuan/bottle",
          id: "6",
          src: require("../../assets/img/goods/7.png")
        },
        {
          name: "Colostrum formula sheep milk powder",
          effect: "Enhance immunity",
          specification: "400g/box,12 boxes/box",
          Price: "298/bottle",
          id: "7",
          src: require("../../assets/img/goods/8.png")
        },
        {
          name: "Golden resveratrol red wine (13 °)",
          effect:
            "Anti cancer, anti-cancer, regulation of three high, anti-inflammatory and antibacterial, liver protection, beauty, anti-aging",
          specification: "750ml/bottle",
          Price: "458 yuan/bottle",
          id: "8",
          src: require("../../assets/img/goods/9.png")
        },
        {
          name: "Maka whiskey (40 °)",
          effect:
            "Improve microcirculation, improve sleep, anti fatigue, anti anemia, anti rheumatism, regulate blood pressure balance, blood glucose balance, regulate hormone secretion, and enhance fertility",
          specification: "750ml/bottle",
          Price: "638 yuan/bottle",
          id: "9",
          src: require("../../assets/img/goods/10.png")
        },
        {
          name: "Macarons (53°)",
          effect:
            "Improve microcirculation, improve sleep, anti fatigue, anti anemia, anti rheumatism, regulate blood pressure balance, blood glucose balance, regulate hormone secretion, and enhance fertility",
          specification: "500ml/bottle",
          Price: "428 yuan/bottle",
          id: "10",
          src: require("../../assets/img/goods/11.png")
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.detail-wrap {
  padding: 0 15px;
}

.detail-wrap .title {
  color: #333;
  font-size: 20px;
  letter-spacing: 0.7px;
  line-height: 28px;
  text-align: center;
  padding-top: 32px;
}

.detail-wrap .auxiliary {
  font-size: 12px;
  color: #333;
  letter-spacing: 0.2px;
  text-align: center;
  line-height: 17px;
  padding-bottom: 20px;
}

.detail-wrap .detail-list .detail-item {
  font-size: 14px;
  color: #2f2f2f;
  line-height: 23px;
  letter-spacing: 0.2px;
  text-indent: 28px;
  text-align: justify;
  margin-bottom: 16px;
}

.detail-wrap .detail-list .detail-item .address-list {
  padding-top: 16px;
}

.detail-wrap .detail-list .detail-item .address-list li {
  text-align: left;
  text-indent: 0;
  padding: 0 55px 6px;
}

.detail-wrap .detail-list .detail-item .address-list a {
  color: #1b5662;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 23px;
}

.commodity {
  margin: 18px 0 26px 0;
}
</style>