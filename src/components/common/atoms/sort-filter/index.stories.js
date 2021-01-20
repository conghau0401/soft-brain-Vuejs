import AppSortFilter from '@atoms/sort-filter/index.vue'

export default {
  title: 'Common/Atoms/Components/Sort Filter',
  component: AppSortFilter,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppSortFilter,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-64">
    <app-sort-filter v-bind="$props"
      @onClick="onClick"
    ></app-sort-filter>
  </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  sort: true,
  lock: true,
}
