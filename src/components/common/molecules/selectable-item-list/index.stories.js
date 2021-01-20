import AppSelectableItemList from '@molecules/selectable-item-list/index.vue'

export default {
  title: 'Components/Molecules/Selectable Item List',
  component: AppSelectableItemList,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppSelectableItemList,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-selectable-item-list v-bind="$props"></app-selectable-item-list>
  </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  selected: 1,
  list: [
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
  ],
}

export const WithImage = Template.bind({})
WithImage.args = {
  selected: 1,
  list: [
    {
      img: '/assets/images/ic-sidebar-calendar.svg',
      labels: {
        left: 'カレンダー',
        right: 0,
      },
    },
    {
      img: '/assets/images/ic-sidebar-timeline.svg',
      labels: {
        left: 'タイムライン',
        right: 0,
      },
    },
    {
      img: 'ic-sidebar-business-card.svg',
      labels: {
        left: '名刺',
        right: 0,
      },
    },
  ],
}

export const NoNumber = Template.bind({})
NoNumber.args = {
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
      img: 'ic-sidebar-business-card.svg',
      labels: {
        left: '名刺',
      },
    },
  ],
}
