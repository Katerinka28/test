import Vue from 'vue'
import test from './test'
import task05 from './task05'
import task08 from './task08'
import task11 from './task11'
import task12 from './task12'
import task26 from './task26'
import task21 from './task21'
Vue.component('test', test)
Vue.component('task05', task05)
Vue.component('task08', task08)
Vue.component('task11', task11)
Vue.component('task12', task12)
Vue.component('task26', task26)
Vue.component('task21', task21)
window.app = new Vue({
  el: '#app',
  data() {
    return {
      data: {
        "root": {
          "title": "Some",
          "type": "question",
          "variants": [
            {
              "title": "Yes",
              "type": "answer",
              "kind": "affirmative",
              "ref": "step-01"
            },
            {
              "title": "No",
              "type": "answer",
              "kind": "negative",
              "ref": "step-02"
            }
          ]
        },
        "step-01": {
          "title": "Finish",
          "type": "finish"
        },
        "step-02": {
          "title": "Other",
          "type": "question",
          "variants": [
            {
              "title": "Yes",
              "type": "answer",
              "kind": "affirmative",
              "ref": "step-01"
            },
            {
              "title": "No",
              "type": "answer",
              "kind": "negative",
              "ref": "step-03"
            }
          ]
        },
        "step-03": {
          "title": "Fuck you!",
          "type": "finish"
        }
      }
    }
  }
})


