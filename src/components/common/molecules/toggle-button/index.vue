<template>
  <div class="center">
    <app-button
      type="BUTTON_TYPE_9"
      :icon="icon"
      @onClick="onClick"
    ></app-button>
  </div>
</template>

<script>
import AppButton from '@atoms/button/index.vue'

const sides = ['left', 'right', 'up', 'down']
const reverse = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up',
}
export default {
  name: 'AppToggleButton',
  components: {
    AppButton,
  },
  props: {
    side: {
      type: String,
      default: 'left',
      validator: (val) => sides.includes(val),
    },
  },
  computed: {
    icon() {
      return `fas fa-chevron-${this.side}`
    },
  },
  methods: {
    onClick() {
      this.$emit('onToggle', reverse[this.side])
    },
  },
}
</script>
