import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

export default new Vue({
  el: '#app',
  store,
  render(h){
    return h(App)
  }
})