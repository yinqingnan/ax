<template>
  <!-- 集团简介 -->

  <div>
    <div class="box">
      <p class="title">艾鑫忠鸿生物科技有限公司</p>
      <p class="auxiliary">Chengdu AiXinzhonghong biotechnology co.LT</p>
      <ul style="padding: 0 15px;">
        <li style="margin-bottom: 16px">
          <div v-if="this.$store.state.language" class="detail">艾鑫集团始于2009年创造于中国.成都</div>
          <div v-else class="detail">Aixin Life International created in Chengdu, China</div>
        </li>
        <li>
          <div
            v-if="this.$store.state.language"
            class="detail"
          >2017年，成都艾鑫忠鸿生物科技有限公司上市美国纳斯达克（股市代码：MCAR），截至目前，集团员工已达数千人，业务遍布全国各地，2017年上半年我们的总资产高达上亿元人民币，上千万美元市值。如今艾鑫集团已覆盖生物科技、药房、旅游、电子商务等多个产业。</div>
          <div
            v-else
            class="detail"
          >In 2017, Chengdu aixinzhonghong Biotechnology Co., Ltd. was successfully listed on NASDAQ (stock market code: AIXN). Up to now, the group has thousands of employees, and its business covers all parts of the country. In the first half of 2017, our total assets reached hundreds of millions of yuan, with a market value of tens of millions of dollars. Now AIXN has covered many industries, such as biotechnology, pharmacy, tourism, e-commerce, etc.</div>
          <img src="../../assets/img/photo-2.adcbe58.png" alt class="illustration" />
        </li>
        <li>
          <div
            class="detail"
            v-if="this.$store.state.language"
          >秉承“健康生活管理家”的经营理念，艾鑫以优质的产品和服务赢得了股东、客户、合作伙伴、业内同行的尊重和赞誉。作为中国健康生活管理企业的龙头，艾鑫集团长期致力于老年健康服务，为老年人的健康保驾护航，打造一个“健康生活管理家”形象。全方位地优化改善老年人群的生活品质，让老年人重度“青春”，帮助他们完成未完成的梦想。截至2017年，企业的忠实会员以达三万人次，收获好评无数，正是因为我们用心的服务，才得以在我们的消费群体之间以良好的口碑传播</div>
          <div
            class="detail"
            v-else
          >Adhering to the business philosophy of "healthy life manager", AIXN has won the respect and praise of shareholders, customers, partners and peers with high quality products and services. As the leader of China's healthy life management enterprises, AIXN group has long been committed to elderly health services, escorting the health of the elderly, and creating a "healthy life manager" image. We should optimize and improve the quality of life of the elderly people in an all-round way, so that the elderly can become "young" and help them to complete their unfinished dreams. As of 2017, the number of loyal members of the enterprise has reached 3W, and the company has received numerous favorable comments. It is because of our attentive service that we have been able to spread with good word-of-mouth among our consumer groups.</div>
          <img src="../../assets/img/photo-1.d236ecd.png" alt class="illustration" />
        </li>
        <li>
          <div
            v-if="this.$store.state.language"
            class="detail"
          >在未来，艾鑫将彻底打通国际贸易之路，从美国开始覆盖全球。在我们的贸易体制下，我们还将针对用户开展“美国梦一条龙”政策，在我们的政策下，不仅可以轻松到美国度假，享受纯正美式庄园，还可以让您的子女在美国就学，享受西方国家的福利保障！</div>
          <div
            v-else
            class="detail"
          >In the future, AIXN will thoroughly open up the road of international trade, covering the world from the United States. Under our trading system, we will also carry out the "one-stop American Dream" policy for users. Under our policy, you can not only easily go to the United States for vacation and enjoy the pure American manor, but also let your children study in the United States and enjoy the welfare protection of western countries!</div>
          <img src="../../assets/img/photo-21.45cee1b.png" alt class="illustration" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.box {
  >.title {
    color: #333;
    font-size: 20px;
    letter-spacing: 0.7px;
    line-height: 28px;
    text-align: center;
    padding-top: 32px;
  }

  .auxiliary {
    font-size: 12px;
    color: #333;
    letter-spacing: 0.2px;
    text-align: center;
    line-height: 17px;
    padding-bottom: 20px;
  }

  .detail {
    font-size: 14px;
    color: #2f2f2f;
    letter-spacing: 0.2px;
    line-height: 23px;
    text-indent: 28px;
    text-align: justify;
  }

  .illustration {
    padding: 26px 0;
    width: 100%;
    height: 130px;
    background-size: 100% 100%;
  }
}
</style>