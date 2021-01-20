import AppSelect from '@atoms/select/index.vue'

export default {
  title: 'Common/Atoms/Components/Select',
  component: AppSelect,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppSelect,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-64">
    <app-select v-bind="$props"></app-select>
  </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'サンプル',
  required: true,
  value: 3,
  options: ['5件表示', '10件表示', '30件表示', '50件表示', '100件表示'],
}
