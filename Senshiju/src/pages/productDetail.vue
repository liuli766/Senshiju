<template>
  <div class="builddetail">
    <!-- 建房图库详情 -->
    <div class="current">
      当前位置：
      <router-link to="/">首页</router-link>
      >图纸列表>{{detaillist.title}}
    </div>
    <!--  -->
    <div class="build_img fl_be">
      <img :src="detaillist.cover" alt />
      <div class="build_img_r">
        <div class="fl_be build_img_t">
          <h5>{{detaillist.title}}</h5>
          <span
            class="font20 poniter yi"
            @click="Collect(detaillist.id)"
            v-if="detaillist.is_collect==true"
          >已收藏</span>
          <span
            class="font20 poniter"
            @click="Collect(detaillist.id)"
            v-if="detaillist.is_collect==false"
          >收藏</span>
        </div>
        <p>
          图纸编号：
          <span>{{bianhao}}</span>
        </p>
        <div class="layer fl_be">
          <span>别墅层数:{{detaillist.plies}}</span>
          <span>结构形式:{{detaillist.structure}}</span>
          <span>占地面积:{{detaillist.face_width}}</span>
          <span>建筑开间:{{detaillist.plies}}</span>
          <span>建筑进深:{{detaillist.depth}}</span>
          <span>销售面积:{{detaillist.face_width}}</span>
          <span>主体参考造价:{{detaillist.plies}}</span>
        </div>
        <div class="tel">: 176-8324-2994</div>
        <div class="button fl_be">
          <button class="poniter" @click="orderPay">立即购买此套图纸</button>
          <button class="poniter" @click="dialogFormVisible = true">申请按此套图纸施工</button>
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
          <div class="border">您选的图纸编号为 {{bianhao}}</div>
          <el-form-item prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="*您的姓名"></el-input>
          </el-form-item>
          <div class="tel fl_be">
            <el-form-item prop="tel">
              <el-input type="text" v-model="ruleForm.tel" autocomplete="off" placeholder="*您的电话号码"></el-input>
            </el-form-item>
            <el-form-item prop="yzm">
              <el-input type="text" v-model="ruleForm.yzm" autocomplete="off" placeholder="*请输入验证码"></el-input>
              <span class="span poniter" @click="time" v-if="tmeValue==60">发送验证码</span>
              <span class="span poniter" v-else>{{ tmeValue }} s后获取</span>
            </el-form-item>
          </div>
          <el-button class="ybtn" @click="submitForm('ruleForm')">点击申请</el-button>
        </el-form>
      </el-dialog>
    </div>

    <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,k) in detaillist.imgs" :key="k">
          <img :src="item" alt />
        </div>
      </div>
      <!-- 如果需要导航按钮 -->
      <span class="swiper-button-prev" style="background: #fff;"></span>
      <span class="swiper-button-next" style="background: #fff;"></span>
    </div>
    <!-- <div class="swiper">
      <div class="swiper_slide">
        <img :src="item" alt v-for="(item,index) in listdata" :key="index" />
      </div>
      <span class="iconfont icon-jiantou" @click="handprve"></span>
      <span class="iconfont icon-jiantou" @click="handnext"></span>
    </div>-->
    <!--  -->
    <div class="explain">购图前重要说明：</div>
    <p
      class="p"
    >购买本套图纸仅提供打印好的图纸一份，我们不出售电子文件、光盘。我们设计的图纸非常详细，用A3规格打印图纸，比传统蓝图更清晰、容易复印、方便收藏，可以直接应用到施工现场。售后服务仅为图纸答疑，不包任何修改，因为只要其中一张图纸改变，其它图纸相应均需修改，工作量较大，所以我们不包修改。如果您个性要求较多需按要求订做设计，请查看别墅设计业务流程，并联系设计客服咨询设计收费标准。</p>
  </div>
</template>

<script>
import Swiper from 'swiper'
import request from '@/request.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      pic: [require('../assets/image/1.png'), require('../assets/image/1.png')],
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
    }),
  },
  watch: {},
  created() {
    if (!this.token) {
      this.$router.push({
        path: '/login',
      })
      return false
    }
    this.listdata = this.pic.slice(0, 2)
    // setInterval(this.handprve, 1000);
    // request
    //   .getBlueDetail({
    //     id: this.$route.query.id,
    //   })
    //   .then((res) => {
    //     console.log(res)
    //     this.detaillist = res.data
    //     this.bianhao = this.detaillist.number.toUpperCase()
    //   })
    //   .catch((e) => {})
    //   .finally(() => {})
    this.handdetail()
  },
  mounted() {
    const mySwiper = new Swiper('.swiper-container', {
      observer: true,
      slidesPerView: 3,
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
  },
  methods: {
    // 图纸详情
    handdetail() {
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
        },
      })
    },

    // 收藏
    Collect(num) {
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
      request
        .getCancelcollect({
          uid: this.userInfor.member_id,
          c_id: idx,
        })
        .then((res) => {
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
  width: 681px;
  overflow: hidden;
  margin: 10px 0 43px 0;
  position: relative;
  display: flex;
  padding-left: 30px;
  box-sizing: border-box;
  height: 136px;
}
.swiper-wrapper {
  z-index: -1;
  width: 201px;
}
.swiper-button-prev:after {
  color: #ffbf22;
}
.swiper-button-next:after {
  color: #ffbf22;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 1;
}
.swiper-slide {
  margin-left: 14px;
  width: 202px !important;
}
.swiper-slide img {
  width: 202px;
  height: 136px;
  margin-right: 14px;
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
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-bottom: 46px;
}
.build_img {
  height: 520px;
}
.build_img img {
  min-width: 686px;
  height: 100%;
}
.build_img h5 {
  font: 400 26px/36px 'Adobe Heiti Std';
  color: #313131;
  width: 393px;
}
.build_img .build_img_t span {
  display: block;
  width: 72px;
  height: 31px;
  line-height: 31px;
  background: #ffbf22;
  opacity: 0.98;
  border-radius: 16px;
  color: #fff;
  margin-left: 18px;
  text-align: center;
}
.build_img_r {
  background: #e8e8e8;
  text-align: left;
  height: 520px;
  box-sizing: border-box;
  padding: 10px 0;
  padding-right: 14px;
  padding-left: 17px;
}
.build_img_t {
  align-items: normal;
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
  width: 33.3%;
  margin-bottom: 34px;
}
.tel {
  font: 400 26px/34px 'Adobe Heiti Std';
  color: #000000;
  margin-bottom: 25px;
}
.build_img_r button {
  width: 205px;
  height: 45px;
  background: rgba(255, 191, 34, 1);
  border-radius: 10px;
  outline: none;
  border: 0;
  font: 21px/28px 'Adobe Heiti Std';
  color: #fff;
}
.explain {
  font: 30px/40px '';
  color: #4e4e4e;
  text-align: left;
  height: 94px;
  line-height: 94px;
}
.p {
  font: 20px/40px '';
  color: #4e4e4e;
  text-align: left;
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
  font: 400 40px/1 '';
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
</style>