<template>
  <button :class="classes" @click="$emit('onClick')">
    <i v-if="icon" :class="iconClasses" />
    <label v-if="label" :class="labelClasses"> {{ label }} </label>
  </button>
</template>

<script>
import TYPES from './types.js'
import RoundAble from '../../../../mixins/roundable'

export default {
  name: 'AppButton',
  mixins: [RoundAble],
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'BUTTON_TYPE_1',
      validator: (val) => TYPES.includes(val),
    },
  },
  computed: {
    classes() {
      return [this.type, this.roundedClass].join(' ')
    },
    iconClasses() {
      return this.icon + ' ' + this.textColor
    },
    labelClasses() {
      return this.textColor
    },
  },
}
</script>

<style src="./style.scss" lang="scss" scoped></style>
