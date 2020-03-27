<template>
  <div class="World">
    <el-row>
      <el-button type="primary" @click="save">Save</el-button>
      <el-button type="success" @click="update">Update</el-button>
      <el-button type="info" @click="select">Select</el-button>
      <el-button type="danger" @click="del">Delete</el-button>
    </el-row>
    <br />
    <el-row>
      <el-button type="primary" @click="p">进入P的世界</el-button>
      <el-button type="success" @click="vip">进入VIP的世界</el-button>
      <el-button type="info" @click="svip">进入SVIP的世界</el-button>
      <el-button type="danger" @click="logout">离开世界</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "World",
  data() {
    return {
      token: this.getToken()
    };
  },
  methods: {
    showMsg(result) {
      if (result.status === 200) {
        const data = result.data;
        if (data.status === 200) {
          this.$message({
            showClose: true,
            message: data.msg,
            type: "success",
            duration: "600"
          });
        } else {
          this.$message({
            showClose: true,
            message: data.msg,
            type: "error",
            duration: "3000"
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "操作失败，请联系管理员",
          type: "error",
          duration: "3000"
        });
      }
    },
    save() {
      this.$axios({
        method: "POST",
        url: "/shiro/save",
        data: {},
        headers: {
          token: this.token
        }
      }).then(result => {
        this.showMsg(result);
      });
    },
    update() {
      this.$axios({
        method: "PUT",
        url: "/shiro/update",
        data: {},
        headers: {
          token: this.token
        }
      }).then(result => {
        this.showMsg(result);
      });
    },
    select() {
      this.$axios({
        method: "GET",
        url: "/shiro/select",
        data: {},
        headers: {
          token: this.token
        }
      }).then(result => {
        this.showMsg(result);
      });
    },
    del() {
      this.$axios({
        method: "DELETE",
        url: "/shiro/delete",
        data: {},
        headers: {
          token: this.token
        }
      }).then(result => {
        this.showMsg(result);
      });
    },
    p() {
      this.$axios({
        method: "GET",
        url: "/shiro/p",
        data: {},
        headers: {
          token: this.token
        }
      }).then(result => {
        this.showMsg(result);
      });
    },
    vip() {
      this.$axios({
        method: "GET",
        url: "/shiro/vip",
        data: {},
        headers: {
          token: this.token
        }
      }).then(result => {
        this.showMsg(result);
      });
    },
    svip() {
      this.$axios({
        method: "GET",
        url: "/shiro/svip",
        data: {},
        headers: {
          token: this.token
        }
      }).then(result => {
        this.showMsg(result);
      });
    },
    logout() {
      this.$axios({
        method: "POST",
        url: "/shiro/sys/logout",
        data: {},
        headers: {
          token: this.token
        }
      }).then(result => {
        if (result.status === 200) {
          const data = result.data;
          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: data.msg,
              type: "success",
              duration: "1600"
            });
          } else {
            this.$message({
              showClose: true,
              message: data.msg,
              type: "error",
              duration: "3000"
            });
          }
          this.setToken("");
          this.$router.push({ path: "/" });
        } else {
          this.$message({
            showClose: true,
            message: "操作失败，请联系管理员",
            type: "error",
            duration: "3000"
          });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
