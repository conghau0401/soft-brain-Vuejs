<template>
  <label :class="classes"> {{ label }} </label>
</template>

<script>
import TYPES from '../label/type'

export default {
  name: 'AppLabel',
  props: {
    label: {
      type: String,
      default: '',
    },
    blank: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'LABEL_TYPE_1',
      validator: (val) => TYPES.includes(val),
    },
  },
  computed: {
    classes() {
      return [this.type, this.roundedClass].join(' ')
    },
  },
}
</script>
<style src="./style.scss" lang="scss" scoped></style>
