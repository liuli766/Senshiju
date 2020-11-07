<template>
  <div class="hotlist poniter" @click="godetail(info)">
    <div class="hotlist_info">
      <img :src="info.cover" alt />
      <div class="lili">
        <h5 class="bold one-wrap">{{info.title.slice(0,10)}}</h5>
        <div class="font14 color98">{{info.style}} &nbsp;&nbsp; | &nbsp;&nbsp;{{info.area}}㎡ &nbsp;&nbsp;| &nbsp;&nbsp;{{info.cost}}</div>
        <div class="font14 color98 quotations one-wrap">{{info.describe}}</div>
        <div class="font20 theme price">￥{{info.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/request.js'
export default {
  props: {
    info: {
      type: Object,
    },
  },
  created() {},
  methods: {
    // 跳转产品详情
    godetail(item) {
      let idname = item.id
      this.$router.push({
        path: '/productDetail',
        query: {
          id: idname,
        },
      })
    },
  },
}
</script>

<style scoped>
.hotlist{
    width:360px;
    /* margin-left: 2%; */
    margin-bottom: 20px;
    float: left;
    /* border-radius: 6px; */
    /* box-shadow: 7px 5px 30px #f2f0f0; */
    overflow: hidden;
    margin: 0 20px;
    margin-bottom: 50px;
}
.hotlist:nth-last-of-type(1),.hotlist:nth-last-of-type(2),.hotlist:nth-last-of-type(3){
  margin-bottom: 0;
}
.hotlist_info {
  overflow: hidden;
  background: #f6f6f6;
  height: 398px;
}
.hotlist_info img {
  /* width: 392px;
  height: 392px; */
  width: 360px;
  display: block;
  height: 250px;
}
.bold {
  font: bold 22px/1 'Microsoft Ya Hei';
  color: #333;
  margin: 18px 0;
}
.price {
  padding-bottom: 10px;
}
.quotations {
  margin: 18px 0 0 20px;
  line-height: 24px;
}
.lili {
  height: 188px;
}
</style>
