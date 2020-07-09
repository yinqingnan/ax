<template>
  <!-- 艾鑫集团 -->
  <div>
    <div class="header">
      <ul ref="headerul">
        <li class="header_li_one" @click="openlist">
          <h2>{{text}}</h2>
          <p>
            <span
              class="iconfont icon-xiangxia"
              ref="btn"
              style="display:inline-block;transition: all 0.5s"
            ></span>
          </p>
        </li>
        <ul v-show="show">
          <li
            v-for="item in option1"
            :key="item.value"
            class="list"
            @click="listswith(item.value)"
            :class="{active: item.value === num}"
          >{{item.text}}</li>
        </ul>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      num: 0,
      value1: 0,
      text: "集团介绍",
      option1: [
        { text: "集团介绍", value: 0 },
        { text: "董事长专区", value: 1 },
        { text: "发展历程", value: 2 },
        { text: "企业荣誉", value: 3 },
        { text: "企业文化", value: 4 },
        { text: "企业党建", value: 5 }
      ]
    };
  },
  methods: {
    listswith(i) {
      this.num = i;
      this.show = false;
      this.$refs.btn.style.transform = "rotate(0deg)";
      switch (i) {
        case 0:
          this.text = "集团介绍";
          this.$router.push("/index/group/introduction");
          break;
        case 1:
          this.text = "董事长专区";
          this.$router.push("/index/group/chairman");

          break;
        case 2:
          this.text = "发展历程";
          this.$router.push("/index/group/course");

          break;
        case 3:
          this.text = "企业荣誉";
          this.$router.push("/index/group/enterprisehonor");

          break;
        case 4:
          this.text = "企业文化";
          this.$router.push("/index/group/companyculture");

          break;
        case 5:
          this.text = "企业党建";
          this.$router.push("/index/group/building");

          break;
        default:
          break;
      }
    },
    openlist() {
      this.show = !this.show;
      if (this.show) {
        this.$refs.btn.style.transform = "rotate(180deg)";
      } else {
        this.$refs.btn.style.transform = "rotate(0deg)";
      }
    }
  },
  computed: {
    isFollow() {
      return this.$store.state.language;
    }
  },
  watch: {
    isFollow(newVal) {
      console.log(newVal);
      console.log(this.text)
      if (this.text === "Group Introduction") {
        this.text = "集团介绍";
      } else if (this.text === "Chairman zone") {
        this.text = "董事长专区";
      } else if (this.text === "Developing process") {
        this.text = "发展历程";
      } else if (this.text === "Enterprise honor") {
        this.text = "企业荣誉";
      } else if (this.text === "Corporate culture") {
        this.text = "企业文化";
      } else if (this.text === "Enterprise Party Building") {
        this.text = "企业党建";
      }else if(this.text === "集团介绍") {
        this.text = "Group Introduction ";
      }else if (this.text === "董事长专区") {
        this.text = "Chairman zone";
      } else if (this.text === "发展历程") {
        this.text = "Developing process";
      } else if (this.text === "企业荣誉") {
        this.text = "Enterprise honor";
      } else if (this.text === "企业文化") {
        this.text = "Corporate culture";
      } else if (this.text === "企业党建") {
        this.text = "Enterprise Party Building";
      }
      if (newVal) {
        this.option1 = [
          { text: "集团介绍", value: 0 },
          { text: "董事长专区", value: 1 },
          { text: "发展历程", value: 2 },
          { text: "企业荣誉", value: 3 },
          { text: "企业文化", value: 4 },
          { text: "企业党建", value: 5 }
        ];
      } else {
        this.option1 = [
          { text: "Group Introduction", value: 0 },
          { text: "Chairman zone", value: 1 },
          { text: "Developing process", value: 2 },
          { text: "Enterprise honor", value: 3 },
          { text: "Corporate culture", value: 4 },
          { text: "Enterprise Party Building", value: 5 }
        ];
      }
    },
    $route: {
      handler: function(val) {
        console.log(this.$store.state.language);
        if (this.$store.state.language) {
          switch (val.name) {
            case "Introduction":
              this.text = "集团介绍";
              break;
            case "Chairman":
              this.text = "董事长专区";
              break;
            case "course":
              this.text = "发展历程";
              break;
            case "Enterprisehonor":
              this.text = "企业荣誉";
              break;
            case "companyculture":
              this.text = "企业文化";
              break;
            case "building":
              this.text = "企业党建";
              break;
            default:
              break;
          }
        } else {
          switch (val.name) {
            case "Introduction":
              this.text = "Group Introduction";
              break;
            case "Chairman":
              this.text = "Chairman zone";
              break;
            case "course":
              this.text = "Developing process";
              break;
            case "Enterprisehonor":
              this.text = "Enterprise honor";
              break;
            case "companyculture":
              this.text = "Corporate culture";
              break;
            case "building":
              this.text = "Enterprise Party Building";
              break;
            default:
              break;
          }
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    console.log(this.$route.name);

    switch (this.$route.name) {
      case "Introduction":
        this.text = "集团介绍";
        break;
      case "Chairman":
        this.text = "董事长专区";
        break;
      case "course":
        this.text = "发展历程";
        break;
      case "Enterprisehonor":
        this.text = "企业荣誉";
        break;
      case "companyculture":
        this.text = "企业文化";
        break;
      case "building":
        this.text = "企业党建";
        break;
      default:
        break;
    }
  }
};
</script>
<style lang="stylus" scoped>
.header>ul {
  height: 64px;
  position: relative;
}

.header_li_one {
  position: relative;
  background: #1b5662 !important;
  line-height: 65px;

  >h2 {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 65px;
    color: #ffffff;
  }

  >p {
    position: absolute;
    right: 19px;
    top: 0;

    >span {
      font-size: 22px;
      color: #fff;
    }
  }
}

.list {
  width: 100%;
  // position absolute
  height: 64px;
  line-height: 64px;
  background: #2a6976;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #699ba5;
}

.active {
  background: #1b5662 !important;
}
</style>