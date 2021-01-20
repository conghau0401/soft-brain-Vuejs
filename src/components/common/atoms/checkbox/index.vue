<template>
  <div>
    <input type="checkbox" :id="id" class="hidden" v-model="input" />
    <label class="center" :for="id">
      <i class="center" :class="classes"></i>
      <span class="m-1" v-if="label"> {{ label }} </span>
    </label>
  </div>
</template>

<script>
import Id from '../../../../mixins/id'
import Input from '../../../../mixins/input'

export default {
  name: 'AppCheckbox',
  mixins: [Id('checkbox'), Input],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: 'bg-primary',
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      if (this.indeterminate) {
        return this.bgColor + ' fas fa-minus'
      }
      if (this.value) {
        return this.bgColor + ' fas fa-check'
      }
      return 'bg-white fas fa-check'
    },
  },
}
</script>

<style lang="css" scoped>
i {
  @apply border-2;
  @apply border-gray-c;

  @apply rounded-xs;

  @apply p-1;
  @apply w-4;
  @apply h-4;

  @apply text-white;
  @apply text-tiny;
}
</style>
