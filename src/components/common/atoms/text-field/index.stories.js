import AppTextField from '@atoms/text-field/index.vue'
import TYPES from './types.js'

export default {
  title: 'Components/Atoms/Text Field',
  component: AppTextField,
  argTypes: {
    mixins: {
      description: AppTextField.mixins.map((el) => el.name).join(','),
    },
    type: {
      description: 'Text type.',
      control: {
        type: 'select',
        options: TYPES,
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppTextField,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-text-field v-bind="$props"></app-text-field>
  </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  value: 'Change me!!!',
}


export const Blank = Template.bind({})
Blank.args = {
  placeholder: 'type anything you want',
}

export const Email = Template.bind({})
Email.args = {
  value: 'dev@softbrain.co.jp',
  type: 'TEXT_TYPE_EMAIL',
}

export const PostCode = Template.bind({})
PostCode.args = {
  value: '110-0001',
  type: 'TEXT_TYPE_ZIP_CODE',
}
