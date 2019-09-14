import Vue from 'vue'
import Appx from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Appx/>',
  components: { Appx }
})
