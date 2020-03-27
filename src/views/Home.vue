<template>
  <div id="home">
    <Head></Head>
    <World></World>
  </div>
</template>


<script>
// @ is an alias to /src
import World from "@/components/World.vue";

import Head from "@/components/Head.vue";

export default {
  name: "Home",
  components: {
    World,
    Head
  }
};
</script>

<style lang="stylus"></style>
