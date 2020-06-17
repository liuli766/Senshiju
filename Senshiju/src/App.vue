<template>
  <div id="app">
    <!-- 导航 -->
    <Header></Header>
    <transition name="bounce">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  },
  watch: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bounce-enter-active {
  animation: fadeIn .8s;
}
.bounce-leave-active {
  animation: fadeIn 0s;
}
.slideleft-enter,
 .slideright-leave-active {
  opacity: 1;
  transform: translate3d(90% 0, 0);
  -webkit-transform: translate3d(90%, 0, 0);
  -moz-transform: translate3d(90%, 0, 0);
}
.slideleft-leave-active,
.slideright-enter {
 opacity: 1;
 transform: translate3d(-90% 0, 0);
 -webkit-transform: translate3d(-90%, 0, 0);
 -moz-transform: translate3d(-90%, 0, 0);
}
</style>
