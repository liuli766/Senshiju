<template>
  <span>{{ printVal }}</span>
</template>

<script>
export default {
  props: {
    startVal: {
      type: [String, Number],
      default: '',
    },
    endVal: {
      type: [String, Number],
      default: '',
    },
    speed: {
      type: [String, Number],
      default: 5,
    },
    decimals: {
      type: [String, Number],
      default: 0,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      start: +this.startVal,
      end: +this.endVal,
      formatSpeed: +this.speed || 5,
    }
  },
  created() {},
  computed: {
    formatDecimals() {
      // 是否整数
      let formatDecimals = this.decimals > 0 ? this.decimals : 0
      return formatDecimals
    },
    decimalsLen() {
      // 1 = 0.001 * decimalsLen(x);
      let decimalsLen = Math.pow(10, this.formatDecimals)
      return decimalsLen
    },
    printVal() {
      // 保留几位小数
      let start = (
        parseInt(this.start * this.decimalsLen) / this.decimalsLen
      ).toFixed(this.formatDecimals)
      return start
    },
  },
  watch: {},
  methods: {
    accumulativeMachine() {
      setTimeout(() => {
        if (this.isReverse) {
          let decimals = this.formatDecimals === 0 ? 0 : 1 / this.decimalsLen
          let formatSpeed = this.formatSpeed / this.decimalsLen + decimals
          this.start -= formatSpeed
          if (this.printVal <= this.end) {
            this.start = this.end
            return
          }
        } else {
          let decimals = this.formatDecimals === 0 ? 0 : 1 / this.decimalsLen
          let formatSpeed = this.formatSpeed / this.decimalsLen + decimals
          this.start += formatSpeed
          if (this.printVal >= this.end) {
            this.start = this.end
            return
          }
        }
        this.accumulativeMachine()
      }, 8)
    },
    getScroll(){
      let scrollTop = document.documentElement.scrollTop
      let clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.documentElement.scrollHeight
      let footer = document.querySelector('.footer111_img')
      if (scrollTop > scrollHeight-1200) {
        this.$nextTick(() => {
          this.accumulativeMachine()
        })
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScroll);
  },
  destroyed(){
        window.removeEventListener('scroll', this.getScroll);
    },
}
</script>

<style scoped></style>

