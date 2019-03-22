<template lang="pug">
  
</template>
<script>
export default {
  data() {
    return {
      coords: [
        {
          "from": {
            "x": 0,
            "y": 0
          },
          "to": {
            "x": 5,
            "y": 10
          }
        }, 
        {
          "center": {
            "x": 10,
            "y": 10
          },
          "radius": 2.8
        }
      ]
    }
  },
  mounted() {
    let result = this.check()
    console.log(result)
  }
  ,
  methods: {
    check(x=10, y=10) {
      let arr = []
      this.coords.forEach(element => {
        if (element.from) {
          element.width = element.to.x - element.from.x
          element.height = element.to.y - element.from.y
          if (
            x <= element.from.x + element.width &&
            x >= element.from.x &&
            y <= element.from.y + element.height &&
            y >= element.from.y) {
              arr.push(element)   
          }
        } else {
          let res = Math.pow((x - element.center.x), 2) + Math.pow((y - element.center.y), 2)
          let radiusPow = Math.pow(element.radius, 2)
          if (radiusPow == res) {
            arr.push(element)   
          } 

          // let a = element.radius + element.center.x
          // element.width = element.height = a + b 
        }
      })
      return arr
    }
  },
}
</script>
