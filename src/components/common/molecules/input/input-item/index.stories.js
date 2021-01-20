import AppInputItem from '@molecules/input/input-item'

export default {
  title: 'Components/Molecules/Input/Input Item',
  component: AppInputItem,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppInputItem,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-input-item v-bind="$props"></app-input-item>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  label: '件名',
  required: true,
}
