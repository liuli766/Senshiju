<template>
<div class="footer">
    <img src="/static/footer.png" alt="">
    <div class="footer_item">
        <div v-for="(item,index) in footerList" :key='index' class="footer_item_l">
            <span>200+</span>
            <span>{{item}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      footerList: ['高端别墅设计', '服务案列', '资深设计师', '施工工地']
    }
  }
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 310px;
    /* margin-top: 40px; */
    position: relative;
}
.footer img{
    width: 100%;
    height: 100%;

}
.footer_item{
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    font: 26px/40px "";
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
}
.footer_item_l{
    display: flex;
    flex-direction: column;
}
</style>
