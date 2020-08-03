<template>
  <!-- 快速订购 -->
  <div class="quikorder">
    <h6>在线快速订购</h6>
    <div class="quikorderbox">
      <div class="product fl_be_al">
        <span>产品</span>
        <div class="fl_be_al">
          <div class="block"></div>
          <span class="bold">纸质版打印1份458元</span>
        </div>
      </div>
      <div class="gift fl_be_al">
        <span>赠品</span>
        <div class="fl_be_al">
          <div class="block"></div>
          <span class="normal">别墅图纸-产品画册（立即下单，限时赠送）</span>
        </div>
      </div>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="name" class="labe">
          <el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="请填写姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="tel" class="labe">
          <el-input type="text" v-model="ruleForm.tel" autocomplete="off" placeholder="请填写手机号码"></el-input>
        </el-form-item>
        <el-form-item label="地区" class="between">
          <div class="bet">
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="province"
              :fetch-suggestions="querySearch"
              placeholder="请选择省"
              @select="handleSelect"
              style="width:325px"
            >
              <i class="el-icon-caret-bottom el-input__icon" slot="suffix"></i>
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="city"
              :fetch-suggestions="querySearch"
              placeholder="请选择市"
              @select="handleSelect"
              style="width:325px"
            >
              <i class="el-icon-caret-bottom el-input__icon" slot="suffix"></i>
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="area"
              :fetch-suggestions="querySearch"
              placeholder="请选择区 "
              @select="handleSelect"
              style="width:325px"
            >
              <i class="el-icon-caret-bottom el-input__icon" slot="suffix"></i>
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
          </div>
        </el-form-item>
        <el-form-item label="地址" prop="addr" class="labe">
          <el-input type="text" v-model="ruleForm.addr" autocomplete="off" placeholder="请填写详细地址"></el-input>
        </el-form-item>
        <div style="text-align: center;">
          <el-button class="btn" @click="submitForm('ruleForm')">立即提交订单</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      ruleForm: {
        name: '',
        tel: '',
        addr: ''
      },
      rules: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        tel: [{ required: true, message: '手机不能为空', trigger: 'blur' }],
        addr: [{ required: true, message: '地址不能为空', trigger: 'blur' }]
      },
       restaurants: [],
        province: '',
        city:'',
        area:''
    }
  },
  methods: {
    submitForm(formName) { //立即提交订单
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },]
    },
     querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    },
    handleSelect(item) {
        console.log(item);
      },
},
mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>

<style scoped>
.demo-ruleForm {
  margin-top: 18px;
}
.btn {
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
  font: bold 28px/8px 'SimHei';
  margin-top: 100px;
  margin-bottom: 74px;
}

.quikorder {
  background: #ffc92f;
  padding: 0 12px;
  text-align: left;
  padding-bottom: 144px;
}
.quikorder h6 {
  margin: 33px 0 24px 0;
  font: bold 28px/46px 'SimHei';
  color: #fff;
}
.quikorderbox {
  background: #fff;
  padding-right: 16px;
  padding-top: 32px;
  border-radius: 10px;
}
.quikorderbox .product > span {
  font: bold 24px/8px 'SimHei';
  color: #1a1a1a;
  margin-right: 19px;
  margin-left: 32px;
}
.block {
  width: 29px;
  height: 29px;
  border: 1px solid#434343;
  margin-right: 11px;
}
.bold {
  font: bold 24px/8px 'SimHei';
}
.normal {
  font: 400 24px/8px 'SimHei';
}
.gift {
  background: #f2f2f2;
  padding: 40px 20px;
  border-radius: 10px;
  margin-top: 35px;
  margin-left: 14px;
}
.gift > span {
  font: bold 25px/8px 'SimHei';
  color: #ff0500;
  margin-right: 17px;
}
</style>
<style>
.labe .el-form-item__label {
  color: #1f1f1f !important;
}

.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li.name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}

.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>