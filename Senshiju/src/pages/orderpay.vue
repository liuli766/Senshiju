<template>
  <!-- 在线快速订购 -->
  <div>
    <div class="orderpay">
      <h6>在线快速订购</h6>
      <div class="order">
        <div class="flx">
          <span>产品</span>
          <div>
            <div class="dui" v-for='(item,k) in checklist' :key="k">
              <span>
                <img src="../assets/image/dui.png" alt v-show="item.checked" />
              </span>
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            checklist:[
                {
                    checked:true,
                    name:'纸质版打印1份458元'
                },
                {
                    checked:false,
                    name:'纸质版打印2份558元'
                },
                {
                    checked:false,
                    name:'纸质版打印3份708元'
                }
            ]
        }
    },
}
</script>

<style scoped>
.orderpay {
  background: #ffc92f;
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 144px;
  font-size: 24px;
  color: #1a1a1a;
}
.orderpay h6 {
  font-size: 28px;
  line-height: 85px;
  height: 85px;
  padding-left: 13px;
  color: #fff;
  text-align: left;
}
.order {
  width: 1175px;
  height: 834px;
  background: #fff;
  padding-top:32px;
}
.dui {
  display: flex;
  align-items: center;
  margin-left: 19px;
  margin-bottom: 18px;
}
.dui span {
  display: inline-flex;
  width: 27px;
  height: 27px;
  border-radius: 5px;
  background-color: #eeeeee;
  border: 1px solid #b7beb6;
  margin-right: 36px;
}
</style>