<template>
  <div>
    <app-select class="mr-4" :options="options" v-model="value"></app-select>
    <div class="mt-4">
      <div>idx: {{ value }}</div>
      <div>content: {{ options[value] }}</div>
    </div>
  </div>
</template>

<script>
import AppSelect from '@atoms/select/index.vue'
export default {
  name: 'AppSample',
  components: {
    AppSelect,
  },
  data: () => ({
    value: 3,
    options: ['5件表示', '10件表示', '30件表示', '50件表示', '100件表示'],
  }),
}
</script>
