<template lang="pug">
.wrapper
  SnowCanvas
  SnowForm
</template>

<script>
import SnowCanvas from './SnowCanvas.vue'
import SnowForm from './snowform/SnowForm.vue'

export default {
  name: 'App',
  components: {
    SnowCanvas,
    SnowForm
  }
}
</script>

<style lang="stylus">
html, body, .wrapper{
  height: 100%;
}
</style>