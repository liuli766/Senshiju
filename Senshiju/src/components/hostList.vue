<template>
  <div class="hotlist" @click="godetail(info)">
    <div class="hotlist_info">
      <img :src="info.imgs" alt="">
      <h5 class="bold">{{info.title}}</h5>
      <div class="font14 color98">{{info.style}} | {{info.area}} | {{info.cost}}</div>
      <div class="font14 color98 quotations">{{info.intro}}</div>
      <div class="font20 theme price">￥{{info.price}}</div>
    </div>
  </div>
</template>

<script>
import request from '@/request.js'
export default {
  props: {
    info: {
      type: Object
    }
  },
  created () {
  },
  methods: {

    // 跳转产品详情
    godetail(item){
      let idname=(item.id)
      this.$router.push({
        path: '/productDetail',
        query:{
          id:idname
        }
      })
    }
  },

}
</script>

<style scoped>

.hotlist_info{
  width:392px;
  background: #fff;
  margin-bottom: 30px;
  padding-bottom: 10px;
}
.hotlist_info img{
  width: 392;
  height:238px;
}
.bold{
  font: bold  22px/1 "Microsoft Ya Hei";
  color:#000;
  margin:20px 0;
}
.price{
  margin: 10px 0;
}
.quotations{
  margin-top:20px ;
}
</style>
