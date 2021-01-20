<template>
  <div>
    <div class="app-flex-start w-full p-2">
      <app-checkbox
        v-model="input"
        :indeterminate="indeterminate"
      ></app-checkbox>
      <div class="app-flex-start ml-2" @click="setValue(!input)">
        <app-image v-if="img" :url="img" size="sm"></app-image>
        <span class="ml-1"> {{ label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppImage from '@atoms/image/index.vue'
import AppCheckbox from '@atoms/checkbox/index.vue'
import Input from '../../../../mixins/input'

export default {
  name: 'AppCheckboxGroupItem',
  components: {
    AppImage,
    AppCheckbox,
  },
  mixins: [Input],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
}
</script>
