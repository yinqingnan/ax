<template>
  <div>
    <!-- 电子商务 -->
    <div class="detail-wrap" style="margin-bottom: 48px;" v-if="this.$store.state.language">
      <p class="title">全方位便捷您的生活</p>
      <p class="auxiliary">AIXIN,that is convenient for your life</p>
      <p
        class="detail-auxiliary"
      >O2O电商这个词相信大家都不陌生，从2014年的萌芽阶段，经过两年的爆发式成长，再到今年的优胜劣汰。O2O电商行业在逐步的发展，也在逐步的影响着人们的生活习惯。我们的生活已经无法与O2O电商分隔开，在这个领域里，一切还是充满着无限的发展可能。</p>
      <ul class="detail-list">
        <li>
          <div>艾鑫集团，一直致力于为客户提供更便捷的服务和更优质产品。2013年成立的成都艾鑫电子商务有限公司是一家专业从事线上线下相结合销售的高科技民营企业，拥有一支致力于为消费者提供高质量的商品以及提供高品质服务的团队。</div>
        </li>
        <li style="padding-top: 16px;">
          <div>艾鑫电子商务坚持采用先进的网络技术与严谨的管理制度，为加速企业全面信息化不断努力。艾鑫电子商务正在以日新月异的速度迅速增长，艾鑫电子商务在成立短短两年的时间就拥有会员上万人。我们也一直积极推动中国电子商务的普及与发展，在国家倡导的互联网+等模式上上率先使用本地化政策，大量发展合作伙伴，以便于为各地用户提供本地化的技术和优质服务。</div>
          <img src="../../assets/img/photo-19.26d5c74.png" alt class="illustration" />
        </li>
      </ul>
    </div>
<!--    英语-->
    <div class="detail-wrap" style="margin-bottom: 48px;" v-else>
      <p class="title">全方位便捷您的生活</p>
      <p class="auxiliary">AIXIN,that is convenient for your life</p>
      <p
              class="detail-auxiliary"
      >I believe everyone is familiar with the term o2o e-commerce. From the embryonic stage in 2014, after two years of explosive growth, to this year's survival of the fittest. O2o e-commerce industry in the gradual development, but also gradually affect people's living habits. Our life has been unable to be separated from o2o e-commerce. In this field, everything is still full of unlimited development possibilities.</p>
      <ul class="detail-list">
        <li>
          <div>Aixin group has been committed to providing customers with more convenient services and higher quality products. Chengdu Aixin e-commerce Co., Ltd., established in 2013, is a high-tech private enterprise specializing in online and offline sales, with a team dedicated to providing consumers with high-quality goods and high-quality services.</div>
        </li>
        <li style="padding-top: 16px;">
          <div>Aixin e-commerce adheres to the use of advanced network technology and rigorous management system to accelerate the enterprise's comprehensive informatization. Ai Xin e-commerce is growing rapidly with the rapid development of e-commerce, Ai Xin e-commerce has more than ten thousand members in just two years. We have been actively promoting the popularization and development of e-commerce in China, and pioneered the use of localization policy in the Internet plus mode advocated by the state, and developed a large number of partners to provide localized technology and quality services for users everywhere.</div>
          <img src="../../assets/img/photo-19.26d5c74.png" alt class="illustration" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.detail-wrap .title {
  color: #333;
  font-size: 20px;
  letter-spacing: 0.7px;
  line-height: 28px;
  text-align: center;
  padding-top: 32px;
}
.detail-wrap {
    padding: 0 15px;
}
.detail-wrap .auxiliary {
  font-size: 12px;
  color: #333;
  letter-spacing: 0.2px;
  text-align: center;
  line-height: 17px;
  padding-bottom: 20px;
}
.detail-wrap .detail-auxiliary{
    font-size: 14px;
    color: #2f2f2f;
    letter-spacing: .3px;
    line-height: 24px;
    text-align: justify;
    text-indent: 28px;
}
.detail-wrap .detail-list{
    padding-top: 16px;
    text-indent: 28px;
    text-align: justify;
    letter-spacing: .2px;
    color: #2f2f2f;
    font-size: 14px;
    line-height: 23px;
}
.detail-wrap .detail-list .illustration{
    padding-top: 16px;
    width: 100%;
    background-size: 100% 100%;
}
</style>