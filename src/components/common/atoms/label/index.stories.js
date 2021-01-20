import AppLabel from '@atoms/label/index.vue'
import TYPES from '@atoms/label/type.js'

export default {
  title: 'Common/Atoms/Components/Label',
  component: AppLabel,
  argTypes: {
    label: {
      description: 'Label.',
    },
    type: {
      description: 'Label type.',
      control: {
        options: TYPES,
      },
    },
  },
}

const Template = (args, {argTypes}) => ({
  components: {
    AppLabel,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-label v-bind="$props"></app-label>
  </div>`,
})

export const TYPE_1 = Template.bind({})
TYPE_1.storyName = 'Normal'
TYPE_1.args = {
  label: '2027 年 10 月',
  type: 'LABEL_TYPE_1',
}

export const TYPE_1_1 = Template.bind({})
TYPE_1_1.storyName = 'Normal Black'
TYPE_1_1.args = {
  label: 'IPアドレス',
  type: 'LABEL_TYPE_2',
}

export const TYPE_1_2 = Template.bind({})
TYPE_1_2.storyName = 'Normal Primary'
TYPE_1_2.args = {
  label: '軟脳建設株式会社【サンプル】',
  type: 'LABEL_TYPE_3',
}

export const TYPE_1_3 = Template.bind({})
TYPE_1_3.storyName = 'Normal Gray'
TYPE_1_3.args = {
  label: '軟脳建設株式会社【サンプル】',
  type: 'LABEL_TYPE_4',
}

export const TYPE_2 = Template.bind({})
TYPE_2.storyName = 'Small'
TYPE_2.args = {
  label: '2027 年 10 月',
  type: 'LABEL_TYPE_5',
}

export const TYPE_2_1 = Template.bind({})
TYPE_2_1.storyName = 'Small Black'
TYPE_2_1.args = {
  label: 'IPアドレス',
  type: 'LABEL_TYPE_6',
}

export const TYPE_2_2 = Template.bind({})
TYPE_2_2.storyName = 'Small Primary'
TYPE_2_2.args = {
  label: '軟脳建設株式会社【サンプル】',
  type: 'LABEL_TYPE_7',
}

export const TYPE_2_3 = Template.bind({})
TYPE_2_3.storyName = 'Small Gray'
TYPE_2_3.args = {
  label: '軟脳建設株式会社【サンプル】',
  type: 'LABEL_TYPE_8',
}

export const TYPE_3 = Template.bind({})
TYPE_3.storyName = 'Large'
TYPE_3.args = {
  label: '2027 年 10 月',
  type: 'LABEL_TYPE_9',
}

export const TYPE_3_1 = Template.bind({})
TYPE_3_1.storyName = 'Large Black'
TYPE_3_1.args = {
  label: 'IPアドレス',
  type: 'LABEL_TYPE_10',
}

export const TYPE_3_2 = Template.bind({})
TYPE_3_2.storyName = 'Large Primary'
TYPE_3_2.args = {
  label: '軟脳建設株式会社【サンプル】',
  type: 'LABEL_TYPE_11',
}

export const TYPE_3_3 = Template.bind({})
TYPE_3_3.storyName = 'Large Gray'
TYPE_3_3.args = {
  label: '軟脳建設株式会社【サンプル】',
  type: 'LABEL_TYPE_12',
}
