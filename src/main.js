import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入时间戳组件--未用
// import moment from 'moment'
// 引入elementUI组件及样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue-resource，vue中使用的请求网络数据的插件，这个插件是依赖于vue的，简单说就是用来调接口的。
import VueResource from 'vue-resource'
// 导入axios模块
import axios from 'axios'
// 设置axios基础的URL地址（在此已经决定了端口号）
axios.defaults.baseURL="/api";

Vue.config.productionTip = false
// 使用ElementUI--组件库
Vue.use(ElementUI);
// 使用VueResource--调接口的
Vue.use(VueResource)
// 将axios扩展为Vue的属性
Vue.prototype.axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
