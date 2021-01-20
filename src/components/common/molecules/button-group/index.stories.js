import AppButtonGroup from './index.vue'

export default {
  title: 'Components/Molecules/ButtonGroup',
  component: AppButtonGroup,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppButtonGroup,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-button-group
      v-bind="$props"
      @onButtonClick="onButtonClick"
    ></app-button-group>
  </div>
  `,
})

export const STORY_1 = Template.bind({})
STORY_1.storyName = 'Create group'
STORY_1.args = {
  buttons: [
    {
      type: 'BUTTON_TYPE_12',
      icon: 'fas fa-plus',
      rounded: 'left',
      label: '名刺を登録',
    },
    {
      textColor: 'text-gray-c hover:text-white',
      type: 'BUTTON_TYPE_12',
      rounded: 'right',
      icon: 'fas fa-chevron-down',
    },
  ],
}


export const Primary = Template.bind({})
Primary.args = {
  buttons: [
    {
      type: 'BUTTON_TYPE_8',
      label: 'キャンセル',
    },
    {
      type: 'BUTTON_TYPE_5',
      label: '登録',
    },
  ],
}
