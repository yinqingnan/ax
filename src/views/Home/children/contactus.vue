<template>
  <div>
    <!-- 联系我们 -->
    <div style="">
      <img src="../../../assets/img/map.066a0ff.png" alt class="map" />
      <p class="concat-num" v-if="this.$store.state.language" >联系信息</p>
      <p class="concat-num" v-else>Contact information</p>
      <p class="code">
        <img src="../../../assets/img/code.2e92232.png" alt />
      </p>
      <ul class="concat-list">
        <li v-if="this.$store.state.language">艾鑫集团官方微信</li>
        <li v-else>Official wechat of Aixin group</li>
        <li  v-if="this.$store.state.language">地址：成都市锦江区红星国际2号楼</li>
        <li v-else>Address: Building 2, Hongxing international, Jinjiang District, Chengdu</li>
        <li v-if="this.$store.state.language">
          <a href="tel:400626060">电话：400626060</a>
        </li>
        <li v-else>
          <a href="tel:400626060">Tel：400626060</a>
        </li>
        <li v-if="this.$store.state.language">邮编：610011</li>
        <li v-else>Postcode：610011</li>
        <li  v-if="this.$store.state.language">
          <a href="mailto:netinfo@i-yc.com">邮箱：netinfo@i-yc.com</a>
        </li>
         <li v-else>
          <a href="mailto:netinfo@i-yc.com">Mailbox：netinfo@i-yc.com</a>
        </li>
        <li  v-if="this.$store.state.language">
          <a href="http://www.aixinjituan.com/">主页：www.aixinjituan.com</a>
        </li>
        <li v-else>
          <a href="http://www.aixinjituan.com/">Homepage：www.aixinjituan.com</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.map{
    width: 100%;
    height: 220px;
    background-size: 100% 100%;
    margin-bottom: 32px;
}
.concat-num{
    line-height: 28px;
    letter-spacing: .7px;
    color: #333;
    font-size: 20px;
    text-align: center;
}
.code{
    height: 108px;
    text-align: center;
    padding: 16px 0;
}
.code img{
    width: 108px;
    background-size: 100% 100%;
}
.concat-list{
    text-align: center;
    font-size: 16px;
    color: #2f2f2f;
    line-height: 22px;
    letter-spacing: .2px;
    margin-bottom: 42px;
}
.concat-list li{
    margin-bottom: 6px;
}
.concat-list a{
    color: #2f2f2f;
}
</style>