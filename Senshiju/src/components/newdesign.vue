<template>
  <!-- 最新设计案例 -->
  <div>
    <h6>最新设计定制案例</h6>
    <div class="drawing poniter" v-for="(item,index) in designlist" :key="index">
      <img :src="item.imgs" alt />
      <p class="one-wrap">{{item.intro}}</p>
      <div class="bot">
        <span>
          占地面积：
          <i>{{item.area}}</i>
        </span>
        <span>
          图纸编号：
          <i>{{item.number}}</i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/request.js'
export default {
  data() {
    return {
      designlist:[]
    }
  },
  created() {
    // 墅图纸共有套
    request
      .getHots({
        page: 1,
        style: 1,
      })
      .then((res) => {
        this.designlist = res.data
      })
      .catch((e) => {})
      .finally(() => {})
  },
}
</script>

<style scoped>
h6{
    font: 400 18px /26px '';
    width: 175px;
    border-bottom: 2px solid #FFDE87;
    margin: auto;
    margin-bottom: 22px;
}
.drawing {
  width: 269px;
  height: 269px;
  transition: all 0.3s;
  margin-bottom: 20px;
}
.drawing:hover {
  box-shadow: 10px 10px 5px #e2e1e1, 10px -10px 5px #e2e1e1,
    -10px 10px 5px #e2e1e1, -10px -10px 5px #e2e1e1;
}
.drawing img {
  width:269px;
height:191px;
}
.drawing p {
  width: 239px;
  margin: 9px 5px 7px 3px;
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(71, 71, 71, 1);
  line-height:21px;
}
.drawing_box {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 889px;
}
.bot {
  padding: 24px 13px;
  border-top: 1px solid #b5b5b5;
  display: flex;
  justify-content: space-between;
}
i {
  font-style: normal;
  color: #e8342b;
}
</style>