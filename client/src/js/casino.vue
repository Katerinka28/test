<template lang="pug">
  div
    p(v-for='i in boys') {{ i.boy }} {{ i.girl.name }}
</template>
<script>
export default {
  data() {
    return {
      girls: [
        {
          name: 'Valentina',
          count: 0,
          id: 1
        }, {
          name: 'Katerina S.',
          count: 0,
          id: 2
        }, {
          name: 'KAterina D.',
          count: 0,
          id: 3
        }, {
          name: 'Alina',
          count: 0 ,
          id: 4
        }, {
          name: 'Elizaveta',
          count: 0,
          id: 5
        }, {
          name: 'Julia',
          count: 0,
          id: 6
        }, {
          name: 'Tatiana',
          count: 0,
          id: 6
        }
      ],
      boys_count: 46,
      boys: []
    }
  },
  mounted() {
    this.theLastOne = this.boys_count % this.girls.length
    console.log(this.theLastOne)
    for (let x=1; x<=this.boys_count; x++) { 
      this.boys.push({ boy: x, girl: null } )
    }
    setTimeout(() => {
      console.log(this.boys.length)
      for (let x=0; x<6; x++) { 
        this.random()
        this.random()

      }
    }, 1000)
    setTimeout(() => {
      this.boys = this.boys.sort((a, b) => a.girl.id - b.girl.id)
    }, 3000)
  },
  methods: {
    getGirl() {
      let girl = this.girls[Math.floor(Math.random() * this.girls.length)]
      if (girl.count < maxCount) {
        girl.count++
        this.boys.push(girl)
      } 
    },
    findHim(girl) {
      let boy_number = Math.floor(Math.random() * this.boys_count)
      
      if (this.boys[boy_number].girl) {
        this.findHim(girl)
      } else {
        girl.count++
        this.boys[boy_number].girl = girl
      }
    },
    random() {
      this.girls.forEach(girl => {
        this.findHim(girl)
      })
    }
  },
}
</script>
