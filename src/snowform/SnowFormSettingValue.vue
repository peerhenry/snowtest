<template>
  <span>{{ this.value }}</span>
</template>

<script>
export default {
  name: 'Label',
  props: {
    getter: String
  },
  computed: {
    value(){
      return this.$store.getters.snowSettings[this.getter]
    }
  }
}
</script>

<style lang="stylus" scoped>
span
  text-align: right
</style>