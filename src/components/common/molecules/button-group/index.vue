<template>
  <div class="app-flex-start">
    <div v-for="(button, idx) in buttons" :key="idx">
      <app-button
        v-bind="button"
        @onClick="$emit('onButtonClick', idx)"
      ></app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@atoms/button/index.vue'
export default {
  name: 'AppButtonGroup',
  components: {
    AppButton,
  },
  props: {
    buttons: {
      type: Array,
      required: true,
    },
  },
  computed: {},
  methods: {},
}
</script>
