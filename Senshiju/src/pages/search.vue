<template>
  <div>
    <div class="hotlist poniter" v-for="(info,k) in serchlist" :key="k" @click="godetail(info)">
      <div class="hotlist_info">
        <img :src="info.cover" alt />
        <div class="lili">
          <h5 class="bold">{{info.title}}</h5>
          <div class="font14 color98">{{info.style}} | {{info.area}} | {{info.cost}}</div>
          <div class="font14 color98 quotations two-wrap">{{info.intro}}</div>
          <div class="font20 theme price">￥{{info.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/request.js'
export default {
  data() {
    return {
      serchlist: [],
    }
  },
  created() {},
  methods: {
    serch() {
      request
        .getHots({
          page: 1,
          search,
        })
        .then((res) => {
          this.serchlist = res.data
        })
        .catch((e) => {})
        .finally(() => {})
    },
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
.hotlist_info {
  width: 392px;
  background: #fff;
  margin-bottom: 30px;
  height: 400px;
}
.hotlist_info img {
  width: 100%;
  height: 238px;
}
.bold {
  font: bold 22px/1 'Microsoft Ya Hei';
  color: #000;
  margin: 20px 0;
  margin-top: 0;
  padding-top: 20px;
}
.price {
  margin: 10px 0;
  padding-bottom: 10px;
}
.quotations {
  margin-top: 20px;
  margin: 20px 0 0 20px;
}
.lili {
  background: #f6f6f6;
}
</style>
