<template>
  <!-- 设计师详情 -->
  <div>
    <div class="teamdetail">
      <div class="borderdier">
        <div class="bordersan fl_be">
          <img src="../../static/team.png" alt="">
          <div class="bordersan_r">
            <div>
               <h5>{{this.$route.query.name}}</h5>
              <div class="color98">设计总监</div>
              <article>
                <p>毕业院校：成都大学</p>
                <p>用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待用生活来塑造实用的奢华， 用色彩来渲染立体的律动， 用真诚来换取满意的期待</p>
              </article>
            </div>
            <div class="fl_be_al starrating">
              <div class="fl_be_al star">评价星级：<el-rate
                                        v-model="value"
                                        disabled
                                        show-score
                                        text-color="#ff9900"
                                        >
                                      </el-rate></div>
              <div>从业年限：6年以上</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 5
    }
  },
  created () {
    window.document.title = this.$route.meta.title = this.$route.query.name
    console.log(this.$route)
  },
  mounted () {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  }
}
</script>

<style scoped>

.teamdetail{
  width:1196px;
  height:564px;
  border:1px solid #ededed;
  box-sizing: border-box;
  margin:20px auto;
}
.borderdier{
  width:1154px;
  height:484px;
  border:1px solid #ededed;
  box-sizing: border-box;
  margin: 40px auto;
}
.bordersan{
  width:1108px;
  height:404px;
  box-sizing: border-box;
  margin: 50px auto;
  text-align: left;
  align-items: normal;
}
.bordersan img{
  width:264px;
  height:402px;
  margin-right: 22px;
}
.bordersan h5{
  font:500 26px/1 "";
  color: #323232;
  margin-bottom: 26px;
}
article{
  margin-top:22px;
}
article p{
  font:400 16px/40px "";
  color: #323232;
}
.bordersan_r{
  border: 1px solid #ededed;
  padding: 36px 30px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.star{
  margin-right: 30px;
}
</style>
