<template>
  <!-- 集团产业 -->
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
      text: "健康管理",
      option1: [
        { text: "健康管理", value: 0 },
        { text: "酒店管理", value: 1 },
        { text: "国际旅游", value: 2 },
        { text: "电子商务", value: 3 },
        { text: "投资管理", value: 4 },
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
          this.text = "健康管理";
          this.$router.push("/index/industry/healthy");
          break;
        case 1:
          this.text = "酒店管理";
          this.$router.push("/index/industry/hotel");

          break;
        case 2:
          this.text = "国际旅游";
          this.$router.push("/index/industry/tourism");

          break;
        case 3:
          this.text = "电子商务";
          this.$router.push("/index/industry/ecommerce");

          break;
        case 4:
          this.text = "投资管理";
          this.$router.push("/index/industry/investment");

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
      // console.log(newVal);
      if (newVal) {
        this.option1 = [
          { text: "健康管理", value: 0 },
          { text: "酒店管理", value: 1 },
          { text: "国际旅游", value: 2 },
          { text: "电子商务", value: 3 },
          { text: "投资管理", value: 4 },
        ];
      } else {
        this.option1 = [
          { text: "Health management", value: 0 },
          { text: "Hotel management", value: 1 },
          { text: "International tourism", value: 2 },
          { text: "Ecommerce", value: 3 },
          { text: "Investment management", value: 4 },
        ];
      }
      if (this.text === "Health management") {
        this.text = "健康管理";
      } else if (this.text === "Hotel management") {
        this.text = "酒店管理";
      } else if (this.text === "International tourism") {
        this.text = "国际旅游";
      } else if (this.text === "Ecommerce") {
        this.text = "电子商务";
      } else if (this.text === "Investment management") {
        this.text = "投资管理";
      } else if(this.text === "健康管理") {
        this.text = "Health management";
      }else if (this.text === "酒店管理") {
        this.text = "Hotel management";
      } else if (this.text === "国际旅游") {
        this.text = "International tourism";
      } else if (this.text === "电子商务") {
        this.text = "Ecommerce";
      } else if (this.text === "投资管理") {
        this.text = "Investment management";
      }
    },
    $route: {
      handler: function(val) {
        console.log(this.$store.state.language);
        if (this.$store.state.language) {
          switch (val.name) {
            case "healthy":
              this.text = "健康管理";
              break;
            case "hotel":
              this.text = "酒店管理";
              break;
            case "tourism":
              this.text = "国际旅游";
              break;
            case "ecommerce":
              this.text = "电子商务";
              break;
            case "investment":
              this.text = "投资管理";
              break;
            default:
              break;
          }
        } else {
          switch (val.name) {
            case "healthy":
              this.text = "Health management";
              break;
            case "hotel":
              this.text = "Hotel management";
              break;
            case "tourism":
              this.text = "International tourism";
              break;
            case "ecommerce":
              this.text = "Ecommerce";
              break;
            case "investment":
              this.text = "Investment management";
              break;
            default:
              break;
          }
        }
      },
      // 深度观察监听
      deep: true
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