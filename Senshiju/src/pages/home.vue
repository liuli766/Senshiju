<template>
  <div style="background:#f6f6f6">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,k) in getLunboList" :key="k">
        <img class="sw" :src="item.pic_path" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <img class="swiper-button-prev" src="../assets/image/back.png" slot="button-prev" alt />
      <img class="swiper-button-next" src="../assets/image/back.png" slot="button-next" alt />
    </swiper>
    <!-- 热销推荐 -->
    <div class="hot bgcolorf6">
      <h4 class="font40">
        热销
        <span class="theme">·推荐</span>
      </h4>
      <div class="flex colord2">
        <div class="font20 flex">
          <div class="line"></div>·
        </div>
        <div class="txt">HOT SELLING</div>
        <div class="font20 flex">
          ·
          <div class="line"></div>
        </div>
      </div>
      <p class="colord2">我们不做简单的风格堆砌，融合当代流行元素，不拘一格用经典铸造品牌 打造您的专属个性化定制风格别墅方案</p>
      <div class="hotnav">
        <span
          v-for="(item,index) in hotnavList"
          :key="index"
          :class="{'hot_active':item===type}"
          @click="handhotnav(item)"
        >{{item}}</span>
      </div>
    </div>
    <!-- 新中式 -->
    <div>
      <transition-group class="parent" name="bounce" mode="out-in">
        <hotlist :info="item" v-for="item in hotlist" :key="item.id"></hotlist>
      </transition-group>
    </div>
    <!-- 设计师 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,k) in designlist" :key="k">
        <div class="designer">
          <div class="designer_box">
            <div class="designer_main">
              <h5>专业设计</h5>
              <div class="h5_bot">DESIGN TEAM</div>
              <div class="h5_bot_div">为您打造好看又实用的别墅。</div>
              <div class="h5_bot_div_div">Build a nice and practical villa for you..</div>
              <div class="dashed font24">一对一专业设计设计师</div>
              <div class="dash">
                {{item.name}}
                <span>Bksnnk</span>
              </div>
              <span class="liaojie font20 poniter"  @click="handLearn(item)">点击了解设计师</span>
              <div class="resevers">
                <div>精细化设计服务</div>
                <div class="fuwu">
                  <span></span>
                </div>
              </div>
              <div class="fl_ar technological">
                <div v-for="(item,index) in design" :key="index" class="technological_design fl_ar">
                  <div class="borderf fl_center">
                    <img :src="item.img" alt />
                  </div>
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <div class="picbox fl_be_al">
              <img :src="item.works[0]" alt />
              <div class="fl_be_al img_pic">
                <img :src="item.works[1]" alt />
                <img :src="item.works[2]" alt />
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 图纸预售 -->
    <div class="hot bgcolorf6">
      <h4 class="font40">
        图纸
        <span class="theme">·预售</span>
      </h4>
      <div class="flex colord2">
        <div class="font20 flex">
          <div class="line"></div>·
        </div>
        <div class="txt">PRESELL</div>
        <div class="font20 flex">
          ·
          <div class="line"></div>
        </div>
      </div>
      <p class="colord2">不上班茶几上成绩按开始此是世界第三不上班茶几上成绩按开始此是世界第三代不上班茶几上成绩按开始此是世界第三代</p>
    </div>
    <div class="presell">
      <div class="presell_child">
        <img
          class="img"
          v-for="(item,index) in morelist"
          :key="index"
          :src="item.cover"
          alt
          @click="handprodetail(item)"
        />
      </div>
    </div>
    <div class="presell_bottom">
      <div class="more poniter" @click="handmore" v-if="morelist.length<hotdata.length">查看更多</div>
      <div class="more poniter" v-else>没有更多了</div>
    </div>

    <!-- 服务流程 -->
    <div class="hot bgcolorf6">
      <h4 class="font40">
        服务
        <span class="theme">·流程</span>
      </h4>
      <div class="flex colord2">
        <div class="font20 flex">
          <div class="line"></div>·
        </div>
        <div class="txt">SERVICE PROCESS</div>
        <div class="font20 flex">
          ·
          <div class="line"></div>
        </div>
      </div>
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
        <div v-for="(item,index) in serviceList" :key="index" class="process_item">
          <div class="fdae31">
            <img :src="item.img" alt />
          </div>
          <h6 class="h6">{{item.name}}</h6>
          <li class="color98">{{item.name1}}</li>
          <li class="color98">{{item.name2}}</li>
          <li class="color98">{{item.name3}}</li>
        </div>
      </div>
    </div>
    <!-- 视频实例 -->
    <div class="video">
      <div class="hot bgcolorf6 vdeodiv">
        <h4 class="font40">
          一栋别墅
          <span class="theme">·一处景</span>
        </h4>
        <p class="colord2 vdeop">回家建房，就找村墅人家</p>
      </div>
      <video :src="homeList.home_video" controls poster='../assets/image/video.png' width="1200" height="676" preload="none"></video>
      <div class="vedoimg" @click.stop="handplay">
        <img src="../assets/image/player.png" alt v-if="vdeoimg" />
      </div>
    </div>
    <!-- 别墅资讯 -->
    <div class="hot bgcolorf6">
      <h4 class="font40">
        别墅
        <span class="theme">·资讯</span>
      </h4>
      <div class="flex colord2">
        <div class="font20 flex">
          <div class="line"></div>·
        </div>
        <div class="txt">INFORMATION</div>
        <div class="font20 flex">
          ·
          <div class="line"></div>
        </div>
      </div>
      <p class="colord2">不上班茶k几上成绩按开始此是世界第三代不上班茶几上成绩按开始此是世界第三代</p>
      <div class="hotnav">
        <span
          v-for="(item,k) in inforList"
          :key="k"
          :class="{'hot_active':item===typeinfor}"
          @click="handInfor(item,k)"
        >{{item}}</span>
      </div>
    </div>
    <!-- 资讯展示 -->
    <div class="mationmain">
      <!-- <transition name="bounce" mode="out-in" class="mationparent"> -->
      <div class="inforparent poniter" v-for="(item,index) in zxlist " :key="index">
        <div>
          <div class="inforlist" @click="handbaike(item)">
            <img :src="item.cover" alt />
            <div class="infor_txt">
              <div class="b">
                {{item.add_time.slice(5,7)}}
                <span>/month</span>
              </div>
              <span class="hline"></span>
              <h6 class="h6tit">{{item.title}}</h6>
              <span class="hline1"></span>
              <p class="txtp two-wrap">{{item.content}}</p>
            </div>
            <div class="blok"></div>
          </div>
          <!--  -->
          <div class="infornews_parent poniter">
            <div
              class="infornews"
              v-for="(item,index) in inList"
              :key="index"
              @click="gobaike(item)"
            >
              <p class="txtp1 one-wrap">{{item.content}}</p>
              <div>{{item.add_time.slice(0,10)}}</div>
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
    <!-- 地图展示 -->
    <div style="padding-bottom:40px">
      <div class="hot bgcolorf6">
        <h4 class="font40">
          地图
          <span class="theme">·展示</span>
        </h4>
        <div class="flex colord2">
          <div class="font20 flex">
            <div class="line"></div>·
          </div>
          <div class="txt">Map display</div>
          <div class="font20 flex">
            ·
            <div class="line"></div>
          </div>
        </div>
        <p class="colord2">百万平方，制造实力</p>
      </div>
      <div class="mapshow">
        <div class="txt1">村墅人家覆盖{{homeList.cities}}个大城市，服务全国{{homeList.service_area}}个地区</div>
        <div class="txt2">真实客户案例{{homeList.real_client}}+</div>
        <img src="../assets/image/map.png" alt />
      </div>
    </div>
    <!-- 首页联系客服 -->
    <div class="fixed">
      <!-- <a href="javascript:void(0)" id="contactQQ">
        
      </a>-->
      <a :href="'tencent://message/?uin='+homeList.qq+'&Site=&Menu=yes'" target="_blank">
        <img
          :src="'http://wpa.qq.com/pa?p=2:'+homeList.qq+':41'"
          alt="点击这里给我发消息"
          style="opacity: 0;"
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
  </div>
</template>

<script>
import hotlist from '@/components/hostList.vue'
import { mapState } from 'vuex'
import request from '@/request.js'
import axios from 'axios'
export default {
  components: {
    hotlist,
  },
  data() {
    return {
      link: 'http://villa.jisapp.cn',
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
      hotnavList: ['新中式', '四合院', '欧式', '现代'],
      getLunboList: [], //轮播数据
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
    }
  },
  watch: {},
  computed: {
    hotlist: {
      get: function () {
        let list = [...this.hotdata]
        list = list.filter((item) => item.style === this.type)
        return list
      },
      set: function () {},
    },
  },
  created() {
    // 联系客服
    BizQQWPA.addCustom({
      aty: '0', //指定工号类型,0-自动分流，1-指定工号，2-指定分组
      nameAccount: '1872124699', //指定的聊天 QQ 号码
      selector: 'contactQQ', //触发聊天的标签id
    })
    //热销推荐
    request
      .getHots({
        page: 1,
        style: this.type,
      })
      .then((res) => {
        this.hotdata = res.data
        this.morelist = [...this.hotdata.slice(0, 3)]
      })
      .catch((e) => {})
      .finally(() => {})

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
  },
  methods: {
    getGoodsHref() {
      return `http://wpa.qq.com/msgrd?v=3&uin=${homeList.qq}&site=qq&menu=yes`
    },
    gethots() {
      //热销推荐
      request
        .getHots({
          page: 1,
          style: this.type,
        })
        .then((res) => {
          this.hotdata = res.data
        })
        .catch((e) => {})
        .finally(() => {})
    },
    getzixun(src) {
      //资讯
      request
        .getHomebaike({
          page: 1,
          class: src,
        })
        .then((res) => {
          console.log(res, '资讯')
          this.inList = res.data
          this.zxlist = this.inList.slice(0, 1)
          localStorage.setItem('length',res.data.length)
        })
        .catch((e) => {})
        .finally(() => {})
    },

    getprell() {
      //图纸预售
      request
        .getPresell({
          page: 1,
        })
        .then((res) => {
          console.log(res, '图纸预售')
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
      let list = [...this.hotdata] // 拷贝原数组
      list = list.filter((item) => item.style === nav)
      this.type = nav
      this.gethots()
      this.hotlist = list
    },

    // 别墅资讯
    handInfor(nav, k) {
      this.typeinfor = nav
      if (k == 0) {
        this.typeinfor = '建房百科'
        this.getzixun(this.typeinfor)
      } else if (k == 1) {
        this.typeinfor = '设计百科'
        this.getzixun(this.typeinfor)
      } else if (k == 2) {
        this.typeinfor = '装修百科'
        this.getzixun(this.typeinfor)
      } else if (k == 3) {
        this.typeinfor = '施工百科'
        this.getzixun(this.typeinfor)
      } else if (k == 4) {
        this.typeinfor = '风水百科'
        this.getzixun(this.typeinfor)
      } else if (k == 5) {
        this.typeinfor = '建房日志'
        this.getzixun(this.typeinfor)
      }
    },

    // 查看更多
    handmore() {
      // 每点击一次增加一条内容
      this.idx++
      let list = [...this.morelist]
      this.morelist = [...list, ...this.hotdata.slice(this.idx++, this.idx + 3)]
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
  },
  mounted() {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  },
}
</script>

<style scoped>
@import '../assets/index.css';
.vdeodiv {
  padding-bottom: 0;
}
.vdeop {
  margin: 12px auto;
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
  opacity: 1;
}
.qrimg {
  position: absolute;
  top: 0;
  left: -110px;
  width: 100px;
  height: 100px;
  background: #fff;
  opacity: 0;
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
