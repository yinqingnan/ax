<template>
  <!-- 董事长专区 -->

  <div>
    <div   data-v-4a684ffa style="margin-bottom: 48px;">
      <p   class="title">一个有勇有谋的领导</p>
      <p   class="auxiliary">A brave leader</p>
      <p v-if="this.$store.state.language"   class="detail-auxiliary">林全中董事长</p>
      <p v-else  class="detail-auxiliary">Chairman Lin Quanzhong</p>
      <ul   class="detail-item">
        <li  >
          <div
            class="detail"
            v-if="this.$store.state.language"
          >2017年11月，党的十九大顺利召开，中国经济形势一片良好，四川在经历一系列环境严格治理之后，省内各部门相互协调全力做好经济和环境共同治理的工作，确保经济形势和环境治理齐头并进。在这场保护环境，保障经济协调发展的胜利中，每一点经济的进步，每一个日子的蓝天，都凝结着很多默默无闻的基层工作者的汗水和辛苦。</div>
          <div
            class="detail"
            v-else
          >In November 2017, the 19th National Congress of the Communist Party of China was successfully held, and China's economic situation was in good shape. After a series of strict environmental governance, Sichuan's departments coordinated with each other to do a good job in the joint governance of economy and environment, Ensure that the economic situation and environmental governance go hand in hand. Every day of economic development, every point of economic development, There are many unknown grass-roots workers' sweat and hard work.</div>
        </li>
        <li  >
          <div
             v-if="this.$store.state.language"
            class="detail"
          >在这365个日日夜夜中，有一个的70后的“年轻人”，穿梭在人群之中，奋战在第一线，格外引人注目。他就是满怀抱负与希望的民营企业家林全中。</div>
           <div
             v-else
            class="detail"
          >In these 365 days and nights, there is a Post-70s "young people" shuttling through the crowd, fighting in the front line, particularly eye-catching. He is Lin Quanzhong, a private entrepreneur full of ambition and hope.</div>
        </li>
        <li  >
          <img
             
            src="../../assets/img/img-d-1.e7894f8.png"
            alt
            class="illustration"
            style="padding-top: 16px; padding-bottom: 16px;"
          />
          <div
              v-if="this.$store.state.language"
            class="detail"
          >林全中，1978年10月出生，1995年参军入伍，1998年转业为止，一直在部队的领导下服务于祖国的第一线。严格的军事素养，顽强的部队精神，让他一直就有一股子不服输的劲头。他身兼数职，但每份工作都兢兢业业，恪尽职守。他常年坚守一线，耐心为客户们排忧解难，是很多商业客户私下的亲密朋友；每项工作都认真负责，竭尽全力做到最好，是部门负责人的得意助手；怀赤子之心，服务广大群众，是最辛勤的工作者。</div>
          <div
            v-else
            class="detail"
          >Lin Quanzhong, born in October 1978, joined the army in 1995, and has been serving the front line of the motherland under the leadership of the army until 1998. His strict military accomplishment and indomitable spirit of the army have always given him the strength to admit defeat. He has several duties, but every job is conscientious and conscientious. He sticks to the front line all the year round and patiently solves the problems for customers. He is a private close friend of many commercial customers. He is conscientious and responsible for every work and tries his best to be the proud assistant of the department head. He is the most hardworking worker who serves the masses with a pure heart.</div>
        </li>
        <li  >
          <div
             v-if="this.$store.state.language"
            class="detail"
          >艾鑫，是他一手创建的商业帝国。集团历经9年发展，从青白江一个小小的日用品经营部发展为现在成都的大健康龙头产业，离不开这位有智慧和远见的领导者。</div>
           <div
            v-else
            class="detail"
          >Ai Xin is the business empire he founded. After nine years of development, the group has developed from a small daily necessities business department in Qingbaijiang to a big health leading industry in Chengdu, which is inseparable from this wise and farsighted leader.</div>
        </li>
        <li  >
          <div
             v-if="this.$store.state.language"
            class="detail"
          >林全中，现任艾鑫集团董事长兼总经理，98年复员后，他先后从事保安、厨师等工作，一直到2008年，才进入保健品行业，因为这个行业的巨大发展潜力和无限可能性从2003年就吸引着林全中，直至2009年，他毅然决然的决定自主创业，由此诞生了青白江金晚霞日用品经营部。</div>
           <div
             v-else
            class="detail"
          >Lin Quanzhong, the current chairman and general manager of AIXN group, was demobilized in 1998. After he was demobilized, he successively worked as a security guard and a cook. He did not enter the health care products industry until 2008. Because of the huge development potential and unlimited possibilities of this industry, Lin Quanzhong has attracted Lin Quanzhong since 2003. Until 2009, he resolutely decided to start his own business, thus giving birth to Qingbaijiang golden sunset commodity Business department.</div>
        </li>
        <li  >
          <div
             v-if="this.$store.state.language" 
            class="detail"
          >林全中董事长说过：健康对每一个人来说，都非常重要，这也是他选择健康产业的一个重要原因。经过9年发展，艾鑫集团渐渐步上正轨，从启动资金都是筹来的日用品经营部逐渐发展为现在的上市集团。现在的艾鑫集团已经覆盖康产业、电子商务产业、旅游产业、酒店管理产业，集团这四个产业相互独立又相互关联，形成产业链，稳步运营，为我们的客户提供“一条龙”全面的服务。</div>
          <div
             v-else
            class="detail"
          >Chairman Lin Quanzhong said: health is very important to everyone, which is also an important reason why he chose the health industry. After nine years of development, AIXN group has gradually stepped on the right track, from the start-up funds are raised daily necessities business department gradually developed into the current listed group. At present, AIXN group has covered the health industry, e-commerce industry, tourism industry and hotel management industry. The four industries of the group are independent and related to each other, forming an industrial chain, operating steadily and providing "one-stop" comprehensive services for our customers.</div>
        </li>
        <li  >
          <div
             v-if="this.$store.state.language" 
            class="detail"
          >林全中董事长还为我们分析了目前的行业现状——我国老年人口数量为2.12亿，到2050年将达到4.8亿，老龄化水平为15.5%。随着我国老龄化的到来，健康消费品、消费类医疗器械和提供养老服务的医疗机构等养老健康细分行业都将是直接受益者。随着中国经济水平的不断提高，广大民众对健康的重视程度也日渐提升，中国的健康产业开始进入高速发展时期，大健康将是未来社会的发展趋势，与此同时林董还做到了严格考察产品生产方及其资质，再进行小范围体验，最后得出有保障的结果进行推广；并表示我们的特色是做好每一个细节，每一件小事，把每一个客户当成家人一样用心服务。</div>
          <div
            v-else
            class="detail"
          >Chairman Lin Quanzhong also analyzed the current situation of the industry for us: the number of elderly population in China is 212 million, which will reach 480 million by 2050, and the aging level is 15.5%. With the arrival of China's aging, health consumer goods, consumer medical devices and medical institutions providing pension services will be the direct beneficiaries. With the continuous improvement of China's economic level, the majority of people pay more and more attention to health. China's health industry has begun to enter a period of rapid development, and great health will be the development trend of the future society. At the same time, Mr. Lin also made a strict inspection of the product manufacturer and its qualifications, then had a small range of experience, and finally got a guaranteed result for promotion Our characteristic is to do a good job in every detail, every little thing, and serve every customer as family.</div>
        </li>
        <li  >
          <img
             
            src="../../assets/img/img-d-2.3532bfb.png"
            alt
            class="illustration"
            style="padding-top: 16px; padding-bottom: 16px;"
          />
          <div
             v-if="this.$store.state.language" 
            class="detail"
          >作为企业的领导者，林全中董事长认为团队建设是一个企业成功的关键，这个世界上有很多各种各样的资源，对于行业我们有很多选择，但是一个企业中重要的资源就是人才。林董觉得人才分为两种：一种是个人能力非常强，一个人能干好很多事情，还有一种人，能力不是很强，但是他能够与自己的团队共同进退。在我们艾鑫集团，第二种人才更为重要，我们不需要个人英雄主义，我们需要的是一直强大的队伍，一直有强大战斗力的队伍。</div>
            <div
             v-else
            class="detail"
          >As the leader of an enterprise, chairman Lin Quanzhong believes that team building is the key to the success of an enterprise. There are many kinds of resources in the world, and we have many choices for the industry. But the important resource in an enterprise is talent. Lin Dong thinks that there are two kinds of talents: one is a person with very strong ability, one can do a lot of things well, and the other is a person whose ability is not very strong, but he can advance and retreat together with his team. In our AIXN group, the second type of talent is more important. We don't need personal heroism. What we need is a strong team and a team with strong fighting power.</div>
        </li>
        <li  >
          <div
             v-if="this.$store.state.language" 
            class="detail"
          >历经九年，艾鑫集团的不断壮大与发展，正是因为这位有勇有谋的领导者，他对行业的精准分析，和对人才的培养，是艾鑫成功的重要因素！</div>
           <div
             v-else
            class="detail"
          >After nine years of continuous growth and development of AIXN group, it is precisely because this brave and resourceful leader, his accurate analysis of the industry and the cultivation of talents are important factors for Ai Xin's success!</div>
        </li>
        <li  >
          <div
             v-if="this.$store.state.language" 
            class="detail"
          >回顾林全中董事长的成长经历，他的每一步成绩的取得，都是党和人民教育的结果，是各级政府扶持的结果。作为一名民营企业家，林总一直认为企业家要肩负起时代赋予我们的历史使命，一方面要树立正确的世界观，人生观，价值观，不断转变思想深挖市场，还要用心为普通群众服务，为经济建设服务。另一方面要努力学习科学的管理知识，掌握现代企业管理技术，不断提高为社会做出贡献的本领和水平，努力成为一名德才兼备的社会主义事业的建设者和缔造者。</div>
             <div
             v-else
            class="detail"
          >Looking back on the growth experience of chairman Lin Quanzhong, every step of his achievements is the result of the education of the party and the people and the support of governments at all levels. As a private entrepreneur, general manager Lin has always believed that entrepreneurs should shoulder the historical mission entrusted to us by the times. On the one hand, they should establish a correct world outlook, outlook on life and values, constantly change their thinking and dig deep into the market. They should also serve the common people and economic construction with heart. On the other hand, we should strive to learn scientific management knowledge, master modern enterprise management technology, constantly improve the ability and level of making contributions to the society, and strive to become a builder and founder of socialist cause with both political integrity and ability.</div>
        </li>
        <li  >
          <div
             v-if="this.$store.state.language" 
            class="detail"
          >淡泊名利，甘于奉献。作为一名共产党员就要无私奉献，不能图名图利，只有在工作中尽自己的努力为大家干点事，心里才会踏实。不善言辞的林全中董事长就是这样想的，也是这样做的。他将将青春的光和热奉献给了成都市的地区经济，献给了他热爱的土地。他桌上常常摆着一本厚厚的笔记，如果没有平日深入一线的走访调研，有长时间的深入思考，这些东西是不会有的。难能的是，70后的他，一直这样坚持地做着。用脊梁背负时代的担当，用智慧武装企业的脊梁，用汗水挥洒基层干部的青春热血。勤奋，奉献于平凡的事业；沉默，却又成就精彩———这就是默默奉献的70后，林全中。他代表了这一代人对于社会和祖国的无限激情和梦想。</div>
           <div
             v-else
            class="detail"
          >Indifferent to fame and wealth, willing to contribute. As a member of the Communist Party, we should make selfless dedication and not seek fame and profit. Only when we try our best to do something for everyone in our work, will we be steadfast in our hearts. This is what chairman Lin Quan thought. He dedicated the light and heat of youth to the regional economy of Chengdu City and to the land he loved. He often has a thick notebook on his desk. If there is no daily in-depth investigation and investigation, and there is a long time of in-depth thinking, these things would not exist. What's difficult is that after 70, he has been doing so persistently. We should shoulder the responsibility of the times with our backbone, arm the backbone of enterprises with wisdom, and sprinkle the youth blood of grassroots cadres with sweat. Hardworking, dedicated to the ordinary cause; silent, but also the achievement of brilliant - this is the silent dedication of the Post-70s, Lin Quanzhong. He represents the boundless passion and dream of this generation for the society and the motherland.</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.title{
    color: #333;
    font-size: 20px;
    letter-spacing: .7px;
    line-height: 28px;
    text-align: left;
    padding-top: 32px;
    padding-left: 77px;
}
.auxiliary{
    font-size: 12px;
    color: #333;
    letter-spacing: .2px;
    text-align: left;
    line-height: 17px;
    padding-bottom: 20px;
    padding-left: 77px;
}
.detail-auxiliary{
    font-size: 18px;
    font-weight: 700;
    color: #2f2f2f;
    letter-spacing: .2px;
    padding-bottom: 26px;
    text-align: center;
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
.detail-item .illustration{
    padding-bottom: 26px;
    width: 100%;
    background-size: 100% 100%;
}
</style>