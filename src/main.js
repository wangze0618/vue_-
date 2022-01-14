import Vue from 'vue' //引入vue对象，类似于<script src="vue.js"></script>
import App from './App.vue' // App.vue文件里对象引入过来(vue项目页面入口)
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false // 在控制台里有一句提示信息
// 全局过滤器
Vue.filter('toFixedNum', val => val.toFixed(1))



new Vue({ // 开始实例化vue
  render: h => h(App), // 准备渲染App页面
}).$mount('#app') // 挂载到index.html 里的<div id='app'></div>里面
