<template>
  <!-- 建房百科专题 -->
  <div>
    <img src="../assets/image/display.png" class="banner_img" alt="" />
    <div class="yellow_box">
      <div class="main comm_12">
        当前位置：<router-link to="/">主页</router-link>>专题
      </div>
    </div>
    <div class="display_two comm_12">
      <img :src="SpecialInfoList.cover" alt="" />
      <div class="display_two_box">
        <h5>{{ SpecialInfoList.title }}</h5>
        <p class="comm_one" v-html="SpecialInfoList.intro"></p>
        <div class="display_up comm_one" @click="Dianz(SpecialInfoList)">
          <span class="upup">{{ SpecialInfoList.like_num }}人点赞</span>
          <img src="../assets/image/up.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 专题数据 -->
    <div
      class="comm_12"
      style="overflow: hidden"
      v-for="(item, k) in infolist"
      :key="k"
    >
      <div>
        <div class="display_self comm_12">
          <div class="display_self_tit">
            <span>{</span>{{ item.title }}<span>}</span>
          </div>
          <div class="display_self_yell">European recommen</div>
        </div>
        <div class="display_self_con" v-for="(c, v) in item.child" :key="v">
          <img :src="c.cover" alt="" class="display_self_img" />
          <p class="display_self_p">
            {{ c.title }}
          </p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="infoclass">
      <div class="infoclass_one">
        <img src="../assets/image/11.png" alt="" />
        <div style="float: left">
          <h5>专业:专做别墅18年</h5>
          <p>
            我们是国内唯一专注自建房设计的公司，集合行业顶尖资源客户满意率100%
          </p>
          <p>我们坚信只有只有专注才能做的最好</p>
        </div>
      </div>
      <div class="infoclass_one two">
        <img src="../assets/image/12.png" alt="" />
        <div style="float: left">
          <h5>放心：品牌运作 服务更好</h5>
          <p>打造别墅设计第一品牌，服务全国34省级行政区，重视口碑和客户体验</p>
          <p>售后一流，让自建房更简单</p>
        </div>
      </div>
      <div class="infoclass_one three">
        <img src="../assets/image/13.png" alt="" />
        <div style="float: left">
          <h5>省钱：模式创新，价格更亲民</h5>
          <p>依托互联网高效、快捷、低成本的优势，颠覆传统设计公司一年不开张</p>
          <p>开张吃半年模式，拒绝暴利，让老百姓设计的起</p>
        </div>
      </div>
    </div>
    <div class="serves">
      <p>您是否想建房 却找不到<span>满意的图纸</span>？</p>
      <p>不用愁!</p>
      <p>加微信<span>17683242994</span></p>
      <p>给您推荐<span>合适的款式</span></p>
      <p>我们还有海量图纸可选，拿到<span>即可施工</span></p>
      <p>还可根据宅基地<span>1对1定制出图</span></p>
    </div>
    <img :src="qrcode" alt="" class="qrcode" />
    <!-- 爆款商品 -->
    <div class="comm_12" style="overflow: hidden">
      <div>
        <div class="display_self comm_12">
          <div class="display_self_tit">{热门爆款商品}</div>
          <div class="display_self_yell">European recommen</div>
        </div>
        <div
          class="display_self_con"
          v-for="(item, v) in hot_Cakelist"
          :key="v"
          @click="GoProduct(item.id)"
          style="cursor: pointer"
        >
          <img :src="item.cover" alt="" class="display_self_img" />
          <p class="display_self_p">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import request from '@/request.js'
export default {
  data() {
    return {
      hot_Cakelist: [], //爆款商品
      SpecialInfoList: [], //专题信息
      qrcode: '', //二维码
      infolist: [],
    }
  },
  computed: {
    ...mapState({
      userInfor: (state) => state.userInfor,
      token: (state) => state.token,
    }),
  },
  created() {
    console.log(this.$route.query.id)
    request.getHotCake().then((res) => {
      console.log(res, '爆款商品')
      this.hot_Cakelist = res.data
    })
    this.SpecialInfo()
    request.getHomeindex({}).then((res) => {
      this.qrcode = res.data.qr_code
      console.log(res, 'pc端首页')
    })
  },
  methods: {
    GoProduct(idname) {
      this.$router.push({
        path: '/productDetail',
        query: {
          id: idname,
        },
      })
    },
    SpecialInfo() {
      request
        .getSpecialInfo({
          id: this.$route.query.id,
        })
        .then((res) => {
          console.log(res, '专题信息')
          this.SpecialInfoList = res.data.info
          this.infolist = res.data.list
        })
    },
    Dianz(item) {
      console.log(1)
      if (!this.token) {
        this.$store.commit('ShowLogin', true)
        return false
      }
      request
        .getToLike({
          uid: this.userInfor.member_id,
          id: item.id,
        })
        .then((res) => {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'none',
          })
          this.SpecialInfo()
        })
    },
  },
}
</script>

<style scoped>
.comm_12 {
  width: 1200px;
  margin: 0 auto;
}
.banner_img {
  width: 100%;
  height: 100%;
  margin-bottom: 48px;
}
.yellow_box {
  height: 70px;
  background: #fecb38;
  font-size: 36px;
  line-height: 70px;
  color: #343434;
  text-align: left;
}

.display_two {
  padding: 65px 5px 20px 14px;
  box-sizing: border-box;
  overflow: hidden;
}
.display_two > img {
  height: 285px;
  width: 285px;
  border-radius: 50%;
  margin-right: 52px;
  float: left;
}
.display_two .display_two_box h5 {
  font-size: 48px;
  line-height: 20px;
  color: #242424;
  margin-bottom: 52px;
}
.comm_one {
  font-size: 22px;
  color: #242424;
}
.display_two .display_two_box p {
  line-height: 28px;
  text-align: left;
}
.display_two .display_two_box .display_up {
  float: right;
  margin-top: 52px;
  line-height: 24px;
  cursor: pointer;
}
.display_up .upup {
  line-height: 40px;
  margin-right: 6px;
}
.display_self {
  height: 120px;
  filter: drop-shadow(0px 8px 3.5px rgba(97, 97, 97, 0.29));
  background-color: #eeeeee;
  padding: 28px 0 16px 0;
  box-sizing: border-box;
  margin-bottom: 32px;
}
.display_self .display_self_tit {
  font-size: 48px;
  color: #202020;
  line-height: 1;
}
.display_self .display_self_yell {
  font-size: 20px;
  color: #fecb38;
  line-height: 1;
}
.display_self_con {
  width: 348px;
  height: 332px;
  margin: 0 26px;
  float: left;
  /* cursor: pointer; */
}
.display_self_img {
  width: 100%;
  height: 244px;
  margin-bottom: 4px;
}
.display_self_p {
  font-size: 18px;
  line-height: 20px;
  color: #212121;
  font-family: 'Sim Hei';
  padding: 0 48px;
}
.infoclass {
  width: 1150px;
  margin: 0 auto;
}
.infoclass_one {
  background: #fdd65b;
  height: 208px;
  padding: 27px 36px;
  box-sizing: border-box;
  margin-bottom: 34px;
}
.two {
  background: #facc88;
}
.three {
  background: #f7b550;
}
.infoclass_one img {
  float: left;
  margin-right: 56px;
  width: 154px;
  height: 154px;
}
.infoclass_one h5 {
  font-size: 48px;
  color: #201f1f;
  margin-bottom: 22px;
  font-weight: 400;
  text-align: left;
}
.infoclass_one p {
  font-size: 24px;
  line-height: 40px;
  color: #201f1f;
  text-align: left;
}
.serves {
  width: 866px;
  margin: 0 auto;
  height: 480px;
  background: #f6f6f6;
  border-radius: 4px;
  padding: 45px 20px 23px 23px;
  box-sizing: border-box;
}
.serves p {
  font-size: 42px;
  color: #201f1f;
  line-height: 72px;
}
.serves p span {
  color: #ff0000;
}
.qrcode {
  width: 472px;
  height: 472px;
  margin: 46px 0 90px 0;
}
</style>