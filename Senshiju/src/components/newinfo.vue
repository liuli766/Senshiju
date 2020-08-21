<template>
  <!-- 最新资讯 -->
  <div>
    <h6>最新资讯</h6>
    <div v-for="(item,k) in newarr" :key="k">
      <div class="info">
        <img :src="item.cover" alt />
        <div class="block">
          <p>{{item.content}}</p>
        </div>
      </div>
      <div class="p wrap">{{item.content}}</div>
      <div class="p wrap">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import hotlist from '@/components/hostList.vue'
import { mapState } from 'vuex'
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
  methods: {
    // getzixun(src) {
    //   //资讯
    //   request
    //     .getHomebaike({
    //       page: 1,
    //       class:'',
    //     })
    //     .then((res) => {
    //       console.log(res, '资讯')
    //       this.inList = res.data
    //       this.zxlist = this.inList.slice(0, 1)
    //     })
    //     .catch((e) => {})
    //     .finally(() => {})
    // },
  },
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
.p {
  width: 268px;
  border-bottom: 1px dashed #bfbfbf;
  line-height: 26px;
  text-align: left;
}
</style>