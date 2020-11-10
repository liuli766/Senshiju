<template>
  <!-- 最新资讯 -->
  <div>
    <h6>最新资讯</h6>
    <div
      v-for="(item, k) in inList"
      :key="k"
      @click="godetail(item)"
      class="poniter box"
    >
      <div class="info">
        <img :src="item.cover" alt />
        <div class="block">
          <p class="two-wrap">{{ item.title }}</p>
        </div>
      </div>
      <div class="p wrap two-wrap">{{ item.title }}</div>
      <div class="p wrap two-wrap">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import hotlist from '@/components/hostList.vue'
import { mapState } from 'vuex'
import request from '@/request.js'
export default {
  data() {
    return {
      inList: [],
    }
  },
  props: {
    newarr: {
      type: Array,
    },
  },
  created() {
    this.getzixun()
  },
  methods: {
    getzixun() {
      //资讯
      request
        .getHomebaike({
          page: 1,
          class: '',
        })
        .then((res) => {
          console.log(res, '资讯')
          this.inList = res.data
          // this.zxlist = this.inList.slice(0, 1)
        })
        .catch((e) => {})
        .finally(() => {})
    },
    godetail(item) {
      //跳转文章详情
      this.$router.push({
        path: '/articDetail',
        query: item,
      })
    },
  },
}
</script>

<style scoped>
h6 {
  font: 400 18px /26px 'Microsoft YaHei';
  width: 175px;
  border-bottom: 2px solid #ffde87;
  margin: auto;
  margin-bottom: 22px;
  text-align: center;
}
.info {
  position: relative;
  width: 228px;
}
.info img {
  width: 230px;
  height: 160px;
}
.info .block {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px 3px 8px;
  box-sizing: border-box;
}
.info .block p {
  font: 400 14px/23px 'Microsoft YaHei';
  color: #fff;
  text-align: justify;
}
.p {
  width: 228px;
  border-bottom: 1px dashed #bfbfbf;
  line-height: 26px;
  text-align: left;
  font-size: 14px;
  padding-left: 5px;
}
.box {
  margin-bottom: 20px;
}
</style>