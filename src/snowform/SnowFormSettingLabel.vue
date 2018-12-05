<template>
  <label :for="inputName">{{label}}</label>
</template>

<script>
export default{
  props: [ 'inputName', 'label' ]
}
</script>

