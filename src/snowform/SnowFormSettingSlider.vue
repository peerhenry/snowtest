<template lang="pug">
  input.slider(
    :name="inputName"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    v-model="value"
  )
</template>

<script>
export default{
  name: 'Slider',
  props: {
    inputName: String,
    getter: String,
    mutation: String,
    min: Number,
    max: Number,
    step: Number
  },
  computed: {
    value: {
      get() { 
        return this.$store.getters.snowSettings[this.getter] 
      },
      set(val) { 
        this.$store.commit(this.mutation, val)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.slider
  -webkit-appearance: none
  width: 100%
  height: 2px
  border-radius: 1px
  background: #d3d3d3
  outline: none
  opacity: 0.7
  -webkit-transition: .2s
  transition: opacity .2s

.slider::-webkit-slider-thumb
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%; 
  border: 1px solid white
  background: rgb(0, 64, 128)
  cursor: pointer;

.slider::-moz-range-thumb
  width: 15px
  height: 15px
  border-radius: 50%
  border: 1px solid white
  background: rgb(0, 64, 128)
  cursor: pointer
</style>