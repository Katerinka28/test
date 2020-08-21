<template>
  
</template>
<script>
export default {
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
  },
  mounted() {
    let result = this.getMeta()
    console.log(result)

  },
  methods: {
    getMeta(page=2, amount=6) {
      let totalAmount = this.data.length
      let result = []
      let totalPages = Math.floor(totalAmount / amount)
      let hasLastPages = totalAmount - (totalPages * amount)
      if (hasLastPages) {
        totalPages ++
      }
      let arr = []
      for (let x=0; x < totalPages; x++) {
        arr[x] = this.data.slice(x*amount, (x*amount)+amount)
      }
      if (page >= 1 && page <= totalPages) {
        return arr[page-1]
      }
      return []

    }
  }
}
</script>
