<template>
  <div>
    <!-- 全球分布 -->
    <div>
      <img src="../../../assets/img/map-01.2de4fc1.png" alt class="map" v-if="num == 0" />
      <img src="../../../assets/img/map-02.995bd77.png" alt class="map" v-if="num == 1" />
      <img src="../../../assets/img/map-03.6dc2970.png" alt class="map" v-if="num == 2" />
      <img src="../../../assets/img/map-04.b6ca5f5.png" alt class="map" v-if="num == 3" />
      <img src="../../../assets/img/map-05.18d29ef.png" alt class="map" v-if="num == 4" />
      <div class="detail-wrap">
        <div class="occupation" v-if="this.$store.state.language">
          <p class="occupation-title">城市名字</p>
          <ul class="tag-list">
            <li v-for="(item,index) in list" :key="index" class="tag" @click="btn(index)">
              <span :class="{active: index === num}">{{item.city}}</span>
            </li>
          </ul>
        </div>
        <!-- 英文 -->
        <div class="occupation" v-else>
          <p class="occupation-title">City name</p>
          <ul class="tag-list">
            <li v-for="(item,index) in list1" :key="index" class="tag" @click="btn(index)">
              <span :class="{active: index === num}">{{item.city}}</span>
            </li>
          </ul>
        </div>
        <div class="empiric-wrap" v-if="this.$store.state.language">
          <ul class="empiric" v-if="num == 0">
            <li class>
              <p class="empiric-title">成都艾鑫忠鸿生物科技有限公司</p>
              <div
                class="empiric-detail"
              >成都艾鑫忠鸿生物科技有限公司成立于2013年03月，是一家由在生物领域具有资深科研人才组建的创新型科技生物企业。地址：成都市锦江区庆云南街69号</div>
              <!---->
            </li>
            <li class>
              <p class="empiric-title">四川爱鑫投资有限公司</p>
              <div class="empiric-detail">四川爱鑫投资有限公司成立于2014年6月,是经工商局注册的合法、正规的投资理财公司。地址：成都市锦江区庆云南街69号</div>
              <!---->
            </li>
            <li class>
              <p class="empiric-title">成都艾鑫电子商务有限公司</p>
              <div
                class="empiric-detail"
              >成都艾鑫电子商务有限公司是一家新兴企业，成立于2013年，是专业从事线上线下相结合销售的高科技民营企业地址：成都市锦江区庆云南街69号</div>
              <!---->
            </li>
            <li class>
              <p class="empiric-title">成都艾鑫乐悠游酒店管理有限公司</p>
              <div
                class="empiric-detail"
              >成都艾鑫国际旅游服务有限公司成立于2016年1月7日。自公司成立之日起，公司不断探索和发展一条品质与享受相结合的专业旅游服务道路。地址：成都市锦江区庆云南街69号</div>
              <!---->
            </li>
            <li class>
              <p class="empiric-title">成都艾鑫堂大药房有限公司</p>
              <div
                class="empiric-detail"
              >艾鑫堂大药房也为您提供24小时配送药服务，针对您的健康管理，我们不断优化，全天候为您服务。地址：成都市锦江区庆云西街9号红星国际5栋1层9号</div>
              <!---->
            </li>
          </ul>
          <ul class="empiric" v-if="num == 1">
            <li class>
              <p class="empiric-title">（香港）艾鑫生活国际</p>
              <div class="empiric-detail">艾鑫集团秉承“健康生活管理家”的经营理念，艾鑫以优质的产品和服务赢得了股东、客户、合作伙伴、业内同行的尊重和赞誉。</div>
              <!---->
            </li>
          </ul>
          <ul class="empiric" v-if="num == 2">
            <li class>
              <p class="empiric-title">（纽约）艾鑫生活国际</p>
              <div class="empiric-detail">艾鑫集团秉承“健康生活管理家”的经营理念，艾鑫以优质的产品和服务赢得了股东、客户、合作伙伴、业内同行的尊重和赞誉。</div>
            </li>
          </ul>
          <ul class="empiric" v-if="num == 3">
            <li class="bg-color">
              <div class="nodata">业务拓展中，敬请期待！</div>
            </li>
          </ul>
          <ul class="empiric" v-if="num == 4">
            <li class="bg-color">
              <div class="nodata">业务拓展中，敬请期待！</div>
            </li>
          </ul>
        </div>

        <!-- 英文 -->
        <div class="empiric-wrap" v-else>
          <ul class="empiric" v-if="num == 0">
            <li class>
              <p class="empiric-title">Chengdu Aixin Zhonghong Biotechnology Co., Ltd</p>
              <div
                class="empiric-detail"
              >Chengdu aixinzhonghong Biotechnology Co., Ltd., established in March 2013, is an innovative scientific and technological biological enterprise established by senior scientific research personnel in the biological field. Address: No.69, Qingyun South Street, Jinjiang District, Chengdu</div>
              <!---->
            </li>
            <li class>
              <p class="empiric-title">Sichuan Aixin Investment Co., Ltd</p>
              <div
                class="empiric-detail"
              >Sichuan Aixin Investment Co., Ltd., established in June 2014, is a legal and regular investment and financing company registered by the industrial and commercial bureau. Address: No.69, Qingyun South Street, Jinjiang District, Chengdu</div>
              <!---->
            </li>
            <li class>
              <p class="empiric-title">Chengdu Aixin e-commerce Co., Ltd</p>
              <div
                class="empiric-detail"
              >Chengdu Aixin e-commerce Co., Ltd., established in 2013, is a high-tech private enterprise specializing in online and offline sales. Address: No. 69, Qingyun South Street, Jinjiang District, Chengdu City</div>
              <!---->
            </li>
            <li class>
              <p class="empiric-title">Chengdu aixinle youyou Hotel Management Co., Ltd</p>
              <div
                class="empiric-detail"
              >Chengdu Aixin International Tourism Service Co., Ltd. was established on January 7, 2016. Since the establishment of the company, the company has been exploring and developing a professional tourism service road combining quality and enjoyment. Address: No.69, Qingyun South Street, Jinjiang District, Chengdu</div>
              <!---->
            </li>
            <li class>
              <p class="empiric-title">Chengdu aixintang pharmacy Co., Ltd</p>
              <div
                class="empiric-detail"
              >Aixintang pharmacy also provides you with 24-hour drug delivery service. For your health management, we constantly optimize and serve you all day long. Address: No.9, 1st floor, building 5, Hongxing international, No.9, Qingyun West Street, Jinjiang District, Chengdu</div>
              <!---->
            </li>
          </ul>
          <ul class="empiric" v-if="num == 1">
            <li class>
              <p class="empiric-title">(Hong Kong) Ai Xin Life International</p>
              <div
                class="empiric-detail"
              >Aixin group adheres to the business philosophy of "healthy life manager". With its high-quality products and services, Aixin has won the respect and praise of shareholders, customers, partners and peers in the industry.</div>
              <!---->
            </li>
          </ul>
          <ul class="empiric" v-if="num == 2">
            <li class>
              <p class="empiric-title">(New York) Ai Xin Life International</p>
              <div
                class="empiric-detail"
              >Aixin group adheres to the business philosophy of "healthy life manager". With its high-quality products and services, Aixin has won the respect and praise of shareholders, customers, partners and peers in the industry.</div>
            </li>
          </ul>
          <ul class="empiric" v-if="num == 3">
            <li class="bg-color">
              <div class="nodata">Business development, please look forward to it!</div>
            </li>
          </ul>
          <ul class="empiric" v-if="num == 4">
            <li class="bg-color">
              <div class="nodata">Business development, please look forward to it!</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { city: "中国·成都" },
        { city: "中国·香港" },
        { city: "美国·纽约" },
        { city: "澳洲·悉尼" },
        { city: "英国·伦敦" }
      ],
      list1: [
        { city: "Chengdu" },
        { city: "Hong Kong" },
        { city: "New York" },
        { city: "Sydney" },
        { city: "London" }
      ],
      num: 0
    };
  },
  methods: {
    btn(index) {
      // console.log(index);
      this.num = index;
    }
  }
};
</script>
<style lang="stylus" scoped>
.map {
  padding-bottom: 11px;
  width: 100%;
  height: 230px;
  background-size: 100% 100%;
  border-bottom: 1px solid #e8e8e8;
}

.detail-wrap {
  margin-bottom: 48px;
  padding: 0 15px;
}

.detail-wrap .occupation {
  padding: 0 26px;
}

.detail-wrap .occupation .occupation-title {
  padding: 23px 0 18px;
  font-size: 17px;
}

.detail-wrap .occupation .tag-list {
  float: left;
}

.detail-wrap .tag {
  width: 33.33%;
  height: 32px;
  float: left;
  margin-bottom: 21px;
}

.detail-wrap .tag span {
  float: left;
  width: 99px;
  height: 100%;
  background: #f4f4f4;
  text-align: center;
  line-height: 32px;
  color: #2f2f2f;
  letter-spacing: 0.5px;
}

.detail-wrap .empiric-wrap {
  padding: 0 15px;
}

.detail-wrap .empiric-wrap .empiric li {
  background: #f4f4f4;
  margin-bottom: 16px;
  padding: 11px;
}

.tag>span {
  font-size: 17px;
}

.detail-wrap .empiric-wrap .empiric {
  padding: 24px 11px;
  margin-top: 81px;
}

.detail-wrap .empiric-wrap .empiric .empiric-title {
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 22px;
  margin-bottom: 24px;
}

.detail-wrap .empiric-wrap .empiric .empiric-detail {
  color: #333;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 23px;
  text-align: left;
}

.active {
  background: #2f2f2f !important;
  color: #fff !important;
}

.detail-wrap .empiric-wrap .empiric li {
  background: #f4f4f4;
  margin-bottom: 16px;
  padding: 11px;
}

.detail-wrap .empiric-wrap .empiric .bg-color {
  background: #fff;
}

.detail-wrap .nodata {
  color: #333;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.4px;
}
</style>