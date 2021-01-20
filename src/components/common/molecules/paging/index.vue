<template>
  <div class="app-flex-end">
    <div class="w-32">
      <app-select
        class="rounded-sm"
        v-model="perPage"
        :options="options"
      ></app-select>
    </div>
    <div class="mx-4">{{ label }}</div>
    <app-button
      class="mr-2"
      icon="fas fa-angle-left"
      type="BUTTON_TYPE_11"
      @onClick="onChangePage(page - 1)"
    ></app-button>
    <app-button
      icon="fas fa-angle-right"
      type="BUTTON_TYPE_11"
      @onClick="onChangePage(page + 1)"
    ></app-button>
  </div>
</template>

<script>
import AppButton from '@atoms/button/index.vue'
import AppSelect from '@atoms/select/index.vue'

const map = {
  5: 'message.misc.paging.limit.5',
  10: 'message.misc.paging.limit.10',
  30: 'message.misc.paging.limit.30',
  50: 'message.misc.paging.limit.50',
  100: 'message.misc.paging.limit.100',
}
const list = Object.keys(map).map((el) => parseInt(el))

export default {
  name: 'AppPaging',
  components: {
    AppSelect,
    AppButton,
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      default: 30,
      validator: (value) => list.includes(value),
    },
  },
  data: () => ({}),
  computed: {
    perPage: {
      get() {
        return list.indexOf(this.limit)
      },
      set(idx) {
        this.onChangeLimit(list[idx])
      },
    },
    options() {
      return Object.values(map).map((el) => this.$t(el))
    },
    lastPage() {
      return Math.ceil(this.total / this.limit)
    },
    label() {
      const from = (this.page - 1) * this.limit + 1
      const to = from + this.limit
      const item = this.$t('message.misc.paging.case')
      return `${from} - ${to} ${item}／${this.total} ${item}`
    },
    from() {
      return (this.page - 1) * this.limit + 1
    },
    to() {
      return this.from + this.limit
    },
  },
  methods: {
    onChangePage(dest) {
      if (dest === this.page || dest < 1 || dest > this.lastPage) {
        return
      }
      this.$emit('onChangePage', dest)
    },
    onChangeLimit(limit) {
      this.$emit('onChangeLimit', limit)
    },
  },
}
</script>
