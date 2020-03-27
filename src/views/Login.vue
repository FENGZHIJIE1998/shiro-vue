<template>
  <div class="login">
    <Head></Head>
    <login-form></login-form>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";
import Head from "@/components/Head.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
    Head
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus"></style>
