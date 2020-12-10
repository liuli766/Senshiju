<template>
  <div class="scroll"></div>
</template>
 
<script>
export default {
  name: "Scroll",
   props: {
    onBottom: Function,
  },
  methods: {
    scrollEvent() {
        // const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    //   if (
    //     // document.documentElement.scrollTop +
    //     //   document.documentElement.clientHeight >=
    //     // document.body.scrollHeight
        
    //     // document.querySelector('.scroll').offsetTop - document.documentElement.scrollTop <= viewPortHeight
    //     // document.documentElement.scrollTop>500
    //     true
    //   ) {
    //     this.onBottom();
    //   }
    },
  },
 
  mounted() {
    window.addEventListener("scroll", this.scrollEvent, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEvent, false);
  },
};
</script>