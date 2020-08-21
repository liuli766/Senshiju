<template>
  <!-- 在线快速订购 -->
  <div>
    <div class="orderpay">
      <h6>在线快速订购</h6>
      <div class="order order1">
        <div class="flx product">
          <span>产品</span>
          <div>
            <div class="dui" v-for="(item,k) in checklist" :key="k" @click="Check(k)">
              <span class="gou">
                <img src="../assets/image/dui.png" alt :class="[navidx==k?'checked':'']" />
              </span>
              {{item.name}}{{k+1}}份{{price*(k+1)}}元
            </div>
          </div>
        </div>
        <div class="flx zp fl_be_al">
          <span>赠品</span>
          <div class="dui" @click="gou">
            <span>
              <img src="../assets/image/dui.png" alt v-show="ishook" />
            </span>
            别墅图纸-产品画册（立即下单，限时赠送）
          </div>
        </div>
        <el-form status-icon ref="ruleForm" :model="ruleForm" :rules="rules" class="personform">
          <el-form-item label="姓名" prop="name" class="labe">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="请填写姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="tel" class="labe">
            <el-input type="text" v-model="ruleForm.tel" autocomplete="off" placeholder="请填写手机号码"></el-input>
          </el-form-item>
          <el-form-item label="地区">
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
              <select v-model="district">
                <option
                  :value="item.text||''"
                  v-for="(item,pro) in districtArr"
                  :key="pro"
                >{{item.text||""}}</option>
              </select>
            </div>
          </el-form-item>
          <el-form-item label="地址" prop="addr" class="labe">
            <el-input type="text" v-model="ruleForm.addr" autocomplete="off" placeholder="请填写详细地址"></el-input>
          </el-form-item>
          <el-button class="ybtn" @click="submitForm('ruleForm')">立即提交订单</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import citydata from '../assets/comm/city'
import request from '@/request.js'
export default {
  data() {
    return {
      checklist: [
        {
          checked: true,
          name: '纸质版打印',
        },
        {
          checked: false,
          name: '纸质版打印',
        },
        {
          checked: false,
          name: '纸质版打印',
        },
      ],
      navidx: 0,
      ruleForm: {
        name: '',
        tel: '',
        addr: '',
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
        addr: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
      },
      provunce: citydata,
      prov: '北京市', //第一级
      city: '市辖区', //第二级
      district: '东城区', //第三级
      cityArr: [], //选择市
      districtArr: [], //选择县
      ishook: true,
      num: 1, //赠品
      price: 1,
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
      islogin: (state) => state.islogin,
      userInfor: (state) => state.userInfor,
    }),
  },
  watch: {
    prov: function () {
      this.updateCity()
      this.updateDistrict()
    },
    city: function () {
      this.updateDistrict()
    },
  },
  created() {
    console.log(this.$route)
    this.price = this.$route.query.price
  },
  methods: {
    Check(k) {
      this.navidx = k
    },
    gou() {
      this.ishook = !this.ishook
      console.log(this.ishook)
      if (this.ishook == true) {
        this.num = 1
      } else if (this.ishook == false) {
        this.num = 0
      }
    },
    //立即提交订单
    submitForm(formName) {
      console.log(this.navidx+1,this.num)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request
            .buyBlue({
              uid: this.userInfor.member_id,
              bid: this.$route.query.id,
              num: this.navidx+1,
              gift: this.num,
              price: this.price,
              name: this.ruleForm.name,
              phone: this.ruleForm.tel,
              province: this.prov,
              city: this.city,
              district: this.district,
              address: this.ruleForm.addr,
            })
            .then((res) => {
              console.log(res, '提交订单')
              this.$router.push({
                path: '/pay',
                query:{
                  data:res.data
                }
              })
              // this.$message({
              //   showClose: true,
              //   message: '提交订单成功',
              //   type: 'success',
              // })
            })
            .catch((e) => {
              this.$message({
                showClose: true,
                message: '提交订单失败',
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
.gou .checked {
  display: block;
}
.gou img {
  display: none;
}
.orderpay {
  background: #ffc92f;
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 144px;
  font-size: 24px;
  color: #1a1a1a;
}
.orderpay h6 {
  font-size: 28px;
  line-height: 85px;
  height: 85px;
  padding-left: 13px;
  color: #fff;
  text-align: left;
}
.order {
  width: 1175px;
  height: 834px;
  background: #fff;
}
.product {
  padding: 32px 0 0 32px;
}
.dui {
  display: flex;
  align-items: center;
  margin-left: 19px;
  margin-bottom: 18px;
  cursor: pointer;
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
.zp {
  width: 1144px;
  height: 104px;
  background: rgba(242, 242, 242, 1);
  border-radius: 10px;
  font-size: 24px;
  color: #1a1a1a;
  padding-left: 20px;
  margin-left: 14px;
  margin-bottom: 20px;
}
.zp .dui {
  margin-bottom: 0;
}
.zp span {
  color: #ff0500;
}
.personform {
  margin-left: 32px;
}
.ybtn {
  width: 574px;
  height: 59px;
  border: 1px solid rgba(242, 242, 242, 1);
  background: linear-gradient(
    0deg,
    rgba(232, 151, 35, 1) 0%,
    rgba(234, 202, 114, 1) 44%,
    rgba(245, 224, 168, 1) 73%,
    rgba(253, 243, 213, 1) 100%
  );
  border-radius: 10px;
  color: #fff;
  font-size: 28px;
  margin: 100px auto 74px auto;
}
.order select {
  width: 325px;
  height: 53px;
  border: 1px solid rgba(229, 229, 229, 1);
  font-size: 24px;
  color: rgba(67, 67, 67, 1);
  line-height: 53px;
  outline: none;
  border-radius: 10px;
  color: #7f7d7a;
  display: flex;
  justify-content: space-between;
}
.order select + select {
  margin-left: 38px;
}
.order select option {
  outline: none !important;
  border: 0 !important;
}
</style>
<style>
.order .el-form-item__content {
  display: flex;
  align-items: center;
  margin: 0 32px;
}
.order input::placeholder {
  color: #7f7d7a;
  font-size: 24px;
}
.order1 .el-form-item__label {
  font-size: 24px;
  color: #1f1f1f;
}
</style>