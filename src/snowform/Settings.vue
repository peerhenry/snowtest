<template lang="pug">
div
  .grid-container
    SnowSetting(labelName="near radius" getter="flakeMaxRad" mutation="setMaxRadius" :min="1" :max="80" :step="0.2")
    SnowSetting(labelName="distant radius" getter="flakeMinRad" mutation="setMinRadius" :min="1" :max="80" :step="0.2")
    SnowSetting(labelName="near alpha" getter="flakeMinAlpha" mutation="setMinAlpha" :min="0" :max="1" :step="0.01")
    SnowSetting(labelName="distant alpha" getter="flakeMaxAlpha" mutation="setMaxAlpha" :min="0" :max="1" :step="0.01")
    SnowSetting(labelName="fall speed" :min="0" :max="240")
    SnowSetting(labelName="wiggle strength" :min="0" :max="1" :step="0.01")
    SnowSetting(labelName="wiggle speed" :min="0" :max="4" :step="0.01")
    SnowSetting(labelName="wind strength" :min="0" :max="1" :step="0.01")
    SnowSetting(labelName="wind speed" :min="0" :max="4" :step="0.01")
    SnowSetting(labelName="mist" :min="0" :max="0.5" :step="0.01")
    SnowSetting(labelName="count" getter="flakeCount" mutation="setFlakeCount" :min="1" :max="2000" :step="1")
  button(@click="reset") Reset Defaults
</template>

<script>
import SnowSetting from './SnowFormSetting.vue'

export default {
  name: 'Settings',
  components: {
    SnowSetting
  },
  methods: {
    reset(){
      console.log('committing reset')
      this.$store.commit('reset')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/colors.styl'

.grid-container
  display: grid
  grid-template-columns: 2fr 6fr 1fr
  grid-row-gap: 1em
  margin-bottom: 1em

button
  background: transparent
  border: none
  color: inherit
  font-family: inherit
  font-size: inherit
  border: 1px solid fontColor
  border-radius: 5px
  padding: 0.5em
  &:hover
    color: navy
    background-color: fontColor
</style>