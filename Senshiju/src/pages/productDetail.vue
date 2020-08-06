<template>
  <div class="builddetail">
    <!-- 建房图库详情 -->
    <div class="current">
      当前位置：
      <router-link to="/">首页</router-link>>图纸列表>三层欧式别墅外观效果图大全农村自建房图纸
    </div>
    <!--  -->
    <div class="build_img fl_be">
      <img :src="detaillist.imgs" alt />
      <div class="build_img_r">
        <div class="fl_be build_img_t">
          <h5>{{detaillist.intro}}</h5>
          <span class="font20 poniter">收藏</span>
        </div>
        <p>
          图纸编号：
          <span>{{detaillist.number}}</span>
        </p>
        <div class="layer fl_be">
          <span>别墅层数:{{detaillist.plies}}</span>
          <span>结构形式:{{detaillist.structure}}</span>
          <span>占地面积:{{detaillist.face_width}}</span>
          <span>建筑开间:{{detaillist.plies}}</span>
          <span>建筑进深:{{detaillist.depth}}</span>
          <span>销售面积:{{detaillist.face_width}}</span>
          <span>主体参考造价:{{detaillist.plies}}</span>
        </div>
        <div class="tel">: 176-8324-2994</div>
        <div class="button fl_be">
          <button class="poniter">立即购买此套图纸</button>
          <button class="poniter">申请按此套图纸施工</button>
        </div>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/image/banner1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/image/banner2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/image/banner3.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/image/banner2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/image/banner3.png" alt />
        </div>
      </div>
      <!-- 如果需要导航按钮 -->
      <span class="swiper-button-prev"></span>
      <span class="swiper-button-next"></span>
    </div>
    <!-- <div class="swiper">
      <div class="swiper_slide">
        <img :src="item" alt v-for="(item,index) in listdata" :key="index" />
      </div>
      <span class="iconfont icon-jiantou" @click="handprve"></span>
      <span class="iconfont icon-jiantou" @click="handnext"></span>
    </div>-->
    <!--  -->
    <div class="explain">购图前重要说明：</div>
    <p
      class="p"
    >购买本套图纸仅提供打印好的图纸一份，我们不出售电子文件、光盘。我们设计的图纸非常详细，用A3规格打印图纸，比传统蓝图更清晰、容易复印、方便收藏，可以直接应用到施工现场。售后服务仅为图纸答疑，不包任何修改，因为只要其中一张图纸改变，其它图纸相应均需修改，工作量较大，所以我们不包修改。如果您个性要求较多需按要求订做设计，请查看别墅设计业务流程，并联系设计客服咨询设计收费标准。</p>
  
    
  
  </div>
</template>

<script>
import Swiper from 'swiper'
import request from '@/request.js'
export default {
  data() {
    return {
      pic: [require('../../static/h.png'), require('../../static/pic.png')],
      listdata: [],
      detaillist: [],
    }
  },
  created() {
    this.listdata = this.pic.slice(0, 2)
    // setInterval(this.handprve, 1000);
    let idname = this.$route.query.id
    request
      .getBlueDetail({
        id: idname,
      })
      .then((res) => {
        this.detaillist = res.data
        console.log(res, '图纸详情')
      })
      .catch((e) => {})
      .finally(() => {})
  },
  mounted() {
    const mySwiper = new Swiper('.swiper-container', {
      observer: true,
      slidesPerView: 3,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // 手动切换之后继续自动轮播
      },
      // 如果需要分页器
      // pagination: {
      //   el: '.swiper-pagination'
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
  methods: {
    handprve() {
      let first = this.pic.shift()
      this.pic.push(first)
      this.listdata = this.pic.slice(0, 2)
    },
    handnext() {
      let last = this.pic.pop()
      this.pic.unshift(last)
      this.listdata = this.pic.slice(0, 2)
    },
  },
}
</script>

<style scoped>
.swiper,
.swiper-container {
  width: 681px;
  overflow: hidden;
  margin: 10px 0 43px 0;
  position: relative;
  display: flex;
  padding-left: 30px;
  box-sizing: border-box;
  height: 136px;
}
.swiper-wrapper {
  z-index: -1;
  width: 201px;
}
.swiper-button-prev:after {
  color: #ffbf22;
}
.swiper-button-next:after {
  color: #ffbf22;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 1;
}
/* .swiper > span {
  font-size: 74px;
  position: absolute;
  top: 50%;
  margin-top: -37px;
  transition: all 0.5s;
  color:#FFBF22;
}
.swiper > span:nth-of-type(1) {
  right: 0;
  transform: rotate(180deg);
}
.swiper > span:nth-of-type(2) {
  left: 0;
} */
.swiper-slide {
  margin-left: 14px;
  width: 202px !important;
}
.swiper-slide img {
  width: 202px;
  height: 136px;
  margin-right: 14px;
}
.builddetail {
  margin-top: 22px;
}
.current {
  text-align: left;
  font-size: 21px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(92, 92, 92, 1);
  line-height: 32px;
  padding: 14px 0;
  padding-left: 52px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-bottom: 46px;
}
.build_img {
  height: 520px;
}
.build_img img {
  min-width: 686px;
  height: 100%;
}
.build_img h5 {
  font: 400 26px/36px 'Adobe Heiti Std';
  color: #313131;
  width: 393px;
}
.build_img .build_img_t span {
  display: block;
  width: 72px;
  height: 31px;
  line-height: 31px;
  background: #ffbf22;
  opacity: 0.98;
  border-radius: 16px;
  color: #fff;
  margin-left: 18px;
  text-align: center;
}
.build_img_r {
  background: #e8e8e8;
  text-align: left;
  height: 520px;
  box-sizing: border-box;
  padding: 10px 0;
  padding-right: 14px;
  padding-left: 17px;
}
.build_img_t {
  align-items: normal;
}
.build_img_r p {
  font: 400 20px/26px 'Adobe Heiti Std';
  color: #585858;
}
.build_img_r p span {
  font: 400 20px/26px 'Adobe Heiti Std';
  color: #fcc31f;
  opacity: 0.98;
}
.layer {
  flex-wrap: wrap;
  justify-content: end;
}
.layer span {
  font: 400 16px/21px 'Adobe Heiti Std';
  color: #585858;
  opacity: 0.98;
  width: 33.3%;
  margin-bottom: 34px;
}
.tel {
  font: 400 26px/34px 'Adobe Heiti Std';
  color: #000000;
  margin-bottom: 25px;
}
.build_img_r button {
  width: 205px;
  height: 45px;
  background: rgba(255, 191, 34, 1);
  border-radius: 10px;
  outline: none;
  border: 0;
  font: 21px/28px 'Adobe Heiti Std';
  color: #fff;
}
.explain {
  font: 30px/40px '';
  color: #4e4e4e;
  text-align: left;
  height: 94px;
  line-height: 94px;
}
.p {
  font: 20px/40px '';
  color: #4e4e4e;
  text-align: left;
}
</style>
