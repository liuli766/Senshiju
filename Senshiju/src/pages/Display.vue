<template>
  <!-- 建房百科专题 -->
  <div>
    <img src="../assets/image/display.png" class="banner_img" alt="" />
    <div class="yellow_box">
      <div class="main comm_12">
        当前位置：<router-link to="/">主页</router-link>>专题
      </div>
    </div>
    <div class="display_two comm_12">
      <img src="../assets/image/display.png" alt="" />
      <div class="display_two_box">
        <h5>标题</h5>
        <p class="comm_one">
          10万以下两层自建房大全提供2018年新款农村两层自建房设计图
          造价10万元内，带外观效果图，含中式两层自建房图，欧式两层自建
        </p>
        <div class="display_up comm_one">
          <span class="upup">99748人点赞</span>
          <img src="../assets/image/up.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 自建房 -->
    <div class="comm_12" style="overflow:hidden">
      <div>
        <div class="display_self comm_12">
          <div class="display_self_tit">{一层10万自建房}</div>
          <div class="display_self_yell">European recommen</div>
        </div>
        <div class="display_self_con" v-for="(item,v) in 5" :key="v">
          <img src="../assets/image/jfbk.png" alt="" class="display_self_img" />
          <p class="display_self_p">
            新农村自建二层楼房户型设计图 简单大气 外观漂亮精致
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.comm_12 {
  width: 1200px;
  margin: 0 auto;
}
.banner_img {
  width: 100%;
  height: 100%;
  margin-bottom: 48px;
}
.yellow_box {
  height: 70px;
  background: #fecb38;
  font-size: 36px;
  line-height: 70px;
  color: #343434;
  text-align: left;
}

.display_two {
  padding: 65px 5px 20px 14px;
  box-sizing: border-box;
  overflow: hidden;
}
.display_two > img {
  height: 285px;
  width: 285px;
  border-radius: 50%;
  margin-right: 52px;
  float: left;
}
.display_two .display_two_box h5 {
  font-size: 48px;
  line-height: 20px;
  color: #242424;
  margin-bottom: 52px;
}
.comm_one {
  font-size: 22px;
  color: #242424;
}
.display_two .display_two_box p {
  line-height: 28px;
  text-align: left;
}
.display_two .display_two_box .display_up {
  float: right;
  margin-top: 52px;
  line-height: 24px;
}
.display_up .upup {
  line-height: 40px;
  margin-right: 6px;
}
.display_self {
  height: 120px;
  filter: drop-shadow(0px 8px 3.5px rgba(97, 97, 97, 0.29));
  background-color: #eeeeee;
  padding: 28px 0 16px 0;
  box-sizing: border-box;
  margin-bottom: 32px;
}
.display_self .display_self_tit {
  font-size: 48px;
  color: #202020;
  line-height: 1;
}
.display_self .display_self_yell {
  font-size: 20px;
  color: #fecb38;
  line-height: 1;
}
.display_self_con {
  width: 348px;
  height: 332px;
  margin: 0 26px;
  float: left;
}
.display_self_img {
  width: 100%;
  height: 244px;
  margin-bottom: 4px;
}
.display_self_p {
  font-size: 18px;
  line-height: 20px;
  color: #212121;
  font-family: "Sim Hei";
  padding: 0 48px;
}
</style>