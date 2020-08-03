<template>
  <!-- 支付页面 -->
  <div class="pay">
    <el-tabs type="border-card">
      <el-tab-pane label="微信支付">用户管理</el-tab-pane>
      <el-tab-pane label="支付宝">配置管理</el-tab-pane>
      <el-tab-pane label="对公转账">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import request from '@/request.js' 
export default {}
</script>

<style scoped>
.pay {
  width: 1175px;
  margin: 0 auto;
}
</style>
<style>
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
 border:0;
 color: #505050;
}
.el-tabs__item.is-top {
  color: #505050;
  font: bold 22px/20px '';
  padding: 20px 20px 26px 16px;
 border-top: 4px solid transparent !important;
}
.el-tabs__item.is-top.is-active{
    color: #0084FF;
    border-top: 4px solid #0084FF !important;
}

</style>