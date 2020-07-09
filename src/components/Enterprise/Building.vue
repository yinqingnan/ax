<template>
  <!-- 企业党建 -->

  <div>
    <div class="detail-wrap" style="margin-bottom: 48px;">
      <p class="title">我们是艾鑫人</p>
      <p class="auxiliary">We are AINXIN man</p>
      <p class="detail-auxiliary" 
      v-if="this.$store.state.language"
      >企业凭借团队的互相协作，互帮互助走到的今天，企业把每个员工的力量都拧成一股绳发力,为企业发展做出贡献的员工,我们都怀抱感恩之心回馈员工最好的保障。同时，还会定期组织员工进行团队建设活动。</p>
       <p class="detail-auxiliary"
       v-else
      >Today, enterprises rely on the mutual cooperation and mutual help of the team. The enterprise has twisted the strength of each employee into a rope. For the employees who have contributed to the development of the enterprise, we are grateful to give back the best guarantee for the employees. At the same time, the team building activities will be organized regularly.</p>
      <ul class="detail-item">
        <li data-v-d7ec58f0>
          <img src="../../assets/img/img-jd-1.2925020.png" alt class="illustration" />
          <p class="detail" v-if="this.$store.state.language">第一次集体军训，增强团队协作能力</p>
          <p class="detail" v-else>The first collective military training to enhance team cooperation ability</p>
        </li>
        <li>
          <img src="../../assets/img/img-jd-2.8af4270.png" alt class="illustration" />
          <p class="detail" v-if="this.$store.state.language">定期员工表彰大会，激励大家努力向前！</p>
          <p class="detail" v-else>Regular staff commendation meeting to encourage everyone to move forward!</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.detail-wrap{
    padding: 0 15px;
}
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
.detail-item li{
    padding-bottom: 28px;
}
.detail-item .detail{
    padding-top: 16px;
    font-size: 14px;
    color: #070707;
    line-height: 24px;
    letter-spacing: .3px;
    text-indent: 28px;
}
.detail-item .illustration {
    width: 100%;
    background-size: 100% 100%;
}
</style>