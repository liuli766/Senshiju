<template>
  <div>
      <div class="inforparent" v-for="(item,index) in maition" :key='index'>
          <div v-show="sec===item.id">
               <div class="inforlist">
              <img src="../../static/pic.png" alt="">
              <div class="infor_txt">
                  <div class="b">12<span>/month</span></div>
                  <span class="hline"></span>
                  <h6 class="h6tit">{{maition.mation}}</h6>
                  <span class="hline1"></span>
                  <p class="txtp two-wrap">社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快</p>
              </div>
              <div class="blok"></div>
              <div class="btn">
                  <button @click="handprve(item.id)">></button>
                  <button @click="handnext(item.id)">></button>
              </div>
          </div>
          <!--  -->
            <div class="infornews_parent">
                <div class="infornews">
                    <p class="txtp1 one-wrap">社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快</p>
                    <div>19-12-11</div>
                </div>
                <div class="infornews">
                    <p class="txtp1 one-wrap">社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快</p>
                    <div>19-12-11</div>
                </div>
                <div class="infornews">
                    <p class="txtp1 one-wrap">社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快</p>
                    <div>19-12-11</div>
                </div>
                <div class="infornews">
                    <p class="txtp1 one-wrap">社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快社会的发展越来越快</p>
                    <div>19-12-11</div>
                </div>
            </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    maition: {
      type: Array
    }
  },
  data () {
    return {
      sec: 0
    }
  },
  methods: {
    handprve (idx) {
      this.sec = idx
      idx === 0 && (this.$message({message: '这是最后一张了'}))
      console.log(idx)
    },
    handnext (idx) {
      console.log(idx)
    }
  }
}
</script>

<style scoped>
.inforparent{
    padding: 0 20px;
    box-sizing: border-box;
    position: absolute;
    height: 600px;
    left: 0;
    right: 0;
}
.inforlist{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
.blok{
    position: absolute;
    width: 120px;
    height:130px;
    background: rgba(211,211,213,.7);
    bottom: -50px;
    left: -16px;
    z-index: -1;
}
.btn{
    position: absolute;
    bottom: -70px;
    right: 0;
    width:110px;
    display: flex;
    justify-content: space-between;
}
.btn button{
    width: 40px;
    height:40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #c3975c;
    color: #c3975c;
    background: #fff;
    outline: none;
}
.infor_txt{
    text-align: left;
}
.inforlist img{
    width: 594px;
    height:334px;
    margin-right: 48px;
}
.b{
    font:bold 30px/1 "";
    color: #000;
    margin-bottom: 18px;
}
.b span{
    font: bold 12px/1 "";
    color: #333;
}
.hline{
    width: 130px;
    height: 1px;
    background: #7a797c;
    display: block;
}
.h6tit{
    font: 26px/1 "";
    color: #000;
    margin-top: 30px;
    margin-bottom: 14px;
}
.hline1{
    display: block;
    width:330px;
    height: 1px;
    background: #333;
}
.txtp{
    font: 17px/30px "";
    color:#949494;
}
.infornews_parent{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #5b5b5b;
    flex-wrap: wrap;
    margin-top: 146px;
}
.infornews_parent .infornews{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
}
.txtp1{
    width: 284px;
    margin-bottom: 18px;
}
</style>
