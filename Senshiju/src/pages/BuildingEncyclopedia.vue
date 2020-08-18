<template>
  <div style="padding-bottom:40px">
    <img src="../assets/image/jfbk.png" class="bannerimg" alt />
    <div class="main">
      <main>
        <nav>
          <div class="line"></div>
          <li v-for="(item,index) in meau" :key="index">
            <span>|</span>
            <span :class="{meauactice:meaunum===index}" @click="meauitem(index,classid)">{{item}}</span>
          </li>
        </nav>
        <!-- 内容 -->
        <div v-if="contlist.length==0">没有内容</div>
        <div v-show="meauid==0 || meaunum==0" v-else>
          <div
            class="cont poniter"
            v-for="(item,index) in contlist"
            :key="index"
            @click="handarticdetail(item)"
          >
            <img :src="item.cover" alt />
            <div>
              <h6>{{item.title}}</h6>
              <p>{{item.content}}</p>
              <div class="timer">
                <span class="poniter" @click="collect(item.id)">收藏</span>
                {{item.add_time}}
              </div>
            </div>
          </div>
        </div>

        <!-- 分页 -->
        <div class="pag">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="contlist.length"
            next-text="下一页"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            :current-page="currentPage"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
          <div class="wy poniter" @click="handendpage">尾页</div>
        </div>
      </main>
      <div class="sidbar">
        <div class="form">
          <h6>私人订制申请</h6>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="personform"
          >
            <el-form-item label="你的姓名：" prop="name">
              <el-input
                class="myclass"
                type="text"
                v-model="ruleForm.name"
                autocomplete="off"
                placeholder="请输入你的姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" prop="tel">
              <el-input
                class="myclass"
                type="text"
                v-model="ruleForm.tel"
                autocomplete="off"
                placeholder="请输入手机号码"
              ></el-input>
            </el-form-item>
            <el-form-item label="层      次：">
              <el-select v-model="value" placeholder="不限" @change="handchange" class="myclass">
                <el-option
                  v-for="item in options"
                  :key="item.cate_id"
                  :label="item.cate_name"
                  :value="item.cate_name"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="占地面积：" prop="area">
              <el-input
                class="myclass"
                type="text"
                v-model="ruleForm.area"
                autocomplete="off"
                placeholder="请输入建设面积"
              ></el-input>
            </el-form-item>
            <el-button class="btn" @click="submitForm('ruleForm')">提交</el-button>
            <p>
              已有
              <span style="color:#EB7471">2315</span>人申请私人订制私人订制
            </p>
          </el-form>
        </div>
        <!-- 标签 -->
        <div class="tag">
          <h6>热门标签</h6>
          <div class="line"></div>
          <div class="tag_item">
            <span v-for="(item,index) in tag" :key="index">{{item.label_name}}</span>
          </div>
        </div>
        <!-- 热销推荐 -->
        <div class="hot">
          <h6>热销·推荐</h6>
          <div class="flx col poniter" v-for="(item,k) in hotprllList" :key="k">
            <img :src="item.imgs" alt />
            <p>{{item.intro}}</p>
            <div>
              <span>{{item.plies}}层别墅</span>
              <span>风格：{{item.style}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import request from '@/request.js'
export default {
  data() {
    return {
      meau: [
        '建房百科',
        '设计百科',
        '装修百科',
        '施工百科',
        '风水百科',
        '建房日志',
      ],
      meaunum: 0, //当前选中的item
      pageSize: 5, //当前显示的条数
      currentPage: 1, //当前页数
      tag: [],
      ruleForm: {
        name: '',
        tel: '',
        area: '',
      },
      rules: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        tel: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号不符合规则',
            trigger: 'blur',
          },
        ],
        area: [
          { required: true, message: '占地面积不能为空', trigger: 'blur' },
        ],
      },
      options: [],
      value: '',
      contlist: [],
      classid: '建房百科',
      hotprllList: [],
      flag:false
    }
  },
  computed: mapState({
    meauid: (state) => state.meauid,
    userInfor: (state) => state.userInfor,
  }),
  created() {
    request
      .getPlies()
      .then((res) => {
        console.log(res, '层次')
        this.options = res.data
      })
      .catch((e) => {})
      .finally(() => {})

    this.meaunum = this.$store.state.meauid
    this.contlist = this.contlist.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    )
    // 热销·推荐
    request
      .getHots({
        page: 1,
      })
      .then((res) => {
        this.hotprllList = res.data
        console.log(res, '111')
      })
      .catch((e) => {})
      .finally(() => {})

    // 标签
    request
      .getLabels()
      .then((res) => {
        console.log(res, '标签')
        this.tag = res.data
      })
      .catch((e) => {})
      .finally(() => {})
    if (this.meaunum == 0) {
      this.classid = '建房百科'
      this.getdata(this.classid)
    } else if (this.meaunum == 1) {
      this.classid = '设计百科'
      this.getdata(this.classid)
    } else if (this.meaunum == 2) {
      this.classid = '装修百科'
      this.getdata(this.classid)
    } else if (this.meaunum == 3) {
      this.classid = '施工百科'
      this.getdata(this.classid)
    } else if (this.meaunum == 4) {
      this.classid = '风水百科'
      this.getdata(this.classid)
    } else if (this.meaunum == 5) {
      this.classid = '建房日志'
      this.getdata(this.classid)
    }
  },
  methods: {
    // 各种百科

    getdata(str) {
      request
        .getHomebaike({
          page: 1,
          class: str,
        })
        .then((res) => {
          console.log(res.data, '百科')
          this.contlist = res.data
        })
        .catch((e) => {})
        .finally(() => {})
    },
    meauitem(idx, classid) {
      this.meaunum = idx
      if (idx == 0) {
        this.classid = '建房百科'
        this.getdata(this.classid)
      } else if (idx == 1) {
        this.classid = '设计百科'
        this.getdata(this.classid)
      } else if (idx == 2) {
        this.classid = '装修百科'
        this.getdata(this.classid)
      } else if (idx == 3) {
        this.classid = '施工百科'
        this.getdata(this.classid)
      } else if (idx == 4) {
        this.classid = '风水百科'
        this.getdata(this.classid)
      } else if (idx == 5) {
        this.classid = '建房日志'
        this.getdata(this.classid)
      }
    },
    // pageSize 改变时会触发
    handleSizeChange(val) {
      this.pageSize = val
      //  this.getrenderList()
      this.countlist = this.contlist.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      )
      console.log(`每页 ${val} 条`)
    },
    // currentPage 改变时会触发
    handleCurrentChange(val) {
      this.currentPage = val
      // this.getrenderList()
      this.countlist = this.contlist.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      )
      console.log(`当前页: ${val}`)
    },
    handendpage() {
      //展示尾页
      let list = [...this.contlist]
      this.countlist = list.slice(-5)
    },
    // 提交申请
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request
            .getSubapply({
              name: this.ruleForm.name,
              phone: this.ruleForm.tel,
              type: this.options.cate_name,
              area: this.ruleForm.area,
              need: '',
            })
            .then((res) => {
              console.log(res, '定制需求')
              this.$message({
                showClose: true,
                message: '提交成功',
                type: 'success',
              })
            })
            .catch((e) => {
              this.$message({
                showClose: true,
                message: '提交失败',
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
    collect(num) {
      // 收藏
      request
        .getCollect({
          uid: this.userInfor.member_id,
          type: 2,
          object: num,
        })
        .then((res) => {
          console.log(res, '收藏')
          this.$message({
            showClose: true,
            message: '收藏成功',
            type: 'success',
          })
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: '收藏失败',
            type: 'error',
          })
        })
        .finally(() => {})
    },
    handchange(label) {
      //层次选择
      console.log(label)
    },
    handarticdetail(item) {
      //跳转文章详情
      this.$router.push({
        path: '/articDetail',
        query: item,
      })
    },
  },
  mounted() {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  },
}
</script>

<style scoped>
.main {
  width: 1200px;
  display: flex;
  margin: 0 auto;
}
main {
  width: 960px;
}
.bannerimg {
  width: 100%;
  height: 254px;
}
nav {
  display: flex;
  height: 64px;
  align-items: center;
  /* justify-content: space-around; */
}
nav li {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(50, 50, 50, 1);
  line-height: 20px;
}
nav li span:nth-of-type(1) {
  margin: 0 28px;
}
nav li:nth-of-type(1) span:nth-of-type(1) {
  display: none;
}
.line {
  width: 5px;
  height: 64px;
  background: rgba(255, 208, 83, 1);
  margin-right: 14px;
}
.meauactice {
  font: bold 24px/1 '';
  color: #2f2f2f;
}
.cont {
  display: flex;
  margin-top: 34px;
  text-align: left;
  padding-bottom: 22px;
  border-bottom: 1px solid #a0a0a0;
  padding-right: 57px;
}
.cont img {
  width: 230px;
  height: 164px;
  margin-right: 21px;
}
.cont h6 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(50, 50, 50, 1);
  line-height: 23px;
  margin-bottom: 28px;
}
.cont p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(50, 50, 50, 1);
  line-height: 25px;
  text-indent: 20px;
  text-align: justify;
}
.timer {
  text-align: right;
}
.pag {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.wy {
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #eee;
  padding: 11px 19px;
  display: flex;
  justify-content: center;
}
.sidbar {
  width: 240px;
}
.sidbar h6 {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(50, 50, 50, 1);
  line-height: 28px;
  margin-bottom: 30px;
}
.form {
  background: #f5f5f5;
  padding: 0 17px;
  padding-bottom: 32px;
  padding-top: 26px;
}
.el-form-item {
  background: #fff !important ;
}
.btn {
  width: 136px;
  height: 30px;
  background: rgba(255, 208, 83, 1);
  border-radius: 4px;
  margin-bottom: 11px;
  line-height: 30px;
  color: #fff;
}
.el-button {
  padding: 0;
}
.tag h6 {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(117, 117, 117, 1);
  line-height: 34px;
  padding-bottom: 9px;
  margin-bottom: 0;
}
.tag {
  margin-top: 12px;
  width: 240px;
  height: 260px;
  border: 1px solid rgba(160, 160, 160, 1);
  box-sizing: border-box;
}
.tag .line {
  width: 223px;
  height: 1px;
  background: #a0a0a0;
  margin: 0 auto;
}
.tag_item {
  display: flex;
  flex-wrap: wrap;
  margin: 26px 23px 28px 30px;
  justify-content: space-between;
}
.tag_item span {
  min-width: 29px;
  display: block;
  padding: 6px;
  background: #ffde87;
  border-radius: 10px;
  margin-bottom: 18px;
}
.hot {
  width: 240px;
  margin-top: 19px;
}
.hot h6 {
  font: bold 18px/1 'Microsoft YaHei';
  color: #545454;
}
.hot img {
  width: 100%;
  height: 169px;
}
.hot p {
  font: 400 14px/28px '';
  color: #545454;
  margin: 8px 0 12px 0;
  text-align: left;
}
.hot > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #545454;
}
</style>

<style>
.myclass input.el-input__inner {
  border: 0 !important;
  padding: 0;
}
/* 分页样式修改 */
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ffde87;
  color: #fff;
}
.el-pagination.is-background .el-pager li.active {
  color: #fff;
  cursor: default;
}
.el-pagination.is-background .el-pager li:hover {
  color: #ffde87;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ffde87;
}
.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
  background-color: #ffde87;
  color: #fff;
}
.btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #fff;
  border: 1px solid #eee;
}
.el-pagination button,
.el-pagination span:not([class*='suffix']) {
  min-width: 98.5px;
  color: #000;
  background: #fff;
  border: 1px solid #eee;
}
</style>