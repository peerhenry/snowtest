<script>
import SnowFormSettingLabel from './SnowFormSettingLabel.vue'
import SnowFormSettingSlider from './SnowFormSettingSlider.vue'
import SnowFormSettingValue from './SnowFormSettingValue.vue'

function toCamelCase(name){
  return name
    .split(' ')
    .map(
      (word, i) => i == 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.substr(1))
    .join('')
}

function toPascalCase(name){
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substr(1))
    .join('')
}

export default {
  name: 'SnowFormSetting',
  props: {
    labelName: String,
    inputName: String,
    getter: String,
    mutation: String,
    min: Number,
    max: Number,
    step: {
      type: Number,
      default: 1
    }
  },
  functional: true,
  render(h, { props }){
    const labelName = props.labelName
    const inputName = props.inputName ? props.inputName : toCamelCase(labelName)
    const getter = props.getter ? props.getter : toCamelCase(labelName)
    const mutation = props.mutation ? props.mutation : 'set' + toPascalCase(labelName)
    const label = h(SnowFormSettingLabel, { 
      props: {
        inputName,
        label: labelName
      }
    })
    const slider = h(SnowFormSettingSlider, {
      props: {
        getter,
        mutation,
        min: props.min,
        max: props.max,
        step: props.step
      }
    })
    const value = h(SnowFormSettingValue, {
      props: {
        getter
      }
    })
    return [label, slider, value]
  }
}
</script>