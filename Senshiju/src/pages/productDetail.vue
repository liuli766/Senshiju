<template>
  <div class="builddetail">
    <!-- 建房图库详情 -->
    <div class="current">
      当前位置：
      <router-link to="/">首页</router-link>
      >图纸列表>{{ detaillist.title }}
    </div>
    <!--  -->
    <div class="build_img">
      <img :src="detaillist.cover" alt style="width: 686px; height: 478px"  />
      <div class="build_img_r">
        <div class="fl_be build_img_t">
          <h5>{{ detaillist.title }}</h5>
          <span
            class="font20 poniter yi"
            @click="qxcollect(detaillist.id)"
            v-if="detaillist.is_collect == true"
            >已收藏</span
          >
          <span
            class="font20 poniter"
            @click="Collect(detaillist.id)"
            v-if="detaillist.is_collect == false"
            >收藏</span
          >
        </div>
        <p v-if="detaillist.status==1"
          style="
            font-size: 25px;
            letter-spacing: 3px;
            color: #707070;
            margin-bottom: 16px;
          "
        >
          成品图纸<span
            style="font-size: 38px; letter-spacing: 2px; color: #fe5303"
            >￥{{ detaillist.price }}</span
          >
        </p>
        <p v-if="detaillist.status==2"
          style="
            font-size: 25px;
            letter-spacing: 3px;
            color: #707070;
            margin-bottom: 16px;
          "
        >
          {{detaillist.status==1?'':'全款预售'}}<span
            style="font-size: 38px; letter-spacing: 2px; color: #fe5303"
            >￥{{ detaillist.price }}</span
          >
        </p>
        <p v-if="detaillist.status==1"
          style="
            font-size: 20px;
            letter-spacing: 1px;
            color: #fe5303;
            font-weight: 300;
            margin-bottom: 44px;
          "
        >
           {{detaillist.status==1?'':`付款后${detaillist.deliver}天发货`}}
        </p>
        <p v-if="detaillist.status==2"
          style="
            font-size: 20px;
            letter-spacing: 1px;
            color: #fe5303;
            font-weight: 300;
            margin-bottom: 44px;
          "
        >
          付款后10天内发货
        </p>
        <div class="layer fl_be">
          <span>别墅层数:{{ detaillist.plies }}</span>
          <span>结构形式:{{ detaillist.structure }}</span>
          <span>占地面积:{{ detaillist.area }}m²</span>
          <span>建筑开间:{{ detaillist.build }}m</span>
          <span>建筑进深:{{ detaillist.depth }}m</span>
          <span>建筑面积:{{ detaillist.sell_area }}m²</span>
          <span>主体参考造价:{{ detaillist.cost }}</span>
        </div>
        <div style="display: flex">
          <img
            src="../assets/image/tel.png"
            alt
            style="width: 28px; height: 28px; margin-right: 10px"
          />
          <div class="tel">: {{ detaillist.phone }}</div>
        </div>

        <div class="button fl_be">
          <button class="poniter" @click="orderPay" style="margin: 0 auto">
            立即购买此套图纸
          </button>
        </div>
      </div>
    </div>
    <div class="dia">
      <el-dialog title="申请此套图纸" :visible.sync="dialogFormVisible">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="780px"
          class="personform"
        >
          <div class="border">您选的图纸编号为 {{ bianhao }}</div>
          <el-form-item prop="name">
            <el-input
              type="text"
              v-model="ruleForm.name"
              autocomplete="off"
              placeholder="*您的姓名"
            ></el-input>
          </el-form-item>
          <div class="tel fl_be">
            <el-form-item prop="tel">
              <el-input
                type="text"
                v-model="ruleForm.tel"
                autocomplete="off"
                placeholder="*您的电话号码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="yzm">
              <el-input
                type="text"
                v-model="ruleForm.yzm"
                autocomplete="off"
                placeholder="*请输入验证码"
              ></el-input>
              <span class="span poniter" @click="time" v-if="tmeValue == 60"
                >发送验证码</span
              >
              <span class="span poniter" v-else>{{ tmeValue }} s后获取</span>
            </el-form-item>
          </div>
          <el-button class="ybtn" @click="submitForm('ruleForm')"
            >点击申请</el-button
          >
        </el-form>
      </el-dialog>
    </div>

    <!-- 轮播 -->

    <div class="swiper-father">
      <div class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(val, k) in detaillist.photos"
            :key="k"
            @click="swctich(val)"
          >
            <img :src="val" alt />
          </div>
        </div>
        <!-- 如果需要导航按钮 -->
      </div>
      <span
        class="swiper-button-prev"
        style="background: transparent"
        slot="button-prev"
      ></span>
      <span
        class="swiper-button-next"
        style="background: transparent; right: 8px"
        slot="button-next"
      ></span>
    </div>

    <!--  -->
    <div class="fengeline"></div>
    <div class="explain">图纸介绍</div>
    <p class="explain2">{{ detaillist.describe }}</p>
    <div class="fengeline" style="margin-top: 12px; margin-bottom: 20px"></div>
    <div v-html="detaillist.imgs" class="detailpic"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import request from '@/request.js'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      pic: [],
      listdata: [],
      detaillist: [],
      dialogFormVisible: false, //弹出层
      ruleForm: {
        name: '',
        tel: '',
        yzm: '',
      },
      rules: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        tel: [
          { required: true, message: '电话号码不能为空', trigger: 'blur' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号不符合规则',
            trigger: 'blur',
          },
        ],
        yzm: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
      },
      bianhao: '',
      tmeValue: 60, //倒计时总数
      flag: 0, //1记时 0停止
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      userInfor: (state) => state.userInfor,
      isShowlogin: (state) => state.isShowlogin,
      isShowregister: (state) => state.isShowregister,
      isModule: (state) => state.isModule,
    }),
  },
  watch: {},
  created() {
    this.$store.commit('ShowModule', true)
    this.listdata = this.pic.slice(0, 2)
    this.handdetail()
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      observer: true,
      slidesPerView: 3,
      loop: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // 手动切换之后继续自动轮播
      },
      // 如果需要分页器
      // pagination: {
      //   el: '.swiper-pagination'
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    mySwiper.on('slideChangeTransitionEnd', function () {
      let swiperIndex = mySwiper.activeIndex
      console.log('索引值：' + swiperIndex)

    })
  },
  methods: {
    swctich(item) {
      console.log(item)
      this.detaillist.cover = item
    },
    // 图纸详情
    handdetail() {
      if (!this.token) {
        request
          .getBlueDetail({
            id: this.$route.query.id,
          })
          .then((res) => {
            console.log(res, '88778')
            this.detaillist = res.data
            this.bianhao = this.detaillist.number.toUpperCase()
            console.log(this.detaillist.is_collect)
          })
          .catch((e) => {})
          .finally(() => {})
        return false
      } else {
        request
          .getBlueDetail({
            id: this.$route.query.id,
            uid: this.userInfor.member_id,
          })
          .then((res) => {
            this.detaillist = res.data
            this.bianhao = this.detaillist.number.toUpperCase()
            console.log(res, '图纸详情')
            console.log(this.detaillist.is_collect)
          })
          .catch((e) => {})
          .finally(() => {})
      }
    },

    //获取验证码
    time() {
      let ph = /^1[3|5|7|8|][0-9]{9}$/
      if (!ph.test(this.ruleForm.tel)) {
        this.$message({
          showClose: true,
          message: '手机号格式不正确',
          type: 'error',
        })
      } else {
        let phone_num = this.ruleForm.tel
        request
          .getCode({ phone_num })
          .then((res) => {
            console.log(res)
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
    },
    //立即申请
    submitForm(formName) {
      if (!this.token) {
        this.$store.commit('ShowLogin', true)
        return false
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request
            .blueApply({
              uid: this.userInfor.member_id,
              bid: this.detaillist.id,
              name: this.ruleForm.name,
              phone: this.ruleForm.tel,
              code: this.ruleForm.yzm,
            })
            .then((res) => {
              console.log(res, '图纸申请')
              this.$message({
                showClose: true,
                message: '申请成功',
                type: 'success',
              })
            })
            .catch((e) => {
              this.$message({
                showClose: true,
                message: '申请失败',
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

    // 跳转订单页
    orderPay() {
      this.handdetail()
      this.$router.push({
        path: '/orderpay',
        query: {
          id: this.detaillist.id,
          price: this.detaillist.price,
          two_price: this.detaillist.two_price,
          three_price: this.detaillist.three_price,
        },
      })
    },

    // 收藏
    Collect(num) {
      if (!this.token) {
        // this.$router.push({
        //   path: '/login',
        // })
        this.$store.commit('ShowLogin', true)
        return false
      }
      request
        .getCollect({
          uid: this.userInfor.member_id,
          type: 1,
          object: num,
        })
        .then((res) => {
          this.handdetail()
          this.$message({
            showClose: true,
            message: '收藏成功',
            type: 'success',
          })
        })
        .catch((e) => {
          console.log(e)
          this.$message({
            showClose: true,
            message: '收藏失败',
            type: 'error',
          })
        })
        .finally(() => {})
    },
    //取消收藏
    qxcollect(idx) {
      if (!this.token) {
        this.$store.commit('ShowLogin', true)
        return false
      }
      request
        .getCancelcollect({
          uid: this.userInfor.member_id,
          c_id: idx,
          type: 1,
        })
        .then((res) => {
          this.handdetail()
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
    handprve() {
      let first = this.pic.shift()
      this.pic.push(first)
      this.listdata = this.pic.slice(0, 2)
    },
    handnext() {
      let last = this.pic.pop()
      this.pic.unshift(last)
      this.listdata = this.pic.slice(0, 2)
    },
  },
}
</script>

<style scoped>
.swiper,
.swiper-container {
  width: 675px;
  overflow: hidden;
  position: relative;
  display: flex;
  padding-left: 17px;
  box-sizing: border-box;
  height: 94px;
}
.swiper-wrapper {
  z-index: -1;
}
.swiper-father {
  width: 675px;
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  height: auto;
}
.swiper-button-prev:after {
  color: #ffbf22;
  font-size: 80px;
}
.swiper-button-next:after {
  color: #ffbf22;
  font-size: 80px;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 1;
}
.swiper-slide img {
  width: 136px;
  height: 94px;
}
.builddetail {
  margin-top: 22px;
}
.current {
  text-align: left;
  font-size: 21px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(92, 92, 92, 1);
  line-height: 32px;
  padding: 14px 0;
  padding-left: 52px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  margin-bottom: 46px;
}
.build_img {
  height: 478px;
  display: flex;
  position: relative;

}
.build_img img {
  /* min-width: 686px; */
  height: 100%;
}
.build_img h5 {
  font: 400 26px/36px 'Adobe Heiti Std';
  color: #313131;
  flex: 1;
}
.build_img .build_img_t span {
  display: block;
  width: 72px;
  height: 30px;
  line-height: 30px;
  background: #ffbf22;
  opacity: 0.98;
  border-radius: 16px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  position: absolute;
  bottom: 14px;
  right: 0;
}
.build_img_r {
  position: absolute;
  right: 33px;
  top: 0;
  background: #e8e8e8;
  text-align: left;
  height: 678px;
  box-sizing: border-box;
  padding: 24px 0;
  padding-right: 14px;
  padding-left: 17px;
  box-sizing: border-box;
  padding-bottom: 0;
  width: 40%;
  padding-left: 25px;
  border: 1px solid #a4a4a4;
}
.build_img_t {
  position: relative;
  align-items: normal;
  border-bottom: 1px solid #333;
  padding-bottom: 50px;
  margin-bottom: 35px;
  border-bottom: 1px solid #ccc;
  margin-right: 15px;
}
.build_img_r p {
  font: 400 20px/26px 'Adobe Heiti Std';
  color: #585858;
}
.build_img_r p span {
  font: 400 20px/26px 'Adobe Heiti Std';
  color: #fcc31f;
  opacity: 0.98;
}
.layer {
  flex-wrap: wrap;
  justify-content: end;
}
.layer span {
  font: 400 16px/21px 'Adobe Heiti Std';
  color: #585858;
  opacity: 0.98;
  margin-bottom: 38px;
  margin-right: 28px;
}
.tel {
  font: 400 26px/34px 'Adobe Heiti Std';
  color: #333000;
  margin-bottom: 25px;
}
.build_img_r button {
  width: 205px;
  height: 45px;
  background: rgba(255, 191, 34, 1);
  border-radius: 10px;
  outline: none;
  border: 0;
  font: 18px/28px 'Adobe Heiti Std';
  color: #fff;
}
.explain {
  color: #4e4e4e;
  text-align: left;
  height: 94px;
  line-height: 94px;
  font-size: 30px;
}
.explain2 {
  color: #4e4e4e;
  text-align: left;
  font-size: 20px;
  line-height: 40px;
}
.border {
  width: 780px;
  height: 93px;
  border: 1px solid rgba(183, 190, 182, 1);
  font-size: 38px;
  line-height: 93px;
  text-align: left;
  padding-left: 13px;
  color: #ababb2;
  margin-bottom: 32px;
}
.ybtn {
  width: 780px;
  height: 93px;
  background: #ffbf22;
  color: #fff;
  border-radius: 10px;
  font: 400 40px/1 'Microsoft YaHei';
}
.span {
  position: absolute;
  top: 22px;
  right: 22px;
  font-size: 18px;
}
.build_img .build_img_t span.yi {
  width: 121px;
  height: 34px;
  background: rgba(125, 125, 125, 1);
  border-radius: 15px;
  color: #aeaeae;
  font-size: 22px;
}
</style>
<style >
.dia .el-dialog__header {
  box-sizing: border-box;
  height: 98px;
  background: #eee;
  border: 1px solid rgba(183, 190, 182, 1);
  color: #0e0e0e;
  font-size: 40px;
  text-align: left;
  font-weight: bold;
}
.dia .el-form-item__content {
  margin-left: 0 !important;
  text-align: left;
}
.dia .el-input__inner {
  width: 780px;
  height: 93px;
  border: 1px solid rgba(183, 190, 182, 1);
  font-size: 30px;
}
.dia .tel .el-input__inner {
  width: 384px;
}
.dia .tel {
  width: 780px;
  position: relative;
}
.dia input::placeholder {
  color: #ff151b;
  font-size: 38px;
}
/* .detailpic img {
  width: 100%;
  height: 100%;
} */
.fengeline {
  border: 1px solid #b5b5b5;
  height: 4px;
  width: 100%;
  border-left-color: transparent;
  border-right-color: transparent;
  margin-top: 80px;
}
</style>