<template>
  <!-- 最新资讯 -->
  <div>
    <h6>最新资讯</h6>
    <div class="info">
      <img src="../assets/image/map.png" alt />
      <div class="block">
        <p>村墅人家618优惠活动，年中抢特价，年 终焕新家</p>
      </div>
    </div>
    <div class="p wrap">设计一套别墅多少钱？钢结构房</div>
    <div class="p wrap">设计一套别墅多少钱？钢结构房</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
h6 {
  font: 400 18px /26px '';
  width: 175px;
  border-bottom: 2px solid #ffde87;
  margin: auto;
  margin-bottom: 22px;
  text-align: center;
}
.info {
  position: relative;
  width: 269px;
}
.info img {
  width: 269px;
  height: 191px;
}
.info .block {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px 3px 8px;
}
.info .block p {
  font: 400 14px/23px '';
  color: #fff;
  text-align: justify;
}
.p{
    width: 268px;
    border-bottom: 1px dashed #BFBFBF;
    line-height: 26px;
    text-align: left;
}
</style>