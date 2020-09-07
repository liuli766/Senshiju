<template>
  <!-- 设计师详情 -->
  <div>
    <div class="teamdetail">
      <div class="borderdier">
        <div class="bordersan fl_be">
          <img :src="designList.cover" alt />
          <div class="bordersan_r">
            <div>
              <h5>{{designList.name}}</h5>
              <div class="color98">{{designList.position}}</div>
              <article>
                <p>毕业院校:{{designList.school}}</p>
                <p>{{designList.intro}}</p>
              </article>
            </div>
            <div class="fl_be_al starrating">
              <div class="fl_be_al star">
                评价星级：
                <el-rate v-model="value" disabled show-score text-color="#ff9900"></el-rate>
              </div>
              <div>从业年限：{{designList.job_year}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/request.js'
export default {
  data() {
    return {
      value: 5,
      designList:[]
    }
  },
  created() {
    console.log(this.$route)
    request
      .getDesign({
        id:this.$route.query.id
      })
      .then((res) => {
        console.log(res,'设计师详情')
        this.designList=res.data
      })
      .catch((e) => {})
      .finally(() => {})
  },
  mounted() {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
    window.document.title = this.$route.meta.title = this.$route.query.name
  },
}
</script>

<style scoped>
.teamdetail {
  width: 1196px;
  height: 564px;
  border: 1px solid #ededed;
  box-sizing: border-box;
  margin: 20px auto;
}
.borderdier {
  width: 1154px;
  height: 484px;
  border: 1px solid #ededed;
  box-sizing: border-box;
  margin: 40px auto;
}
.bordersan {
  width: 1108px;
  height: 404px;
  box-sizing: border-box;
  margin: 50px auto;
  text-align: left;
  align-items: normal;
}
.bordersan img {
  width: 264px;
  height: 402px;
  margin-right: 22px;
}
.bordersan h5 {
  font: 500 26px/1 'Microsoft YaHei';
  color: #323232;
  margin-bottom: 26px;
}
article {
  margin-top: 22px;
}
article p {
  font: 400 16px/40px 'Microsoft YaHei';
  color: #323232;
}
.bordersan_r {
  border: 1px solid #ededed;
  padding: 36px 30px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.star {
  margin-right: 30px;
}
</style>
