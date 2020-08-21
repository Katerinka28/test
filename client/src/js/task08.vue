<template>
  <div class='player'> 
    <div v-for='(audio, index) in playlist'
          :key='index'>
      <p @click='playMe(index)'> track # {{index+1}} {{ files[index] }} </p>
      <div class='flex' style='{"display": "flex"}'>  
        <a @click='pause(index)' class='mdi mdi-pause'> || </a>
        <a @click='stop(index)'  class='mdi mdi-stop'> [] </a>
      <div class="progress-bar" @click='playInCurrPos($event, index)'>
        <span class='progress-bar__basic'></span>
        <span class='progress-bar__status' 
              :style="{'width' : audio.percent + '%'}"></span>
            <span class='shadow'></span>
      </div>      
      </div>      
    </div>
  </div> 
</template>
<script>
export default {
  name: 'audioPlayer',
  props: {
    files: {
      type: Array, 
      default: () => []
    }
  },
  data() {
    return {
      playlist: [],
      percent: []
    }
  },
  created() {
    this.files.forEach((element, index) => {
      let audio = new Audio()
      audio.setAttribute('src', `/static/audio/${element}`)
      this.playlist.push({file: audio})
      this.$set(this.playlist[index], 'percent', 0)
    })

  },
  methods: {
    playMe(index) {
      this.playlist.forEach(el => {
        el.file.pause()
      })
      this.playlist[index].file.play()

      setInterval(() => {
        let percent = 100 * this.playlist[index].file.currentTime / this.playlist[index].file.duration 
        this.$set(this.playlist[index], 'percent', percent)
      }, 10) 
    },
    pause(index) {
      this.playlist[index].file.pause()
    },
    stop(index) {
      this.playlist[index].file.pause()
      this.playlist[index].file.currentTime = 0
      this.playlist[index].percent = 0
    },
    getMousePos(canvas, evt) {
      let rect = canvas.getBoundingClientRect()
      return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
      }
    },
    playInCurrPos(e, index) {
      let target
      if (e.target.classList.contains('progress-bar__status')) {
        target = e.target.parentElement
      } else {
        target = e.target
      }
      let pos = this.getMousePos(target, e)
      let percent = (pos.x / target.scrollWidth ) * 100
      this.playlist[index].percent = percent
      let currentTime = (this.playlist[index].file.duration * percent) / 100
      this.playlist[index].file.currentTime = currentTime
      this.playMe(index)

    }
  },
}
</script>
