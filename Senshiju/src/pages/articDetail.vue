<template>
  <div>
    <div class="detailbox fl_be">
      <div>
        <div class="ing">
          当前位置：
          <router-link to="/">首页</router-link>
          > 建房资讯 > {{next}}
        </div>
        <div class="detail">
          <h6>
            {{this.$route.query.title}}
            <span
              class="poniter span2"
              v-if="detaillist.is_collect==true"
            >已收藏</span>
            <span
              class="poniter span1"
              v-if="detaillist.is_collect==false"
              @click.stop="collect(detaillist.id)"
            >收藏</span>
          </h6>
          <div class="fl_be detailtj">
            <span>
              <i class="el-icon-view"></i>
              浏览数：{{detaillist.view}}人已读
            </span>
            <span>{{detaillist.add_time}}</span>
          </div>
          <p v-html="detaillist.content"></p>
          <img :src="detaillist.cover" alt />
          <div class="fl_be poniter">
            <span class="one-wrap" @click="gonext(detaillist.id)">上一篇:{{prev}}</span>
            <span class="one-wrap" @click="goprev(detaillist.id)">下一篇:{{next}}</span>
          </div>
        </div>
      </div>
      <div>
        <div class="newinfo poniter">
          <h6>小编精选</h6>
          <div v-for="(item,k) in newarr" :key="k" @click="goself(item.id)">
            <div class="info">
              <img :src="item.cover" alt />
              <div class="block">
                <p>{{item.title}}</p>
              </div>
            </div>
            <div
              class="p wrap"
              v-if="prev!=='无'"
              @click="gonext(detaillist.id)"
            >{{item.id}}.{{prev}}</div>
            <div
              class="p wrap"
              v-if="next!=='无'"
              @click="gonext(detaillist.id)"
            >{{item.id}}.{{next}}</div>
          </div>
        </div>
        <div class="hotnavbox">
          <span
            class="hotnav poniter"
            @click="handhotnav(index)"
            :class="{hotactive:hotnavid===index}"
            v-for="(item,index) in hotlist"
            :key="index"
          >{{item}}</span>
          <div
            v-for="(item,idx) in hotmoney"
            :key="'1'+idx"
            class="hotcontent poniter"
            @click="godetail(item)"
          >
            <img :src="item.cover" alt />
            <div class="fl_be hotnum poniter">
              <span>{{item.price}}</span>
              <span>
                <b>销量:</b>
                {{item.moods}}
              </span>
            </div>
            <p class="intro two-wrap">{{item.intro}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import newinfo from '@/components/newinfo.vue'
import request from '@/request.js'
export default {
  components: {
    newinfo,
  },
  data() {
    return {
      hotlist: ['热门爆款', '热门新品'],
      hotnavid: 0,
      hotmoney: [],
      detaillist: {},
      next: '',
      prev: '',
      newarr: [],
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      islogin: (state) => state.islogin,
      userInfor: (state) => state.userInfor,
    }),
  },
  created() {
    this.getdetail()
    this.Hots('moods')
    this.getzixun()
  },
  methods: {
    getdetail() {
      //详情
      if (!this.token) {
        request
          .getInfo({
            id: this.$route.query.id,
          })
          .then((res) => {
            this.detaillist = res.data.detail
            this.next = res.data.next
            this.prev = res.data.prev
          })
          .catch((e) => {})
          .finally(() => {})
        return false
      } else {
        request
          .getInfo({
            uid: this.userInfor.member_id,
            id: this.$route.query.id,
          })
          .then((res) => {
            this.detaillist = res.data.detail
            this.next = res.data.next
            this.prev = res.data.prev
          })
          .catch((e) => {})
          .finally(() => {})
      }
    },
    collect(num) {
      // 收藏

      if (!this.token) {
        this.$router.push({
          path: '/login',
        })
        return false
      }
      request
        .getCollect({
          uid: this.userInfor.member_id,
          type: 2,
          object: num,
        })
        .then((res) => {
          this.getdetail()
          this.$message({
            showClose: true,
            message: '收藏成功,请在个人中心，文章收藏里面查看',
            type: 'success',
          })
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: '收藏失败',
            type: 'error',
          })
        })
        .finally(() => {})
    },
    Hots(str) {
      //热门爆款
      request
        .getHots({
          page: 1,
          sort: str,
        })
        .then((res) => {
          this.hotmoney = res.data
          console.log(res)
        })
        .catch((e) => {})
        .finally(() => {})
    },
    handhotnav(e) {
      //热销推荐切换
      this.hotnavid = e

      if (e == 0) {
        this.Hots('moods')
      }
      if (e == 1) {
        this.Hots('add_time')
      }
    },
    getzixun() {
      //小编精选
      request
        .getHomebaike({
          page: 1,
          class: '小编精选',
        })
        .then((res) => {
          console.log(res, '资讯')
          this.newarr = res.data.slice(0, 1)
        })
        .catch((e) => {})
        .finally(() => {})
    },
    godetail(item) {
      //跳转产品详情

      let idname = item.id
      this.$router.push({
        path: '/productDetail',
        query: {
          id: idname,
        },
      })
    },
    gonext(item) {
      //上一篇 文章详情
      if (item - 1 > 0) {
        this.$router.push({
          path: '/articDetail',
          query: {
            id: item - 1,
          },
        })
        this.getdetail()
      }
    },
    goprev(item) {
      //下一篇 文章详情
      console.log(this.$route.query.length)
      let length = localStorage.getItem('length')
      if (item + 1 <= length) {
        this.$router.push({
          path: '/articDetail',
          query: {
            id: item + 1,
          },
        })
        this.getdetail()
      }
    },
    goself(id) {
      this.$router.push({
        path: '/articDetail',
        query: {
          id,
        },
      })
      this.getdetail()
    },
  },
}
</script>

<style scoped>
.hotnavbox {
  margin-top: 26px;
  margin-left: 30px;
}
.hotnavbox .intro {
  color: #4b4b4b;
  font-size: 16px;
  line-height: 28px;
}
.hotnav {
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
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
.hotnum {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #2a2a2a;
  margin: 27px 0 19px 0;
}
.hotnum b {
  color: #8e8e8e;
}
.hotcontent p {
  font-size: 14px;
  line-height: 22px;
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
  font-weight: bold;
  font-size: 24px;
  line-height: 1;
  color: #565656;
  margin: 35px 0 45px 0;
}
.hotcontent img {
  width: 298px;
  height: 244px;
  margin: 20px 0 0px 0;
}
.detailtj {
  border-bottom: 1px solid #b5b5b5;
  padding-bottom: 18px;
}
.detail > p {
  font: 400 16px/29px 'Microsoft YaHei';
  color: #707070;
}
.detail > p:nth-of-type(1) {
  margin-top: 17px;
  margin-bottom: 28px;
  text-indent: 20px;
}
.h5 {
  font: bold 18px/28px 'Microsoft YaHei';
  color: #707070;
  margin: 26px 0 32px 0;
}
.p {
  text-indent: 20px;
}
.detail img {
  width: 551px;
  height: 309px;
  margin: 0 0 70px 0;
}
.span1 {
  font-size: 20px;
  background: #ffde87;
  color: #fff;
  width: 121px;
  height: 34px;
  border-radius: 15px;
  text-align: center;
  line-height: 34px;
  display: inline-block;
}
.span2 {
  display: inline-block;
  font-size: 20px;
  background: #7d7d7d;
  color: #aeaeae;
  width: 121px;
  height: 34px;
  border-radius: 15px;
  text-align: center;
  line-height: 34px;
}
.newinfo {
  margin-left: 30px;
}
.newinfo h6 {
  font: 400 18px /26px 'Microsoft YaHei';
  width: 175px;
  border-bottom: 4px solid #ffde87;
  margin: auto;
  margin-bottom: 22px;
  text-align: center;
}
.newinfo .info {
  position: relative;
  width: 269px;
}
.newinfo .info img {
  width: 269px;
  height: 191px;
}
.newinfo .info .block {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px 3px 8px;
}
.newinfo .info .block p {
  font: 400 14px/23px 'Microsoft YaHei';
  color: #fff;
  text-align: justify;
}
.newinfo .p {
  width: 268px;
  border-bottom: 1px dashed #bfbfbf;
  line-height: 26px;
  text-align: left;
}
</style>