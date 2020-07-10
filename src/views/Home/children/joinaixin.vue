<template>
  <div>
    <!-- 加入我们 -->
    <div class="detail-wrap" style="margin-bottom: 48px;">
      <p class="title" v-if="this.$store.state.language">我们期待你的加入</p>
      <p class="title" v-else>We look forward to your participation</p>
      <div class="auxiliary" v-if="this.$store.state.language">艾鑫生活国际成立于2009年，团队拥有丰富的管理经验和充足的晋升空间，加入艾鑫，我们能给你的不仅是专业提升，还有职业规划！</div>
      <div class="auxiliary" v-else>Aixin Life International was founded in 2009, the team has rich management experience and sufficient promotion space, join Ai Xin, we can give you not only professional promotion, but also career planning!</div>
      <div class="occupation">
        <p class="occupation-title" v-if="this.$store.state.language">职业分类</p>
        <p class="occupation-title" v-else>Occupational classification</p>
        <ul class="tag-list" v-if="this.$store.state.language">
          <li v-for="(item,index) in list" :key="index" class="tag" @click="btn(index)" >
              <span :class="{active: index === num}">{{item.tag}}</span>
          </li>
        </ul>
         <ul class="tag-list" v-else>
          <li v-for="(item,index) in list1" :key="index" class="tag" @click="btn(index)" >
              <span :class="{active: index === num}">{{item.tag}}</span>
          </li>
        </ul>
      </div>
      <div class="empiric-wrap" v-if="num==0">
        <div class="empiric">
          <p class="empiric-title">
            <span class="empiric-title-l" v-if="this.$store.state.language">IOS开发工程师</span>
            <span class="empiric-title-l" v-else>IOS Development Engineer</span>
            <span class="empiric-title-r">4K- 8K</span>
          </p>
          <p class="empiric-date" v-if="this.$store.state.language">经验3-5年 大专</p>
          <p class="empiric-date" v-else>Experience 3-5 years junior college</p>
          <p class="empiric-claim" v-if="this.$store.state.language">任职要求:</p>
          <p class="empiric-claim" v-else>Job requirements:</p>
          <ul class="empiric-detail"  v-if="this.$store.state.language">
            <li>1.具备2年以上移动开发经验，有丰富的实施移动开发项目的经验</li>
            <li>2.熟练掌握iOS移动开发，熟悉iOS平台设计理念，至少一款完整的iOS网络应用开发和发布经验</li>
            <li>3.熟悉移动行业趋势和技术趋势，能够自我驱动学习新技术;</li>
            <li>4.有较好的商业意识，能根据业务需求制定相应的移动解决方案，并能提炼、总结可复用的解决方案。</li>
            <li>5.有电商平台开发经验优先。</li>
          </ul>
          <ul class="empiric-detail" v-else>
            <li>1. Have more than 2 years mobile development experience, and have rich experience in implementing mobile development projects</li>
            <li>2. Proficient in IOS mobile development, familiar with IOS platform design concept, at least one complete IOS network application development and release experience</li>
            <li>3. Be familiar with the trend of mobile industry and technology, and be able to self drive learning new technology;</li>
            <li>4. Have good business sense, be able to make corresponding mobile solutions according to business requirements, and be able to refine and summarize reusable solutions.</li>
            <li>5. Experience in e-commerce platform development is preferred.</li>
          </ul>
        </div>
      </div>
      <div class="empiric-wrap" v-else-if="num==1" >
        <div class="empiric" v-if="this.$store.state.language">
          <p class="empiric-title">
            <span class="empiric-title-l">产品经理</span>
            <span class="empiric-title-r">4K- 8K</span>
          </p>
          <p class="empiric-date">经验3-5年 大专</p>
          <p class="empiric-claim">任职要求:</p>
          <ul class="empiric-detail"></ul>
        </div>
         <div class="empiric" v-else>
          <p class="empiric-title">
            <span class="empiric-title-l">product manager</span>
            <span class="empiric-title-r">4K- 8K</span>
          </p>
          <p class="empiric-date">Experience 3-5 years junior college</p>
          <p class="empiric-claim">Job requirements:</p>
          <ul class="empiric-detail"></ul>
        </div>
      </div>
      <div class="empiric-wrap" v-else-if="num==2" >
        <div class="empiric" v-if="this.$store.state.language">
          <p class="empiric-title">
            <span class="empiric-title-l">UI设计</span>
            <span class="empiric-title-r">4K- 8K</span>
          </p>
          <p class="empiric-date">经验3-5年 大专</p>
          <p class="empiric-claim">任职要求:</p>
          <ul class="empiric-detail"></ul>
        </div>
          <div class="empiric" v-else>
          <p class="empiric-title">
            <span class="empiric-title-l">UI design</span>
            <span class="empiric-title-r">4K- 8K</span>
          </p>
          <p class="empiric-date">Experience 3-5 years junior college</p>
          <p class="empiric-claim">Job requirements:</p>
          <ul class="empiric-detail"></ul>
        </div>
      </div>
      <div class="empiric-wrap" v-else-if="num==3" >
        <div class="empiric" v-if="this.$store.state.language">
          <p class="empiric-title">
            <span class="empiric-title-l">运营</span>
            <span class="empiric-title-r">4K- 8K</span>
          </p>
          <p class="empiric-date">经验3-5年 大专</p>
          <p class="empiric-claim">任职要求:</p>
          <ul class="empiric-detail"></ul>
        </div>
        <div class="empiric" v-else>
          <p class="empiric-title">
            <span class="empiric-title-l">Operate</span>
            <span class="empiric-title-r">4K- 8K</span>
          </p>
          <p class="empiric-date">Experience 3-5 years junior college</p>
          <p class="empiric-claim">Job requirements:</p>
          <ul class="empiric-detail"></ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            num:0,
            list:[
                {tag:'技术'},
                {tag:'产品'},
                {tag:'设计'},
                {tag:'运营'},
            ],
            list1:[
                {tag:'Technology'},
                {tag:'Product'},
                {tag:'Design'},
                {tag:'Operate'},
            ]
        }
    },
    methods: {
        btn(index){
            console.log(index)
            this.num = index
        }
    },
    computed: {
      isFollow() {
        return this.$store.state.language;
      }
    },
    watch:{
       isFollow(newVal) {
         if(newVal){
           this.list=[
                {tag:'技术'},
                {tag:'产品'},
                {tag:'设计'},
                {tag:'运营'},
            ]
         }else{
           this.list=[
                {tag:'Technology'},
                {tag:'Product'},
                {tag:'Design'},
                {tag:'Operate'},
            ]
         }
       }
    }
}
</script>
<style lang="stylus" scoped>
.detail-wrap .title{
    color: #333;
    font-size: 20px;
    letter-spacing: .7px;
    line-height: 28px;
    text-align: center;
    padding: 32px 0;
}
.detail-wrap .auxiliary{
    color: #2f2f2f;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: .5px;
    border-bottom: 1px solid #e8e8e8;
    padding: 0 15px 32px;
}
.detail-wrap {
    margin-bottom: 48px;
    padding: 0 15px;
}
.detail-wrap .occupation .occupation-title{
    padding: 23px 0 18px;
}
.occupation-title{
    font-size 17px
}
.detail-wrap .occupation {
    padding: 0 26px;
}
.tag-list{
    display flex
    flex-wrap wrap
}
.tag{
    width: 33.33%;
    height: 32px;
    float: left;
    margin-bottom: 21px;
}
.detail-wrap .tag span {
    width: 99px;
    height: 100%;
    display inline-block
    background: #f4f4f4;
    text-align: center;
    line-height: 32px;
    color: #2f2f2f;
    letter-spacing: .5px;
    font-size 17px
}
.detail-wrap .empiric-wrap .empiric{
    padding: 24px 11px;
    background: #f4f4f4;
}
.detail-wrap .empiric-wrap{
    padding: 0 15px;
}
.detail-wrap .empiric-wrap .empiric .empiric-title{
    font-size: 16px;
    letter-spacing: .5px;
    line-height: 22px;
    margin-bottom: 24px;
}
.detail-wrap .empiric-wrap .empiric .empiric-title .empiric-title-l{
    float: left;
    width: 50%;
    text-align: left;
}
.detail-wrap .empiric-wrap .empiric .empiric-title .empiric-title-r{
    width: 50%;
    float: right;
    text-align: right;
}
.detail-wrap .empiric-wrap .empiric .empiric-date{
    color: #333;
    letter-spacing: .2px;
    line-height: 20px;
    font-size: 14px;
    text-align: left;
    margin-bottom: 32px;
}
.detail-wrap .empiric-wrap .empiric .empiric-claim {
    color: #333;
    font-size:14px ;
    line-height: 22px;
    letter-spacing: .5px;
    text-align: left;
}
.detail-wrap .empiric-wrap .empiric .empiric-detail{
    color: #333;
    font-size: 14px;
    letter-spacing: .2px;
    line-height: 23px;
    text-align: left;
}
.active{
    background: #2f2f2f !important ;
    color: #fff !important ;
}
</style>