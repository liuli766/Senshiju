<template>
  <div>
    <select name="public-choice" v-model="couponSelected" @change="getCouponSelected">
      <option :value="coupon.name" v-for="(coupon,k) in couponList" :key="k">{{coupon.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponList: [
        {
          id: 'A',
          name: '优惠券1',
        },
        {
          id: '1',
          name: '优惠券2',
        },
        {
          id: '2',
          name: '优惠券3',
        },
      ],
      couponSelected: '',
    }
  },
  created() {
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    this.couponSelected = this.couponList[0].name
  },
  methods: {
    getCouponSelected() {
      //获取选中的优惠券
      console.log(this.couponSelected)
    },
  },
}
</script>

<style>
</style>