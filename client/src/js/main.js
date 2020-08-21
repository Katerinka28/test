import Vue from 'vue'
import VueAccordion from '@aspectus/vue-accordion'

Vue.use(VueAccordion)
window.app = new Vue({
  el: '#app',
  data() {
    return {
      data: {
      },
    }
  },
})
