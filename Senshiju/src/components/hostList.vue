<template>
  <div class="hotlist">
    <div class="hotlist_info">
      <img :src="info.image" alt="">
      <h5 class="bold">{{info.name}}</h5>
      <div class="font14 color98">{{info.type}} | {{info.mianj}} | {{info.jaime}}</div>
      <div class="font14 color98 quotations">{{info.yulu}}</div>
      <div class="font20 theme price">￥{{info.shejiprice}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  },
  created () {
  }

}
</script>

<style scoped>
.hotlist:nth-of-type(3n-1){
  margin-left: 15px;
}
.hotlist_info{
  width:390px;
  background: #f6f6f6;
  margin-bottom: 30px;
  padding-bottom: 10px;
}
.hotlist_info img{
  width: 100%;
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
