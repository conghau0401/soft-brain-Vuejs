import AppCheckbox from '@atoms/checkbox/index.vue'
import configs from '@tailwind.config.js'
const { theme: { colors }} = configs

export default {
  title: 'Components/Atoms/Checkbox',
  component: AppCheckbox,
  argTypes: {
    mixins: {
      description: AppCheckbox.mixins.map(el => el.name).join(','),
    },
    bgColor: {
      control: {
        type: 'select',
        options: Object.keys(colors).map(el => `bg-${el}`),
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppCheckbox,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="tailwind-wrapper">
    <app-checkbox v-bind="$props" @input=""></app-checkbox>
  </div>
  `,
})

export const Checked = Template.bind({})
Checked.args = {
  value: true,
}

export const UnChecked = Template.bind({})
UnChecked.args = {
  value: false,
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  value: true,
  label: 'Lorem ipsum',
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  indeterminate: true,
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  value: true,
  bgColor: 'bg-light-red',
}
