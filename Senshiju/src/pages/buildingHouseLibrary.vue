<template>
  <div>
    <div class="content">
      <div class="hot">
        <h4 class="font40">建房<span class="theme">·图库</span></h4>
        <div class="flex colord2">
          <div class="font20 flex"><div class="line"></div>·</div>
          <div class="txt ">BUILDING GALLERY</div>
          <div class="font20 flex">·<div class="line"></div></div>
        </div>
      </div>
      <!--  -->
      <div class="build">
        <div class="bulid_child">
          <span class="style">风格</span>
          <div class="line_h"><li v-for="(item,index) in arr"
          :key='index' >{{item.text}}</li></div>
        </div>
        <div class="bulid_child">
          <span class="style">面宽</span>
          <div class="line_h"><li v-for="(item,index) in arr" :key='index'>{{item.text}}</li></div>
        </div>
        <div class="bulid_child">
          <span class="style">进深</span>
          <div class="line_h"><li v-for="(item,index) in arr" :key='index'>{{item.text}}</li></div>
        </div>
        <div class="bulid_child">
          <span class="style">占地</span>
          <div class="line_h"><li v-for="(item,index) in arr" :key='index'>{{item.text}}</li></div>
        </div>
        <div class="bulid_child">
          <span class="style">层数</span>
          <div class="line_h"><li v-for="(item,index) in arr" :key='index'>{{item.text}}</li></div>
        </div>
        <div class="bulid_child">
          <span class="style">造价</span>
          <div class="line_h"><li v-for="(item,index) in arr" :key='index'>{{item.text}}</li></div>
        </div>
        <div class="bulid_child">
          <span class="style">风格</span>
          <div class="line_h"><li v-for="(item,index) in arr" :key='index'>{{item.text}}</li></div>
        </div>
        <div class="bild_b">
          <div class="font20 theme">已选条件</div>
          <div>清空</div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="build_bg">
      <img src="../assets/image/bg.png" alt="">
      <div class="build_fiflter">
        <span class="font24">别墅图纸共有套</span>
        <div class="theme font18"><span>排序</span><span>人气</span><span>面积</span><span>最新</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {
          text: '全部',
          selected: false
        },
        {
          text: '现代',
          selected: false
        },
        {
          text: '欧式',
          selected: false
        },
        {
          text: '中式合院',
          selected: false
        },
        {
          text: '新中式',
          selected: false
        },
        {
          text: '微派',
          selected: false
        }
      ]
    }
  },
  methods: {

  },
  mounted () {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  }
}
</script>

<style scoped>
.content{
    border: 1px dashed#bfbfbf;
    width:1200px;
    margin: 0 auto;

}
.hot{
  padding: 50px 0 32px 0;
}
.hotnav{
  display: flex;
  align-items: center;
  justify-content: center;
}
.hotnav span{
  display: block;
  width: 84px;
  height:32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
}
.hotnav .hot_active{
  border: 1px solid #fdd45f;
  transition: all .8s;
  color:#fdd45f ;
}
.parent{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.line{
  width: 328px;
  height:1px;
  background: #d2d2d2;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: center;
}
.txt{
  margin: 10px;
  font:bold 24px/1 "";
}
.style{
  display: block;
  width: 50px;
  text-align: center;
}
.line_h{
  display: flex;
}
.line_h li{
  padding: 6px 8px;
  margin-right: 22px;
  border-radius: 7px;
}
.build{
  margin: 0 auto;
  width: 1088px;
}
.bg_active{
  background: #fdd45f;
}
.bulid_child{
  display: flex;
  align-items: center;
}
.bild_b{
  border-top: 1px solid #fdd45f;
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 15px 10px;
}
.build_fiflter{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #d2d2d2;
}
.build_bg img{
  margin-top:36px;
}
.theme.font18 span+span{
  margin-left: 50px;
}
</style>
