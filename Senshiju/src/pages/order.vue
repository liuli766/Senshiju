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
            <div
              v-for="(item,index) in chosedlist"
              :key="index"
              :class="{active:chosed==index}"
              @click="hanchosed(index)"
            >
              <span v-html="item.i"></span>
              {{item.name}}
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
        <div class="orderlist" v-show="chosed==0">
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
        <!-- 个人资料 -->
        <div v-show="chosed==1" class="orderlist">
          <h6>个人信息</h6>
          <div class="personinfo">
            <div class="fl_be">
              <span>头像</span>
              <div>
                <!-- <img src="../assets/image/1.png" alt /> -->
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="fl_be">
              <span>昵称</span>
              <div>
                <span>某某某</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="fl_be">
              <span>修改手机号</span>
              <div>
                <span>已绑定：151****7474</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <button>退出登录</button>
          </div>
        </div>
        <!-- 收获地址 -->
        <div v-show="chosed==2" class="orderlist">
          <h6>收货地址</h6>
          <div class="address">
            <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="地区选择：">
                <div class="fl_be">
                  <select v-model="prov">
                    <option
                      :value="item.text ||''"
                      v-for="(item,pro) in provunce"
                      :key="pro"
                    >{{item.text||''}}</option>
                  </select>
                  <select v-model="city">
                    <option
                      :value="item.text||''"
                      v-for="(item,cid) in cityArr"
                      :key="cid"
                    >{{item.text|| ''}}</option>
                  </select>
                  <select>
                    <option
                      :value="item.text||''"
                      v-for="(item,pro) in districtArr"
                      :key="pro"
                    >{{item.text||""}}</option>
                  </select>
                </div>
              </el-form-item>
              <el-form-item label="详细地址：">
                <el-input type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="收货人姓名：">
                <el-input type="text"></el-input>
              </el-form-item>
              <el-form-item label="手机号码：">
                <el-input type="text"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="btn" @click="submitForm('ruleForm2')">提交</el-button>
              </el-form-item>
            </el-form>
            <div>
              <div class="ordernav addr">
                <span>收货人</span>
                <span>省市区</span>
                <span>详细地址</span>
                <span>手机/电话</span>
                <span>操作</span>
              </div>
              <div class="ordercont fl_ar">
                <span>李某某</span>
                <span>成都市高新西区</span>
                <span>西源大道1号合作街道52号</span>
                <span>17784845585</span>
                <span>
                  <span>修改</span>|
                  <span>删除</span>
                </span>
                <span class="defut">默认地址</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 图纸收藏 -->
        <div class="orderlist" v-show="chosed==3">
          <h6>收藏的图纸</h6>
          <div class="coll flx">
            <img src="../assets/image/3.png" alt />
            <div class="center">
              <p>C335三层欧式新农村别墅自建房图纸设计</p>
              <div class="fl_be">
                <span>￥368</span>
                <span>2020-05-26</span>
              </div>
            </div>
            <div class="ycoll">已收藏</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import citydata from '../assets/comm/city'
import request from '@/request.js' 
export default {
  data() {
    return {
      ordernavlist: ['编号', '商品', '价格', '地址', '时间', '状态'],
      chosed: 0,
      chosedlist: [
        {
          i: '<i class="el-icon-tickets"></i>',
          name: '我的订单'
        },
        {
          i: '<i class="el-icon-user"></i>',
          name: '个人资料'
        },
        {
          i: '<i class="el-icon-location-outline"></i>',
          name: '收货地址'
        },
        {
          i: '<i class="el-icon-location-outline"></i>',
          name: '图纸收藏'
        },
        {
          i: '<i class="el-icon-location-outline"></i>',
          name: '文章收藏'
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
      ],
      provunce: citydata,
      prov: '北京市', //第一级
      city: '市辖区', //第二级
      district: '东城区', //第三级
      cityArr: [], //选择市
      districtArr: [] //选择县
    }
  },
  watch: {
    prov: function() {
      this.updateCity()
      this.updateDistrict()
    },
    city: function() {
      this.updateDistrict()
    }
  },
  created() {},
  methods: {
    hanchosed(e) {
      this.chosed = e
    },
    updateCity() {
      for (var i in this.provunce) {
        var obj = this.provunce[i]
        if (obj.text == this.prov) {
          this.cityArr = obj.children
          break
        }
      }
      if (this.cityArr[0]) {
        this.city = this.cityArr[0].text || ''
      }
    },
    updateDistrict() {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i]
        if (obj.text == this.city) {
          this.districtArr = obj.children
          break
        }
      }
      if (
        this.districtArr &&
        this.districtArr.length > 0 &&
        this.districtArr[0].text
      ) {
        if (this.districtArr[1]) {
          this.district = this.districtArr[1].text || ''
        }
      } else {
        this.district = ''
      }
    }
  },
  beforeMount() {
    this.updateCity()
    this.updateDistrict()
  }
}
</script>

<style scoped>
.usercenter > div.active {
  color: #ffc92f;
}
.usercenter span {
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
.ordercont > span {
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
.ordernav > span {
  display: block;
  width: 120px;
  border-right: 1px solid #f5f5f5;
}
.ordernav > div:nth-of-type(4) {
  padding: 0 96px;
}
.personinfo {
  background: #fff;
  padding: 0 24px;
  font-size: 18px;
  font-family: SimHei;
  line-height: 33px;
  color: #1a1a1a;
  padding-bottom: 228px;
}
.personinfo > div {
  height: 87px;
  border-bottom: 1px dashed #a0a0a0;
}
.personinfo button {
  margin-top: 243px;
  width: 207px;
  height: 60px;
  background: rgba(255, 201, 47, 1);
  border-radius: 30px;
  border: 0;
  outline: none;
  font-size: 24px;
  font-family: SimHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 33px;
}
.address {
  background: #fff;
  padding-top: 42px;
}
form {
  margin-left: 59px;
  margin-right: 204px;
}
form .btn {
  width: 152px;
  height: 42px;
  background: rgba(255, 201, 47, 1);
  border-radius: 10px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 23px;
}
.address select {
  width: 154px;
  height: 34px;
  border: 1px solid rgba(229, 229, 229, 1);
  font-size: 16px;
  color: rgba(67, 67, 67, 1);
  line-height: 23px;
  outline: none;
}
.address select option {
  outline: none !important;
  border: 0 !important;
}
.defut {
  width: 96px;
  height: 43px;
  background: rgba(255, 214, 204, 1);
  border-radius: 5px;
  font-size: 18px;
  color: rgba(255, 15, 15, 1);
}
.coll {
  background: #fff;
  align-items: center;
  padding: 0 40px;
}
.coll img {
  width: 156px;
  height: 111px;
}
.coll .center {
  margin-right: 174px;
  margin-left: 40px;
}
.ycoll {
  width: 121px;
  height: 34px;
  background: rgba(255, 201, 47, 1);
  border-radius: 15px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 34px;
}
</style>