<template>
  <div class="loginForm">
    <div>
      登录
      <i class="el-icon-user-solid"></i>
    </div>
    <div class="row">
      <el-input
        class="input"
        id="username"
        type="text"
        placeholder="请输入用户名"
        v-model="username"
        clearable
        @keyup.enter.native="login"
      />
    </div>
    <div class="row">
      <el-input
        class="input"
        id="password"
        type="password"
        placeholder="请输入密码"
        v-model="password"
        clearable
        @keyup.enter.native="login"
      />
    </div>
    <div class="row">
      <el-button @click="login" type="success" plain round>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    /**
     * 新增
     */
    login() {
      // 判断输入数据
      if (this.username == "" || this.secretKey == "") {
        this.$message({
          showClose: true,
          message: "请正确输入数据",
          type: "warning",
          duration: "1000"
        });
        return;
      }

      this.$axios({
        method: "post",
        url: "/shiro/sys/login",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(result => {
        if (result.status === 200) {
          var data = result.data;
          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: "登录成功",
              type: "success",
              duration: "600"
            });
            this.username = "";
            this.password = "";
            this.setToken(data.token);
            this.$router.push({ path: "/Home" });
          } else {
            this.$message({
              showClose: true,
              message: "登录失败，原因: " + data.msg,
              type: "error",
              duration: "3000"
            });
          }
        } else {
          this.$message({
            showClose: true,
            message: "登录失败，请联系管理员",
            type: "error",
            duration: "3000"
          });
        }
      });
    }
  }
};
</script>


<style  scoped>
.input {
  width: 300px;
  margin: 0;
  padding: 0;
}
.row {
  padding: 10px 0px;
}
</style>
