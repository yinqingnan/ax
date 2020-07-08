<template>
  <div style="overflow:hidden">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide games" v-for="item in imglist" :key="item.id" style="min-height:156px" :style="{backgroundImage: 'url(' + item.src + ')', backgroundSize:'100% 100%'}">

      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in navimgList" :key="index" :style="{backgroundImage: 'url(' + item.src + ')', backgroundSize:'100% 100%'}" v-show="index < 3"  @click="mainnav(index)"></li>
      </ul>
    </div>
    <div class="news">
      <h1>新闻中心</h1>
      <p>NEWS</p>
      <ul>
        <li v-for="(item,index) in newstext" :key="index" @click="newsswitch(index)" >
          <h1 :class="{active: index === num}">{{item.text}}</h1>
        </li>
        
      </ul>
      <div>
        <h2 @click="more">查看更多</h2>

      </div>
    </div>
    <ul class="footer">
      <li class="footer_nav" @click="listbtn('集团文化')">
        <div>
            <p>
              <span class="iconfont icon-wenhua"></span>
            </p>
        集团文化
        </div>
       
        <span class="iconfont icon-xiangyou"></span>
      </li>
      <li class="footer_nav" @click="listbtn('全球发布')">
        <div>
            <span class="iconfont icon-ditudingwei" style="font-size: 22px;margin-right: 1px;margin-left: 5px;"></span>
            全球发布
        </div>
      
        <span class="iconfont icon-xiangyou"></span>
      </li>
      <li class="news-center_title">

      </li>
      <li style="margin-top: 6px; padding-top: 15px;" class="copyright">
        <ul class="copyli" >
            <li data-v-ff85e4e0="">Copyright© 2016-2017</li> 
            <li data-v-ff85e4e0="">成都艾鑫忠鸿生物科技有限公司&nbsp;&nbsp;版权所有</li> 
            <li data-v-ff85e4e0="">蜀ICP备15025853号</li>
          </ul>
      </li>

    </ul>
  </div>
</template>
<script>
  var vm = this
export default {
  created(){
    vm = this
  },
  data() {
    return {
      imglist: [
        { id: 1, src: require("@/assets/img/banner01.75144d6.png") },
        { id: 2, src: require("@/assets/img/banner02.11c435c.png") },
        { id: 3, src: require("@/assets/img/banner03.ebe4ca0.png") },
        { id: 4, src: require("@/assets/img/banner3.8b3c2ba.jpg") }
      ],
    swiperOption: {
        on:{
          click:function(){
            vm.btn(this.realIndex)
          }
        },
        autoplay: {
          //可选选项，自动滑动
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 3000 //自自动循环时间
        },
        speed: 2000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        loop: true, //循环切换
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        scrollbar: ".swiper-scrollbar",
        mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
        observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

        pagination: {
          el: ".swiper-pagination",
          // type : 'progressbar', //分页器形状
          clickable: true //点击分页器的指示点分页器会控制Swiper切换
        },
      },
      navimgList: [
        { id: 1, src: require("@/assets/img/jk.png"),path:'jkgl' },
        { id: 2, src: require("@/assets/img/gp.png"),path:'jdgl' },
        { id: 3, src: require("@/assets/img/gj.png"),path:'gjly' },
        // { id: 4, src: require("@/assets/img/dz.png"),path:'dzsw' },
        // { id: 5, src: require("@/assets/img/tz.png"),path:'tzgl' },
        // { id: 6, src: require("@/assets/img/fl.png"),path:'flgw' }

      ],
      newstext:[
        {text:'集团新闻'},
        {text:'媒体报道'},
        {text:'热点专题'}
      ],
      num:0
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    btn (id){
      console.log(id)
    },
    newsswitch (index) {
      this.num = index
    },
    more () {
      switch (this.num) {
        case 0:
            console.log('集团新闻')
          break;
        case 1:
            console.log('媒体报道')
          break;
          case 2:
            console.log('热点专题')
          break;
        default:
          break;
      }
    },
    listbtn (name) {
      switch (name) {
        case "集团文化":
          console.log('集团文化')
          break;
        case "全球发布":
          console.log('全球发布')
          break;
        default:
          break;
      }
    },
    mainnav (i) {
      console.log(i)
    }
  },
};
</script>
 
<style lang="stylus" scoped>
.swiper-pagination-bullet-active {
  background-color: #fcfdf7
}
.imgbox{
  display inline-block
  background-size 100% 100% 
}
.nav{
  height 100px
  ul{
    height 100%
    display flex
    flex-wrap wrap
    li{
      // height 100%
      width 33.3%
    }
  }
}
.footer{
  .footer_nav{
    width calc(100% - 46px)
    height 64px
    line-height 64px
    background #1b5662
    margin-bottom: 6px
    padding 0 23px
    display: flex;
    justify-content: space-between;
    div{
      width 50%
      color: #fff;
      font-size: 20px;
      letter-spacing: .7px;
    }
    p{
      display inline-block
      width 28px
      height 28px
      border 1px solid #fff
      border-radius 50%
      position relative
      top 9px

      span{
        position absolute
        top: -18px;
        left: 6px;
        color #fff
      }
    }
    span{
        font-size 18px
        color #fff
        font-size 18px

      }
  }
  .news-center_title{
    height 118px
    width 100%
    background: url('../../../assets/img/news-bg.5d50278.png');
    background-repeat no-repeat
    background-size 100% 100%
  }
}
.copyright{
    width: 100%;
    height: 64px;
    line-height: 64px;
    background: #1b5662;
}
.copyli{
    text-align: center;
    color: #fff;
    letter-spacing: .2px;
    font-size: 12px;
    >li{
      line-height 17px
    }
}
.news{
  // height 236px
  margin-top 32px
  >h1{
    color #333
    font-size 20px
    text-align center
    line-height 28px
    letter-spacing .7px
    
  }
  >div{
    text-align center
    padding 28px 0 48px
    
    >h2{
      display inline-block
      padding 7px 26px
      border 1px solid #979797
      color #333
      font-size 12px
      line-height 17px
    }
  
  }
  >p{
    color #2f2f2f
    font-size 12px
    text-align center
    letter-spacing .2px
  }
  >ul{
    display flex
    width 100%
    border-bottom 1px solid #e8e8e8
    >li{
      width 33.3%
      margin 0 auto 
      >h1{
        font-size 16px
        text-align center
        padding: 16px 0 11px;
        width 66px
        margin: 0 30px;
      }
    }
  }
}
.active{
  border-bottom: 2px solid #1b5662;
}
</style>