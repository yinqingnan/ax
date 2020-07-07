<template>
    <div class="home">
        <div class="header">
            <div>
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="header_right">
                <h1>{{path}}</h1>
                <p>/</p>
                <span class="iconfont icon-zhedie"></span>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                path:"啊啊啊啊"
            }
        },
        components: {
            // HelloWorld
        }
    }
</script>

<style lang="stylus" scoped>
    .home{
        padding-top 83px
    }
    .header {
        width calc(100% - 39px)
        position fixed
        top 0
        height 30px
        padding 25px 26px
        display flex
        justify-content space-between
        background: #fff;
        z-index: 10;
    }

    .header > div > img {
        height: 20px
    }
    .header_right{
        display flex
        h1{
            font-size 20px
            font-weight 500
            color #333
            line-height 25px;
        }
        p{
            margin 0 4px
            font-size  16px
            line-height 26px;
        }
        span{
            font-size 24px
            line-height 1
            color #7e8c8d
        }
    }
</style>