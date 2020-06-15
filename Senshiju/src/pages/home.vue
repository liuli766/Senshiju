<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><img class="sw" src="../assets/image/banner1.png" alt=""></swiper-slide>
      <swiper-slide><img class="sw" src="../assets/image/banner2.png" alt=""></swiper-slide>
      <swiper-slide><img class="sw" src="../assets/image/banner3.png" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    <img class="swiper-button-prev" src="../assets/image/back.png" slot="button-prev" alt="">
    <img class="swiper-button-next" src="../assets/image/back.png" slot="button-next" alt="">
    </swiper>
    <!-- 热销推荐 -->
    <div><h4 class="font40">热销<span class="theme">·推荐</span></h4></div>
    <hotlist></hotlist>
  </div>
</template>

<script>
// import recommendData from '../product.js'
import hotlist from '@/components/hostList.vue'
export default {
  components: {
    hotlist
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style scoped>
 .sw{
  width:100%;
  height: 598px;
  display: block;
}
.swiper-button-prev,.swiper-button-next{
  width: 55px;
  height: 75px;
}
.swiper-button-next{
  transform: rotate(180deg);
  margin-right: 160px;
}
.swiper-button-prev{
   margin-left: 160px;
}
div h4{
  margin-top:50px ;
}
</style>
