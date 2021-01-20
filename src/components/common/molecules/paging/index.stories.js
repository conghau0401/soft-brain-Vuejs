import AppPaging from '@molecules/paging/index.vue'

export default {
  title: 'Components/Molecules/Paging',
  component: AppPaging,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppPaging,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="bg-white p-8 h-64 w-128 overflow-scroll">
    <app-paging
      v-bind="$props"
      @onChangePage="onChangePage"
      @onChangeLimit="onChangeLimit"
    ></app-paging>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.args={
  page: 2,
  total: 326,
  limit: 30,
}
