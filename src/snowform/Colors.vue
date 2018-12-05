<template lang="pug">
div
  .grid-container
    label(for="snowCol") snow color
    input(name="snowCol" type="text" v-model="snowColor")
    label mist color
    input(type="text" v-model="mistColor")
</template>

<script>
export default {
  name: 'Colors',
  computed: {
    snowColor: {
      get(){
        return this.$store.getters.snowSettings.snowColor
      },
      set(val){
        this.$store.commit('setSnowColor', val)
      }
    },
    mistColor: {
      get(){
        return this.$store.getters.snowSettings.mistColor
      },
      set(val){
        this.$store.commit('setMistColor', val)
      }
    }
  },
  created(){
    console.log('mist col', this.$store.getters.snowSettings.mistColor)
  }
}
</script>

<style scoped lang="stylus">
.grid-container
  display: grid
  grid-template-columns: 1fr 1fr
  grid-row-gap: 1em
  margin-bottom: 1em

input
  padding 0.3em
  border: none
  outline: none
  border-radius: 5px
  font-size: inherit
</style>