<template>
  <div class="nav">
    <nav class="header">
      <img src="../assets/image/logo.png" alt="">
      <ul>
        <li v-for="(item,index) in navList" :key='index'
        @click="changeNav(item)" :class="{'header-active':navActiveCode === item.code}">{{item.name}}</li>
      </ul>
      <div class="serch"><input type="text" placeholder="请输入关键词" @click="handsearch"></div>
    </nav>

  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          name: '首页',
          url: '/',
          code: 'home'
        },
        {
          name: '建房图库',
          url: '/buildingHouseLibrary',
          code: 'Library'
        },
        {
          name: '设计团队',
          url: '/DesignTteam',
          code: 'Tteam'
        },
        {
          name: '私人订制',
          url: '/PersonalTtailor',
          code: 'Ttailor'
        },
        {
          name: '建房日志',
          url: '/BuildingLog',
          code: 'Log'
        },
        {
          name: '建房百科',
          url: '/BuildingEncyclopedia',
          code: 'Encyclopedia'
        }
      ],
      navActiveCode: 'home'
    }
  },
  methods: {
    // 点击导航栏
    changeNav (nav) {
      this.navActiveCode = nav.code
      this.$router.push({path: nav.url})
    },
    handsearch () {
      this.$router.push({
        path: '/search'
      })
    }
  }
}
</script>

<style scoped>
.nav{
    display: flex;
    align-items: center;
}
nav{
  display: flex;
  align-items: center;
}
nav ul {
  width: 912px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0 112px 0 66px;
  font-size: 24px;
}
nav img{
  margin-top:14px
}
.serch{
  position: relative;
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
.header-active{
  /* background: #FED560; */
  padding: 10px;
}
</style>
