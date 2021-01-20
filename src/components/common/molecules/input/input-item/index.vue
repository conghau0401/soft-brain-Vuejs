<template>
  <div v-input-label="labelInformation">
    <app-text-field v-model="input" :type="type"></app-text-field>
  </div>
</template>

<script>
import Input from '../../../../../mixins/input'
import Label from '../../../../../mixins/label'
import AppTextField from '@atoms/text-field/index.vue'
export default {
  name: 'AppInputItem',
  components: {
    AppTextField,
  },
  mixins: [Input, Label],
  props: {
    type: {
      type: String,
      default: 'TEXT_TYPE_DEFAULT',
      // TODO: validator
    },
  },
  data: () => ({}),
  computed: {},
  methods: {},
}
</script>
