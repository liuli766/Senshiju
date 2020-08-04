<template>
  <div class="buildhost">
    <div>
      <div class="content">
        <div class="hot">
          <h4 class="font29">
            建房
            <span class="theme">·图库</span>
          </h4>
          <div class="flex colord2">
            <div class="font20 flex">
              <div class="line"></div>·
            </div>
            <div class="txt">BUILDING GALLERY</div>
            <div class="font20 flex">
              ·
              <div class="line"></div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="build">
          <div class="bulid_child" v-for="(v,k) in filterList" :key="k">
            <span class="style">{{v.cate_name}}</span>
            <div class="line_h">
              <li
                :class="{'bg_active': val.active}"
                @click="tabClick(val,key,k)"
                v-for="(val, key) in v.child"
                :key="key"
              >{{val.cate_name}}</li>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="build_bg">
        <div class="fl_be" style="height:50px">
          <span v-if="filterSelData===''">
            已选条件：
            <span v-for="(item,index) in arr1" :key="index">全部</span>
          </span>

          <span v-else>已选条件：{{filterSelData}}</span>
          <span>清空</span>
        </div>
        <img src="../assets/image/bg.png" alt />
        <div class="build_fiflter">
          <span class="font24">别墅图纸共有套</span>
          <div class="theme font18">
            <span>排序</span>
            <span>
              人气
              <span class="iconfont icon-jiantou-xia"></span>
            </span>
            <span>
              面积
              <span class="iconfont icon-jiantou-xia"></span>
            </span>
            <span>
              最新
              <span class="iconfont icon-jiantou-xia"></span>
            </span>
          </div>
        </div>
      </div>
      <!-- 图纸设计 -->
      <div class="drawing_box">
        <div
          class="drawing poniter"
          v-for="(item,index) in newarr"
          :key="index"
          @click="handdetail"
        >
          <img :src="item.img" alt />
          <p class="one-wrap">{{item.p}}</p>
          <div class="bot">
            <span>
              占地面积：
              <i>228m</i>
            </span>
            <span>
              图纸编号：
              <i>B203</i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 38px;">
      <newdesign />
      <newinfo />
    </div>
  </div>
</template>

<script>
import newdesign from '@/components/newdesign.vue'
import newinfo from '@/components/newinfo.vue'
// import demo2 from '../assets/comm/demo1'
// import demo3 from '../assets/comm/comm'
import request from '@/request.js' 
export default {
  components: {
    newdesign,
    newinfo
  },
  data() {
    return {
      viewTime: {
        time: true,
        msg: '数据拼命加载中...'
      },
      filterList: [],
      filterSelData: '', // 过滤选中的数据
      newarr: [],
      arr1: [
        {
          type: '现代',
          img: require('../../static/jf.png'),
          p: '农村自建房两层楼新中式别墅设计农村自建房两层楼新中式别墅设计'
        },
        {
          type: '欧式',
          img: require('../../static/jf.png'),
          p: '农村自建房两层楼新中式别墅设计农村自建房两层楼新中式别墅设计'
        },
        {
          type: '中式合院',
          img: require('../../static/jf.png'),
          p: '农村自建房两层楼新中式别墅设计农村自建房两层楼新中式别墅设计'
        }
      ]
    }
  },
  created() {
    // 请求数据
    // this.viewList = [...demo2]
    // this.filterList = [...demo3]
    request.getCates({
          cate_id:''
        }).then((res) => {
          this.filterList=[...res.data.list]
        })
        .catch((e) => {})
        .finally(() => {})
    
    this.newarr = this.arr1
  },
  methods: {
    handdetail() {
      //跳转产品详情
      this.$router.push({
        path: '/productDetail'
      })
    },
    // 点击单个val
    tabClick(data, key, k) {
      console.log(data, key, k)
      // 添加 active ==> true 显示 `active样式`
      this.filterList[k].child.map(item => {
        item.active = false
      })
      this.filterList[k].child[key].active = true

      // 选中的数据
      let newArray = []
      this.filterList.map(data => {
        data.child.map(item => {
          if (item.active == true) {
            newArray.push(item.value)
          }
        })
      })
      this.filterSelData = newArray

      let list = [...this.arr1] // 拷贝原数组
      
      list = list.filter(item => item.type === data.value)
      this.newarr = list
      return list
     
    }
  },
  mounted() {
    let nav = document.querySelector('.nav')
    nav.style.display = 'block'
  }
}
</script>

<style scoped>
.buildhost {
  display: flex;
}
.content {
  border: 1px dashed#bfbfbf;
  width: 889px;
  margin: 0 auto;
}
.build_bg {
  width: 889px;
  margin: 0 auto;
}
.build_bg > img {
  width: 889px;
}
.hot {
  padding: 50px 0 32px 0;
  width: 889px;
  margin: 0 auto;
}
.hotnav {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hotnav span {
  display: block;
  width: 84px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
}
.hotnav .hot_active {
  border: 1px solid #fdd45f;
  transition: all 0.8s;
  color: #fdd45f;
}
.parent {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.line {
  width: 233px;
  height: 1px;
  background: #d2d2d2;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.txt {
  margin: 10px;
  font: bold 18px/1 '';
}
.style {
  display: block;
  width: 50px;
  text-align: center;
}
.line_h {
  display: flex;
}
.line_h li {
  padding: 6px 8px;
  margin-right: 22px;
  border-radius: 7px;
  margin-bottom: 8px;
}
.build {
  margin: 0 auto;
  width: 889px;
}
.bg_active {
  background: #fdd45f;
}
.bulid_child {
  display: flex;
  align-items: center;
}
.bild_b {
  border-top: 1px solid #fdd45f;
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 15px 10px;
}
.build_fiflter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #d2d2d2;
}
.theme.font18 span + span {
  margin-left: 50px;
}
.drawing {
  width: 284px;
  height: 322px;
  transition: all 0.3s;
}
.drawing:hover {
  box-shadow: 10px 10px 5px #e2e1e1, 10px -10px 5px #e2e1e1,
    -10px 10px 5px #e2e1e1, -10px -10px 5px #e2e1e1;
}
.drawing img {
  width: 284px;
  height: 238px;
}
.drawing p {
  width: 239px;
  margin: 12px 16px 15px 13px;
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(71, 71, 71, 1);
}
.drawing_box {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 889px;
}
.bot {
  padding: 24px 13px;
  border-top: 1px dashed #b5b5b5;
  display: flex;
  justify-content: space-between;
}
i {
  font-style: normal;
  color: #e8342b;
}
.deleta {
  color: #245b0f;
  margin-right: 4px;
}
</style>
