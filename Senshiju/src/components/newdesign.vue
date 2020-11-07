<template>
  <!-- 最新设计案例 -->
  <div>
    <h6>最新设计定制案例</h6>
    <div class="drawing poniter" v-for="(item,index) in designlist" :key="index"
    @click="godetail(item)">
      <img :src="item.cover" alt />
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
        style: '',
        area: '',
        face_width: '',
        depth: '',
        plies: '',
        function: '',
        structure: '',
        cost: '',
        by_away: 'asc',
        sort: 'add_time',
      })
      .then((res) => {
        this.designlist = res.data
      })
      .catch((e) => {})
      .finally(() => {})
  },
  methods: {
    godetail(num){
       //跳转产品详情
      this.$router.push({
        path: '/productDetail',
        query: {
          id: num.id,
        },
      })
    }
  },
}
</script>

<style scoped>
h6{
    font: 400 18px /26px 'Microsoft YaHei';
    width: 175px;
    border-bottom: 2px solid #FFDE87;
    margin: auto;
    margin-bottom: 22px;
}
.drawing {
  width: 230px;
  height: 242px;
  transition: all 0.3s;
  margin-bottom: 20px;
  transition: all .2s;
}

.drawing img {
  width:230px;
height:160px;
}
.drawing p {
  /* width: 239px; */
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