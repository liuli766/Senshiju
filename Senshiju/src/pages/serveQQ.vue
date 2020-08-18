<template>
  <div>
    <!-- 客服聊天 -->
    <a href="javascript:void(0)" id="contactQQ">在线客服</a>
    <!-- 第一种 -->
<a href="tencent://message/?uin=1872124699&Site=&Menu=yes" target="_blank">
<img src="http://wpa.qq.com/pa?p=2:1283438066:41" alt="点击这里给我发消息"></a>
 
<!-- 第二种 -->
<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1283438066&site=qq&menu=yes"><img src="http://wpa.qq.com/pa?p=2:1283438066:41" alt="点击这里给我发消息"/></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qq: '',
    }
  },
  created() {
    this.qq = BizQQWPA.addCustom({
      aty: '0', //指定工号类型,0-自动分流，1-指定工号，2-指定分组
      nameAccount: '1872124699', //指定的聊天 QQ 号码
      selector: 'contactQQ', //触发聊天的标签id
    })
  },
}
</script>

<style>
</style>