<template lang="pug">
  include ../pug/mixins/bem
  .poll(ref='poll')
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: {
        root: {
          title: "Some",
          type: "question",
          variants: [
            {
              title: "Yes",
              type: "answer",
              kind: "affirmative",
              ref: "step-01"
            },
            {
              title: "No",
              type: "answer",
              kind: "negative",
              ref: "step-02"
            },
            {
              title: "No",
              type: "answer",
              kind: "negative",
              ref: "step-03"
            }
          ]
        },
        "step-01": {
          title: "Finish",
          type: "finish"
        },
        "step-02": {
          title: "Other",
          type: "question",
          variants: [
            {
              title: "Yes",
              type: "answer",
              kind: "affirmative",
              ref: "step-01"
            },
            {
              title: "No",
              type: "answer",
              kind: "negative",
              ref: "step-03"
            },
            
          ]
        },
        "step-03": {
          title: "additional",
          type: "question",
          variants: [
            {
              title: "Yeeeees",
              type: "answer",
              kind: "affirmative",
              ref: "step-04"
            },
            {
              title: "Noooooo",
              type: "answer",
              kind: "negative",
              ref: "step-04"
            }
          ]
        },
        "step-04": {
          title: "Finish",
          type: "finish"
        },
      },
      initial: ''
    }
  },
  mounted() {
    this.initial = this.$refs.poll
    this.createQuestion(this.data.root, this.initial)

  },
  methods: {
    createQuestion(question, parent=this.initial) {
      let wrapper = parent
      // if (question.type !== 'finish') {
        // wrapper = document.createElement('div')

      // }
      let nodeEl = this.createNode(question, wrapper,'poll__question')
      parent.appendChild(nodeEl)

      if (question.type == "question") {
        this.addChildren(question, nodeEl)
      }
      if (parent == this.initial) return
      this.addArrow(nodeEl)
      
    },
    addChildren({ variants, ...other }, parent) {
      let wrap = document.createElement('div')
      wrap.classList.add('poll__wrap')
      wrap.style.gridTemplateColumns = `repeat(${variants.length}, 1fr)`
      variants.forEach(child => {
        let nodeEl = this.createNode(child, wrap, 'poll__answer')
        this.addArrow(nodeEl)
        this.createQuestion(this.data[child.ref], nodeEl)
      })
      parent.appendChild(wrap)
    },
    createNode(obj, parent, className) {
      let nodeEl = document.createElement('div')

      nodeEl.classList.add(className)
      let text = document.createElement('p')
      text.innerText = obj.title
      text.classList.add('text')
      if (obj.kind) {
        nodeEl.classList.add(`${className}--${obj.kind}`)
      }
      text.classList.add(obj.type)
      nodeEl.appendChild(text)
      parent.appendChild(nodeEl)
      
      return nodeEl
    }, 
    addArrow(parent) {
      let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('d', 'M25,25 L50,75 L75,25 Z')
      path.setAttribute('stroke', 'black')
      path.setAttribute('stroke-width', '10px')
      path.setAttribute('fill', 'black')
      
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('width', '25px')
      rect.setAttribute('height', '50px')
      rect.setAttribute('fill', 'black')
      rect.setAttribute('x', 38)
      rect.setAttribute('y', 0)
      
      let arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      arrow.setAttribute('width', '20px')
      arrow.setAttribute('height', '40px')
      arrow.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      arrow.appendChild(path)
      arrow.appendChild(rect)
      arrow.setAttribute('viewBox', '0, 0, 100, 100')
      parent.prepend(arrow)
    }
  }
}
</script>
