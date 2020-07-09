<template>
    <div>
        <!-- 健康管理 -->
        <div class="detail-wrap" style="margin-bottom: 48px;">
            <p class="title">为您的健康保驾护航</p>
            <p class="auxiliary">The escort for your health</p>
            <ul class="detail-list">
                <li
                        v-if="this.$store.state.language"
                        class="detail-item"
                >
                    成都艾鑫忠鸿生物科技有限公司成立于2013年03月.是一家由在生物领域具有资深科研人才组建的创新型科技生物企业。作为一家国内优秀的纯植物提取、研发的企业和优质供应商，公司一直致力于纯天然植物保健品、营养品的供应销售。
                </li>
                <li
                        v-else
                        class="detail-item"
                >
                    Chengdu aixinzhonghong Biotechnology Co., Ltd. was established in March 2013. It is an innovative scientific and technological biological enterprise established by senior scientific research personnel in the biological field. As a domestic excellent pure plant extraction, research and development enterprises and high-quality suppliers, the company has been committed to the supply and sales of pure natural plant health products and nutrition products.
                </li>
                <li
                        v-if="this.$store.state.language"
                        class="detail-item"
                >
                    艾鑫堂大药房:成都艾鑫堂大药房有限公司成立于2016年3月4日，是一家以医药零售为主体的民营有限责任公司。经营范围有药品零售、保健品、化妆品、二类医疗器械等。药房支持社保卡、银联卡、信用卡、鑫币卡等方式支付，艾鑫堂大药房管理规范，机构健全，拥有一批高素质的管理、营销、技术人才。公司始终坚持打造“平价药房、便民药房、放心药房”之经营理念，承诺守信、健康惠民，不断完善设施建设，日益强化专业技术力量，严格实施相关规范管理。以优惠的价格，舒适的环境、上乘的服务，成为老百姓身边的购药首选场所。
                </li>
                <li
                        v-else
                        class="detail-item"
                >
                    Aixintangpharmacy: Chengdu aixintang pharmacy Co., Ltd., established on March 4, 2016, is a private limited liability company with pharmaceutical retail as the main body. The business scope includes drug retail, health care products, cosmetics, class II medical equipment, etc. The pharmacy supports payment by social security card, UnionPay card, credit card and xincoin card. Aixintang pharmacy has standardized management, sound organization and a number of high-quality management, marketing and technical personnel. The company has always adhered to the business philosophy of "affordable pharmacy, convenient pharmacy and safe pharmacy", committed to keeping faith and benefiting the people in a healthy way, constantly improving the construction of facilities, increasingly strengthening the professional and technical strength, and strictly implementing the relevant standardized management. With preferential price, comfortable environment and excellent service, it has become the preferred place for people to buy medicine.
                </li>
                <li
                         v-if="this.$store.state.language"
                        class="detail-item"
                >24小时专业服务:针对您的健康管理，我们不断优化，全天候为您服务。艾鑫堂大药房也为您提供24小时配送药服务,让您不再整夜不好眠。
                </li>
                <li
                        v-else
                        class="detail-item"
                >24-hour professional service: for your health management, we constantly optimize and serve you 24 hours a day. Aixintang pharmacy also provides you with 24-hour drug delivery service, so that you don't have to sleep all night.
                </li>
                <li class="detail-item" v-if="this.$store.state.language">
                    <p>药房地址：</p>
                    <ul class="address-list">
                        <li>
                            <a href="tel:028-6206904">
                                <p>锦江店-成都市锦江区庆云西街9号</p>
                                <p>电话: 028-6206904</p>
                            </a>
                        </li>
                        <li>
                            <a href="tel:028-2726121">
                                <p>简阳店-简阳市简城公园后街17号(海上花园)3幢1层</p>
                                <p>电话: 028-2726121</p>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0816-2787586">
                                <p>绵阳店-绵阳市富临大都会1栋1-10</p>
                                <p>电话: 0816-2787586</p>
                            </a>
                        </li>
                        <li>
                            <a href="tel:028-8255149">
                                <p>新津店-新津县正东大街69号附1-4号(新津一小对面)</p>
                                <p>电话: 028-8255149</p>
                            </a>
                        </li>
                        <li>
                            <a href="028-6401511">
                                <p>温江店-温江区柳城大道东段99号</p>
                                <p>电话:028-6401511</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="detail-item" v-else>
                    <p> Pharmacy address：</p>
                    <ul class="address-list">
                        <li>
                            <a href="tel:028-6206904">
                                <p>Jinjiangdian No.9 Qingyun West Street, Jinjiang District, Chengdu</p>
                                <p>Telephone: 028-6206904</p>
                            </a>
                        </li>
                        <li>
                            <a href="tel:028-2726121">
                                <p>Jianyangdian - 1 / F, building 3, No. 17, back street, Jiancheng Park, Jianyang City</p>
                                <p>Telephone: 028-2726121</p>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0816-2787586">
                                <p>1-10, building 1, Fulin metropolis, Mianyang City</p>
                                <p>Telephone: 0816-2787586</p>
                            </a>
                        </li>
                        <li>
                            <a href="tel:028-8255149">
                                <p>Xinjindian no.69-1-4, Zhengdong street, Xinjin County</p>
                                <p>Telephone: 028-8255149</p>
                            </a>
                        </li>
                        <li>
                            <a href="028-6401511">
                                <p>No. 99, east section of Liucheng Avenue, Wenjiang District</p>
                                <p>Telephone:028-6401511</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="health-img" style="height:130px">
                    <img src="../../assets/img/health.e142169.png" alt style="width:100%"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .detail-wrap {
        padding: 0 15px;
    }

    .detail-wrap .title {
        color: #333;
        font-size: 20px;
        letter-spacing: .7px;
        line-height: 28px;
        text-align: center;
        padding-top: 32px;
    }

    .detail-wrap .auxiliary {
        font-size: 12px;
        color: #333;
        letter-spacing: .2px;
        text-align: center;
        line-height: 17px;
        padding-bottom: 20px;
    }

    .detail-wrap .detail-list .detail-item {
        font-size: 14px;
        color: #2f2f2f;
        line-height: 23px;
        letter-spacing: .2px;
        text-indent: 28px;
        text-align: justify;
        margin-bottom: 16px;
    }

    .detail-wrap .detail-list .detail-item .address-list {
        padding-top: 16px;
    }

    .detail-wrap .detail-list .detail-item .address-list li {
        text-align: left;
        text-indent: 0;
        padding: 0 55px 6px;
    }

    .detail-wrap .detail-list .detail-item .address-list a {
        color: #1b5662;
        font-size: 14px;
        letter-spacing: .2px;
        line-height: 23px;
    }
</style>