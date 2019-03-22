<template lang="pug">
  include ../pug/mixins/bem

</template>
<script>
export default {
  props: {
    rates: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    class svgChart {
      constructor(element, data, colors=[], step) {
        this.element = element
        this.data = data
        this.colors = colors
        this.step = step
      }
      init() {
        let maxH = Math.max.apply(null, this.data)
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        svg.setAttribute('viewBox', `0 0 ${this.data.length * this.step} ${maxH}`)
        svg.setAttribute('width', this.data.length * this.step)
        svg.setAttribute('height', maxH)
        this.data.forEach((element, index) => {
          let child = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
          child.setAttribute('width', `${this.step}px`)
          child.setAttribute('height', `${element}px`)
          child.setAttribute('x', index * this.step)
          child.setAttribute('y', `${maxH - element}px`)
          child.setAttribute('fill', this.colors[index])
          svg.appendChild(child)
        })
        this.element.appendChild(svg)
      }
    }
    class canvasChart {
      constructor(canvas, data, colors=[], step) {
        this.canvas = canvas
        this.data = data 
        this.colors = colors 
        this.step = step 
        this.ctx = this.canvas.getContext('2d')
      }
      init() {
        let maxH = Math.max.apply(null, this.data)
        this.canvas.width = this.data.length * this.step
        this.canvas.height = maxH
        this.data.forEach((element, index) => {
          this.ctx.fillStyle = this.colors[index]
          this.ctx.fillRect(index * this.step, maxH - element, this.step, element)
        })
      }
    }
    let svg = document.getElementById('svg-chart')
    let data = JSON.parse(svg.dataset.rates)
    let step = JSON.parse(svg.dataset.stepWidth)
    let colors = JSON.parse(svg.dataset.colors)
    let chart = new svgChart(svg, data, colors, step)
    chart.init()


    let canvas = document.getElementById('canvas')
    let cData = JSON.parse(canvas.dataset.rates)
    let cStep = JSON.parse(canvas.dataset.stepWidth)
    let cColors = JSON.parse(canvas.dataset.colors)
    let cChart = new canvasChart(canvas, cData, cColors, cStep)
    cChart.init()

    // let viewInterval = setInterval(function () {
    // }, 50)


  }
}
</script>
