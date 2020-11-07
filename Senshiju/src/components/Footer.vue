<template>
  <div>
    <div class="footer111_img">
      <img
        src="../assets/image/footer1.png"
        alt=""
        style="width: 100%; margin: 30px 0"
      />
      <div class="footer111">
        <div>
          <div>
            <serveqq
              :startVal="0"
              :endVal="200"
              :speed="3000"
              :decimals="2"
              :isReverse="false"
            />+
          </div>

          <span class="footer12">高端别墅设计</span>
        </div>
        <div>
          <div>
            <serveqq
              :startVal="0"
              :endVal="1000"
              :speed="3000"
              :decimals="2"
              :isReverse="false"
            />+
          </div>

          <span class="footer12">服务案列</span>
        </div>
        <div>
          <div>
            <serveqq
              :startVal="0"
              :endVal="100"
              :speed="3000"
              :decimals="2"
              :isReverse="false"
            />+
          </div>

          <span class="footer12">资深设计师</span>
        </div>
        <div>
          <div>
            <serveqq
              :startVal="0"
              :endVal="200"
              :speed="3000"
              :decimals="2"
              :isReverse="false"
            />+
          </div>

          <span class="footer12">施工工地</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <main>
        <div>
          <a href class="link" style="font-size:20px">友情链接</a>
          <p class="likp">
            交换链接或商务合作请加QQ：1258131493（要求百度权重>=3）
          </p>
          <div class="footerspan">
            <a
              class="spanitem"
              v-for="(c, v) in footerList"
              :key="v"
              :href="c.url"
              >{{ c.title }}</a
            >
          </div>
        </div>

        <div class="footerwork" style="display: flex; justify-content: center">
          <div class="dyimg" style="margin-right: 45px">
            <img
              src="../assets/image/vx.svg"
              style="background: #fff; padding: 10px; border-radius: 8px"
            />
            <div style="margin-top: 12px">微信公众号</div>
          </div>
          <div class="design" style="border-left: 2px solid #999999">
            <p class="font16" style="margin-top:30px">设计咨询：</p>
            <p class="bold">{{ homeList.design_phone }}</p>
            <p class="font16" style="margin-top: 30px;">商务合作：</p>
            <p class="bold">{{ homeList.team_phone }}</p>
          </div>
          <div class="design">
            <p class="font16" style="margin-top:30px">施工咨询：</p>
            <p class="bold">{{ homeList.roadwork_phone }}</p>
            <p class="font16" style="margin-top: 30px;">邮箱：</p>
            <p class="bold">{{ homeList.e_mail }}</p>
          </div>
          <div class="design">
            <p class="font16 top20">建房图库</p>
            <p class="font16 top20">设计团队</p>
            <p class="font16 top20">私人订制</p>
            <p class="font16 top20">建房日志</p>
            <p class="font16 top20">建房百科</p>
          </div>
          <div style="margin-left: 45px" class="dyimg">
            <img
              src="../assets/image/dy.svg"
              style="background: #fff; padding: 10px; border-radius: 8px"
            />
            <div style="margin-top: 12px">抖音视频号</div>
          </div>
        </div>
        <div class="center icp font16">
          {{ homeList.copyright }}{{ homeList.put_records }}
        </div>
        <div class="center addr font16">地址：{{ homeList.address }}</div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import request from '@/request.js'
import serveqq from '@/components/serverqq.vue'
export default {
  components: {
    serveqq,
  },
  data() {
    return {
      homeList: [],
      footerList: [],
    }
  },
  computed: {
    ...mapState({
      isfooter: (state) => state.isfooter,
    }),
  },
  created() {
    console.log(this.isfooter)
    if (this.$route.path == '/' || this.isfooter == '') {
      this.$store.commit('changNav', true)
    }
    request
      .getHomeindex({})
      .then((res) => {
        this.homeList = res.data
      })
      .catch((e) => {})
      .finally(() => {})
    request
      .getLinks()
      .then((res) => {
        this.footerList = res.data
      })
      .catch((e) => {})
      .finally(() => {})
  },
}
</script>

<style scoped>
.link {
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Microsoft Ya Hei';
  text-align: center;
  width: 100px;
  height: 22px;
  border-radius: 3px;
  background-color: #a9a9a9;
  display: block;
  padding: 8px;
}
main .likp {
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 22px;
  color: #f5f5f5;
  font-family: 'Microsoft Ya Hei';
  text-align: left;
  padding: 20px 0;
  border-bottom: 2px dashed #bfbfbf;
}
.footerspan {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.center {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #999999;
  font-family: 'Microsoft Ya Hei';
  text-align: center;
}
.footerspan .spanitem {
  font-size: 16px;
  line-height: 27px;
  color: #f5f5f5;
  font-family: 'Microsoft Ya Hei';
  margin-right: 28px;
}
.footerwork img {
  width: 138px;
  height: 138px;
}
.footerwork {
  display: flex;
 margin: 40px 0 20px 0;
}
.icp {
  margin-top: 12px;
  margin-bottom: 4px;
}
main .design p {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #999999;
  font-family: 'Microsoft Ya Hei';
  text-align: left;
}
main .design {
  padding: 0 45px;
  border-right: 2px solid #999999;
}
.footer {
  width: 100%;
  padding-top: 12px;
  background-color: #4f4f4f;
  padding-bottom: 10px;
}
main {
  width: 1200px;
  margin: 0 auto;
}
.dyimg {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  color: #f5f5f5;
  font-family: 'Microsoft Ya Hei';
  text-align: center;
}
.design .bold {
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  color: #fff;
}
.font16 {
  font-size: 14px !important;
  color: #fff !important;
  opacity: .8;
}
.top20{
  margin-top: 15px;
  
}
.footer111_img {
  position: relative;
  background: #fafafa;
}
.footer111 {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  top: 50%;
  width: 1200px;
  justify-content: space-around;
  left: 50%;
  margin-left: -600px;
  margin-top: -39px;
}
.footer111 > div {
  display: flex;
  flex-direction: column;
}
.footer111 > div > div {
  color: #fff;
  font-size: 48px;
  font-weight: bold;
}
.footer12 {
  color: #fff;
  font-size: 18px;
  margin-top: 12px;
}
</style>
