// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://easy-blog-9ae62.firebaseio.com'
Vue.config.productionTip = false

Vue.directive('theme', {
  bind: function(el,binding,vnode){
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px'
    }else if (binding.value === 'narrow') {
      el.style.maxWidth = '500px'
    }

    if (binding.arg === 'column') {
      el.style.background = '#6677cc'
      el.style.padding = '20px'
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
