<template>
  <app-paging
    :page="page"
    :total="total"
    :limit="limit"
    @onChangeLimit="(value) => (limit = value)"
    @onChangePage="(value) => (page = value)"
  ></app-paging>
</template>

<script>
import AppPaging from '@molecules/paging/index.vue'
export default {
  name: 'AppSample',
  components: {
    AppPaging,
  },
  data: () => ({
    page: 2,
    total: 326,
    limit: 30,
  }),
}
</script>
