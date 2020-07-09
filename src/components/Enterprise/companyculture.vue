<template>
  <!-- 企业文化 -->

  <div>
    <div>
      <div>
        <p class="top-title" style="text-align: center;">诚信、团结、舍得、感恩、挑战、服务。</p>
        <p
          class="top-illustration"
          style="text-align: center; line-height: 17px;"
        >Integrity, solidarity, sacrifice, gratitude, challenge, service.</p>
      </div>
      <ul class="detail-wrap" style="margin-bottom: 48px;">
        <li>
          <p class="title" v-if="this.$store.state.language">诚信</p>
          <p class="title" v-else>Sincerity</p>
          <div
            class="detail"
            v-if="this.$store.state.language"
          >“人无信不立”，一个人，做不到诚信就没办法立足于社会，同样，一个企业若不诚信待人，则无法长久生存下去。从建立之初，艾鑫集团将诚信看作公司发展的第一大事，致力于诚信发展，诚信服务,为企业打造了良好口碑</div>
          <div
            class="detail"
            v-else
          >"People do not stand without trust", a person, can not do good faith can not be based on the society, the same, if an enterprise does not treat people in good faith, it can not survive for a long time. From the beginning of its establishment, Aixin group regards integrity as the first priority of the company's development, and devotes itself to the development and service of integrity, and has created a good reputation for the enterprise</div>
          <img src="../../assets/img/photo-6.e9b7add.png" alt class="illustration" />
        </li>
        <p class="title" v-if="this.$store.state.language">团结</p>
        <p class="title" v-else>Unite</p>
        <div
          v-if="this.$store.state.language"
          class="detail"
        >团结，是由多种情感聚集在一起而产生的一种精神。团结并不只存在于志同道合的人群之中，互相帮助的形体。所谓团结就是我们必不可少的因素。林全中董事长在创办艾鑫集团之初，将团结看作是企业发展的根本，唯有团结起来,才能将企业做大做好</div>
        <div
          class="detail"
          v-else
        >Unity is a kind of spirit produced by a variety of emotions gathered together. Unity does not exist only in people who share the same ideals and ways, but also help each other. Unity is an essential factor for us. At the beginning of founding Aixin group, chairman Lin Quanzhong regarded unity as the foundation of enterprise development. Only by uniting can we make the enterprise bigger and better</div>
        <img src="../../assets/img/photo-7.fc11a0a.png" alt class="illustration" />
        <li>
          <p class="title"   v-if="this.$store.state.language">舍得</p>
          <p class="title" v-else>Willing</p>
          <div
           v-if="this.$store.state.language"
            class="detail"
          >舍得，即愿意付出,不吝惜。有舍有得，不舍不得，大舍大得，小舍小得。舍得是一种人生智慧和态度，是拥有超越境界来对已得和可得的东西进行决断的情怀和智慧。艾鑫集团的每一位员工,都在为更好地服务大众舍弃自己更多的青春，时间，这是我们好口碑的根本</div>
           <div
           v-else
            class="detail"
          >Willing, that is, willing to pay, not stingy. Have give up have, do not give up, big give up big, small shed small. Willing is a kind of life wisdom and attitude. It is the feeling and wisdom that transcends the realm to decide what has been and can be obtained. Every employee of Aixin group is giving up more youth and time to better serve the public, which is the foundation of our good reputation</div>
          <img src="../../assets/img/photo-8.978157a.png" alt class="illustration" />
        </li>
        <li>
          <p class="title" v-if="this.$store.state.language">服务</p>
          <p class="title" v-else>Service</p>
          <div
            v-if="this.$store.state.language"
            class="detail"
          >艾鑫集团是一家立足于“服务”的企业，我们的口碑得以传播，最扎实的基础在于服务,用心对待每一位客户，以我们的真诚换取客户的信任，是艾鑫集团对服务最基础的要求。唯有做到“将心比心”才能带给客户最优质的体验</div>
           <div
           v-else
            class="detail"
          >Aixin group is an enterprise based on "service". Our word-of-mouth can be spread. The most solid foundation is service. We treat every customer with heart and exchange our sincerity for customers' trust, which is the most basic requirement of Aixin group for service. Only by doing "heart to heart" can we give customers the</div>
          <img src="../../assets/img/photo-9.23bab66.png" alt class="illustration" />
        </li>
        <li>
          <p class="title" v-if="this.$store.state.language">挑战</p>
          <p class="title" v-else>Challenge</p>
          <div
          v-if="this.$store.state.language"
            class="detail"
          >每一个企业的发展与生存，都是一场博弈，在这场博弈中，我们会面临各种挑战，只有敢于接受挑战的公司，才得以生存空间。同时，我们也在不断挑战自我，进行产品的优化和创新，造福更多百姓</div>
           <div
           v-else
            class="detail"
          >The development and survival of every enterprise is a game. In this game, we will face all kinds of challenges. Only companies that dare to accept the challenges can survive. At the same time, we are constantly challenging ourselves to optimize and innovate our products to benefit more people</div>
          <img src="../../assets/img/photo-10.3b38f7c.png" alt class="illustration" />
        </li>
        <li>
          <p class="title" v-if="this.$store.state.language">感恩</p>
          <p class="title" v-else>Gratitude</p>
          <div
          v-if="this.$store.state.language"
            class="detail"
          >艾鑫集团自2009年创立至今，走过9年风雨，我们时刻怀抱感恩之心以最大的福利反馈客户。同时，我们也感谢一直支持艾鑫集团的大众，是你们的支持，让艾鑫集团走的更远</div>
           <div
           v-else
            class="detail"
          >Since its establishment in 2009, Aixin group has gone through nine years of trials and hardships. We always hold the heart of gratitude and give feedback to customers with the greatest welfare. At the same time, we also thank the public who have been supporting Aixin group. It is your support that makes Aixin group go further</div>
          <img src="../../assets/img/photo-11.1538d44.png" alt class="illustration" />
        </li>
        <li>
          <div class="detail"  v-if="this.$store.state.language">艾鑫集团以“诚信、团结、舍得、服务、挑战、感恩”为企业文化的核心，以此更好激励企业员工、服务客户、从众多集团中脱颖而出，成为一流企业</div>
          <div class="detail" v-else>Aixin group takes "integrity, unity, sacrifice, service, challenge and gratitude" as the core of corporate culture, so as to better motivate employees, serve customers, stand out from many groups and become a first-class enterprise</div>
          <img src="../../assets/img/photo-12.0062183.png" alt class="illustration" />
        </li>
      </ul>
      <div class="get-top" style="display: none;"></div>
    </div>
  </div>
</template>


<style lang="stylus" scoped>
.top-title {
  color: #333;
  font-size: 20px;
  letter-spacing: 0.7px;
  text-align: center;
  padding: 32px 15px 0;
  line-height: 28px;
}

.top-illustration {
  color: #333;
  letter-spacing: 0.2px;
  line-height: 17px;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  line-height: 17px;
}

.detail-wrap .title {
  color: #333;
  font-size: 20px;
  letter-spacing: 0.7px;
  line-height: 28px;
  text-align: center;
  padding-top: 32px;
}

.title {
  color: #333;
  font-size: 20px;
  letter-spacing: 0.7px;
  line-height: 28px;
  text-align: center;
  padding: 32px 0 26px;
}

.detail {
  font-size: 14px;
  color: #070707;
  line-height: 23px;
  letter-spacing: 0.2px;
  text-align: justify;
  text-indent: 28px;
  padding-bottom: 16px;
}

.detail-wrap {
  padding: 0 15px;
}

.illustration {
  width: 100%;
  height: 130px;
  background-size: 100% 100%;
}

.detail-wrap :last-child {
  padding-top: 28px;
}
</style>