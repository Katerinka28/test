<template lang="pug">
  //- include ./../pug/mixins/bem.pug
  p test
</template>

<script>
export default {
  name: 'SeoText',
 
  data() {
    return {
      params: {
        'loyalty': 1,
        'size': 2,
        'fur': 3,
        'physio': 4,
        'task': 5,
        'fit': 6
      },
      dogsInfo: [
        {
          "size": true,
          "fur": true,
          "task": false,
          "fit": true,
          "physio": false,
          "loyalty": true
        },
        {
          "size": false,
          "fur": true,
          "task": true,
          "fit": false,
          "physio": true,
          "loyalty": false
        },
        {
          "size": false,
          "fur": true,
          "task": false,
          "fit": false,
          "physio": true,
          "loyalty": true
        }
      ],
      result: []
    }
  }, 
  mounted() {
    // let result = this.getDogPoints(this.dogsInfo, this.params)
    // console.log(result)
  },
  methods: {
    getDogPoints(dogs, params) {
      let dogsResult = []
      dogs.forEach((dog, index) => {
        let totalPoint = 0
        let dogParams = Object.keys(dog)
        dogParams.forEach(key => {
          if (dog[key]) {
            totalPoint += params[key]
          }
        })
        let obj = {}
        let key = `Dog#${index}`
        obj[key] = totalPoint
        dogsResult.push(totalPoint)
      })
      dogsResult.sort((a, b) => {
        if (a < b) return 1
        if (a > b) return -1
        return 0
      })
    }
  },
}
</script>

