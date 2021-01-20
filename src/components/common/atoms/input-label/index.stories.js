import AppInputLabel from '@atoms/input-label/index.vue'

export default {
  title: 'Components/Atoms/Input Label',
  component: AppInputLabel,
  argTypes: {
    mixins: {
      description: AppInputLabel.mixins.map(el => el.name).join(','),
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppInputLabel,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-input-label v-bind="$props"></app-input-label>
  </div>
  `,
})

export const Label = Template.bind({})
Label.args = {
  label: '顧客',
}

export const Required = Template.bind({})
Required.args = {
  label: '顧客',
  required: true,
}
