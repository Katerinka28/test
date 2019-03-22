<template lang="pug">
  
</template>
<script>
export default {
  data() {
    return {
      part: 10,
      cakes: [5, 10, 20, 30]
    }
  },
  mounted() {
    let results = []
    this.cakes.forEach(element => {
      let per = 2 * Math.PI * element 
      let l = per / this.part
      results.push(l)

    })
    // console.log(results)
  }
}
</script>
