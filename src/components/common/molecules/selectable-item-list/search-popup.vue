<template>
  <app-selectable-item-list
    :classes="classes"
    :selected="selected"
    :list="list"
    @onSelect="onSelect"
  ></app-selectable-item-list>
</template>

<script>
import AppSelectableItemList from '@molecules/selectable-item-list/index.vue'
export default {
  name: 'AppSample',
  components: {
    AppSelectableItemList,
  },
  data: () => ({
    classes: {
      item: 'search-popup-selectable-item',
      selected: 'search-popup-selected',
    },
    selected: 1,
    list: [
      {
        labels: {
          left: 'すべて',
          right: 0,
        },
      },
      {
        labels: {
          left: 'カレンダー',
          right: 0,
        },
      },
      {
        labels: {
          left: 'タイムライン',
          right: 0,
        },
      },
      {
        labels: {
          left: '名刺',
          right: 0,
        },
      },
      {
        labels: {
          left: '顧客',
          right: 0,
        },
      },
      {
        labels: {
          left: '活動',
          right: 0,
        },
      },
      {
        labels: {
          left: '社員',
          right: 0,
        },
      },
      {
        labels: {
          left: '商品',
          right: 0,
        },
      },
      {
        labels: {
          left: 'タスク',
          right: 0,
        },
      },
      {
        labels: {
          left: '取引商品管理',
          right: 0,
        },
      },
    ],
  }),
  methods: {
    onSelect(selected) {
      this.selected = parseInt(selected)
    },
  },
}
</script>

<style lang="scss">
.search-popup-selectable-item {
  @apply p-4;
  @apply rounded-l-md;

  &:hover {
    @apply search-popup-selected;
  }
}

.search-popup-selected {
  @apply bg-lighter-blue;
  .left {
    @apply text-primary;
    @apply text-lg;
    font-weight: 700;
  }
}
</style>
