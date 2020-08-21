<template>
  <!-- 支付页面 -->
  <div class="pay">
    <h6>
      <img src="../assets/image/zf/支付方式.png" alt />
      支付方式
    </h6>
    <div class="zftype">
      <div class="payment flx">
        <div
          v-for="(item,k) in navlist"
          :key="k"
          class="paymentitem fl_center poniter"
          :class="{navactive:choeid==k}"
          @click="swichnav(k)"
        >
          <img :src="item.icon" alt />
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="cot">
        <!--微信 -->
        <div class="wx" v-show="choeid==0">
          <h6 class="flx">
            <img src="../assets/image/zf/wx.png" alt />
            <div class="flx col">
              <span>微信支付</span>
              <span>使用微信支付，请使用5.0版以上的微信</span>
            </div>
          </h6>
          <div class="qrcode">
            <img src alt />
            <div class="fl_center text col">
              <div>
                <img src="../assets/image/zf/扫一扫.png" alt />
                <span>打开手机微信扫码继续支付</span>
              </div>
              <div ref="qrCodeUrl" style="margin-top:20px"></div>
            </div>
          </div>
          <img class="img" src="../assets/image/zf/对话框.png" alt />
        </div>
        <!-- 支付宝 -->
        <div v-show="choeid==1" class="zfb">
          <img src="../assets/image/zf/zfbzf.png" alt />
          <p>单笔订单金额超过5万元，推荐您使用支付宝支付</p>
          <div class="btn" @click="gozhifubao">立即支付</div>
        </div>
        <el-dialog :visible.sync="orderSuccess" width="21.35%" top="30vh" center>
          <div class="dia-box">
            <img class="dia-img" src="../assets/image/pay-success.png" />
            <div class="title bold">支付成功</div>
          </div>
        </el-dialog>
        <!-- 对公账号 -->
        <div v-show="choeid==2" class="dgzh">
          <p>
            如果您需要使用对公账户转账，请联系
            <a
              :href="'tencent://message/?uin='+serverqq.qq+'&Site=&Menu=yes'"
              target="_blank"
            >
              <img
                :src="'http://wpa.qq.com/pa?p=2:'+serverqq.qq+':41'"
                alt="点击这里给我发消息"
                style="display: none;"
              />
              <span>在线客服</span>
            </a>
            ，或拨打客服电话
            <span>17708110852</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/request.js'
import { mapState } from 'vuex'
import QRCode from 'qrcodejs2'
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
      islogin: (state) => state.islogin,
      userInfor: (state) => state.userInfor,
      serverqq: (state) => state.serverqq,
    }),
  },
  data() {
    return {
      navlist: [
        {
          name: '微信支付',
          icon: require('../assets/image/zf/微信支付.png'),
        },
        {
          name: '支付宝',
          icon: require('../assets/image/zf/zfb.png'),
        },
        {
          name: '对公转账',
          icon: require('../assets/image/zf/对公转账.png'),
        },
      ],
      choeid: 0, //支付导航选中
      dataqr: '', //微信
      timer: null, //定时器名称
      ali_pay: '', //支付宝
      orderSuccess: true,
    }
  },

  created() {
    if (!this.token) {
      this.$router.push({
        path: '/login',
      })
      return false
    }
  },
  methods: {
    creatQrCode(qr) {
      console.log(qr)
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: qr, // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      })
    },
    gozhifubao() {
      request
        .getzfb({
          uid: this.userInfor.member_id,
          order_num: this.$route.query.data,
        })
        .then((res) => {
          this.ali_pay = res
          this.openZfb(res)
        })
        .catch((e) => {})
        .finally(() => {})
    },
    openZfb(form) {
      this.$confirm('是否支付成功？', '', {
        distinguishCancelAndClose: true,
        cancelButtonText: '失败',
        confirmButtonText: '成功',
      })
        .then(() => {})
        .catch(() => {})
      let routerData = this.$router.resolve({
        path: '/orderzfb',
        query: { htmls: form },
      })
      this.htmls = form // 打开新页面
      window.open(routerData.href, '_ blank')
      const div = document.createElement('div')
      div.innerHTML = htmls
      document.body.appendChild(div)
      setTimeout(() => {
        document.forms[0].submit()
      }, 100)
      console.log(htmls)
    },
    weixin() {
      request
        .getwxnotify({
          id: this.$route.query.data,
        })
        .then((res) => {
          console.log(res, '')
          if (res.status == 2) {
            this.orderSuccess = true
          }
        })
        .catch((e) => {
          // this.$message({
          //   showClose: true,
          //   message: '支付失败',
          //   type: 'error',
          // })
        })
        .finally(() => {})
    },

    orderpay() {
      // 支付
      request
        .getPay({
          uid: this.userInfor.member_id,
          order_num: this.$route.query.data,
        })
        .then((res) => {
          this.dataqr = res.data.wx_pay
          console.log(res, '支付')
          // 微信
          this.creatQrCode(this.dataqr)
        })
        .catch((e) => {})
        .finally(() => {})
    },
    swichnav(k) {
      this.choeid = k
      if (k == 0) {
        this.orderpay()
      }
    },
  },
  mounted() {
    if (this.choeid == 0) {
      this.orderpay()
    }

    // this.timer = setInterval(() => {
    //   setTimeout(this.weixin, 0)
    // }, 1000 * 10)
  },

  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
}
</script>

<style scoped>
.pay {
  width: 1175px;
  margin: 0 auto;
}
.pay h6 img {
  margin-right: 15px;
}
.pay h6 {
  color: #242424;
  font: bold 24px/20px '';
  margin-bottom: 29px;
  text-align: left;
}
.pay .zftype {
  width: 1175px;
  height: 503px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(146, 146, 146, 1);
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 20px;
}
.pay .payment {
  background: #f9f9f9;
  height: 69px;
  font: bold 22px/20px '';
  color: #505050;
  margin-bottom: 39px;
}
.pay .paymentitem {
  width: 163px;
  height: 69px;
}
.pay .paymentitem img {
  margin-right: 12px;
}
.navactive {
  color: #0084ff;
  background: url('../assets/image/zf/xzgg.png') no-repeat;
}
.cot .wx h6 img {
  margin-right: 7px;
}
.cot .wx {
  text-align: center;
  margin-left: 407px;
  position: relative;
}
.cot .wx h6 span:nth-of-type(1) {
  color: #1c1c1c;
  font: bold 30px/20px '';
  display: block;
}
.img {
  position: absolute;
  top: 78px;
  left: 247px;
}
.cot .wx h6 span:nth-of-type(2) {
  color: #1c1c1c;
  font: bold 16px/20px '';
  margin-top: 4px;
  display: block;
}
.cot .wx .qrcode {
  width: 210px;
  height: 277px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(146, 146, 146, 1);
}
.qrcode {
  color: #bfbfbf;
  font-size: 16px;
  padding: 12px;
}
.qrcode .text img {
  margin-right: 8px;
}
.qrcode .text span {
  text-align: left;
  line-height: 23px;
  letter-spacing: 9px;
}
.zfb img {
  margin-bottom: 48px;
}
.zfb p {
  font: 400 18px/22px 'Microsoft YaHei';
  color: #4b4b4b;
}
.zfb .btn {
  width: 175px;
  height: 56px;
  background: rgba(15, 142, 233, 1);
  border-radius: 10px;
  color: #fff;
  font: bold 20px/56px 'Microsoft YaHei';
  margin: auto;
  margin-top: 27px;
  cursor: pointer;
}
.dgzh p {
  font: bold 20px/22px 'Microsoft YaHei';
}
.dgzh p span {
  color: #0084ff;
}
.dia-box {
  text-align: center;
}
</style>
