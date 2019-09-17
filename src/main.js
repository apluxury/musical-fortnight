// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 项目初始化
import './assets/styles/reset.css'
// 1像素边框
import './assets/styles/border.css'

// 解决移动端点击事件延迟300ms
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})