<template>
  <!-- 订单 -->
  <div>
    <!-- 用户信息 -->
    <div class="yellobg">
      <div class="userintro">
        <img :src="headimg" alt />
        <div class="username fl_center">
          <span>{{userInfor.nickname}}</span>
          <span>普通用户</span>
        </div>
      </div>
    </div>
    <main>
      <nav class="nav">
        <router-link to="/">首页</router-link>>
        <span>用户中心</span>>
        <span v-show="chosed==0" class="active">我的订单</span>
        <span v-show="chosed==1" class="active">个人资料</span>
        <span v-show="chosed==2" class="active">收货地址</span>
        <span v-show="chosed==3" class="active">图纸收藏</span>
        <span v-show="chosed==4" class="active">文章收藏</span>
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
              @click="hanchosed(index, typeid)"
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
          <div v-if="ordercotentlist.length==0">没有订单</div>
          <div v-for="(item,i) in ordercotentlist" :key="'1'+i" class="ordercont fl_ar" v-else>
            <span>{{item.order_num}}</span>
            <span>{{item.title}}</span>
            <span>{{item.price}}</span>
            <span>{{item.address}}</span>
            <span>{{item.pay_time}}</span>
            <span>{{item.status}}</span>
          </div>
        </div>
        <!-- 个人资料 -->
        <div v-show="chosed==1" class="orderlist">
          <h6>个人信息</h6>
          <div class="personinfo">
            <!-- <div class="fl_be">
              <span>头像</span>
              <div class="fl_center adatar">
                <img :src="adatar?adatar:userInfor.photo" alt class="photo" />
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/gif, image/jpeg, image/jpg, image/png"
                  @change="fileChange"
                />
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>-->
            <!-- <button @click="upload">提交</button> -->

            <div class="fl_be">
              <span>头像</span>
              <el-upload
                class="avatar-uploader"
                action="http://villa.jisapp.cn/index/User/up_image"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :data="{uid:userInfor.member_id}"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar photo" />
                <img v-else :src="headimg" class="photo" />
                <i class="el-icon-arrow-right" style="margin-top: 20px;"></i>
              </el-upload>
            </div>

            <div class="fl_be">
              <span>昵称</span>
              <div>
                <span>
                  <input type="text" v-model="userInfor.nickname" />
                </span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="fl_be">
              <span>修改手机号</span>
              <div>
                <span>
                  已绑定：
                  <input type="text" v-model="userInfor.phone_num" />
                </span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="fl_be">
              <span>修改密码</span>

              <div>
                <span>
                  <input type="password" v-model="password" />
                </span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="fl_be" @click="setpwd">
              <span>设置密码</span>

              <div>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <button @click="preser">保存</button>
            <button @click="outlogin">退出登录</button>
          </div>
          <div class="setpwd" v-if="setpedflag">
            <h5>
              <span>设置密码</span>
              <i class="el-icon-close poniter" @click="goclose"></i>
            </h5>
            <input type="text" :value="userInfor.phone_num" class="ip" />
            <div class="rel">
              <input type="text" class="ip" placeholder="请输入4位验证码" />
              <div class="pos poniter" v-if="tmeValue==60" @click="time">
                <div class="line"></div>获取验证码
              </div>
              <div class="pos poniter" v-else>
                <div class="line"></div>
                {{ tmeValue }} s 后获取
              </div>
            </div>
            <input type="text" placeholder="请输入新密码（8+20位，数字/字母/符号" class="ip" />
            <input type="text" placeholder="再次确认新密码" class="ip" />
            <div class="btn" @click="sure">确定</div>
          </div>
        </div>

        <!-- 收获地址 -->
        <div v-show="chosed==2" class="orderlist">
          <h6>收货地址</h6>
          <div class="address">
            <el-form
              status-icon
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
              :model="ruleForm2"
              :rules="rules"
            >
              <el-form-item label="地区选择：">
                <div class="fl_be">
                  <select v-model="prov">
                    <option
                      :value="item.text"
                      v-for="(item,pro) in provunce"
                      :key="pro"
                    >{{item.text}}</option>
                  </select>
                  <select v-model="city">
                    <option
                      :value="item.text"
                      v-for="(item,cid) in cityArr"
                      :key="cid"
                    >{{item.text}}</option>
                  </select>
                  <select v-model="district">
                    <option
                      :value="item.text"
                      v-for="(item,pro) in districtArr"
                      :key="pro"
                    >{{item.text}}</option>
                  </select>
                </div>
              </el-form-item>
              <el-form-item label="详细地址：" prop="addr">
                <el-input type="textarea" v-model="ruleForm2.addr"></el-input>
              </el-form-item>
              <el-form-item label="收货人姓名：" prop="name">
                <el-input type="text" v-model="ruleForm2.name"></el-input>
              </el-form-item>
              <el-form-item label="手机号码：" prop="phone">
                <el-input type="text" v-model="ruleForm2.phone"></el-input>
              </el-form-item>
              <div class="dui" @click="gg">
                <span>
                  <img src="../assets/image/dui.png" alt v-show="ishook" />
                </span>
                设置为默认收货地址
              </div>
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
              <div style="height: 118px;overflow: auto;">
                <div class="ordercont fl_ar" v-for="(val,k) in addrlist" :key="k">
                  <span>{{val.name}}</span>
                  <span>{{val.province }}{{ val.city}} {{val.district}}</span>
                  <span>{{val.address}}</span>
                  <span>{{val.phone}}</span>
                  <span>
                    <span class="poi" @click="upd(val.id,k)">修改</span>|
                    <span @click="handdel(val.id)" class="poi">删除</span>
                  </span>
                  <span v-if="val.is_default==0"></span>
                  <span class="defut" @click="defut(val.id)" v-else>默认地址</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 图纸收藏 -->
        <div class="orderlist" v-show="chosed==3">
          <h6>收藏的图纸</h6>
          <div v-if="CollnectList.length==0">没有收藏的图纸</div>
          <div
            class="coll flx poniter"
            v-for="(item,k) in CollnectList"
            :key="k"
            @click="gopicdetail(item)"
          >
            <img :src="item.cover" alt />
            <div class="center">
              <p>{{item.title}}</p>
              <div class="fl_be">
                <span>￥{{item.cost}}</span>
                <span>{{item.add_time}}</span>
              </div>
            </div>
            <div
              class="ycoll"
              v-if="item.is_collect==1"
              @click.stop="qxcollect(item.collect_id)"
            >已收藏</div>
          </div>
        </div>
        <!-- 文章收藏 -->
        <div class="orderlist" v-show="chosed==4">
          <h6>收藏的文章</h6>
          <div v-if="CollnectList.length==0">没有收藏的文章</div>
          <div
            class="coll flx poniter"
            v-for="(item,k) in CollnectList"
            :key="k"
            @click="goartic(item)"
          >
            <img :src="item.cover" alt />
            <div class="center">
              <p>{{item.title}}</p>
              <div class="fl_be">
                <span>￥{{item.cost}}</span>
                <span>{{item.add_time}}</span>
              </div>
            </div>
            <div
              class="ycoll"
              v-if="item.is_collect==1"
              @click.stop="qxcollect(item.collect_id)"
            >已收藏</div>
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
import $ from 'jquery'
import axios from 'axios'
import qs from 'qs'
export default {
  data() {
    return {
      ordernavlist: ['编号', '商品', '价格', '地址', '时间', '状态'],
      chosed: 0,
      ruleForm2: {
        addr: '',
        name: '',
        phone: '',
      },
      rules: {
        addr: [
          { required: true, message: '详细地址不能为空', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '收货人姓名不能为空', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
        ],
      },
      chosedlist: [
        //侧边菜单栏
        {
          i: '<i class="el-icon-tickets"></i>',
          name: '我的订单',
        },
        {
          i: '<i class="el-icon-user"></i>',
          name: '个人资料',
        },
        {
          i: '<i class="el-icon-location-outline"></i>',
          name: '收货地址',
        },
        {
          i: '<i class="el-icon-location-outline"></i>',
          name: '图纸收藏',
        },
        {
          i: '<i class="el-icon-location-outline"></i>',
          name: '文章收藏',
        },
      ],
      ordercotentlist: [],
      provunce: citydata,
      prov: '北京市', //第一级
      city: '市辖区', //第二级
      district: '东城区', //第三级
      cityArr: [], //选择市
      districtArr: [], //选择县
      ishook: false, //勾勾是否选中
      addrlist: [], //收货地址
      updlist: [], //修改地址
      add_id: null,
      adatar: '', //头像
      password: '123456',
      dialogFormVisible: false, //弹框
      setpedflag: false,
      tmeValue: 60, //获取验证码时间
      flag: 0,
      typeid: 1, //图纸，文章
      CollnectList: [], //图纸收藏
      imageUrl: '',
      cityflag: 1,
      uploadurl: '', //上传图片的路径
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      islogin: (state) => state.islogin,
      userInfor: (state) => state.userInfor,
      headimg: (state) => state.headimg,
    }),
  },
  watch: {
    prov: function () {
      this.updateCity()
      this.updateDistrict()
      let num = localStorage.getItem('isid')
      let k = localStorage.getItem('isk')
      this.upd(num, k)
    },
    city: function () {
      this.updateDistrict()
    },
  },
  created() {
    console.log(this.userInfor, this.token)
    console.log(this.add_id)
    this.getshop()
    // this.uplaod()
    // if (!this.token) {
    //   this.$router.push({
    //     path: '/login',
    //   })
    //   return false
    // }
    // 我的订单
    request
      .getOrders({
        uid: this.userInfor.member_id,
      })
      .then((res) => {
        console.log(res, '我的订单')
        this.ordercotentlist = res.data
      })
      .catch((e) => {})
      .finally(() => {})
  },
  methods: {
    getshop() {
      // 收货地址
      request
        .getaddress({
          uid: this.userInfor.member_id,
        })
        .then((res) => {
          console.log(res, '地址')
          this.addrlist = res.data
          this.addrlist = this.addrlist.reverse()
          this.addrlist.map((item, k) => {
            this.add_id = k
          })
        })
        .catch((e) => {})
        .finally(() => {})
    },
    setpwd() {
      this.setpedflag = true
    },
    sure() {
      this.setpedflag = false
    },
    goclose() {
      this.setpedflag = false
    },
    time() {
      if (this.userInfor.phone_num !== '') {
        let ph = /^1[3|5|7|8|][0-9]{9}$/
        if (!ph.test(this.userInfor.phone_num)) {
          this.$message({
            showClose: true,
            message: '手机号格式不正确',
            type: 'warning',
          })
        } else {
          let phone_num = this.userInfor.phone_num
          request
            .getCode({ phone_num })
            .then((res) => {
              console.log(res, '获取验证码')
            })
            .catch((e) => {})
            .finally(() => {})
          //倒计时
          this.tmeValue = this.tmeValue - 1
          this.flag = 1
          if (this.tmeValue <= 0) {
            this.tmeValue = 60
            this.flag = 0
            return ''
          } else {
            setTimeout(() => {
              this.time()
            }, 1000)
          }
        }
      } else {
        this.$message({
          showClose: true,
          message: '手机号不能为空',
          type: 'error',
        })
      }
    },

    //修改个人资料
    preser() {
      request
        .getupInfo({
          member_id: this.userInfor.member_id,
          nickname: this.userInfor.nickname,
          phone_num: this.userInfor.phone_num,
          password: this.password,
        })
        .then((res) => {
          console.log(res, '修改个人资料')
          if (res.code == 0) {
            // this.upload()
            this.$message({
              showClose: true,
              message: '修改成功',
              type: 'success',
            })
          } else {
            this.$message({
              showClose: true,
              message: '修改失败',
              type: 'error',
            })
          }
        })
        .catch((e) => {})
        .finally(() => {})
    },

    // 修改收货地址
    upd(num, k) {
      let arr = this.addrlist
      console.log(arr[k])
      localStorage.setItem('isid', num)
      localStorage.setItem('isk', k)
      request
        .getupRes({
          id: num,
          uid: this.userInfor.member_id,
          address: arr[k].address,
          name: arr[k].name,
          phone: arr[k].phone,
          province: arr[k].province,
          city: arr[k].city,
          district: arr[k].district,
        })
        .then((res) => {
          this.cityflag = 0
          this.updateCity()
          this.updateDistrict()
          // this.updlist = this.addrlist.filter((item, k) => k == num)
          this.ruleForm2.addr = arr[k].address
          this.ruleForm2.name = arr[k].name
          this.ruleForm2.phone = arr[k].phone
          this.prov = arr[k].province
          this.city = arr[k].city
          this.district = arr[k].district
          console.log(this.prov, this.city, this.district)
          if (arr[k].is_default !== 0) {
            this.ishook = true
          }
          console.log(res, '修改')
        })
        .catch((e) => {})
        .finally(() => {})
    },
    //  添加收货地址
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let newaddr = []
          request
            .getAddRes({
              uid: this.userInfor.member_id,
              address: this.ruleForm2.addr,
              name: this.ruleForm2.name,
              phone: this.ruleForm2.phone,
              province: this.prov,
              city: this.city,
              district: this.district,
              is_default: this.ishook,
            })
            .then((res) => {
              let num = localStorage.getItem('isid')
              let k = localStorage.getItem('isk')
              this.upd(num, k)
              this.getshop()
              this.$message({
                showClose: true,
                message: '添加成功',
                type: 'success',
              })
            })
            .catch((e) => {
              this.$message({
                showClose: true,
                message: '添加失败',
                type: 'error',
              })
            })
            .finally(() => {})
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 删除收货地址
    handdel(num) {
      console.log(num + '')
      request
        .getDelRes({
          id: num + '',
        })
        .then((res) => {
          console.log(res)
          this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success',
          })
          this.getshop()
        })
        .catch((e) => {
          console.log(e)
          this.$message({
            showClose: true,
            message: '删除失败',
            type: 'error',
          })
        })
        .finally(() => {})
    },
    // 设为默认地址
    defut(num) {
      request
        .getSetRes({
          id: num,
        })
        .then((res) => {
          console, log(res)
          // this.ishook = true
          this.$message({
            showClose: true,
            message: '默认地址设置成功',
            type: 'success',
          })
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: '默认地址设置失败',
            type: 'error',
          })
        })
        .finally(() => {})
    },
    gg() {
      this.ishook = !this.ishook
    },

    // 图纸收藏
    collect(num) {
      request
        .fachcollect({
          uid: this.userInfor.member_id,
          type: num,
        })
        .then((res) => {
          this.CollnectList = res.data
          console.log(this.CollnectList, num)
        })
        .catch((e) => {})
        .finally(() => {})
    },
    //取消收藏
    qxcollect(idx) {
      request
        .getCancelcollect({
          uid: this.userInfor.member_id,
          c_id: idx,
        })
        .then((res) => {
          this.collect(1)
          this.$message({
            showClose: true,
            message: '取消成功',
            type: 'success',
          })
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: '取消失败',
            type: 'error',
          })
        })
        .finally(() => {})
    },

    // 退出登录
    outlogin() {
      this.$store.commit('cleartoken')
      this.$message({
        showClose: true,
        message: '退出成功',
        type: 'success',
      })
      this.$router.push({
        path: '/login',
      })
    },
    //
    goartic(item) {
      //跳转文章详情
      this.$router.push({
        path: '/articDetail',
        query: item,
      })
    },
    gopicdetail(item) {
      //跳转产品详情
      let idname = item.object_id
      console.log(item)
      this.$router.push({
        path: '/productDetail',
        query: {
          id: idname,
        },
      })
    },

    // // 上传成功回调
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.imageUrl = URL.createObjectURL(file.raw)
      if (res.code == 0) {
        this.imageUrl = res.data
        this.$message.success('上传成功')
        localStorage.setItem('headImg', res.data)
        let img = localStorage.getItem('headImg')
        this.$store.commit('uploadimg', img)
      } else {
        this.$message.error('上传失败')
      }
    },
    // 上传前格式和图片大小限制
    beforeAvatarUpload(file) {
      // console.log(file)
      // this.imageUrl = file
      const isJPG = true
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    //侧边导航切换
    hanchosed(e, typeid) {
      this.chosed = e
      if (e == 3) {
        typeid = 1 //图纸
        this.collect(typeid)
      } else if (e == 4) {
        typeid = 2 //文章
        this.collect(typeid)
      }
    },

    //  三级联动
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
    },
  },
  beforeMount() {
    this.updateCity()
    this.updateDistrict()
  },
}
</script>

<style scoped>
.rel {
  position: relative;
  height: 79px;
  margin-bottom: 45px;
}
.rel .line {
  width: 1px;
  height: 35px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  background: rgba(120, 120, 120, 1);
  display: inline-block;
  margin-right: 18px;
}
.pos {
  position: absolute;
  top: 15px;
  right: 172px;
  color: #ffae26;
  display: flex;
  align-items: center;
  font-size: 22px;
}
.ip {
  width: 619px;
  height: 79px;
  background: #f5f5f5;
}

.adatar {
  position: relative;
  width: 56px;
  height: 56px;
}
.adatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.adatar input {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}
input:focus {
  box-shadow: none;
}
input {
  text-align: right;
  width: 116px;
}
.photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
.dui {
  display: flex;
  align-items: center;
  margin-left: 162px;
}
.dui span {
  display: inline-flex;
  width: 27px;
  height: 27px;
  border-radius: 5px;
  background-color: #eeeeee;
  border: 1px solid #b7beb6;
  margin-right: 36px;
}
.poi {
  cursor: pointer;
}
.Cancelled {
  width: 121px;
  height: 34px;
  background: rgba(125, 125, 125, 1);
  border-radius: 15px;
  color: #aeaeae;
  font-size: 22px;
  line-height: 34px;
  cursor: pointer;
}
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
  height: 100%;
  padding-bottom: 150px;
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
  padding-bottom: 40px;
}

.orderlist {
  width: 906px;
  height: 49px;
  line-height: 49px;
  position: relative;
}
.setpwd {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  padding-bottom: 60px;
}
.setpwd input {
  text-align: left;
  padding: 0 27px;
  box-sizing: border-box;
  font-size: 22px;
  color: #9a9a9a;
  margin-bottom: 47px;
  border: 1px solid rgba(191, 191, 191, 1);
}
.setpwd h5 {
  height: 44px;
  font: bold 24px/1 '';
  color: #434343;
  text-align: left;
  margin-left: 29px;
  margin-top: 40px;
  border-bottom: 1px solid #bfbfbf;
  margin-bottom: 45px;
}
.setpwd h5 span {
  padding-bottom: 16px;
  border-bottom: 2px solid #ffc92f;
}
.setpwd input::placeholder {
  color: #9a9a9a;
}
.setpwd .btn {
  width: 619px;
  height: 79px;
  background: rgba(255, 201, 47, 1);
  color: #fff;
  font-size: 32px;
  margin: auto;
  line-height: 79px;
  cursor: pointer;
}
.ordercont {
  background: #fff;
}
.ordercont > span {
  display: block;
  width: 145px;
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
  padding-bottom: 46px;
}
.personinfo > div {
  height: 87px;
  border-bottom: 1px dashed #a0a0a0;
  cursor: pointer;
}
.personinfo button {
  margin-top: 130px;
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
  cursor: pointer;
}
.coll {
  background: #fff;
  align-items: center;
  padding: 0 40px;
  justify-content: space-between;
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
  cursor: pointer;
}
.active {
  color: #ffc92f;
}
.iiii {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
</style>