<template>
  <!-- 企业荣誉 -->

  <div>
    <div>
      <p class="title">在探索中不断成长的艾鑫</p>
      <p class="auxiliary">Growing up in the exploration of AiXin</p>
      <p class="detail-auxiliary" v-if="this.$store.state.language" >艾鑫集团的快速发展，为成都经济增长作出不小贡献之外,也为百姓带来福音。正因如此,我们能够获得诸多荣誉,并且成为以口碑相传的优秀企业。</p>
      <p class="detail-auxiliary" v-else>The rapid development of Aixin group has not only made great contributions to the economic growth of Chengdu, but also brought good news to the people. Because of this, we can obtain many honors and become an excellent enterprise handed down by word of mouth.</p>
      <div class="detail-item" style="margin-bottom: 48px;">
        <ul class="detail">
          <li>
            <p class="detail-list" style="padding: 0 15px;" v-if="this.$store.state.language">优秀的领导者是带领企业蓬勃发展的关键 ，恭祝：林全中董事长荣获第三界民营经济论坛华西论坛 "2017中国民营经济最具影响力人物"</p>
            <p class="detail-list" style="padding: 0 15px;" v-else>Excellent leaders are the key to leading the vigorous development of enterprises. Congratulations: Chairman Lin Quanzhong won the title of "the most influential person of China's private economy in 2017" of the third private economy forum of West China Forum</p>
            <p style="text-align: center;">
              <img
                src="../../assets/img/img-ry-2.ad902c8.png"
                alt
                style="width: 165px; height: 117px;"
              />
            </p>
          </li>
          <li>
            <p class="detail-list" v-if="this.$store.state.language">民营企业飞速发展的时代，艾鑫集团荣获第三界民营经济论坛华西论坛 "2017中国城新典范企业" 殊荣</p>
            <p class="detail-list" v-else>In the era of rapid development of private enterprises, Aixin group won the honor of "2017 China city new model enterprise" by the third private economic forum Huaxi forum</p>
            <p style="text-align: center;">
              <img
                src="../../assets/img/img-ry-1.4758979.png"
                alt
                style="width: 165px; height: 117px;"
              />
            </p>
          </li>
          <li>
            <p class="detail-list"  v-if="this.$store.state.language">成都艾鑫忠鸿生物科技有限公司被授予《领军人物》栏目合作伙伴</p>
            <p class="detail-list" v-else>Chengdu aixinzhonghong Biotechnology Co., Ltd. was awarded the "leader" column partner</p>
            <p style="text-align: center;">
              <img
                src="../../assets/img/img-ry-3.5c740e7.png"
                alt
                style="width: 165px; height: 117px;"
              />
            </p>
          </li>
          <li>
            <p class="detail-list" v-if="this.$store.state.language">成都艾鑫健康咨询公司因其优质的产品和服务，入选为“中国3·15诚信品牌”</p>
            <p class="detail-list" v-else>Chengdu Aixin Health Consulting Co., Ltd. was selected as "China 3.15 integrity brand" for its high quality products and services</p>
            <p style="text-align: center;">
              <img
                src="../../assets/img/img-ry-4.865f0ed.png"
                alt
                style="width: 165px; height: 117px;"
              />
            </p>
          </li>
          <li>
            <p class="detail-list"  v-if="this.$store.state.language">成都艾鑫健康咨询有限公司，在全国品牌调研中，荣获“央视上榜品牌”殊荣</p>
            <p class="detail-list" v-else>Chengdu Aixin Health Consulting Co., Ltd. won the honor of "CCTV top brand" in the national brand survey</p>
            <p style="text-align: center;">
              <img
                src="../../assets/img/img-ry-5.45b4e86.png"
                alt
                style="width: 165px; height: 117px;"
              />
            </p>
          </li>
          <li>
            <p class="detail-list" v-if="this.$store.state.language">成都艾鑫健康咨询有限公司荣获“质量·服务·诚信AAA单位”殊荣</p>
            <p class="detail-list" v-else>Chengdu Aixin Health Consulting Co., Ltd. won the honor of "AAA unit of quality, service and integrity"</p>
            <p style="text-align: center;">
              <img
                src="../../assets/img/img-ry-6.d48151e.png"
                alt
                style="width: 165px; height: 117px;"
              />
            </p>
          </li>
          <li>
            <p class="detail-list" v-if="this.$store.state.language">成都艾鑫健康咨询有限公司系列保健产品被评选为"中国绿色健康食品"</p>
            <p class="detail-list" v-else>Chengdu Aixin Health Consulting Co., Ltd. series of health care products were selected as "China green health food"</p>
            <p style="text-align: center;">
              <img
                src="../../assets/img/img-ry-7.5964b90.png"
                alt
                style="width: 165px; height: 117px;"
              />
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.title{
    color: #333;
    font-size: 20px;
    letter-spacing: .7px;
    line-height: 28px;
    text-align: center;
    padding-top: 32px;
}
.auxiliary {
    font-size: 12px;
    color: #333;
    letter-spacing: .2px;
    text-align: center;
    line-height: 17px;
    padding-bottom: 20px;
}
.detail-auxiliary {
    font-size: 14px;
    color: #2f2f2f;
    letter-spacing: .2px;
    padding: 0 15px 26px;
    text-align: justify;
    line-height: 23px;
    text-indent: 28px;
}
.detail-item{
    padding: 0 15px;
}
.detail-item .detail {
    font-size: 14px;
    color: #2f2f2f;
    letter-spacing: .2px;
    line-height: 23px;
    text-indent: 28px;
    text-align: justify;
}
.detail-item .detail .detail-list{
    padding-bottom: 16px;
}
</style>