<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><img class="sw" src="../assets/image/banner1.png" alt=""></swiper-slide>
      <swiper-slide><img class="sw" src="../assets/image/banner2.png" alt=""></swiper-slide>
      <swiper-slide><img class="sw" src="../assets/image/banner3.png" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    <img class="swiper-button-prev" src="../assets/image/back.png" slot="button-prev" alt="">
    <img class="swiper-button-next" src="../assets/image/back.png" slot="button-next" alt="">
    </swiper>
    <!-- 热销推荐 -->
    <div class="hot bgcolorf6">
      <h4 class="font40">热销<span class="theme">·推荐</span></h4>
      <div class="flex colord2">
        <div class="font20 flex"><div class="line"></div>·</div>
        <div class="txt ">HOT SELLING</div>
        <div class="font20 flex">·<div class="line"></div></div>
      </div>
      <p class="colord2">不上班茶几上成绩按开始此是世界第三代不上班茶几上成绩按开始此是世界第三代</p>
      <div class="hotnav">
        <span v-for="(item,index) in hotnavList" :key="index"
        :class="{'hot_active':item===type}"
        @click="handhotnav(item)">{{item}}</span>
      </div>
    </div>
    <!-- 新中式 -->
      <div>
        <transition-group class="parent"  name='bounce' mode="out-in">
          <hotlist :info="item" v-for="item in hotlist" :key='item.id'></hotlist>
        </transition-group>
      </div>
    <!-- 设计师 -->
    <div class="designer">

    </div>
    <!-- 图纸预售 -->
    <div class="hot bgcolorf6">
      <h4 class="font40">图纸<span class="theme">·预售</span></h4>
      <div class="flex colord2">
        <div class="font20 flex"><div class="line"></div>·</div>
        <div class="txt ">PRESELL</div>
        <div class="font20 flex">·<div class="line"></div></div>
      </div>
      <p class="colord2">不上班茶几上成绩按开始此是世界第三不上班茶几上成绩按开始此是世界第三代不上班茶几上成绩按开始此是世界第三代</p>
    </div>
    <div class="presell">
      <div>
        <img class="img" v-for="(item,index) in morelist" :key='index' :src="item.image" :alt="item.id">
      </div>
    </div>
    <div class="more poniter" @click="handmore" v-if='morelist.length<hotdata.length'>查看更多</div>
    <div class="more poniter" v-else>收起</div>

    <!-- 服务流程 -->
    <div class="hot bgcolorf6">
      <h4 class="font40">服务<span class="theme">·流程</span></h4>
      <div class="flex colord2">
        <div class="font20 flex"><div class="line"></div>·</div>
        <div class="txt ">SERVICE PROCESS</div>
        <div class="font20 flex">·<div class="line"></div></div>
      </div>
    </div>
    <!--  -->
    <div class="service">
      <div class="service_line"></div>
      <div class="cicle"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>
    </div>
  <!--  -->
    <div class="process">
      <div v-for="(item,index) in serviceList" :key="index" class="process_item">
        <div class="fdae31">
          <img src="../assets/image/back.png" alt="">
        </div>
        <h6 class="h6">{{item.name}}</h6>
        <li class="color98">{{item.name1}}</li>
        <li class="color98">{{item.name2}}</li>
        <li class="color98">{{item.name3}}</li>
      </div>
    </div>
    <!-- VR实例 -->
    <VRScene></VRScene>
    <!-- 别墅资讯 -->
    <div class="hot bgcolorf6">
      <h4 class="font40">别墅<span class="theme">·资讯</span></h4>
      <div class="flex colord2">
        <div class="font20 flex"><div class="line"></div>·</div>
        <div class="txt ">INFORMATION</div>
        <div class="font20 flex">·<div class="line"></div></div>
      </div>
      <p class="colord2">不上班茶几上成绩按开始此是世界第三代不上班茶几上成绩按开始此是世界第三代</p>
      <div class="hotnav">
        <span v-for="(item,index) in inforList" :key="index"
        :class="{'hot_active':item===typeinfor}"
        @click="handInfor(item)">{{item}}</span>
      </div>
    </div>
    <!-- 资讯展示 -->
    <div style="height:600px">
        <transition  name='bounce' mode="out-in" class="mationparent">
          <information :maition="hotdata"></information>
        </transition>
      </div>
  </div>
</template>

<script>
import recommendData from '../product.js'
import hotlist from '@/components/hostList.vue'
import VRScene from '@/components/VRScene.vue'
import information from '@/components/information.vue'
export default {
  components: {
    hotlist,
    VRScene,
    information
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next', // 左边按钮
          prevEl: '.swiper-button-prev' // 右边按钮
        }
      },
      hotdata: recommendData,
      hotnavList: ['新中式', '四合院', '欧式', '现代'],
      serviceList: [
        {
          name: '联系客服',
          name1: '联系客服',
          name2: '选定产品',
          name3: '提供材料'
        },
        {
          name: '支付定金',
          name1: '支付定金',
          name2: '沟通需求',
          name3: '签订合同'

        },
        {
          name: '设计师对接',
          name1: '对接设计',
          name2: '确定方案',
          name3: '持续服务'

        },
        {
          name: '合同执行',
          name1: '方案定稿',
          name2: '支付完结',
          name3: '签订合同'

        },
        {
          name: '验收完成',
          name1: '结构设计',
          name2: '水电设计',
          name3: '验收发货'

        }

      ],
      type: '新中式',
      morelist: [], // 查看更多
      idx: 2,
      inforList: ['建房资讯', '建房百科', '设计百科', '装修百科', '施工百科', '风水百科'],
      typeinfor: '建房资讯'
    }
  },
  watch: {
  },
  computed: {
    hotlist: {
      get: function () {
        let list = [...this.hotdata]
        list = list.filter(item => item.type === this.type)
        return list
      },
      set: function () {}
    }
  },
  created () {
    this.morelist = this.hotdata.slice(0, 3)
  },
  methods: {
    handhotnav (nav) {
      let list = [...this.hotdata]// 拷贝原数组
      list = list.filter(item => item.type === nav)
      this.type = nav
      this.hotlist = list
    },
    handInfor (nav) {
      let list = [...this.hotdata]// 拷贝原数组
      list = list.filter(item => item.type === nav)
      this.typeinfor = nav
      this.hotlist = list
    },
    handmore () { // 每点击一次增加一条内容
      this.idx++;
      let list = [...this.morelist]
      this.morelist = [...list, ...this.hotdata.slice(this.idx++, this.idx + 3)]
    }
  },
  mounted () {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  }
}
</script>

<style scoped>
.designer{
  background:url('../assets/image/bgteam.png') ;
  background-size:100% 100% ;
  height:733px;
}
p{
  width: 448px;
  margin: 0 auto 36px auto;
  line-height: 20px;
}
 .sw{
  width:100%;
  height: 598px;
  display: block;
}
.w1200{
  width: 1200px;
  margin: 0 auto;
}
.swiper-button-prev,.swiper-button-next{
  width: 55px;
  height: 75px;
}
.swiper-button-next{
  transform: rotate(180deg);
  /* margin-right: 160px; */
}
.swiper-button-prev{
   /* margin-left: 160px; */
}
.hot{
  padding: 50px 0 32px 0;
  margin-bottom: 40px;
}
.hotnav{
  display: flex;
  align-items: center;
  justify-content: center;
}
.hotnav span{
  display: block;
  width: 84px;
  height:32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
}
.hotnav .hot_active{
  border: 1px solid #fdd45f;
  transition: all .8s;
  color:#fdd45f ;
}
.parent{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.line{
  width: 100px;
  height:1px;
  background: #d2d2d2;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: center;
}
.txt{
  margin: 10px;
  font:bold 24px/1 "";
}
.presell{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
}
.presell img{
   width: 390px;
   margin-bottom: 20px;
}
.img:nth-of-type(3n-1){
  margin-left: 15px;
}
.more{
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border:1px solid #000;
  color: #000;
  margin: 40px auto;
}
.bounce-enter-active {
  animation: slideInLeft .5s;
}
.bounce-leave-active {
  animation: slideInDown 0s;
  opacity: 0;
}
.service{
  position: relative;
  height:80px;
}
.service_line{
  width: 1200px;
  height: 1px;
  background: #dcdcdc;
  margin: 0 auto;
}
.cicle{
  display: flex;
  position: absolute;
  top:-18px;
  width:1024px;
  justify-content: space-between;
  left: 50%;
  margin-left: -512px;
  z-index: 9;
}
.cicle span{
  display: block;
  width:36px;
  height:36px;
  border-radius: 50%;
  color: #dcdcdc;
  border: 1px solid #dcdcdc;
  line-height: 36px;
  background: #fff;
}
.process{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.process img{
  width:74px;
  height: 74px;
  border-radius: 50%;
}
.fdae31{
  width: 84px;
  height: 84px;
  border: 1px solid #fdae31;
  border-radius: 50%;
  margin: 0 auto;
}
.process li{
  list-style: disc;
  margin-bottom: 14px;
}
.h6{
  color: #000;
  font:bold 20px/1 "";
  margin: 20px 0 18px 0;
}
.process_item{
  box-sizing: border-box;
  width: 208px;
  height: 260px;
  border:1px solid #dcdcdc;
  padding: 16px 0;
  right: 0;
  left: 0;
}
</style>
