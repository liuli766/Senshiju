<template>
  <div>
    <main v-if="serchlist.length!==0">
      <div class="hotlist poniter" v-for="(info,k) in serchlist" :key="k" @click="godetail(info)">
        <div class="hotlist_info">
          <img :src="info.cover" alt />
          <div class="lili">
            <h5 class="bold one-wrap">{{info.title}}</h5>
            <div class="font14 color98">{{info.style}} | {{info.area}} | {{info.cost}}</div>
            <div class="font14 color98 quotations two-wrap">{{info.intro}}</div>
            <div class="font20 theme price">￥{{info.price}}</div>
          </div>
        </div>
      </div>
    </main>
    <main v-else>
      <div style="margin: auto;">无相关搜索</div>
    </main>
  </div>
</template>

<script>
import request from '@/request.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
        seacrhdata:[]
    }
  },
    computed: {
    ...mapState({
      hedeid: (state) => state.hedeid,
      token: (state) => state.token,
      islogin: (state) => state.islogin,
      userInfor: (state) => state.userInfor,
      serchlist:(state)=>state.serchlist
    }),
  },
  created() {
    this.seacrhdata=this.serchlist
  },
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
main{
  width: 1200px;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
}
main>div{
  margin-right: 8px;
}
.hotlist{
  width: 30%;
    margin-left: 2%;
    margin-bottom: 35px;
    float: left;
    border-radius: 6px;
    -webkit-box-shadow: 7px 5px 30px #f2f0f0;
    box-shadow: 7px 5px 30px #f2f0f0;
    overflow: hidden;
}
.hotlist_info {
    overflow: hidden;
    background: #fff;
    margin-bottom: 30px;
    height: 428px;
}
.hotlist_info img {
  width: 100%;
  height: 238px;
}
.bold {
  font: bold 22px/1 'Microsoft Ya Hei';
  color: #333;
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
  line-height: 26px;
}
</style>
