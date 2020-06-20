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
                <div>
                  <img src alt />
                  <span>初步探讨</span>
                </div>
                <div>
                  <img src alt />
                  <span>图纸设计</span>
                </div>
                <div>
                  <img src alt />
                  <span>出效果图</span>
                </div>
                <div>
                  <img src alt />
                  <span>出施工图</span>
                </div>
                <div>
                  <img src alt />
                  <span>审单发货</span>
                </div>
                <div>
                  <img src alt />
                  <span>施工指导</span>
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
                <div>
                  <img src alt />
                  <span>初步探讨</span>
                </div>
                <div>
                  <img src alt />
                  <span>图纸设计</span>
                </div>
                <div>
                  <img src alt />
                  <span>出效果图</span>
                </div>
                <div>
                  <img src alt />
                  <span>出施工图</span>
                </div>
                <div>
                  <img src alt />
                  <span>审单发货</span>
                </div>
                <div>
                  <img src alt />
                  <span>施工指导</span>
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
                <div>
                  <img src alt />
                  <span>初步探讨</span>
                </div>
                <div>
                  <img src alt />
                  <span>图纸设计</span>
                </div>
                <div>
                  <img src alt />
                  <span>出效果图</span>
                </div>
                <div>
                  <img src alt />
                  <span>出施工图</span>
                </div>
                <div>
                  <img src alt />
                  <span>审单发货</span>
                </div>
                <div>
                  <img src alt />
                  <span>施工指导</span>
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
            <img src="../assets/image/back.png" alt />
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
        <button @click="handprve">></button>
        <button @click="handnext">></button>
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
      list1: []
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
.mationmain {
  height: 600px;
  position: relative;
}
.designer {
  background: url('../assets/image/bgteam.png');
  background-size: 100% 100%;
  height: 744px;
  padding-top: 50px;
  box-sizing: border-box;
}
.designer_box {
  position: relative;
}
.designer_main {
  background: #e8aa48;
  color: #fff;
  width: 812px;
  height: 656px;
  padding: 29px;
  text-align: left;
  box-sizing: border-box;
  position: relative;
}
.designer_main h5 {
  font: bold 37px/32px '';
  color: #fff;
}
.h5_bot {
  font: 20px/1 '';
  margin: 11px 0 38px 0;
}
.h5_bot_div {
  font: 20px/1 '';
}
.h5_bot_div_div {
  font: 16px/1 '';
  margin: 12px 0 47px 0;
}
.dash {
  font: bold 26px/1 '';
  padding: 18px 0 22px 0;
  border-bottom: 1px dashed #fff;
  width: 330px;
}
.dash span {
  font: 400 26px/1 '';
}
.dashed {
  padding-bottom: 18px;
  border-bottom: 1px dashed #fff;
  width: 330px;
}
.liaojie {
  display: block;
  width: 206px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 1);
  color: #000;
  margin: 48px 0 29px 0;
}
.resevers {
  font: bold 24px/1 '';
  display: flex;
  align-items: center;
}
.resevers .fuwu {
  width: 280px;
  height: 1px;
  background: #fff;
  margin-left: 13px;
  position: relative;
}
.resevers div span {
  position: absolute;
  display: block;
  width: 92px;
  height: 3px;
  background: #fff;
}
.technological {
  margin-top: 31px;
}
.process div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.picbox {
  position: absolute;
  top: 56px;
  left: 429px;
}
.picbox > img {
  width: 262px;
  height: 376px;
}
.picbox div img {
  width: 368px;
  height: 181px;
}
.picbox div img:nth-of-type(1) {
  height: 195px;
}
.img_pic {
  flex-direction: column;
}
p {
  width: 448px;
  margin: 0 auto 0 auto;
  line-height: 20px;
}
.sw {
  width: 100%;
  height: 598px;
  display: block;
}
.w1200 {
  width: 1200px;
  margin: 0 auto;
}
.swiper-button-prev,
.swiper-button-next {
  width: 55px;
  height: 75px;
  background-image: none;
}
.swiper-button-next {
  transform: rotate(180deg);
  /* margin-right: 160px; */
}
.swiper-button-prev {
  /* margin-left: 160px; */
}
.hot {
  padding: 50px 0 32px 0;
}
.hotnav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.hotnav span {
  display: block;
  width: 84px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
}
.hotnav .hot_active {
  border: 1px solid #fdd45f;
  transition: all 0.8s;
  color: #fdd45f;
}
.parent {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #fff;
  padding-top: 40px;
}
.line {
  width: 100px;
  height: 1px;
  background: #d2d2d2;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.txt {
  margin: 10px;
  font: bold 24px/1 '';
}
.presell {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  background: #fff;
  padding-top: 40px;
}
.presell img {
  width: 392px;
  margin-bottom: 20px;
  height:238px;
}
.presell_child {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.presell_bottom {
  background: #fff;
  padding: 20px 0 40px 0;
}
.more {
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #000;
  color: #000;
  margin: 0 auto;
}
.bounce-enter-active {
  animation: slideInLeft 0.5s;
}
.bounce-leave-active {
  animation: slideInDown 0s;
  opacity: 0;
}
.service {
  position: relative;
  height: 36px;
}
.service_line {
  width: 1200px;
  height: 1px;
  background: #dcdcdc;
  margin: 0 auto;
}
.posfuwu {
  padding: 42px 0 40px 0;
  background: #fff;
  width: 1200px;
  margin: 0 auto;
}
.cicle {
  display: flex;
  position: absolute;
  top: -18px;
  width: 1024px;
  justify-content: space-between;
  left: 50%;
  margin-left: -512px;
  z-index: 9;
}
.cicle span {
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #dcdcdc;
  border: 1px solid #dcdcdc;
  line-height: 36px;
  background: #fff;
}
.process {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.process img {
  width: 74px;
  height: 74px;
  border-radius: 50%;
}
.fdae31 {
  width: 84px;
  height: 84px;
  border: 1px solid #fdae31;
  border-radius: 50%;
  margin: 0 auto;
}
.process li {
  list-style: disc;
  margin-bottom: 14px;
}
.h6 {
  color: #000;
  font: bold 20px/1 '';
  margin: 20px 0 18px 0;
}
.process_item {
  box-sizing: border-box;
  width: 208px;
  height: 260px;
  border: 1px solid #dcdcdc;
  padding: 16px 0;
  right: 0;
  left: 0;
}
/* 别墅资讯 */
.inforparent {
  padding: 40px 20px 0 20px;
  box-sizing: border-box;
  background: #fff;
}
.inforlist {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.blok {
  position: absolute;
  width: 120px;
  height: 130px;
  background: rgba(211, 211, 213, 0.7);
  bottom: -50px;
  left: -16px;
}
.btn {
  width: 110px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 196px;
  right: 18px;
}
.btn button {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #c3975c;
  color: #c3975c;
  background: #fff;
  outline: none;
}
.infor_txt {
  text-align: left;
}
.inforlist img {
  width: 594px;
  height: 334px;
  margin-right: 48px;
  position: relative;
  z-index: 1;
}
.b {
  font: bold 30px/1 '';
  color: #000;
  margin-bottom: 18px;
}
.b span {
  font: bold 12px/1 '';
  color: #333;
}
.hline {
  width: 130px;
  height: 1px;
  background: #7a797c;
  display: block;
}
.h6tit {
  font: 26px/1 '';
  color: #000;
  margin-top: 30px;
  margin-bottom: 14px;
}
.hline1 {
  display: block;
  width: 330px;
  height: 1px;
  background: #333;
}
.txtp {
  font: 17px/30px '';
  color: #949494;
}
.infornews_parent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #5b5b5b;
  flex-wrap: wrap;
  margin-top: 146px;
}
.infornews_parent .infornews {
  display: flex;
  justify-content: space-between;
  width: 521px;
}
.txtp1 {
  width: 284px;
  margin-bottom: 18px;
  margin: 0;
  margin-bottom: 30px;
}
/* vr */
.vr {
  position: relative;
  margin-top: 40px;
}
.vr img {
  width: 100%;
  height: 100%;
}
.vrmore {
  width: 205px;
  height: 46px;
  position: absolute;
  bottom: 122px;
  left: 50%;
  margin-left: -119.5px;
}
.mapshow {
  background: #fff;
  padding: 51px 107px 0 110px;
  box-sizing: border-box;
}
.mapshow .txt1 {
  font: 20px/20px '';
  color: #989898;
}
.mapshow .txt2 {
  font: 40px/20px '';
  color: #1f1f1f;
  margin-top: 41px;
}
</style>
