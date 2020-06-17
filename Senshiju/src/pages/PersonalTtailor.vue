<template>
  <div class="team">
    <div class="nav1">
    <div class="serchbox">
      <div class="serch"><input type="text" placeholder="请输入关键词" ></div>
    </div>
    <nav class="header">
      <img src="../assets/image/logo (1).png" alt="">
      <ul>
        <li v-for="(item,index) in navList" :key='index'
        @click="changeNav(item)" :class="{'header-active':navActiveCode === item.code}">{{item.name}}</li>
      </ul>
    </nav>
  </div>
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
  mounted () {
    let nav = document.querySelector('.nav')
    nav.style.display = 'none'
  },
  methods: {
    // 点击导航栏
    changeNav (nav) {
      this.navActiveCode = nav.code
      this.$router.push({path: nav.url})
    }
  }

}
</script>

<style scoped>
.serchbox{
  width:1200px;
  margin: 0 auto;
}
.team{
  background: url(/static/private.png) no-repeat;
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
.header-active{

}
</style>
