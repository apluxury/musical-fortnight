// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 项目初始化
import 'styles/reset.css'
// 1像素边框
import 'styles/border.css'
// 引入字体图标文件
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
// 解决移动端点击事件延迟300ms
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
