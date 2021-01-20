<template>
  <app-selectable-item-list
    class="bg-primary"
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
      item: 'global-menu-selectable-item',
      selected: 'global-menu-selected',
    },
    selected: 1,
    list: [
      {
        img: '/assets/images/ic-sidebar-calendar.svg',
        labels: {
          left: 'カレンダー',
        },
      },
      {
        img: '/assets/images/ic-sidebar-timeline.svg',
        labels: {
          left: 'タイムライン',
        },
      },
      {
        img: '/assets/images/ic-sidebar-business-card.svg',
        labels: {
          left: '名刺',
        },
      },
      {
        img: '/assets/images/ic-sidebar-customer.svg',
        labels: {
          left: '顧客',
        },
      },
      {
        img: '/assets/images/ic-sidebar-activity.svg',
        labels: {
          left: '活動',
        },
      },
      {
        img: '/assets/images/ic-sidebar-employee.svg',
        labels: {
          left: '社員',
        },
      },
      {
        img: '/assets/images/ic-sidebar-product.svg',
        labels: {
          left: '商品',
        },
      },
      {
        img: '/assets/images/task/ic-menu-task.svg',
        labels: {
          left: 'タスク',
        },
      },
      {
        img: '/assets/images/ic-sidebar-sales.svg',
        labels: {
          left: '取引商品管理',
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
.global-menu-selectable-item {
  @apply ml-4;
  @apply p-2;
  @apply rounded-l-md;
  @apply text-white;

  &:hover {
    @apply global-menu-selected;
  }
}

.global-menu-selected {
  @apply bg-dark-blue;
}
</style>
