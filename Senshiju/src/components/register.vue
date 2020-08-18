<template>
  <!-- 注册 -->
  <div class="register">
    <div class="register_logo">
      <img src="../assets/image/logo (1).png" alt />
      <i class="el-icon-close"></i>
    </div>
    <div class="register_bot">
      <div class="erwm">
        <h6>手机扫码登录</h6>
        <wxlogin  :appid="'wxe960929de0880424'" :scope="'snsapi_login'"  :redirect_uri="'http://villa.jisapp.cn/index/Login/qr_code'"  ></wxlogin> 
        <p>打开手机微信APP 在【首页—扫一扫】扫描二维码登录</p>
      </div>
      <div class="swich">
        <div class="navnav">
          <span
            v-for="(item,index) in navlist"
            :key="index"
            :class="[index===navid?'navactive':'']"
            @click="handswich(index)"
          >{{item}}</span>
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
            <input type="text" class="input" placeholder="请输入四位验证码" v-model="code" @change="inp3" />
            <div class="pos poniter" @click="time" v-if="tmeValue==60">
              <div class="line"></div>获取验证码
            </div>
            <div class="pos poniter" @click="time" v-else>
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
</template>

<script>
import { mapState } from 'vuex'
import request from '@/request.js'
import wxlogin from 'vue-wxlogin';
export default {
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
    // 获取验证码
    time() {
      if (this.userinfo.phone !== '') {
        let ph = /^1[3|5|7|8|][0-9]{9}$/
        if (!ph.test(this.userinfo.phone)) {
          this.$message({
            showClose: true,
            message: '手机号格式不正确',
            type: 'warning',
          })
        } else {
          let phone_num = this.userinfo.phone
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
            this.$message({
              showClose: true,
              message: '注册成功',
              type: 'success',
            })
            this.$router.push({
              path: '/',
            })
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
        this.$router.push({
          path: '/register',
        })
      } else {
        this.$router.push({
          path: '/login',
        })
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
.register {
  padding: 34px 63px 102px 39px;
  width: 976px;
  margin: 40px auto;
  box-shadow: 3px 2px 2px #bfbfbf, 1px -1px 2px #bfbfbf, -1px 1px 2px #bfbfbf,
    -1px -1px 2px #bfbfbf;
  height: 680px;
}
.register_logo {
  display: flex;
  width: 976px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 69px;
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
</style>
