import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.getToken = function() {
    const token = localStorage.getItem("token");
    if (token === "" || token == null) {
        this.$message({
            showClose: true,
            message: "请先登录",
            type: "error",
            duration: "3000"
        });
        this.$router.push({ path: "/" });
    }
    return token;
}
Vue.prototype.setToken = function(token) {
    localStorage.setItem("token", token);
}
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')