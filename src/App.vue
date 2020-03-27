<template>
  <div id="app">
    <transition>
        <router-view></router-view>
            </transition>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  
</style>


<style scoped>
     

.v-enter,
.v-leave-to {
  /* 透明度 */
  opacity: 0;
  transform: translateY(10px);
}
/* v-enter-active [时间段]入场动画时间段
            v-leave-active  [时间段]离场动画时间段
         */

.v-enter-active,
.v-leave-acive {
  transition: all 1.5s ease;
}
</style>