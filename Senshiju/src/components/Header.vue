<template>
  <div>
    <ul>
      <li v-for="(item,index) in navList" :key='index'
       @click="changeNav(item)" :class="{'header-active':navActiveCode === item.code}">{{item.name}}</li>
    </ul>
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
    }
  }
}
</script>

<style scoped>
ul{
height:100px
}
li{
  width: 100px;
  line-height: 80px;
  float: left;
}
.header-active{
  color:red;
}
</style>
