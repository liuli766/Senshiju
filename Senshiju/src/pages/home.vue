<template>
  <div style="background:#f6f6f6">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="sw" src="../assets/image/banner1.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="sw" src="../assets/image/banner2.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="sw" src="../assets/image/banner3.png" alt />
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
      <p class="colord2">不上班茶几上成绩按开始此是世界第三代不上班茶几上成绩按开始此是世界第三代</p>
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
      <swiper-slide>
        <div class="designer">
          <div class="designer_box">
            <div class="designer_main">
              <h5>专业设计</h5>
              <div class="h5_bot">DESIGN TEAM</div>
              <div class="h5_bot_div">为您打造好看又实用的别墅。</div>
              <div class="h5_bot_div_div">Build a nice and practical villa for you..</div>
              <div class="dashed font24">一对一专业设计设计师</div>
              <div class="dash">
                白若霖
                <span>Bksnnk</span>
              </div>
              <span class="liaojie font20 poniter" @click="handLearn">点击了解设计师</span>
              <div class="resevers">
                <div>精细化设计服务</div>
                <div class="fuwu">
                  <span></span>
                </div>
              </div>
              <div class="fl_ar technological">
                <div v-for="(item,index) in design" :key='index' class="technological_design fl_ar">
                  <div class="borderf fl_center"><img :src="item.img" alt /></div>
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <div class="picbox fl_be_al">
              <img src="../../static/team.png" alt />
              <div class="fl_be_al img_pic">
                <img src="../../static/team.png" alt />
                <img src="../../static/team.png" alt />
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
          :src="item.image"
          :alt="item.id"
        />
      </div>
    </div>
    <div class="presell_bottom">
      <div class="more poniter" @click="handmore" v-if="morelist.length<hotdata.length">查看更多</div>
      <div class="more poniter" v-else>收起</div>
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
    <!-- VR实例 -->
    <div class="vr">
      <img src="../assets/image/vrc.png" alt />
      <div class="vrmore poniter"></div>
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
      <p class="colord2">不上班茶几上成绩按开始此是世界第三代不上班茶几上成绩按开始此是世界第三代</p>
      <div class="hotnav">
        <span
          v-for="(item,index) in inforList"
          :key="index"
          :class="{'hot_active':item===typeinfor}"
          @click="handInfor(item)"
        >{{item}}</span>
      </div>
    </div>
    <!-- 资讯展示 -->
    <div class="mationmain">
      <transition name="bounce" mode="out-in" class="mationparent">
        <div class="inforparent" v-for="(item,index) in list1 " :key="index">
          <div>
            <div class="inforlist">
              <img src="../../static/pic.png" alt />
              <div class="infor_txt">
                <div class="b">
                  12{{item}}
                  <span>/month</span>
                </div>
                <span class="hline"></span>
                <h6 class="h6tit"></h6>
                <span class="hline1"></span>
                <p class="txtp two-wrap">社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快</p>
              </div>
              <div class="blok"></div>
            </div>
            <!--  -->
            <div class="infornews_parent">
              <div class="infornews" v-for="(item,index) in inList" :key="index">
                <p class="txtp1 one-wrap">{{item.infotxt}}</p>
                <div>{{item.time}}</div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!--  -->
      <div class="btn">
        <button @click="handprve"><span class="iconfont icon-jiantou"></span></button>
        <button @click="handnext"><span class="iconfont icon-arrow_right"></span></button>
      </div>
    </div>
    <!-- 地图展示 -->
    <div>
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
        <div class="txt1">村墅人家覆盖265个大城市，服务全国1030个地区</div>
        <div class="txt2">真实客户案例2000+</div>
      </div>
    </div>
  </div>
</template>

<script>
import recommendData from '../product.js'
import hotlist from '@/components/hostList.vue'
export default {
  components: {
    hotlist
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
          img: require('../assets/image/liucheng/kf.png'),
          name: '联系客服',
          name1: '联系客服',
          name2: '选定产品',
          name3: '提供材料'
        },
        {
          img: require('../assets/image/liucheng/dj.png'),
          name: '支付定金',
          name1: '支付定金',
          name2: '沟通需求',
          name3: '签订合同'
        },
        {
          img: require('../assets/image/liucheng/sjs.png'),
          name: '设计师对接',
          name1: '对接设计',
          name2: '确定方案',
          name3: '持续服务'
        },
        {
          img: require('../assets/image/liucheng/ht.png'),
          name: '合同执行',
          name1: '方案定稿',
          name2: '支付完结',
          name3: '签订合同'
        },
        {
          img: require('../assets/image/liucheng/ys.png'),
          name: '验收完成',
          name1: '结构设计',
          name2: '水电设计',
          name3: '验收发货'
        }
      ],
      type: '新中式',
      morelist: [], // 查看更多
      idx: 2,
      inforList: [
        '建房资讯',
        '建房百科',
        '设计百科',
        '装修百科',
        '施工百科',
        '风水百科'
      ],
      typeinfor: '建房资讯',
      inList: [
        {
          infotxt:
            '社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快',
          time: '19 - 12 - 11'
        },
        {
          infotxt:
            '社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快',
          time: '19 - 12 - 11'
        },
        {
          infotxt:
            '社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快',
          time: '19 - 12 - 11'
        },
        {
          infotxt:
            '社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快',
          time: '19 - 12 - 11'
        }
      ],
      list: [1, 2, 3],
      list1: [],
      design: [
        {
          img: require('../assets/image/shejishi/jiaoliu.png'),
          name: '初步探讨'
        },
        {
          img: require('../assets/image/shejishi/vip.png'),
          name: '图纸设计'
        },
        {
          img: require('../assets/image/shejishi/xgtu.png'),
          name: '出效果图'
        },
        {
          img: require('../assets/image/shejishi/sgtu.png'),
          name: '出施工图'
        },
        {
          img: require('../assets/image/shejishi/sdfahuo.png'),
          name: '审单发货'
        },
        {
          img: require('../assets/image/shejishi/sg.png'),
          name: '施工指导'
        }
      ]
    }
  },
  watch: {},
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
    this.list1 = this.list.slice(0, 1)
  },
  methods: {
    handhotnav (nav) {
      let list = [...this.hotdata] // 拷贝原数组
      list = list.filter(item => item.type === nav)
      this.type = nav
      this.hotlist = list
    },
    handInfor (nav) {
      let list = [...this.hotdata] // 拷贝原数组
      list = list.filter(item => item.type === nav)
      this.typeinfor = nav
      this.hotlist = list
    },
    handmore () {
      // 每点击一次增加一条内容
      this.idx++
      let list = [...this.morelist]
      this.morelist = [...list, ...this.hotdata.slice(this.idx++, this.idx + 3)]
    },
    handprve () {
      let first = this.list.shift()
      this.list.push(first)
      this.list1 = this.list.slice(0, 1)
    },
    handnext () {
      console.log(1)
      let last = this.list.pop()
      this.list.unshift(last)
      this.list1 = this.list.slice(0, 1)
    },
    // 设计师了解详情
    handLearn () {
      this.$router.push({
        path: '/teamDetail'
      })
    }
  },
  mounted () {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  }
}
</script>

<style scoped>
@import '@/assets/index.css'
</style>
