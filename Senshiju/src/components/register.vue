<template>
  <!-- 注册 -->
  <div class="modlue">
    <div class="login_box">
      <div class="register">
        <div class="register_logo">
          <img src="../assets/image/logo (1).svg" alt />
          <i class="el-icon-close" @click="handclose"></i>
        </div>
        <div class="register_bot">
          <div class="erwm">
            <h6>手机扫码登录</h6>
            <wxlogin
              style="height: 300px"
              :appid="'wxe960929de0880424'"
              :scope="'snsapi_userinfo'"
              :redirect_uri="'http://villa.jisapp.cn/index/Login/wx_login'"
            ></wxlogin>
            <p>打开手机微信APP 在【首页—扫一扫】扫描二维码登录</p>
          </div>
          <div class="swich">
            <div class="navnav">
              <span
                v-for="(item, index) in navlist"
                :key="index"
                :class="[index === navid ? 'navactive' : '']"
                @click="handswich(index)"
                >{{ item }}</span
              >
            </div>
            <div>
              <p id="red" v-if="p1">请输入手机号</p>
              <p id="red" v-if="p4">请输入正确的手机</p>
              <input
                type="text"
                class="input"
                placeholder="请输入手机号"
                v-model="userinfo.phone"
                @change="inp1"
              />
              <p id="red" v-if="p2">请输入密码</p>
              <div class="rel">
                <input
                  type="text"
                  class="input"
                  placeholder="请输入四位验证码"
                  v-model="code"
                  @change="inp3"
                />
                <div class="pos poniter" @click="getauth" v-if="tmeValue == 60">
                  <div class="line"></div>
                  获取验证码
                </div>
                <div class="pos poniter" v-else>
                  <div class="line"></div>
                  {{ tmeValue }} s后获取
                </div>
              </div>
            </div>
            <button @click="handsubmit">注册</button>
            <p>未注册的手机号验证后将自动登录 登录后即表示同意《服务协议》</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import request from '@/request.js'
import wxlogin from 'vue-wxlogin'
import login from '@/components/login.vue'
export default {
  components: { wxlogin, login },
  data() {
    return {
      userinfo: {
        phone: '',
        password: '',
      },
      code: '',
      navlist: ['短信登录/注册', '密码登录'],
      navid: 0,
      tmeValue: 60,
      flag: 0,
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      obj: '',
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      islogin: (state) => state.islogin,
      userInfor: (state) => state.userInfor,
      isShowregister: (state) => state.isShowregister,
      isShowlogin: (state) => state.isShowlogin,
    }),
  },
  created() {
    request
      .getQrcode()
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {})
      .finally(() => {})
  },
  methods: {
    handclose() {
      this.$store.commit('ShowRegister', false)
      // this.$router.push({
      //     path: '/',
      //   })
    },
    // 获取验证码
    time() {
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
    },
    getauth() {
      if (/^1[34578]\d{9}$/.test(this.userinfo.phone)) {
        request
          .getCode({
            phone_num: this.userinfo.phone,
          })
          .then((res) => {
            if (res.code == 0) {
              this.$message({
                showClose: true,
                message: '发送成功',
                type: 'success',
              })
              this.time()
            } else {
              this.$message({
                showClose: true,
                message: '发送失败',
                type: 'error',
              })
            }
          })
          .catch(() => {
            this.$message({
              showClose: true,
              message: '发送失败',
              type: 'error',
            })
          })
          .finally(() => {})
      } else {
        this.$message({
          showClose: true,
          message: '手机格式不正确',
          type: 'error',
        })
      }
    },
    //注册
    handsubmit() {
      if (
        this.userinfo.phone == '' &&
        this.userinfo.password == '' &&
        this.code == ''
      ) {
        this.p1 = true
        this.p2 = true
        this.p3 = true
        return false
      } else {
        let phone = this.userinfo.phone
        let smscode = this.code
        request
          .getRegister({
            type: 1,
            phone,
            psd: '',
            smscode,
          })
          .then((res) => {
            console.log(res, '')
            this.$store.commit('settoken', res.data)
            localStorage.setItem('istoken', res.data.token)
            console.log(localStorage.getItem('istoken'))
            this.$message({
              showClose: true,
              message: '注册成功',
              type: 'success',
            })
            this.$router.push({
              path: '/',
            })
            this.$store.commit('ShowRegister', false)
          })
          .catch((e) => {
            this.$message({
              showClose: true,
              message: '注册失败',
              type: 'error',
            })
          })
          .finally(() => {})
      }
    },
    // 切换登录与注册
    handswich(idx) {
      if (idx == 0) {
        this.$store.commit('ShowRegister', true)
        this.$store.commit('ShowLogin', false)
      } else {
        this.$store.commit('ShowRegister', false)
        this.$store.commit('ShowLogin', true)
      }
    },
    inp1() {
      //手机验证
      console.log(2)
      if (this.userinfo.phone == '') {
        this.p1 = true
        return false
      } else {
        this.p1 = false
      }
    },
    inp2() {
      //密码不能为空
      if (this.userinfo.password == '') {
        this.p2 = true
        return false
      } else {
        this.p2 = false
      }
    },
    inp3() {
      //验证码不能为空
      if (this.code == '') {
        this.p3 = true
        return false
      } else {
        this.p3 = false
      }
    },
  },
}
</script>

<style scoped>
#red {
  min-height: 14px;
  height: auto;
  _height: 14px;
  padding: 8px 6px 2px;
  line-height: 14px;
  font-size: 12px;
  color: #fc4343;
  text-align: left;
  margin: 0;
}
i {
  border: 1px solid #eee;
  padding: 4px;
}
i:hover {
  border-color: #ffae26;
  color: #ffae26;
}

.register_logo {
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.register_logo img {
  width: 271px;
  height: 58px;
  padding: 10px;
}
.erwm {
  width: 295px;
}
.erwm h6 {
  font-size: 28px;
  color: rgba(17, 17, 17, 1);
  line-height: 43px;
}
.erwm p {
  font-size: 17px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(73, 72, 72, 1);
  line-height: 25px;
}
.erwm img {
  border: 1px solid #bfbfbf;
  box-shadow: 1px 2px 2px #bfbfbf, 1px -1px 2px #bfbfbf, -1px 1px 2px #bfbfbf,
    -1px -1px 2px #bfbfbf;
}
.register_bot {
  display: flex;
  justify-content: space-between;
}
.swich {
  width: 488px;
}
.swich span:nth-of-type(1) {
  margin-right: 52px;
}
.swich span {
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  padding-bottom: 7px;
  line-height: 25px;
}
.swich .navnav {
  margin-bottom: 41px;
}
.swich .navnav span {
  cursor: pointer;
  transition: all 0.6s;
}
.swich p {
  width: 316px;
  height: 52px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(139, 139, 139, 1);
  line-height: 32px;
  margin: 0 auto;
  margin-top: 26px;
}
/* .pass {
  margin: 30px 0;
} */
.input {
  width: 483px;
  height: 60px;
  background: rgba(245, 245, 245, 1);
  border: 1px solid rgba(191, 191, 191, 1);
  margin-bottom: 30px;
  padding-left: 47px;
  box-sizing: border-box;
  font-size: 14px;
}
.pos .line {
  width: 1px;
  height: 35px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  background: rgba(120, 120, 120, 1);
  display: inline-block;
  margin-right: 18px;
}
.rel {
  position: relative;
  height: 60px !important;
}
.pos {
  position: absolute;
  top: 15px;
  right: 29px;
  color: #ffae26;
  display: flex;
  align-items: center;
}
button {
  width: 488px;
  height: 58px;
  background: rgba(255, 174, 38, 1);
  font-size: 21px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(245, 245, 245, 1);
  line-height: 30px;
  border: 0;
  margin-top: 54px;
  cursor: pointer;
  outline: none;
}
.navactive {
  color: #ffae26;
  border-bottom: 2px solid #ffae26;
}

input:focus {
  border-color: #ffae26 !important;
}
input::-webkit-input-placeholder {
  color: #787878;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #787878;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #787878;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #787878;
}
.modlue {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
  top: 0;
  z-index: 99;
  left: 0;
}
.login_box {
  background: #fff;
  width: 976px;
  height: 640px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -488px;
  margin-top: -338px;
  border-radius: 6px;
  padding: 34px 67px 102px 40px;
  box-sizing: border-box;
}
</style>
