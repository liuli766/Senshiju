<template>
  <div class="footer">
    <!-- <img src="../assets/image/footer1.png" alt />
    <div class="footer_item">
      <div class="footer_item_l">
        <span>{{homeList.design_num}}+</span>
        <span>高端别墅设计</span>
      </div>
      <div class="footer_item_l">
        <span>{{homeList.serice_num}}+</span>
        <span>服务案列</span>
      </div>
      <div class="footer_item_l">
        <span>{{homeList.senior_num}}+</span>
        <span>资深设计师</span>
      </div>
      <div class="footer_item_l">
        <span>{{homeList.roadwork_num}}+</span>
        <span>施工工地</span>
      </div>
    </div>
    <p>备案号：蜀ICP备19041272号</p>-->
    <main>
      <div v-if="isfooter">
        <a href class="link">友情链接</a>
        <p class="likp">交换链接或商务合作请加QQ：1258131493（要求百度权重>=3）</p>
        <div class="footerspan">
          <a class="spanitem" v-for="(c,v) in footerList" :key="v" :href="c.url">{{c.title}}</a>
        </div>
      </div>

      <div class="footerwork">
        <img :src="homeList.bottom_code1" style="background:#fff" />
        <img :src="homeList.bottom_code2" style="background:#fff" />
        <div class="design">
          <p>设计咨询：</p>
          <p>{{homeList.design_phone}}</p>
          <p>商务合作：</p>
          <p>{{homeList.team_phone}}</p>
        </div>
        <div class="design">
          <p>施工咨询：</p>
          <p>{{homeList.roadwork_phone}}</p>
          <p>邮箱：</p>
          <p>{{homeList.e_mail}}</p>
        </div>
        <div class="design">
          <p>建房图库</p>
          <p>设计团队</p>
          <p>私人订制</p>
          <p>建房日志</p>
        </div>
        <div class="design">
          <p>建房百科</p>
        </div>
      </div>
      <div class="center icp">{{homeList.copyright}}{{homeList.put_records}}</div>
      <div class="center addr">地址：{{homeList.address}}</div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import request from '@/request.js'
export default {
  data() {
    return {
      homeList: [],
      footerList: [],
    }
  },
  computed: {
    ...mapState({
      isfooter:(state) =>state.isfooter
    }),
    
  },
  created() {
    console.log(this.isfooter)
    if(this.$route.path=='/'||this.isfooter==''){
       this.$store.commit('changNav',true)
    }
    request
      .getHomeindex({})
      .then((res) => {
        this.homeList = res.data
      })
      .catch((e) => {})
      .finally(() => {})
      request.getLinks()
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
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Microsoft Ya Hei';
  text-align: center;
  width: 100px;
  height: 22px;
  border-radius: 10px;
  background-color: #a9a9a9;
  display: block;
}
main .likp {
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 27px;
  color: #f5f5f5;
  font-family: 'Microsoft Ya Hei';
  text-align: left;
  padding: 10px 0;
  border-bottom: 2px dashed #bfbfbf;
}
.footerspan {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
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
  margin-top: 5px;
}
.footerwork img {
  width: 138px;
  height: 138px;
  margin-right: 14px;
}
.footerwork {
  display: flex;
  margin-top: 22px;
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
  padding: 0 22px;
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
/* .footer p {
  margin-top: -30px;
  color: #fff;
}
.footer img {
  width: 100%;
  height: 100%;
}
.footer_item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  font: 26px/40px 'Microsoft YaHei';
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
}
.footer_item_l {
  display: flex;
  flex-direction: column;
} */
</style>
