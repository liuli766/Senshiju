<template>
  <div style="background: #fafafa">
    <!--私人订制  -->
    <img src="../assets/image/person.jpg" alt class="bannerimg" />
    <main>
      <!-- 私人订制申请 -->
      <div>
        <div class="private_apply">
          <h6>私人订制申请</h6>
          <div class="fl_center contentbox">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="personform"
            >
              <el-form-item label="建房面积" prop="area">
                <el-input
                  type="text"
                  v-model="ruleForm.area"
                  autocomplete="off"
                  placeholder="请输入您的占地面积"
                ></el-input>
              </el-form-item>
              <el-form-item label="建房类型" prop="buildType">
                <el-input
                  type="text"
                  v-model="ruleForm.buildType"
                  autocomplete="off"
                  placeholder="三层"
                ></el-input>
              </el-form-item>
              <el-form-item label="电话号码" prop="tel">
                <el-input type="text" v-model="ruleForm.tel"></el-input>
              </el-form-item>
              <el-form-item label="订制需求" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <div class="red">为了您的权益，我们将对你的信息严格保密</div>
                <el-button class="ybtn" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
              </el-form-item>
            </el-form>
            <div class="private_apply_r">
              <div class="themecost">
                主体造价：
                <span>30000-40000</span>
                <span>元</span>
              </div>
              <div class="themecost">
                室内整装：
                <span>30000-40000</span>
                <span>元</span>
              </div>
              <div>以上都是预估造价，具体价格以客户实际情况为准</div>
              <a
                :href="
                  'tencent://message/?uin=' + homeList.qq + '&Site=&Menu=yes'
                "
                target="_blank"
              >
                <img
                  :src="'http://wpa.qq.com/pa?p=2:' + homeList.qq + ':41'"
                  alt="点击这里给我发消息"
                  style="opacity: 0"
                />
                <el-button class="tmbtn">立刻咨询客服小姐姐</el-button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="life">
        <div class="life_l">
          <p>更懂您的别墅生活</p>
          <p>村墅人家</p>
          <p>让您体验“真正的别墅生活”</p>
          <p>更贴心的服务</p>
          <div class="line"></div>
          <p class="font12">Better understand your villa life</p>
          <p class="font12">Villagers</p>
          <p class="font12">Let you experience "real villa life"</p>
          <p class="font12">More intimate service</p>
        </div>
        <div class="life_r">
          <img src="../assets/image/srdz.png" alt />
          <p>
            村墅人家是四川别墅之家建筑科技有限公司旗下品牌，创建于2015年08月。专注于新农村自建房
            设计、别墅设计和别墅室内装修设计、园林景观设计及施工一站式服务，集合行业顶尖设计资源
            致力于打造全国优秀别墅设计公司和私宅设计，服务于中国新农村的建设和城镇化的进程
          </p>
          <p>
            公司总部位于四川成都，公司拥有专业的设计团队，秉承以人为本，回归自然绿色创新的设计
            理念，为您提供方便快捷低成本的别墅设计方案，采取传统的公司经营和现代互联网相结合的方
            式，以专业创新的设计理念结合客户的需求为出发点，帮您打造一个理想的家园。
          </p>
        </div>
      </div>
      <!-- 设计团队支持 -->
      <div class="teamsupport">
        <h5>设计团队支持</h5>
        <p>更加专业，更加精细化，满足高品质的设计需求</p>
        <div class="teamsupport_box">
          <div
            @click="GoTeamDetail(item)"
            v-for="(item, index) in teamSupport"
            :key="index"
            class="poniter teamsupport_box_item"
          >
            <img :src="item.cover" alt />
            <div class="block fl_ar font20">
              <span class="font20">{{ item.name }}</span>
              <span class="font14">{{ item.position }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 营业执照 -->
      <div class="license">
        <img src="../assets/image/srdz-yyzz.png" alt="" />
      </div>
      <!-- 定制图纸展示 -->
      <div class="show">
        <h5>定制图纸展示</h5>
        <p>私人定制能带来更贴心的享受</p>
        <!-- <div class="showpic">
          <img :src="c.cover" v-for="(c,v) in moreList" :key="v" class="el_image"/>
        </div> -->
        <div class="show_img">
          <el-image
            class="el_image"
            style="width: 100px; height: 100px"
            v-for="c in moreList"
            :key="c.id"
            :src="c.cover"
            :preview-src-list="srcList"
          >
            fit="cover" >
          </el-image>
        </div>
        <div class="more" v-if="picList.length <= moreList.length">
          没有更多了
        </div>
        <div class="more poniter" @click="handmore" v-else>查看更多</div>
      </div>
      <div class="license">
        <h5>我们的口碑您来决定</h5>
        <p>为您与客户真实的聊天记录</p>
        <div>
          <div class="mouth" style="flex-wrap: wrap">
            <img
              v-for="(item, k) in praiselist"
              :key="k"
              :src="item.cover"
              alt
            />
          </div>
        </div>
        <a
          :href="'tencent://message/?uin=' + homeList.qq + '&Site=&Menu=yes'"
          target="_blank"
        >
          <img
            :src="'http://wpa.qq.com/pa?p=2:' + homeList.qq + ':41'"
            alt="点击这里给我发消息"
            style="opacity: 0"
          />
          <div class="morekf poniter">查看更多客户反馈请咨询客服</div>
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import request from '@/request.js'
export default {
  data() {
    return {
      navActiveCode: 'home',
      ruleForm: {
        area: '',
        buildType: '',
        tel: '',
        desc: '',
      },
      rules: {
        area: [
          { required: true, message: '建房面积不能为空', trigger: 'blur' },
        ],
        buildType: [
          { required: true, message: '建房类型不能为空', trigger: 'blur' },
        ],
        tel: [
          { required: true, message: '电话号码不能为空', trigger: 'blur' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号不符合规则',
            trigger: 'blur',
          },
        ],
      },
      srcList: [],
      teamSupport: [],
      // 订制图片展示
      picList: [],
      moreList: [], // 查看更多
      idx: 3,
      drawingslist1: '', //营业执照
      drawingslist2: '', //营业执照
      drawingslist3: '', //营业执照
      praiselist: [], //口碑
      homeList: [],
      caselist: [],
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  },
  mounted() {},
  created() {
    request
      .getHomeindex({})
      .then((res) => {
        this.homeList = res.data
        console.log(res, 'pc端首页')
      })
      .catch((e) => {})
      .finally(() => {})
    // 私人定制图片 营业执照、口碑
    request
      .getDrawings()
      .then((res) => {
        console.log(res, '定制需求')
        this.drawingslist1 = res.data.license[0].cover
        this.drawingslist2 = res.data.license[1].cover
        this.drawingslist3 = res.data.license[2].cover
        this.praiselist = res.data.praise
        // this.caselist = res.data.case
        this.picList = res.data.case

        this.picList.map((item) => {
          this.srcList.push(item.cover)
        })
        console.log(this.srcList)
        if (this.picList < 4) {
          this.moreList = this.picList
        } else {
          this.moreList = this.picList.slice(0, 4)
        }
      })
      .catch((e) => {})
      .finally(() => {})

    // 设计团队
    request
      .getHomrdesign({})
      .then((res) => {
        console.log(res, '设计团队')
        this.teamSupport = res.data
      })
      .catch((e) => {})
      .finally(() => {})
  },
  methods: {
    GoTeamDetail(src) {
      this.$router.push({
        path: '/teamDetail',
        query: {
          id: src.id,
          name: src.name,
        },
      })
    },
    HandLoad(e) {
      console.log(e)
    },
    // 点击导航栏
    changeNav(nav) {
      this.navActiveCode = nav.code
      this.$router.push({ path: nav.url })
    },
    // 提交申请
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request
            .getSubapply({
              name: '',
              phone: this.ruleForm.tel,
              type: this.ruleForm.buildType,
              area: this.ruleForm.area,
              need: this.ruleForm.desc,
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
    // 加载更多
    handmore() {
      this.idx++
      let list = [...this.moreList]
      this.moreList = [...list, ...this.picList.slice(this.idx++, this.idx + 1)]
    },
  },
}
</script>

<style scoped>
.permit {
  display: flex;
  margin-left: 118px;
}
.permit img {
  width: 456px;
  height: 691px;
}
.bannerimg {
  width: 100%;
  height: 100%;
}
main {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 40px;
}
.serchbox {
  width: 1200px;
  margin: 0 auto;
}
.team {
  background: url(/static/private.png) no-repeat;
  height: 715px;
  background-size: 100% 100%;
}
.nav1 {
  background: rgba(55, 57, 63, 0.8);
  height: 120px;
}
nav {
  display: flex;
  align-items: center;
}
nav ul {
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 24px;
}
nav ul li {
  color: #fff;
}
nav ul li:nth-of-type(4) {
  margin-left: 298px;
}
nav img {
  margin-top: 14px;
  position: absolute;
  left: 50%;
  margin-left: -123.5px;
  top: 10px;
}
.serch {
  position: relative;
  float: right;
  margin-bottom: 20px;
}
.serch input {
  box-sizing: border-box;
  width: 182px;
  height: 35px;
  background: #fdd45f;
  border-radius: 17.5px;
  padding-left: 20px;
  color: #fff;
  font-size: 16px;
}
.header-active {
}
/*  */
.contentbox {
  align-items: normal;
}
.private_apply {
  background: #fff;
}
.private_apply h6 {
  height: 98px;
  font-size: 16px;
  line-height: 98px;
}
.personform {
  width: 375px;
}
.red {
  color: #fe0350;
  margin: 50px 0 24px 0;
  font-size: 12px;
  line-height: 1;
}
.ybtn,
.tmbtn {
  width: 198px;
  height: 42px;
  background: #f4a010;
  color: #fff;
  border-radius: 7px;
}
.private_apply_r {
  color: #98a4c1;
  padding-left: 44px;
  border-left: 1px solid #ededed;
  margin-left: 40px;
  height: 250px;
  font-size: 12px;
  line-height: 20px;
}
.private_apply_r .themecost {
  display: flex;
  align-items: center;
}
.private_apply_r .themecost span:nth-of-type(1) {
  color: #f4a010;
  font-weight: bold;
  font-size: 30px;
  line-height: 54px;
}
.private_apply_r .themecost span:nth-of-type(2) {
  color: #f4a010;
  font-size: 12px;
  line-height: 1;
}
.tmbtn {
  margin-top: 85px;
  border: 1px solid #989898;
  background: #fff;
  color: #656565;
}
.life {
  margin-top: 50px;
  display: flex;
  text-align: left;
  background: #fff;
  padding: 46px 32px 60px 16px;
  margin-bottom: 50px;
}
.life_l {
  margin-right: 190px;
}
.life_l p {
  font: 400 18px/24px 'CTXiYuanSJ';
  color: #6d6d6d;
  text-align: left;
}
.life_l p.font12 {
  font-size: 12px;
}
.line {
  width: 50px;
  height: 1px;
  background: #333;
  margin: 24px 0;
}
.life_r img {
  width: 690px;
  height: 234px;
  margin-bottom: 40px;
}
.life_r p {
  font: 400 14px/24px 'CTXiYuanSJ';
  width: 650px;
}
.life_r p + p {
  margin-top: 25px;
}
/*  */
.teamsupport,
.license,
.show {
  background: #fff;
  padding: 40px 0;
  margin-bottom: 49.2px;
}
.teamsupport h5,
.license h5,
.show h5 {
  color: #333;
  font-weight: bold;
  font-size: 36px;
  line-height: 1;
}
.teamsupport > p,
.license > p,
.show > p {
  font: 400 18px/1 'CTXiYuanSJ';
  margin: 22px 0 40px 0;
}
.teamsupport_box_item img {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}
.teamsupport_box_item {
  width: 285px;
  height: 428px;
  position: relative;
  overflow: hidden;
  margin-right: 15px;
}
.teamsupport_box_item:nth-last-of-type(4n) {
  margin-right: 0;
}
.teamsupport_box_item:hover .block {
  bottom: 0;
}
.teamsupport_box_item:hover img {
  transform: scale(1.2);
}
.teamsupport_box {
  display: flex;
  flex-wrap: wrap;
}
.block {
  flex-direction: column;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  position: absolute;
  bottom: -60px;
  width: 100%;
  transition: all 0.5s;
}
.showpic {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
}
.showpic img {
  width: 576px;
  height: 402px;
  margin-bottom: 20px;
}
.el_image {
  width: 23% !important;
  height: 195px !important;
  margin-bottom: 19px;
  margin-right: 31px;
}
.el_image:nth-of-type(4n) {
  margin-right: 0;
}
.more {
  width: 122px;
  height: 40px;
  line-height: 40px;
  border: 1px solid rgba(0, 0, 0, 1);
  margin: 0 auto;
  margin-top: 40px;
  font-size: 22px;
}
.show_img {
  flex-wrap: wrap;
  display: flex;
}
.show_img img {
  width: 23%;
  margin-right: 20px;
}
.show_img img:nth-of-type(4n) {
  margin-right: 0;
}
.morekf {
  width: 334px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 1);
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(1, 1, 1, 1);
  line-height: 40px;
  margin: auto;
}
.mouth {
  margin-bottom: 40px;
  display: flex;
}
.mouth img {
  width: 32%;
  height: 755px;
  margin-bottom: 20px;
  margin-right: 24px;
  /* margin: 15px auto; */
}
.mouth img:nth-of-type(3n) {
  margin-right: 0;
}
</style>
