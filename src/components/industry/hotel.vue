<template>
  <div>
    <!-- 酒店管理 -->
    <div class="detail-wrap" v-if="this.$store.state.language">
      <p class="title">入住艾鑫，给你“家”的温暖</p>
      <p class="auxiliary">Stay in Ai Xin and give you the warmth of "home"</p>
      <p
        class="detail-auxiliary"
      >如果把家的温暖形象化，它会有一种令你一阵清醒，一阵困倦和一股温馨的安全感，如果一定要用几个词语表达家的味道，它是温暖、安全、放松的。</p>
      <ul>
        <li class="detail-list">艾鑫乐悠游酒店管理有限公司</li>
        <li>
          <img

            src="../../assets/img/img-jd-01.9dd37bd.png"
            alt
            class="hotel-img"
            style="margin-bottom: 16px;"
          />
          <div

            class="detail-list"
            style="margin-top: 0px;"
          >艾鑫乐悠游酒店，是艾鑫集团旗下高端酒店品牌，公司主要涉及酒店管理、餐饮管理、信息咨询、会议展览展示等服务。</div>
        </li>
        <li>
          <div

            class="detail-list"
          >艾鑫乐悠游酒店设备完善，配置高端，走进大厅，典雅温馨的装修风格，给您一种“回家”的静谧感，让人暖心，舒心，放心。我们的每一间客房都是按照五星级酒店配置，环境舒适，功能齐全。</div>
          <img src="../../assets/img/img-jd-02.3047c39.png" alt class="hotel-img" />
        </li>
        <li>
          <div

            class="detail-list"
          >在艾鑫乐悠游酒店，我们的餐厅设施齐全，为您的三餐提供最优化的搭配方案，同时，这里可承办酒会、宴会和文艺演出等多种活动，我们会根据您的需求，提供最专业的服务和建议。</div>
          <img src="../../assets/img/img-jd-03.f53895e.png" alt class="hotel-img" />
        </li>
        <li>
          <div class="detail-list">乐悠游酒店接受24小时在线预约订房，为您的出行提供舒适安全的住所，给您“归家”的温暖体验。</div>
          <img src="../../assets/img/img-jd-04.22cd212.png" alt class="hotel-img" />
        </li>
      </ul>
    </div>

<!--    英语-->
    <div class="detail-wrap" v-else>
      <p class="title">入住艾鑫，给你“家”的温暖</p>
      <p class="auxiliary">Stay in Ai Xin and give you the warmth of "home"</p>
      <p

              class="detail-auxiliary"
      >If you visualize the warmth of home, it will make you awake, sleepy and a warm sense of security. If you must use a few words to express the taste of home, it is warm, safe and relaxed.</p>
      <ul>
        <li class="detail-list">Aixinle youyou Hotel Management Co., Ltd</li>
        <li>
          <img

                  src="../../assets/img/img-jd-01.9dd37bd.png"
                  alt
                  class="hotel-img"
                  style="margin-bottom: 16px;"
          />
          <div

                  class="detail-list"
                  style="margin-top: 0px;"
          >Aixinle youyou hotel is a high-end hotel brand of Aixin group. The company mainly involves hotel management, catering management, information consultation, conference and exhibition services.</div>
        </li>
        <li>
          <div

                  class="detail-list"
          >Aixinle youyou hotel has perfect equipment, high-end configuration, elegant and warm decoration style, which gives you a quiet feeling of "going home", which makes people warm, comfortable and at ease. Each of our rooms are in accordance with the five-star hotel configuration, comfortable environment, complete functions.</div>
          <img src="../../assets/img/img-jd-02.3047c39.png" alt class="hotel-img" />
        </li>
        <li>
          <div

                  class="detail-list"
          >At aixinle Leisure Hotel, our restaurant facilities are complete, providing the best matching scheme for your three meals. At the same time, we can undertake a variety of activities such as cocktail party, banquet and artistic performance. We will provide the most professional service and suggestions according to your needs.</div>
          <img src="../../assets/img/img-jd-03.f53895e.png" alt class="hotel-img" />
        </li>
        <li>
          <div class="detail-list">Leyouyou Hotel accepts 24-hour online booking, providing you with a comfortable and safe residence and a warm experience of "returning home".</div>
          <img src="../../assets/img/img-jd-04.22cd212.png" alt class="hotel-img" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.detail-wrap {
    margin-bottom: 48px;
    padding: 0 15px;
}
.detail-wrap .title {
    color: #333;
    font-size: 20px;
    letter-spacing: .7px;
    line-height: 28px;
    text-align: center;
    padding-top: 32px;
}
.detail-wrap .auxiliary{
    font-size: 12px;
    color: #333;
    letter-spacing: .2px;
    text-align: center;
    line-height: 17px;
    padding-bottom: 28px;
}
.detail-wrap .detail-auxiliary {
    font-size: 14px;
    color: #2f2f2f;
    letter-spacing: .3px;
    line-height: 24px;
    text-align: justify;
    text-indent: 28px;
}
.detail-wrap .hotel-img {
    width: 100%;
    background-size: 100% 100%;
    margin-top: 16px;
}
.detail-wrap .detail-list{
    text-indent: 28px;
    text-align: justify;
    letter-spacing: .2px;
    color: #2f2f2f;
    font-size: 14px;
    line-height: 23px;
    margin-top: 16px;
}
</style>