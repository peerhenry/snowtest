<template lang="pug">
.container
  .snow-form
    .snow-form-header
      button.tab-button(@click="()=>swapComponent('Settings')") Settings
      button.tab-button(@click="()=>swapComponent('Colors')") Colors
    div(:is="currentComponent")
</template>

<script>
import Settings from './Settings.vue'
import Colors from './Colors.vue'

export default {
  name: 'SnowForm',
  data: function(){ return {
    currentComponent: Settings
  }},
  components: {
    Settings,
    Colors
  },
  methods: {
    swapComponent(c){
      this.currentComponent = c
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/colors.styl'

.container
  position: relative
  height: 100%

.snow-form
  /* typography */
  font-family: Arial, Helvetica, sans-serif
  color: fontColor
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  /* spacing */
  padding: 1rem
  width: 100%
  max-width: 30%
  height: 500px
  /* aesthenics */
  opacity: 0.001
  -webkit-transition: opacity 0.1s linear
  transition: opacity 0.1s linear
  &:hover
    opacity: 1
    -webkit-transition: opacity 0.1s linear
    transition: opacity 0.1s linear
  border-radius: 10px
  border: 2px solid #aaa
  /* positioning */
  margin: 0
  background-color: rgba(0, 64, 128, 0.5);
  position: absolute
  top: 50%
  left: 50%
  margin-right: -50%
  transform: translate(-50%, -50%)
  .snow-form-header
    font-size: 150%
    margin-bottom: 1rem

.tab-button
  font-size: inherit
  color: inherit
  border none
  background: transparent
  outline: none
  &:hover
    color: #048
    background: fontColor
</style>