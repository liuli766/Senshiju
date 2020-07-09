<template>
  <!-- 订单 -->
  <div>
    <!-- 用户信息 -->
    <div class="yellobg">
      <div class="userintro">
        <img src="../assets/image/logo.png" alt />
        <div class="username fl_center">
          <span>陈某某</span>
          <span>普通用户</span>
        </div>
      </div>
    </div>
    <main>
      <nav class="nav">
        <router-link to="/">首页</router-link>>
       <span>用户中心</span>>
        <router-link to="/order">我的订单</router-link>
      </nav>
      <!-- div -->
      <div class="order">
        <!-- 用户中心 -->
        <div class="centerbox">
          <div class="usercenter">
            <h6>用户中心</h6>
            <div v-for="(item,index) in chosedlist" :key="index" :class="{active:chosed==index}" @click="hanchosed(index)">
              <span v-html="item.i"></span>{{item.name}}
            </div>
          </div>
          <div class="kfcenter">
            <h6>客服热线</h6>
            <div>
              <p>订购/咨询热线</p>
              <p>177-0811-0852</p>
            </div>
            <div>
              <p>售后服务热线</p>
              <p>028-85828273</p>
            </div>
          </div>
          <div class="kferwm">
            <h6>客服热线</h6>
            <img src alt />
          </div>
        </div>

        <!-- 订单列表 -->
        <div class="orderlist" v-show='chosed==0'>
          <h6>订单列表</h6>
          <div class="ordernav">
            <span v-for="(item,index) in ordernavlist" :key="index">{{item}}</span>
          </div>
          <div v-for="(item,i) in ordercotentlist" :key="'1'+i" class="ordercont fl_ar">
            <span>{{item.bh}}</span>
            <span>{{item.sp}}</span>
            <span>{{item.price}}</span>
            <span>{{item.address}}</span>
            <span>{{item.time}}</span>
            <span>{{item.statue}}</span>
          </div>
        </div>
        <!-- 浏览记录 -->
        <div></div>
        <!-- 收获地址 -->
        <div></div>
        <!-- 个人资料 -->
        <div></div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      ordernavlist: ['编号', '商品', '价格', '地址', '时间', '状态'],
      chosed:0,
      chosedlist:[
        {
         i:'<i class="el-icon-tickets"></i>',
          name:'我的订单'
        },
        {
         i:'<i class="el-icon-view"></i>',
         name:'浏览记录'
        },
        {
         i: '<i class="el-icon-location-outline"></i>',
         name:'收货地址'
        },
        {
         i: '<i class="el-icon-user"></i>',
         name:'个人资料'
        }
      ],
      ordercotentlist: [
        {
          bh: 123,
          sp: '不是举报',
          price: 23,
          address: '重庆',
          time: '18:00',
          statue: '好'
        },
        {
          bh: 123,
          sp: '不是举报',
          price: 23,
          address: '重庆',
          time: '18:00',
          statue: '好'
        }
      ]
    }
  },
  methods: {
    hanchosed(e){
      this.chosed=e
    }
  },
}
</script>

<style scoped>
.usercenter > div.active{
  color: #ffc92f;
}
.usercenter span{
  margin-right: 22px;
  font-size: 27px;
}
.yellobg {
  height: 184px;
  background: rgba(255, 201, 47, 1);
  line-height: 184px;
}
.userintro {
  text-align: left;
  color: #fff;
  display: flex;
  height: 184px;
}
.userintro img {
  width: 138px;
  height: 138px;
  background: rgba(238, 238, 238, 1);
  border-radius: 50%;
  margin-top: 21px;
  margin-right: 76px;
}
.userintro .username {
  flex-direction: column;
  box-sizing: border-box;
  height: 184px;
}
.userintro .username span:nth-of-type(1) {
  font-size: 36px;
  font-family: Microsoft YaHei;
  /* font-weight: bold; */
  line-height: 1;
}
.userintro .username span:nth-of-type(2) {
  font-size: 18px;
  font-family: Microsoft YaHei;
  /* font-weight: bold; */
  line-height: 1;
  margin-top: 16px;
}
main {
  background: #eeeeee;
}
nav {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  padding-top: 28px;
  margin-bottom: 23px;
  text-align: left;
  color: #616161;
}
.router-link-exact-active {
  color: #ffc92f;
}
.usercenter,
.kfcenter,
.kferwm {
  width: 278px;
  background: #fff;
  margin-bottom: 6px;
}
.usercenter h6,
.kfcenter h6,
.kferwm h6 {
  width: 278px;
  line-height: 37px;
  background: rgba(255, 201, 47, 1);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.usercenter > div {
  line-height: 48px;
  font-size: 16px;
  color: #424242;
  border-bottom: 1px solid #dcdcdc;
  width: 258px;
  margin: 0 auto;
  cursor: pointer;
  text-align: left;
  text-indent: 10px;
}
.usercenter > div > i {
  margin-right: 23px;
  font-size: 23px;
}
.kfcenter > div > p {
  font: bold 18px/24px '';
  color: #717171;
  text-indent: 20px;
  text-align: left;
}
.kfcenter > div > p:nth-of-type(2) {
  margin-top: 20px;
}
.kfcenter > div {
  width: 258px;
  border-bottom: 1px solid #dcdcdc;
  margin: 0 auto;
  padding: 21px 0 16px 0;
}

.kfcenter > div:nth-last-of-type(1),
.usercenter > div:nth-last-of-type(1) {
  border: 0;
}
.kferwm img {
  width: 186px;
  height: 186px;
  margin: 19px 29px;
}
.kferwm {
  margin: 0;
}
.order {
  display: flex;
}

.orderlist {
  width: 906px;
  height: 49px;
  line-height: 49px;
}
.ordercont {
  background: #fff;
}
.ordercont>span{
  display: block;
  width: 120px;
  border-right: 1px solid #f5f5f5;
}
.centerbox {
  margin-right: 16px;
}
.orderlist h6 {
  font: bold 24px/49px '';
  color: #434343;
  background: rgba(197, 196, 196, 1);
}
.ordernav {
  background: #fff;
  display: flex;
  justify-content: space-around;
  /* padding: 16px 0; */
}
.ordernav>span{
  display: block;
  width: 120px;
  border-right: 1px solid #f5f5f5;
}
.ordernav > div:nth-of-type(4) {
  padding: 0 96px;
}

</style>