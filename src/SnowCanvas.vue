<template lang="pug">
  canvas(ref="sc" height="1080", width="1920")
</template>

<script>
import init from './store/game/init.js'
import gameLoop from './store/game/gameLoop.js'

export default {
  name: 'SnowCanvas',
  created(){
    
  },
  mounted(){
    console.log('mounting', this.$options.name)

    // create context and set canvas width and height
    let canvas = this.$refs['sc']
    let ctx = canvas.getContext('2d')
    this.$store.commit('setContext', ctx)
    ctx.canvas.width  = window.innerWidth
    ctx.canvas.height = window.innerHeight
    console.log('w,h set to:', window.innerWidth, window.innerHeight)

    // start game
    init()
    
    const fps = 60
    const step = 1000/fps
    setInterval(gameLoop, step)
  }
}
</script>

<style scoped>
canvas{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>