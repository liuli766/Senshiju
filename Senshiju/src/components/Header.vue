<template>
  <div class="nav">
    <nav class="header">
      <img src="../assets/image/logo.png" alt />
      <ul>
        <li
          class="poniter"
          v-for="(item,index) in navList"
          :key="index"
          @click="changeNav(item,index,$event)"
          :class="[{li4:item.name==='建房百科'},[[hedeid==null?'bgcolor':[hedeid==index?'header-active':'']],]]"
        >
          {{item.name}}
          <div class="dropdown">
            <li v-for="(item,index) in meau" @click="handitem(index)" :key="index">{{item}}</li>
          </div>
        </li>
      </ul>
      <div class="head poniter regieandlogin" v-if="token">
        <img v-if="headimg!==null" :src="headimg" class="photo"  @click="goperson"/>
        <img v-if="headimg==null" :src="userInfor.photo" class="photo"  @click="goperson"/>
      </div>
      <div class="regieandlogin poniter" v-else>
        <router-link to="/register">注册</router-link>|
        <router-link to="/login">登录</router-link>
      </div>

      <div class="serch">
        <input type="text" placeholder="请输入关键词" @keyup.enter="serch" v-model="search" />
        <img src="../assets/image/fixed/serch.png" alt class="serchimg" @click="serch" />
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import request from '@/request.js'
export default {
  data() {
    return {
      li4: 'li4',
      tok: localStorage.getItem('istoken'), //token
      navList: [
        {
          name: '首页',
          url: '/',
          code: 'home',
        },
        {
          name: '建房图库',
          url: '/buildingHouseLibrary',
          code: 'Library',
        },
        {
          name: '设计团队',
          url: '/DesignTteam',
          code: 'Tteam',
        },
        {
          name: '私人订制',
          url: '/PersonalTtailor',
          code: 'Ttailor',
        },
        {
          name: '建房百科',
          url: '/BuildingEncyclopedia',
          code: 'Encyclopedia',
        },
      ],
      meau: [
        '建房百科',
        '设计百科',
        '装修百科',
        '施工百科',
        '风水百科',
        '建房日志',
      ],
      navid: 0, // 当前选中的导航
      search: '', //搜索字符串,
    }
  },
  computed: {
    ...mapState({
      hedeid: (state) => state.hedeid,
      token: (state) => state.token,
      islogin: (state) => state.islogin,
      userInfor: (state) => state.userInfor,
      serchlist: (state) => state.serchlist,
      headimg: (state) => state.headimg,
    }),
  },
  watch: {},
  created() {
    console.log(this.hedeid)
  },
  methods: {
    // 点击导航栏
    changeNav(nav, index) {
      sessionStorage.setItem('idnum', index) // 保存下标
      this.$store.commit('headnav', parseInt(sessionStorage.getItem('idnum')))
      this.$router.push({ path: nav.url })
    },
    serch() {
      request
        .getHots({
          page: 1,
          search: this.search,
        })
        .then((res) => {
          console.log(res)
          this.$router.push({
            path: '/search',
          })
          this.$store.commit('Serch', res.data)
        })
        .catch((e) => {})
        .finally(() => {})
    },
    handitem(idx) {
      // 跳转建房百科
      this.$router.push({
        path: '/BuildingEncyclopedia',
      })
      this.$store.commit('meauidfn', idx)
    },
    goperson() {
      this.$router.push({
        path: '/order',
      })
    },
  },
}
</script>

<style scoped>
nav ul li {
  position: relative;
}
.li4 {
  position: relative;
}
.li4:hover .dropdown {
  display: block;
}
.dropdown {
  position: absolute;
  background: url('../assets/image/jfrz.png');
  background-size: 100% 100%;
  width: 300px;
  top: 42px;
  right: -70px;
  font-size: 24px;
  height: 400px;
  font-family: Microsoft YaHei;
  color: rgba(0, 0, 0, 1);
  line-height: 40px;
  display: none;
  z-index: 999;
}
.dropdown li:nth-of-type(1) {
  margin-top: 78px;
}
.dropdown li {
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  margin: 0 47px 12px 47px;
}
.dropdown li:hover {
  color: #f5c134;
  border-color: #f5c134;
}
.buildenc {
  font-size: 24px;
}
.nav {
  display: flex;
  align-items: center;
}
nav {
  display: flex;
  align-items: center;
}
nav ul {
  width: 912px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0 30px;
  font-size: 24px;
  position: relative;
}
nav img {
  margin-top: 14px;
}
.serch {
  position: relative;
}
.serchimg {
  position: absolute;
  top: -8px;
  right: 9px;
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
.header-active {
  background: #fed560;
  padding: 10px;
  border-radius: 10px;
}
.regieandlogin {
  width: 146px;
  color: #242424;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  line-height: 32px;
  background: #eeeeee;
  border-radius: 10px;
  margin-right: 46px;
  margin-left: 95px;
  padding: 6px 12px;
  box-sizing: border-box;
}
.el-dropdown-item:hover {
  background-color: #fff !important;
  color: #f5c134 !important;
}
.head img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.head {
  background: #fff;
  margin: 0;
}
nav li {
  background: #fff;
}
nav li:nth-of-type(1).bgcolor {
  background: #fed560;
  padding: 10px;
  border-radius: 10px;
}
</style>
<style>
el-dropdown-item:hover {
  background-color: #fff !important;
  color: #f5c134 !important;
}
</style>
