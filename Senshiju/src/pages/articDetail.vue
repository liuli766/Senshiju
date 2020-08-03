<template>
  <div>
    <div class="detailbox fl_be">
      <div>
        <div class="ing">
          当前位置：
          <router-link to="/">首页</router-link>> 建房资讯 > 农村小庭院怎么设计好看，两层景观庭院好看只要40万
        </div>
        <div class="detail">
          <h6>{{this.$route.query.h6}}</h6>
          <div class="fl_be detailtj">
            <span>
              <i class="el-icon-view"></i>浏览数：1068人已读
            </span>
            <span>2020-05-26 09.41.03</span>
          </div>
          <p>有时就想人这一生挺无聊的，无非是为了车子，房子，票子，女子和孩子，其中房子是中国人的头等大事， 有钱了要么在城市买房，要么在农村建房，如果你在农村也有宅基地，一定要回家建房， 一家人住一个大院子</p>
          <p>农村小庭院怎么设计好看? 下面为大家分享40万两层简欧景观庭院简单实用，如果你也喜欢，可以咨询客服定制设计哦。</p>
          <div class="h5">1.简单低调的欧式外观</div>
          <p
            class="p"
          >农村地广人稀，最多的土地，建个大院子才能显示气派，一般农村宅基地会在120-300平之间，做 个庭院也是常有的事，大部分人都自己设计，等别墅建房好后在四周做个围墙就更加完美了。</p>
          <img src="../assets/image/vdeo.png" alt />
          <div class="fl_be poniter">
            <span class="one-wrap">上一篇:想在农村设计一套私家庭院景观，这里有专业的设计方案</span>
            <span class="one-wrap">下一篇:想在农村设计一套私家庭院景观，这里有专业的设</span>
          </div>
        </div>
      </div>
      <div>
        <newinfo />
        <div class="hotnavbox">
          <span
            class="hotnav"
            @click="handhotnav(index)"
            :class="{hotactive:hotnavid===index}"
            v-for="(item,index) in hotlist"
            :key="index"
          >{{item}}</span>
          <div v-for="(item,idx) in hotmoney" :key="'1'+idx" class="hotcontent">
              
            <img :src="item.img" alt />
            <div class="fl_be hotnum">
              <span>{{item.price}}</span>
              <span><b>销量:</b> {{item.num}}</span>
            </div>
            <p>{{item.info}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newinfo from '@/components/newinfo.vue'
import request from '@/request.js' 
export default {
  components: {
    newinfo
  },
  data() {
    return {
      hotlist: ['热门爆款', '热门新品'],
      hotnavid: 0,
      hotmoney: [
        {
          img: require('../assets/image/vdeo.png'),
          price: '¥599.00',
          num: 3,
          info: '新款二层新中式农村自建房别墅施工图纸'
        }
      ]
    }
  },
  created() {
    console.log(this.$route.query)
  },
  methods: {
    handhotnav(e) {
      this.hotnavid = e
    }
  }
}
</script>

<style scoped>
.hotnavbox {
  margin-top: 26px;
}
.hotnav {
  font: bold 20px/31px '';
  color: #3a3a3a;
  padding: 4px 23px;
  border-bottom: 3px solid #3a3a3a;
}
.hotactive {
  color: #ffd053;
  border-color: #ffd053;
}
.hotnav + .hotnav {
  margin-left: 30px;
}
.detailbox {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  align-items: end;
}
.detail {
  width: 875px;
  padding: 0 41px 22px 56px;
  border: 1px solid #434343;
  box-sizing: border-box;
}
.hotnum{
    font: bold 16px/23px '';
    color: #2A2A2A;
    margin: 27px 0 19px 0;
}
.hotnum b{
    color: #8E8E8E;
}
.hotcontent p{
    font:400 14px /23px;
    color: #434343;
}
.detailbox .ing {
  font-size: 12px;
  font-family: FZTYSK;
  font-weight: normal;
  color: rgba(86, 86, 86, 1);
  margin-bottom: 18px;
}
.detail h6 {
  font: bold 24px/1 '';
  color: #565656;
  margin: 35px 0 45px 0;
}
.hotcontent img {
  width: 298px;
  height: 244px;
  margin:20px 0  0px 0;
}
.detailtj {
  border-bottom: 1px solid #b5b5b5;
  padding-bottom: 18px;
}
.detail > p {
  font: 400 16px/29px '';
  color: #707070;
}
.detail > p:nth-of-type(1) {
  margin-top: 17px;
  margin-bottom: 28px;
  text-indent: 20px;
}
.h5 {
  font: bold 18px/28px '';
  color: #707070;
  margin: 26px 0 32px 0;
}
.p {
  text-indent: 20px;
}
.detail img {
  width: 551px;
  height: 309px;
  margin: 28px 0 70px 0;
}
</style>