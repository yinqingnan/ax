<template>
  <div>
    <!-- 国际旅游 -->
    <div class="detail-wrap" style="margin-bottom: 48px;" v-if="this.$store.state.language">
      <p class="title">世界那么大，艾鑫陪你去看看</p>
      <p class="auxiliary">The world is so big,Ai Xin accompanies you to look around</p>
      <p class="detail-auxiliary"
      >旅行就是能把世间万物景象留在你的心间，让你达到最好的状态。世界上有九千个地方，艾鑫都可以陪你去走走——成都艾鑫国际旅游服务有限公司成立于2016年1月7日。自公司成立之日起，公司不断探索和发展一条品质与享受相结合的专业旅游服务道路。以“品质化”、“规范化”、“人性化”为发展目标，立志在满足顾客需求的基础上追求卓越、精益求精，并不断加大人力及技术等方面的持续投入，发展成训练有素、经验丰富、服务热忱、热爱艾鑫的高素质团队。与全国各地的旅行社、酒店、车队建立了良好的合作关系与业务往来，使各类旅游产品更加完善，力争为游客提供可靠周到、品质优良的全方位旅游服务。</p>
      <p
        class="detail-auxiliary"
        style="margin-top: 16px;"
      >一路上有艾鑫的陪伴，每走一个地方都会有不一样的心境，安全、高体验度和独特的记忆，是艾鑫回馈你最好的方式。</p>
      <img
        src="../../assets/img/photo-18.39a0f88.png"
        alt
        class="illustration"
        style="padding-top: 16px;"
      />
    </div>

<!--    英语-->
    <div class="detail-wrap" style="margin-bottom: 48px;" v-else>
      <p class="title">世界那么大，艾鑫陪你去看看</p>
      <p class="auxiliary">The world is so big,Ai Xin accompanies you to look around</p>
      <p class="detail-auxiliary"
      >Travel is to be able to leave the world in your heart, let you reach the best state. There are 9000 places in the world, Ai Xin can accompany you to go for a walk - Chengdu Aixin International Tourism Service Co., Ltd. was established on January 7, 2016. Since the establishment of the company, the company has been exploring and developing a professional tourism service road combining quality and enjoyment. Taking "quality", "standardization" and "humanization" as the development goals, we are determined to pursue excellence and excellence on the basis of meeting the needs of customers, and constantly increase the continuous investment in human resources and technology, so as to develop into a highly qualified team with well-trained, experienced, enthusiastic service and enthusiastic love for Aixin. With the travel agencies, hotels, motorcades across the country to establish good cooperative relations and business contacts, so that all kinds of tourism products are more perfect, and strive to provide tourists with reliable and thoughtful, quality and all-round tourism services.</p>
      <p
              class="detail-auxiliary"
              style="margin-top: 16px;"
      >With Ai Xin's company along the way, every place you go will have a different mood. Safety, high experience and unique memory are the best way for Ai Xin to give back to you.</p>
      <img
              src="../../assets/img/photo-18.39a0f88.png"
              alt
              class="illustration"
              style="padding-top: 16px;"
      />
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
.detail-wrap .auxiliary {
    font-size: 12px;
    color: #333;
    letter-spacing: .2px;
    text-align: center;
    line-height: 17px;
    padding-bottom: 20px;
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
.detail-wrap{
    padding: 0 15px;
}
.detail-wrap .detail-list, .detail-wrap .illustration{
    padding-bottom: 16px;
    width: 100%;
    background-size: 100% 100%;
}
</style>