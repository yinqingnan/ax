
<template>
  <div>
    <!-- 投资管理 -->
    <div class="detail-wrap" v-if="this.$store.state.language">
      <p class="title">艾鑫为您定制最佳理财方案</p>
      <p class="auxiliary">AiXin has customized the best financial plan and give to your best life</p>
      <p class="detail-auxiliary">理财最重要的一条就是选择专业的公司进行专业的指导，用其专业的经验给出适合于自己的理财方案。</p>
      <p
        class="detail-auxiliary"
        style="margin-top: 16px;"
      >艾鑫集团于2014年6月成立四川爱鑫投资有限公司,是经工商局注册的合法、正规的投资理财公司。公司由现任董事长林全中先生一手创办，总部设于四川省成都市锦江区红星路二段159号红星国际2号楼。公司自成立以来，始终坚持透明化经营和专业化管理的理念，全心全意为客户服务，多通道、全方位地让所有投资人实现保本盈利，以诚实谋发展，以信誉赢天下。凭借着超凡的品牌驾驭力和卓越的团队运作能力，成为业内透明经营、专业管理、贴身服务的第一品牌！</p>
      <img src="../../assets/img/img-tz-1.a227aaf.png" alt class="illustration" />
    </div>
<!--    英语-->
    <div class="detail-wrap" v-else>
      <p class="title">艾鑫为您定制最佳理财方案</p>
      <p class="auxiliary">AiXin has customized the best financial plan and give to your best life</p>
      <p class="detail-auxiliary">One of the most important financial management is to choose a professional company for professional guidance, with its professional experience to give suitable financial solutions.</p>
      <p
              class="detail-auxiliary"
              style="margin-top: 16px;"
      >Aixin group established Sichuan Aixin Investment Co., Ltd. in June 2014. It is a legal and regular investment and financing company registered by the industrial and commercial bureau. The company was founded by Mr. Lin Quanzhong, the current chairman of the board of directors. Its headquarters are located in building 2, Hongxing international, 159 section 2, Hongxing Road, Jinjiang District, Chengdu, Sichuan Province. Since its establishment, the company has always adhered to the concept of transparent operation and professional management, wholeheartedly serving customers, making all investors realize breakeven profit in multi-channel and all-round way, seeking development with honesty and winning the world with reputation. With extraordinary brand control and excellent team operation ability, it has become the first brand with transparent operation, professional management and close service in the industry!</p>
      <img src="../../assets/img/img-tz-1.a227aaf.png" alt class="illustration" />
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.detail-wrap .title{
    color: #333;
    font-size: 20px;
    letter-spacing: .7px;
    line-height: 28px;
    text-align: center;
    padding-top: 32px;
}
.detail-wrap{
    margin-bottom: 48px;
    padding: 0 15px;
}
.detail-wrap .auxiliary{
    font-size: 12px;
    color: #333;
    letter-spacing: .4px;
    text-align: center;
    line-height: 17px;
    padding-bottom: 20px;
    text-indent: 28px;
    text-shadow: 0 0 black;
}
.detail-wrap .detail-auxiliary{
    font-size: 14px;
    color: #2f2f2f;
    letter-spacing: .3px;
    line-height: 24px;
    text-align: justify;
    text-indent: 28px;
}
.detail-wrap .detail-auxiliary{
    font-size: 14px;
    color: #2f2f2f;
    letter-spacing: .3px;
    line-height: 24px;
    text-align: justify;
    text-indent: 28px;
}
.detail-wrap .illustration{
    padding-top: 16px;
    width: 100%;
    background-size: 100% 100%;
}
</style>