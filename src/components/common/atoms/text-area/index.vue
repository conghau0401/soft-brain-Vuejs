<template>
  <textarea
    class="input-box w-full"
    :id="id"
    :name="id"
    v-model="input"
    :rows="rows"
    @blur="updateValue"
  />
</template>

<script>
import Id from '../../../../mixins/id'
import Input from '../../../../mixins/input/lazy.js'
export default {
  name: 'AppTextArea',
  mixins: [Input, Id('text')],
  props: {
    value: {
      type: String,
      default: '',
    },
    rows: {
      type: Number,
      default: 3,
    },
  },
}
</script>
