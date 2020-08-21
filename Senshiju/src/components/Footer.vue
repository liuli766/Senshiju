<template>
  <div class="footer">
    <img src="../assets/image/footer1.png" alt />
    <div class="footer_item">
      <div class="footer_item_l">
        <span>{{homeList.design_num}}+</span>
        <span>高端别墅设计</span>
      </div>
      <div class="footer_item_l">
        <span>{{homeList.serice_num}}+</span>
        <span>服务案列</span>
      </div>
      <div class="footer_item_l">
        <span>{{homeList.senior_num}}+</span>
        <span>资深设计师</span>
      </div>
      <div class="footer_item_l">
        <span>{{homeList.roadwork_num}}+</span>
        <span>施工工地</span>
      </div>
    </div>
    <p>备案号：蜀ICP备19041272号</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import request from '@/request.js'
export default {
  data() {
    return {
      homeList: [],
    }
  },
  created() {
    // footer
    request
      .getHomeindex({})
      .then((res) => {
        this.homeList = res.data
      })
      .catch((e) => {})
      .finally(() => {})
  },
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 310px;
  /* margin-top: 40px; */
  position: relative;
}
.footer p {
  margin-top: -30px;
  color: #fff;
}
.footer img {
  width: 100%;
  height: 100%;
}
.footer_item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  font: 26px/40px '';
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
}
.footer_item_l {
  display: flex;
  flex-direction: column;
}
</style>
