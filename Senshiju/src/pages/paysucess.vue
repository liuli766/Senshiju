<template>
  <div>
    <el-dialog :visible.sync="orderSuccess" width="21.35%" top="30vh" center>
      <div class="dia-box">
        <img class="dia-img" src="../assets/image/pay-success.png" />
        <div class="title bold">支付成功</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            orderSuccess:true
        }
    },
}
</script>

<style>
</style>