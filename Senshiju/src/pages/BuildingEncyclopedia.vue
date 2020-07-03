<template>
  <div>
    <img src="../assets/image/person.png" class="bannerimg" alt />
    <main>
      <nav>
        <div class="line"></div>
        <li v-for="(item,index) in meau" :key="index">
          <span>|</span>
          <span :class="{meauactice:meaunum===index}" @click="meauitem(index)">{{item}}</span>
        </li>
      </nav>
      <!-- 内容 -->
      <div class="cont">
        <img src="../assets/image/person.png" alt />
        <div>
          <h6>农村小庭院怎么设计好看，两层庭院好看只要40万</h6>
          <p>有时就想人这一生挺无聊的，无非是为了车子，房子，票子，女子和孩子，其中房子是中国人的头等 大事，有钱了要么在城市买房，要么在农村建房，如果你在农村也有宅基地，一定要回家建房， 一家人 住一个大院子，农村小庭院怎么设计好看?下面为大家分享40万两层简欧景观庭院简单实用，如果你也喜 欢，可以咨询客服定制设计哦</p>
        </div>
      </div>
      <!-- 分页 -->
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      meau: [
        '建房百科',
        '设计百科',
        '装修百科',
        '施工百科',
        '风水百科',
        '建房日志'
      ],
      meaunum: 0
    }
  },
  computed: {
    // ...mapState({
    //   meauid: state => state.meauid,
    // })
  },
  created() {
    this.meaunum = this.$store.state.meauid
  },
  methods: {
    meauitem(idx) {
      this.meaunum = idx
    }
  },
  mounted() {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  }
}
</script>

<style scoped>
main {
  width: 1200px;
  margin: 0 auto;
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
}
</style>
