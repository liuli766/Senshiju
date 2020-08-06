<template>
<div>
  <img src="../assets/image/banner.png" class="bannerimg" alt="">
  <!-- 村野人家设计团队 -->
  <h5>村野人家设计团队</h5>
  <div class='teamen'>INTRODUCTION OF DESIGNER</div>
  <div></div>
  <p class="teamp">更加专业·更加精细化·满足高品质设计需求</p>
  <!-- 设计师 -->
  <main>
    <div class="designeteam fl_be">
      <div class="designe_item" v-for="(item,index) in moreList" :key="index">
        <div class="designeteam_l">
          <img :src="item.img" alt="">
        </div>
        <div class="designeteam_r">
          <div style="width:370px">
            <div class="tro">
              <div><span class="name">{{item.name}}</span><span class="occupation">{{item.zhiye}}</span></div>
              <div class="tro_r poniter" @click="handetaail(item)"><span class="details">查看详情</span><span class="ellipsis">...</span></div>
            </div>
              <p class="color6e">{{item.tag}}</p>
          </div>
          <div>
            <div class="works">作品精选</div>
            <div class="piclist">
              <img src="../../static/team_item.png" alt="" v-for="(pic,idx) in item.piclist" :key='idx'>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="poniter loadmore font22" @click="handmore" v-if='moreList.length<teamList.length'>加载更多</div>
    <div class="loadmore font22" v-else>没有更多了\(^o^)/~</div>
  </main>

</div>
</template>

<script>
import request from '@/request.js' 
export default {
  data () {
    return {
      navActiveCode: 'home',
      teamList: [
        {
          id: 0,
          name: '钟滢晶1',
          zhiye: '总设计师',
          tag: '感受爱，表达爱。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 1,
          name: '钟滢晶2',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 2,
          name: '钟滢晶3',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 3,
          name: '钟滢晶4',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 4,
          name: '钟滢晶5',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 5,
          name: '钟滢晶6',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 6,
          name: '钟滢晶7',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 7,
          name: '钟滢晶8',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 8,
          name: '钟滢晶9',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 9,
          name: '钟滢晶10',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 10,
          name: '钟滢晶11',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 11,
          name: '钟滢晶12',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 12,
          name: '钟滢晶13',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        },
        {
          id: 13,
          name: '钟滢晶14',
          zhiye: '总设计师',
          tag: '用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待。',
          piclist: ["require('../../static/team_item.png')", "require('../../static/team_item.png')", "require('../../static/team_item.png')"],
          img: require('../../static/team.png')
        }
      ],
      idx: 7,
      moreList: []// 查看更多
    }
  },
  created () {
    if (this.teamList < 8) {
      this.moreList = this.teamList
    } else {
      this.moreList = this.teamList.slice(0, 8)
    }
  },
  mounted () {
    // let nav = document.querySelector('.nav')
    // nav.style.display = 'none'
    // if (location.pathname === '/DesignTteam') {

    // }
  },
  methods: {
    // 点击导航栏
    changeNav (nav) {
      this.navActiveCode = nav.code
      this.$router.push({path: nav.url})
    },
    // 加载更多
    handmore () {
      this.idx++;
      let list = [...this.moreList]
      this.moreList = [...list, ...this.teamList.slice(this.idx++, this.idx + 1)]
    },
    // 查看详情
    handetaail (src) {
      this.$router.push({
        path: '/teamDetail',
        query: {
          id: src.id,
          name: src.name
        }
      })
    }
  }

}
</script>

<style scoped>
.bannerimg{
  width: 100%;
  height: 100%;
}
main{
  background: #FAFAFA;
  padding-top: 40px;
  padding-bottom: 23px;
}
h5{
  margin-top: 88px;
  font: bold 40px/1 '';
  margin-bottom: 14px;
}
.teamen{
  font: 400 20px/1 "Microsoft YaHei";
  color:rgba(20, 19, 19);
  margin-bottom:28px;
}
.teamp{
  font:400 20px/1 "Microsoft YaHei";
  color:rgba(0,0,0,1);
  padding-bottom: 49px;
}
.serchbox{
  width:1200px;
  margin: 0 auto;
}
.team{
  background: url(/static/banner.png) no-repeat;
  height: 715px;
  background-size: 100% 100%;
}
.nav1{
    background: rgba(55,57,63,.8);
    height: 120px;
}
nav{
  display: flex;
  align-items: center;
}
nav ul {
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 24px;
}
nav ul li{
  color: #fff;
}
nav ul li:nth-of-type(4){
  margin-left:298px ;
}
nav img{
  margin-top:14px;
  position: absolute;
  left:50%;
  margin-left:-123.5px;
  top: 10px;
}
.serch{
  position: relative;
  float: right;
  margin-bottom: 20px;
}
.serch input{
  box-sizing: border-box;
  width: 182px;
  height: 35px;
  background: #fdd45f;
  border-radius: 17.5px;
  padding-left: 20px;
  color:#fff;
  font-size: 16px;
}
.hea-active{
  /* background: #FED560; */
}
.designeteam_r{
  width:370px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
}
.designeteam_r .tro{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.designeteam_r .tro .name{
  font:400 20px/1 "";
}
.designeteam_r .tro .occupation{
  font:400 14px/20px "";
  color:#6E6E6E;
  margin-left: 19px;
}
.designe_item{
  display: flex;
  align-items: center;
  width:586px;
  height:310px;
  background:rgba(255,254,254,1);
  padding: 25px 14px 48px 14px;
  box-sizing: border-box;
}
.details{
  font:400 12px/1 "";
  color: #6E6E6E;
}
.ellipsis{
  display: block;
  width:18px;
  height:18px;
  border:1px solid rgba(117,113,110,1);
  border-radius:50%;
  margin-left: 9px;
}
.tro_r{
  display: flex;
  align-items: center;
}
.designeteam_r  p{
  font:400 14px/20px "";
  margin-top: 23px;
  text-align: left;
}
.works{
  font:400 14px/1 '';
  text-align: left;
}
.designeteam_l img{
  width:158px;
  height:237px;
  margin-right: 31px;
}
.piclist{
  width:370px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}
.piclist img{
  width:116px;
  height:110px;
}
.designeteam{
  flex-wrap: wrap;
}
.loadmore{
  height:70px;
  background:rgba(255,255,255,1);
  margin-top: 40px;
  line-height: 70px;

}
</style>
