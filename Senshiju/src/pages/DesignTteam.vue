<template>
  <div>
    <img src="../assets/image/banner.png" class="bannerimg" alt />
    <!-- 村野人家设计团队 -->
    <h5>村野人家设计团队</h5>
    <div class="teamen">INTRODUCTION OF DESIGNER</div>
    <div></div>
    <p class="teamp">更加专业·更加精细化·满足高品质设计需求</p>
    <!-- 设计师 -->
    <main>
      <div class="designeteam fl_be">
        <div class="designe_item" v-for="(item,index) in moreList" :key="index">
          <div class="designeteam_l">
            <img :src="item.cover" alt />
          </div>
          <div class="designeteam_r">
            <div style="width:370px">
              <div class="tro">
                <div>
                  <span class="name">{{item.name}}</span>
                  <span class="occupation">{{item.position}}</span>
                </div>
                <div class="tro_r poniter" @click="handetaail(item)">
                  <span class="details">查看详情</span>
                  <span class="ellipsis">...</span>
                </div>
              </div>
              <p class="color6e two-wrap">{{item.intro}}</p>
            </div>
            <div>
              <div class="works">作品精选</div>
              <div class="piclist">
                <img :src="pic" alt v-for="(pic,idx) in item.works" :key="idx" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="poniter loadmore font22"
        @click="handmore"
        v-if="moreList.length<teamList.length"
      >加载更多</div>
      <div class="loadmore font22" v-else>没有更多了\(^o^)/~</div>
    </main>
  </div>
</template>

<script>
import request from '@/request.js'
export default {
  data() {
    return {
      navActiveCode: 'home',
      teamList: [],
      idx: 7,
      moreList: [], // 查看更多
    }
  },
  created() {
    // 设计师团队
    request
      .teamIndex({
        page: 1,
      })
      .then((res) => {
        console.log(res, '设计师团队')
        this.teamList = res.data
        if (this.teamList < 8) {
          this.moreList = this.teamList
        } else {
          this.moreList = this.teamList.slice(0, 8)
        }
      })
      .catch((e) => {})
      .finally(() => {})
  },
  mounted() {},
  methods: {
    // 点击导航栏
    changeNav(nav) {
      this.navActiveCode = nav.code
      this.$router.push({ path: nav.url })
    },
    // 加载更多
    handmore() {
      this.idx++
      let list = [...this.moreList]
      this.moreList = [
        ...list,
        ...this.teamList.slice(this.idx++, this.idx + 1),
      ]
    },
    // 查看详情
    handetaail(src) {
      this.$router.push({
        path: '/teamDetail',
        query: {
          id: src.id,
          name: src.name,
        },
      })
    },
  },
}
</script>

<style scoped>
.bannerimg {
  width: 100%;
  height: 100%;
}
main {
  background: #fafafa;
  padding-top: 40px;
  padding-bottom: 23px;
}
h5 {
  margin-top: 88px;
  font: bold 40px/1 'Microsoft YaHei';
  margin-bottom: 14px;
}
.teamen {
  font: 400 20px/1 'Microsoft YaHei';
  color: rgba(20, 19, 19);
  margin-bottom: 28px;
}
.teamp {
  font: 400 20px/1 'Microsoft YaHei';
  color: rgba(0, 0, 0, 1);
  padding-bottom: 49px;
}
.serchbox {
  width: 1200px;
  margin: 0 auto;
}
.team {
  background: url(../assets/image/banner.png) no-repeat;
  height: 715px;
  background-size: 100% 100%;
}
.nav1 {
  background: rgba(55, 57, 63, 0.8);
  height: 120px;
}
nav {
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
nav ul li {
  color: #fff;
}
nav ul li:nth-of-type(4) {
  margin-left: 298px;
}
nav img {
  margin-top: 14px;
  position: absolute;
  left: 50%;
  margin-left: -123.5px;
  top: 10px;
}
.serch {
  position: relative;
  float: right;
  margin-bottom: 20px;
}
.serch input {
  box-sizing: border-box;
  width: 182px;
  height: 35px;
  background: #fdd45f;
  border-radius: 17.5px;
  padding-left: 20px;
  color: #fff;
  font-size: 16px;
}
.hea-active {
  /* background: #FED560; */
}
.designeteam_r {
  width: 370px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
}
.designeteam_r .tro {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.designeteam_r .tro .name {
  font: 400 20px/1 'Microsoft YaHei';
}
.designeteam_r .tro .occupation {
  font: 400 14px/20px 'Microsoft YaHei';
  color: #6e6e6e;
  margin-left: 19px;
}
.designe_item {
  display: flex;
  align-items: center;
  width: 586px;
  height: 310px;
  background: rgba(255, 254, 254, 1);
  padding: 25px 14px 48px 14px;
  box-sizing: border-box;
}
.details {
  font: 400 12px/1 'Microsoft YaHei';
  color: #6e6e6e;
}
.ellipsis {
  display: block;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(117, 113, 110, 1);
  border-radius: 50%;
  margin-left: 9px;
}
.tro_r {
  display: flex;
  align-items: center;
}
.designeteam_r p {
  margin-top: 23px;
  text-align: left;
  font: 400 14px/20px 'Microsoft YaHei';
}
.works {
  font: 400 14px/1 'Microsoft YaHei';
  text-align: left;
  font-size: 14px;
  line-height: 1;
}
.designeteam_l img {
  width: 158px;
  height: 237px;
  margin-right: 31px;
}
.piclist {
  width: 370px;
  display: flex;
  align-items: center;
  margin-top: 16px;
}
.piclist img {
  width: 116px;
  height: 110px;
  margin-right: 10px;
}
.designeteam {
  flex-wrap: wrap;
}
.loadmore {
  height: 70px;
  background: rgba(255, 255, 255, 1);
  margin-top: 40px;
  line-height: 70px;
}
</style>
