import Vue from 'vue'
import App from './App.vue'


// استفاده می کنیم  store از
import {store} from './store/Store';


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
