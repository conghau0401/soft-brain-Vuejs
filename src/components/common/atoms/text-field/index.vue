<template>
  <div class="w-full">
    <input
      class="input-box w-full"
      :class="error ? 'invalid-input' : ''"
      :id="id"
      :name="id"
      v-model="input"
      :placeholder="placeholder"
      @blur="updateValue(input)"
    />
    <div class="mb-2" v-if="error">
      <span class="error-message">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script>
import TYPES from './types.js'
import VALIDATORS from './validators.js'
import Id from '../../../../mixins/id'
import Input from '../../../../mixins/input/lazy.js'

export default {
  name: 'AppTextField',
  mixins: [Input, Id('text')],
  components: {},
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'TEXT_TYPE_DEFAULT',
      validator: (val) => TYPES.includes(val),
    },
  },
  created() {
    if (this.type in VALIDATORS) {
      this.localValidator = VALIDATORS[this.type]
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="css" scoped>
.invalid-input {
  @apply bg-lighter-red;
  @apply border-light-red;
  @apply text-light-red;
}

.error-message {
  @apply text-red;
  @apply text-xs;
}
</style>
