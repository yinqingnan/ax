<template>
  <div class="home">
    <div class="header">
      <div @click="home">
        <img src="@/assets/img/logo.png" alt />
      </div>
      <div class="header_right">
        <h1>{{pathname}}</h1>
        <p>/</p>
        <div class="zhedie" @click="showPopup">
          <span class="iconfont icon-zhedie zhedie"></span>
        </div>
      </div>
    </div>
    <div class="modules" ref="modules">
      <span class="iconfont icon-cha" @click="close"></span>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="Jump(item.name)">{{item.name}}</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
      // show:true,
      pathname: "",
      list: [
        { name: "艾鑫集团" },
        { name: "新闻中心" },
        { name: "集团产业" },
        { name: "加入艾鑫" },
        { name: "联系我们" },
        { name: "Switch English" }
      ]
    };
  },

  components: {
    // HelloWorld
  },
  beforeCreate() {
    const that = this;
    document.addEventListener("click", e => {
      if (e.target.className != "modules") {
        that.$refs.modules.style.right = "-252px";
      }
      if (e.target.className == "iconfont icon-zhedie zhedie") {
        that.$refs.modules.style.right = 0;
      }
    });
  },

  methods: {
    home() {
      this.$router.push("/index/appendix");
      this.pathname = "";
    },
    showPopup() {
      this.$refs.modules.style.right = 0;
    },
    close() {
      this.$refs.modules.style.right = "-252px";
    },
    Jump(name) {
      console.log(name);
      switch (name) {
          case '艾鑫集团':
              this.pathname = name
              this.$router.push('/index/group')
              break;
      
          default:
              break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.home {
  padding-top: 83px;
  overflow hidden
}

.header {
  width: calc(100% - 39px);
  position: fixed;
  top: 0;
  height: 30px;
  padding: 25px 26px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  z-index: 10;
}

.header > div > img {
  height: 20px;
}

.header_right {
  display: flex;

  h1 {
    font-size: 20px;
    font-weight: 500;
    color: #333;
    line-height: 25px;
  }

  p {
    margin: 0 4px;
    font-size: 16px;
    line-height: 26px;
  }

  span {
    font-size: 24px;
    line-height: 1;
    color: #7e8c8d;
  }
}

.modules {
  >span {
    font-size: 30px;
    color: #fff;
    margin-left: 10px;
  }
  position: fixed;
  transition: all 2s;
  padding-top: 10px;
  background: pink;
  top: 0;
  height: 100%;
  width: 252px;
  z-index: 10;
  right: -252px;
  background: url('../../assets/img/background.20f9dd4.png') no-repeat;
  background-size: 100% 100%;
  >ul{
      margin-top 20px
      >li{
        font-size: 20px;
        line-height: 28px;
        color #fff
        text-indent 70px
        margin 16px 0
      }
  }
}
</style>