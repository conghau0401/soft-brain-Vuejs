import AppTextArea from '@atoms/text-area/index.vue'

export default {
  title: 'Components/Atoms/Text Area',
  component: AppTextArea,
  argTypes: {
    mixins: {
      description: AppTextArea.mixins.map((el) => el.name).join(','),
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppTextArea,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-text-area v-bind="$props"></app-text-area>
  </div>
  `,
})

export const Primary = Template.bind({})
