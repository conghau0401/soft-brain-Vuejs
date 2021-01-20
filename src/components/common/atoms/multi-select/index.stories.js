import AppMultiSelect from '@atoms/multi-select/index.vue'

export default {
  title: 'Common/Atoms/Components/Multi Select',
  component: AppMultiSelect,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppMultiSelect,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-64">
    <app-multi-select v-bind="$props"></app-multi-select>
  </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  label: '選択',
  values: [1, 3],
  options: ['5件表示', '10件表示', '30件表示', '50件表示', '100件表示'],
}
