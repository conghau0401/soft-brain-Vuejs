import AppButton from '@atoms/button/index.vue'
import { rounded, clickEvent } from '@tailwind.helper'
import configs from '@tailwind.config.js'

const { theme: { colors }} = configs
import TYPES from '@atoms/button/types.js'

export default {
  title: 'Components/Atoms/Button',
  component: AppButton,
  argTypes: {
    mixins: {
      description: AppButton.mixins.map(el => el.name).join(','),
    },
    type: {
      description: 'Button type.',
      control: {
        type: 'select',
        options: TYPES,
      },
    },
    textColor: {
      description: 'Text color.',
      control: {
        type: 'select',
        options: Object.keys(colors).map(el => `text-${el}`),
      },
    },
    rounded,
    label: {
      description: 'Label.',
    },
    onClick: {
      description: 'Emitted event when user click to button.',
      table: clickEvent,
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppButton,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="tailwind-wrapper">
    <app-button
      v-bind="$props"
      @onClick="onClick"
    ></app-button>
  </div>
  `,
})

export const TYPE_1 = Template.bind()
TYPE_1.storyName = 'Normal'
TYPE_1.args = {
  label: '今日',
  type: 'BUTTON_TYPE_1',
}

export const TYPE_2_1 = Template.bind({})
TYPE_2_1.storyName = 'Left'
TYPE_2_1.args = {
  icon: 'fas fa-chevron-left',
  rounded: 'left',
  type: 'BUTTON_TYPE_6',
}

export const TYPE_2_2 = Template.bind({})
TYPE_2_2.storyName = 'Right'
TYPE_2_2.args = {
  icon: 'fas fa-chevron-right',
  rounded: 'right',
  type: 'BUTTON_TYPE_6',
}

export const TYPE_2_3 = Template.bind({})
TYPE_2_3.storyName = 'Icon'
TYPE_2_3.args = {
  icon: 'fas fa-envelope',
  type: 'BUTTON_TYPE_2',
}

export const TYPE_3 = Template.bind()
TYPE_3.storyName = 'Green'
TYPE_3.args = {
  icon: 'fas fa-plus',
  label: 'スケジュールの作成',
  type: 'BUTTON_TYPE_3',
  shadow: true,
}

export const TYPE_4 = Template.bind()
TYPE_4.storyName = 'Bare Icon'
TYPE_4.args = {
  icon: 'fas fa-cog',
  type: 'BUTTON_TYPE_4',
}

export const TYPE_5 = Template.bind()
TYPE_5.storyName = 'Action'
TYPE_5.args = {
  label: '登録',
  type: 'BUTTON_TYPE_5',
}

export const TYPE_7 = Template.bind()
TYPE_7.storyName = 'Type 7'
TYPE_7.args = {
  icon: 'fas fa-cog',
  label: '会議室・設備を新規登録',
  type: 'BUTTON_TYPE_7',
}

export const TYPE_8 = Template.bind()
TYPE_8.storyName = 'Type 8'
TYPE_8.args = {
  label: 'キャンセル',
  type: 'BUTTON_TYPE_8',
}

export const TYPE_9 = Template.bind()
TYPE_9.storyName = 'Type 9'
TYPE_9.args = {
  icon: 'fas fa-chevron-left',
  type: 'BUTTON_TYPE_9',
}

export const TYPE_10 = Template.bind()
TYPE_10.storyName = 'Type 10'
TYPE_10.args = {
  icon: 'fas fa-chevron-left',
  type: 'BUTTON_TYPE_10',
}
