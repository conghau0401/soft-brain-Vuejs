<template>
  <div>
    <div class="wrapper-popup-menu">
      <ul>
        <li v-for="(item, idx) in options" :key="idx" @click="select(idx)">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Input from '../../../../mixins/input'

export default {
  mixins: [Input],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    select(idx) {
      this.setValue(idx)
      this.$emit('status', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper-popup-menu {
  @apply z-10;
  @apply bg-white;
  ul {
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.3);
    @apply py-4;
    @apply rounded-md;
    li {
      @apply px-4;
      @apply py-2;
      @apply text-gray-9;
      @apply font-semibold;
      @apply hover:bg-lighter-blue;
      @apply hover:text-primary;
      @apply cursor-pointer;
    }
  }
}
</style>
