<template>
  <!-- 发展历程 -->

  <div>
    <div data-v-4a684ffa class="detail-wrap">
      <p class="title">风雨9年，我们在成长</p>
      <p class="auxiliary">Wind and rain for nine years, we are growing</p>
      <img src="../../assets/img/img-fz.8859b3a.png" alt class="illustration" />
      <ul class="detail-item">
        <li>
          <div class="detail-r" v-if="this.$store.state.language">
            <div class="detail-l" style=" top: calc(50% - 21px);">2009
              </div>2009年：青白江金晚霞日用品经营部成立，短时间迅速占领青白江市场
          </div>
           <div class="detail-r" v-else>
            <div class="detail-l" style=" top: calc(50% - 21px);">2009
              </div>In 2009: Qingbaijiang jinwanxia daily necessities business department was established, occupying Qingbaijiang market in a short time
          </div>
        </li>
        <li>
          <div class="detail-r" v-if="this.$store.state.language">
            <div class="detail-l" style=" top: calc(50% - 21px);">2010</div>进军成都，正式入驻成都市
          </div>
           <div class="detail-r" v-else>
            <div class="detail-l" style=" top: calc(50% - 21px);">2010</div>March into Chengdu and formally settle in Chengdu
          </div>
        </li>
        <li>
          <div class="detail-r" v-if="this.$store.state.language">
            <div class="detail-l" style=" top: calc(50% - 21px);">2011</div>正式更名为成都艾鑫健康咨询有限公司，开始致力健康管理研究
          </div>
           <div class="detail-r" v-else>
            <div class="detail-l" style=" top: calc(50% - 21px);">2011</div>Officially renamed as Chengdu Aixin Health Consulting Co., Ltd., began to work on health management research
          </div>
        </li>
        <li>
          <div class="detail-r" v-if="this.$store.state.language">
            <div class="detail-l" style=" top: calc(50% - 21px);">2013</div>集团规模扩大，以成都艾鑫忠鸿生物科技有限公司成功在上海挂牌
          </div>
          <div class="detail-r" v-else>
            <div class="detail-l" style=" top: calc(50% - 21px);">2013</div>Group scale expansion, Chengdu aixinzhonghong Biotechnology Co., Ltd. successfully listed in Shanghai
          </div>
        </li>
        <li>
          <div class="detail-r" v-if="this.$store.state.language">
            <div class="detail-l" style=" top: calc(50% - 21px);">2016</div>成立成都艾鑫乐悠游酒店管理有限公司，全面拓展业务，为用户提供更加专业更加高品质的健康生活咨询管理
          </div>
          <div class="detail-r" v-else>
            <div class="detail-l" style=" top: calc(50% - 21px);">2016</div>Chengdu aixinle youyou Hotel Management Co., Ltd. was established to comprehensively expand business and provide users with more professional and high-quality health life consulting management
          </div>
        </li>
        <li>
          <div class="detail-r last-detail-r" v-if="this.$store.state.language">
            <div class="detail-l" style=" top: calc(50% - 21px);">2017</div>上市美国纳斯达克(股市代码: MCAR)，目前艾鑫集团已拥有多家分公司，业务覆盖全四川
          </div>
           <div class="detail-r last-detail-r" v-else>
            <div class="detail-l" style=" top: calc(50% - 21px);">2017</div>NASDAQ (stock market code: MCAR) is listed in the United States. At present, Aisin group has a number of branches, covering all Sichuan
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<style lang="stylus" scoped>
.title {
  color: #333;
  font-size: 20px;
  letter-spacing: 0.7px;
  line-height: 28px;
  text-align: left;
  padding-top: 32px;
  padding-left: 77px;
}

.auxiliary {
  font-size: 12px;
  color: #333;
  text-align: left;
  line-height: 17px;
  padding-bottom: 20px;
  padding-left: 77px;
}

.detail-auxiliary {
  font-size: 18px;
  font-weight: 700;
  color: #2f2f2f;
  letter-spacing: 0.2px;
  padding-bottom: 26px;
  text-align: center;
}

.detail-item {
  padding: 0 15px;
}

.detail-item .detail {
  font-size: 14px;
  color: #2f2f2f;
  letter-spacing: 0.2px;
  line-height: 23px;
  text-indent: 28px;
  text-align: justify;
}

.detail-wrap .detail-item {
  padding: 32px 0 0;
  line-height: 27px;
}

.illustration {
  width: 100%;
  height: 130px;
  background-size: 100% 100%;
}

.detail-wrap .detail-r {
  position: relative;
  border-left: 2px dashed #606060;
  padding-left: 18px;
  padding-bottom: 16px;
  font-size: 16px;
  color: #070707;
  letter-spacing: 0.5px;
  float: right;
  width: calc(100% - 78px);
  margin-bottom: 3px;
  z-index -10
}

.detail-l {
  // top: calc(50% - 21px);
  left: -59px;
  position: absolute;
  float: left;
  font-size: 18px;
  width: 42px;
  padding-right: 11px;
  text-align: left;
}

.detail-wrap .detail-item li {
  position: relative;
}

.detail-wrap .detail-item {
  padding: 32px 0 0;
  line-height: 27px;
}

.detail-wrap {
  padding: 0 26px;
}

.detail-l:before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #1b5662;
  position: absolute;
  top: 3px;
  left: 50px;
}
</style>