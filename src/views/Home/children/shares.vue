<template>
  <div>
    <!--    股票-->

    <div class="box">
      <!-- <iframe src="/html/10-Q.html" width="100%" height="300" frameborder="0" scrolling="auto"></iframe> -->
      <h1>{{msg.symbol}}</h1>
      <div>
        <h2>AiXin Life International, Inc.</h2>
        <div style="display: flex;justify-content: space-between;width: 100%">
          <div>
            <h2 style="font-size: 18px;line-height: 30px; text-indent: 46px;line-height: 30px;white-space: nowrap;" v-if="this.$store.state.language">当前指数：</h2>
            <h2 style="font-size: 18px;line-height: 30px; text-indent: 46px;line-height: 30px;white-space: nowrap;" v-else>Current index:</h2>
            
          </div>
          <div class="parameter">
            <div>
              <h1 :style="{color: show?'#ed1c24':'#0f990f'}" class="zhishu">{{lastSale}}</h1>
              <p>
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  viewBox="0 0 40 40"
                  class="arrow"
                  style="vertical-align: middle;margin : 0px -4px 0px"
                >
                  <g class="up" style="color:#ed1c24" v-if="show">
                    <path
                      d="m28.6 11q-0.2 0.4-0.7 0.4h-5v27.9q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-27.9h-5q-0.5 0-0.6-0.4t0.1-0.8l7.8-8.6q0.2-0.2 0.5-0.2 0.3 0 0.5 0.2l8 8.6q0.3 0.4 0.1 0.8z"
                    />
                  </g>
                  <g class="down" style="color:#0f990f" v-else>
                    <path
                      d="m28.6 29q0.2 0.4-0.1 0.8l-7.9 8.6q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-7.9-8.6q-0.3-0.4-0.1-0.8 0.2-0.4 0.6-0.4h5v-27.9q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v27.9h5q0.5 0 0.7 0.4z"
                    />
                  </g>
                </svg>
              </p>
            </div>

            <div class="Increase" :style="{color: show?'#ed1c24':'#0f990f'}">
              <h3>{{percentChange}}</h3>
              <h3>{{datachange}}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="list">
        <div>
          <h2 v-if="this.$store.state.language">证监会披露文件</h2>
          <h2 v-else>CSRC disclosure documents</h2>
          <h2 @click="more" style="font-size:12px" v-if="this.$store.state.language">
            更多
            <span class="iconfont icon-xiangyou"></span>
          </h2>
          <h2 @click="more" style="font-size:12px" v-else>
            More
            <span class="iconfont icon-xiangyou"></span>
          </h2>
          
        </div>
        <ul>
          <li v-for="(item,index) in list" :key="index" @click="btn(item.filePath)">
            <h2>{{item.name}}</h2>
            <h2>{{item.data}}</h2>
          </li>
        </ul>
      </div>
      <div class="news" v-if="this.$store.state.language">
        <h2>新闻</h2>
        <ul>
          <li @click="tz">场外披露及新闻服务</li>
        </ul>
      </div>
       <div class="news" v-else>
        <h2>News</h2>
        <ul>
          <li @click="tz">Off site disclosure and news services</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: {},
      show: null,
      list: [
        {
          name: "From Type——10-Q",
          data: "06/26/2020",
          filePath: "/html/10-Q.html"
        },
        {
          name: "From Type——10-K",
          data: "06/26/2020",
          filePath: "/html/10-K.html"
        },
        {
          name: "From Type——10-Q",
          data: "06/26/2020",
          filePath: "/html/10-Q.html"
        }
      ]
    };
  },
  methods: {
    btn(path) {
      // window.open(path)
      console.log(path);
      window.location.href = path;
    },
    tz() {
      window.location.href =
        "https://backend.otcmarkets.com/otcapi/company/dns/news/document/37566/content";
    },
    more() {
      window.location.href = "https://www.otcmarkets.com/stock/AIXN/disclosure";
    }
  },
  computed: {
    lastSale() {
      if (this.msg.lastSale >= 1) {
        return this.msg.lastSale.toFixed(2);
      } else {
        return this.msg.lastSale;
      }
    },
    percentChange() {
      if (this.msg.percentChange >= null) {
        return this.msg.percentChange.toFixed(2) + "%";
      } else {
        return this.msg.percentChange;
      }
    },
    datachange() {
      if (this.msg.change != null) {
        return this.msg.change.toFixed(2) + "%";
      } else {
        return this.msg.change;
      }
    }
  },
  mounted() {
    this.$axios
      .get(
        "https://backend.otcmarkets.com/otcapi/stock/trade/inside/AIXN?symbol=AIXN"
      )
      .then(res => {
        if (res.data.change >= 0) {
          this.show = true;
        } else {
          this.show = false;
        }
        this.msg = res.data;
        // console.dir(this.msg);
      });
  }
};
</script>
<style lang="stylus" scoped>
.box {
  padding: 20px;

  >h1 {
    font-size: 18px;
    line-height: 20px;
    color: #333;
    text-align: center;
  }

  >div {
    margin-top: 30px;

    /* display flex */
    /* justify-content space-between */
    >div {
      width: 50%;
      line-height: 30px;

      >div {
        position: relative;

        >p {
          position: absolute;
          top: -20px;
          right: 29px;
        }

        >h1 {
          font-size: 34px;
        }
      }
    }

    >h2 {
      font-size: 16px;
      letter-spacing: 0.3px;
      line-height: 20px;
      width: 70%;
      margin-bottom: 20px;
    }
  }
}

.parameter {
  position: relative;
}

.Increase {
  position: absolute !important;
  top: -22px;
  right: -13px;
  line-height: 20px;

  >h3 {
    font-size: 14px;
  }
}

.list {
  margin-top: 30px !important;
  display: block !important;

  >div {
    width: 100% !important;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 18px;
      color: #333;
    }
  }

  >ul {
    >li {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;

      >h2 {
        font-size: 14px;
        color: #999;
      }
    }
  }
}

.news {
  margin-top: 30px !important;
  display: block !important;

  >h2 {
    width: 100% !important;
    text-align: center;
    font-size: 18px;
    color: #333;
  }

  >ul {
    >li {
      font-size: 14px;
      color: #999;
      margin-top: 12px;
    }
  }
}

.zhishu {
  font-size: 33px;
}

.parameter {
  width: 50%;
}

.parameter>div {
  position: relative;

  >p {
    position: absolute;
    top: -17px;
    right: 37px;
  }
}
</style>