<template>
  <div style="background: #fafafa">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, k) in getLunboList" :key="k">
        <img class="sw" :src="item.pic_path" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <img
        class="swiper-button-prev"
        src="../assets/image/back.png"
        slot="button-prev"
        alt
      />
      <img
        class="swiper-button-next"
        src="../assets/image/back.png"
        slot="button-next"
        alt
      />
    </swiper>
    <!-- 热销推荐 -->
    <div class="hot bgcolorf6">
      <img src="../assets/image/h1.png" alt="" />
      <div class="hotnav">
        <span
          v-for="(item, index) in hotnavList"
          :key="index"
          :class="{ hot_active: item === type }"
          @click="handhotnav(item)"
          >{{ item }}</span
        >
      </div>
    </div>
    <!-- 新中式 -->
    <div>
      <transition-group class="parent" name="bounce" mode="out-in">
        <hotlist :info="item" v-for="item in hotdata" :key="item.id"></hotlist>
      </transition-group>
    </div>
    <!-- <div @click="onBottom">查看更多</div> -->
    <!-- <scroll :onBottom="onBottom"></scroll> -->
    <!-- 设计师 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, k) in designlist" :key="k">
        <div class="designer">
          <div class="designer_box">
            <div class="designer_main">
              <h5>专业设计</h5>
              <div class="h5_bot">DESIGN TEAM</div>
              <div class="h5_bot_div">为您打造好看又实用的别墅。</div>
              <div class="h5_bot_div_div">
                Build a nice and practical villa for you..
              </div>
              <div class="dashed font24">一对一专业设计设计师</div>
              <div class="dash">
                {{ item.name }}
                <span>Bksnnk</span>
              </div>
              <span class="liaojie font21 poniter" @click="handLearn(item)"
                >点击了解设计师</span
              >
              <div class="resevers">
                <div>精细化设计服务</div>
                <div class="fuwu">
                  <span></span>
                </div>
              </div>
              <div class="fl_ar technological">
                <div
                  v-for="(item, index) in design"
                  :key="index"
                  class="technological_design fl_ar"
                >
                  <div class="borderf fl_center">
                    <img :src="item.img" alt />
                  </div>
                  <span class="font18">{{ item.name }}</span>
                </div>
              </div>
            </div>
            <div class="picbox fl_be_al">
              <img :src="item.cover" alt />
              <div class="fl_be_al img_pic">
                <img
                  :src="c"
                  alt
                  v-for="(c, v) in item.works.slice(0, 2)"
                  :key="v"
                />
                <!-- <img :src="item.works[1]" alt /> -->
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 图纸预售 -->
    <div class="hot bgcolorf6">
      <img src="../assets/image/h2.png" alt="" />
    </div>
    <div class="presell">
      <div class="presell_child">
        <img
          class="img"
          v-for="(item, index) in picList"
          :key="index"
          :src="item.cover"
          alt
          @click="handprodetail(item)"
        />
      </div>
    </div>
    <div class="presell_bottom">
      <div
        class="more poniter"
        @click="handmore"
      >
        {{loadtext}}
      </div>
    </div>

    <!-- 服务流程 -->
    <div class="hot bgcolorf6">
      <img src="../assets/image/h3.png" alt="" />
    </div>
    <!-- 服务流程 -->
    <div class="posfuwu">
      <div class="service">
        <div class="service_line"></div>
        <div class="cicle">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
      <!--  -->
      <div class="process">
        <div
          v-for="(item, index) in serviceList"
          :key="index"
          class="process_item"
        >
          <div class="fdae31">
            <img :src="item.img" alt />
          </div>
          <h6 class="h6">{{ item.name }}</h6>
          <li class="color98">{{ item.name1 }}</li>
          <li class="color98">{{ item.name2 }}</li>
          <li class="color98">{{ item.name3 }}</li>
        </div>
      </div>
    </div>
    <!-- 视频实例 -->
    <div class="video">
      <div class="hot bgcolorf6">
        <img src="../assets/image/h4.png" alt="" />
      </div>
      <video
        :src="homeList.home_video"
        controls
        poster="../assets/image/video.png"
        width="1200"
        height="676"
        preload="none"
      ></video>
      <div class="vedoimg" @click.stop="handplay">
        <img src="../assets/image/player.png" alt v-if="vdeoimg" />
      </div>
    </div>
    <!-- 别墅资讯 -->
    <div class="hot bgcolorf6">
      <img src="../assets/image/h5.png" alt="" />
      <div class="hotnav">
        <span
          v-for="(item, k) in inforList"
          :key="k"
          :class="{ hot_active: item === typeinfor }"
          @click="handInfor(item, k)"
          >{{ item }}</span
        >
      </div>
    </div>
    <!-- 资讯展示 -->
    <div class="mationmain">
      <!-- <transition name="bounce" mode="out-in" class="mationparent"> -->
      <div
        class="inforparent poniter"
        v-for="(item, index) in zxlist"
        :key="index"
      >
        <div>
          <div class="inforlist" @click="handbaike(item)">
            <img :src="item.cover" alt />
            <div class="infor_txt">
              <div class="b">
                {{ item.add_time.slice(5, 7) }}
                <span>/month</span>
              </div>
              <span class="hline"></span>
              <h6 class="h6tit">{{ item.title }}</h6>
              <span class="hline1"></span>
              <p class="txtp two-wrap">{{ item.content }}</p>
            </div>
            <div class="blok"></div>
          </div>
          <!--  -->
          <div class="infornews_parent poniter">
            <div
              class="infornews"
              v-for="(item, index) in inList"
              :key="index"
              @click="gobaike(item)"
            >
              <p class="txtp1 one-wrap">{{ item.content }}</p>
              <div>{{ item.add_time.slice(0, 10) }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- </transition> -->
      <!--  -->
      <div class="btn">
        <button @click="handprve" class="poniter">
          <span class="iconfont icon-jiantou"></span>
        </button>
        <button @click="handnext" class="poniter">
          <span class="iconfont icon-arrow_right"></span>
        </button>
      </div>
    </div>
    <!-- 建房专题 -->
    <div style="margin-top: 40px">
      <div class="hot bgcolorf6">
        <img src="../assets/image/h7.png" alt="" />
      </div>
    </div>
    <div class="display_box">
      <div v-for="(item, v) in specialsList" :key="v" @click="GoDisplay(item)">
        <!-- 图片 -->
        <div v-show="v < 3">
          <div class="display_child display_child1">
            <img :src="item.cover" class="display_img" alt="" />
            <div class="display_block">{{ item.title }}</div>
          </div>
        </div>
        <!-- 标题 -->
        <div class="display_child">
          <p class="display_p">{{ item.title }}</p>
        </div>
      </div>
      <div class="presell_bottom" style="margin-top: 70px">
        <div class="more poniter" @click="MoreList">查看更多</div>
      </div>
    </div>
    <!-- 首页联系客服 -->
    <div class="fixed">
      <a
        :href="'tencent://message/?uin=' + homeList.qq + '&Site=&Menu=yes'"
        target="_blank"
      >
        <img
          :src="'http://wpa.qq.com/pa?p=2:' + homeList.qq + ':41'"
          alt="点击这里给我发消息"
          style="opacity: 0"
        />
        <div>
          <img src="../assets/image/fixed/kf.png" alt />
          <span>联系客服</span>
        </div>
      </a>

      <div>
        <img src="../assets/image/fixed/erwm.png" alt />
        <span>二维码</span>
        <img :src="homeList.qr_code" alt class="qrimg" />
      </div>
      <div @click="handorder">
        <img src="../assets/image/fixed/ddan.png" alt />
        <span>订单</span>
      </div>
      <div @click="handtop">
        <img src="../assets/image/fixed/fhdb.png" alt />
        <span>返回顶部</span>
      </div>
    </div>
    <login v-if="isShowlogin" />
    
  </div>
</template>

<script>
import hotlist from '@/components/hostList.vue'
import login from '@/components/login.vue'
// import scroll from "@/components/onBottom.vue";

import { mapState } from 'vuex'
import request from '@/request.js'
import axios from 'axios'
export default {
  components: {
    hotlist,
    login,
    // scroll
  },
  data() {
    return {
      link: 'http://villa.jisapp.cn',
      loadtext:'',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next', // 左边按钮
          prevEl: '.swiper-button-prev', // 右边按钮
        },
      },
      hotdata: [],
      hotnavList: ['新中式', '中式风格与四合院', '欧式', '现代'],
      getLunboList: [], //轮播数据
      specialsList: [], //建房专题
      serviceList: [
        {
          img: require('../assets/image/liucheng/kf.png'),
          name: '联系客服',
          name1: '联系客服',
          name2: '选定产品',
          name3: '提供材料',
        },
        {
          img: require('../assets/image/liucheng/dj.png'),
          name: '支付定金',
          name1: '支付定金',
          name2: '沟通需求',
          name3: '签订合同',
        },
        {
          img: require('../assets/image/liucheng/sjs.png'),
          name: '设计师对接',
          name1: '对接设计',
          name2: '确定方案',
          name3: '持续服务',
        },
        {
          img: require('../assets/image/liucheng/ht.png'),
          name: '合同执行',
          name1: '方案定稿',
          name2: '支付完结',
          name3: '签订合同',
        },
        {
          img: require('../assets/image/liucheng/ys.png'),
          name: '验收完成',
          name1: '结构设计',
          name2: '水电设计',
          name3: '验收发货',
        },
      ],
      type: '新中式',
      morelist: [], // 查看更多
      idx: 2,
      inforList: [
        '建房百科',
        '设计百科',
        '装修百科',
        '施工百科',
        '风水百科',
        '建房日志',
        // '体育新闻'
      ],
      typeinfor: '建房百科',
      inList: [], //建房资讯
      zxlist: [], //建房资讯
      design: [
        {
          img: require('../assets/image/shejishi/jiaoliu.png'),
          name: '初步探讨',
        },
        {
          img: require('../assets/image/shejishi/vip.png'),
          name: '图纸设计',
        },
        {
          img: require('../assets/image/shejishi/xgtu.png'),
          name: '出效果图',
        },
        {
          img: require('../assets/image/shejishi/sgtu.png'),
          name: '出施工图',
        },
        {
          img: require('../assets/image/shejishi/sdfahuo.png'),
          name: '审单发货',
        },
        {
          img: require('../assets/image/shejishi/sg.png'),
          name: '施工指导',
        },
      ],
      vdeoimg: true,
      homeList: [],
      designlist: [], //设计师轮播
      page:1,
      picList:[],
      pages:1
    }
  },
  watch: {},
  computed: {
    ...mapState({
      isShowlogin: (state) => state.isShowlogin,
    }),
  },
  created() {
    // 联系客服
    BizQQWPA.addCustom({
      aty: '0', //指定工号类型,0-自动分流，1-指定工号，2-指定分组
      nameAccount: '1872124699', //指定的聊天 QQ 号码
      selector: 'contactQQ', //触发聊天的标签id
    })
    //热销推荐
    this.gethots()
    // pc网站首页
    request
      .getHomeindex({})
      .then((res) => {
        this.homeList = res.data
        this.$store.commit('serQQ', res.data)
        console.log(res, 'pc端首页')
      })
      .catch((e) => {})
      .finally(() => {})
    this.getprell()
    this.getlunbo()

    // 首页百科
    this.getzixun('建房百科')

    // 首页设计师
    request
      .getHomrdesign()
      .then((res) => {
        console.log(res, '设计师轮播')
        this.designlist = res.data
      })
      .catch((e) => {})
      .finally(() => {})
    this.list()
  },
  methods: {
    // onBottom() {
    //   this.pages++;
    //    this.gethots()
    // },
    list() {
      // 首页建房专题
      request
        .getSpecials()
        .then((res) => {
          console.log(res, '首页建房专题')
          this.specialsList = res.data
        })
        .catch((e) => {})
        .finally(() => {})
    },
    MoreList() {
      this.GoDisplay(1)
    },
    getGoodsHref() {
      return `http://wpa.qq.com/msgrd?v=3&uin=${homeList.qq}&site=qq&menu=yes`
    },
    gethots() {
      //热销推荐
      request
        .getHots({
          page: this.pages,
          style: this.type,
        })
        .then((res) => {
          
          // if (this.page == 1) {
            this.hotdata = res.data
          // }

          // if (this.page > 1) {
          //   this.hotdata = [...this.hotdata, ...res.data];
          // }

          // if (res.data.length == 0) {
          //   // alert('没有了')
          // }
        })
        .catch((e) => {})
        .finally(() => {})
    },
    getzixun() {
      //资讯
      request
        .getHomebaike({
          page: 1,
          class: this.typeinfor,
        })
        .then((res) => {
          console.log(res, '资讯')
          this.inList = res.data
          this.zxlist = this.inList.slice(0, 1)
          localStorage.setItem('length', res.data.length)
        })
        .catch((e) => {})
        .finally(() => {})
    },

    getprell() {
      //图纸预售
      request
        .getPresell({
          page: this.page,
        })
        .then((res) => {
          console.log(res, '图纸预售')
          
          if (this.page == 1) {
            this.picList = res.data;
          }

          if (this.page > 1) {
            this.picList = [...this.picList, ...res.data];
          }

          if (res.data.length == 0) {
             this.loadtext='没有更多了'
          }else{
            this.loadtext='查看更多'
          }
        })
        .catch((e) => {})
        .finally(() => {})
    },

    getlunbo() {
      //轮播
      request
        .getLunbo({ type: 1 })
        .then((res) => {
          console.log(res, '轮播')
          this.getLunboList = res.data.list
        })
        .catch((e) => {})
        .finally(() => {})
    },

    // 切换新中式
    handhotnav(nav) {
      this.type = nav
      this.pages=1
      this.hotdata=[]
      this.gethots()
      
    },

    // 别墅资讯
    handInfor(nav, k) {
      this.typeinfor = nav
      this.getzixun()
    },

    // 查看更多
    handmore() {
      this.page++;
      this.getprell();
    },
    handprve() {
      let first = this.inList.shift()
      this.inList.push(first)
      this.zxlist = this.inList.slice(0, 1)
    },
    handnext() {
      let last = this.inList.pop()
      this.inList.unshift(last)
      this.zxlist = this.inList.slice(0, 1)
    },
    // 设计师了解详情
    handLearn(num) {
      console.log(1)
      this.$router.push({
        path: '/teamDetail',
        query: {
          id: num.id,
          name: num.name,
        },
      })
    },

    // 跳转百科详情
    handbaike(item) {
      this.$router.push({
        path: '/articDetail',
        query: {
          id: item.id,
          title: item.title,
        },
      })
    },
    gobaike(item) {
      this.$router.push({
        path: '/articDetail',
        query: {
          id: item.id,
        },
      })
    },
    handtop() {
      //返回顶部
      window.scrollTo(0, 0)
    },
    handprodetail(item) {
      //跳转产品详情
      let idname = item.id
      this.$router.push({
        path: '/productDetail',
        query: {
          id: idname,
        },
      })
    },
    handorder() {
      //跳转订单
      this.$router.push({
        path: '/order',
      })
    },
    handplay() {
      //单击播放暂停按钮控制视频的播放和暂停
      let vdeoimg = document.querySelector('.vedoimg>img')
      let video = document.querySelector('video')
      if (video.paused) {
        video.play()
        this.vdeoimg = false
      } else {
        video.pause()
        this.vdeoimg = true
      }
    },
    GoDisplay(item) {
      //跳转建房百科专题
      this.$router.push({
        path: '/Display',
        query:{
          id:item.id||1
        }
      })
    },
  },
  mounted() {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  },
}
</script>

<style scoped>
@import '../assets/index.css';
.display_box {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  padding: 56px 0 46px 0;
  overflow: hidden;
}
.display_box > div {
  float: left;
  margin-bottom: 20px;
  cursor: pointer;
}
.display_box > div:nth-of-type(3n-1) {
  margin: 0 74px;
}
.display_img {
  width: 350px;
  height: 244px;
  position: relative;
}
.display_p {
  font-size: 20px;
  color: #333;
  text-align: left;
}
.display_child {
  position: relative;
  width: 350px;
}
.display_child1 {
  margin-bottom: 16px;
}
.display_block {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  height: 72px;
  box-sizing: border-box;
  padding: 12px 28px;
  width: 100%;
  font-size: 20px;
}
.vdeodiv {
  padding-bottom: 0;
}
.vdeop {
  margin: 12px auto;
  margin-bottom: 40px;
  color: #999;
}
.video {
  position: relative;
}
.video .vedoimg {
  height: 594px;
  position: absolute;
  top: 134px;
  left: 0;
  width: 1200px;
}
.video .vedoimg img {
  width: 92px;
  height: 92px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -46px;
  margin-left: -46px;
}
.fixed > div {
  position: relative;
}
.fixed > div:hover .qrimg {
  display: block;
}
.qrimg {
  position: absolute;
  top: 0;
  left: -110px;
  width: 100px;
  height: 100px;
  background: #fff;
  display: none;
}
.fixed a > div {
  background: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 74px;
}
.fixed a > div img {
  width: 34px;
  height: 38px;
  margin-top: 10px;
}
.fixed > div > img,
.fixed a > div > img {
  margin-bottom: 10px;
}
</style>
