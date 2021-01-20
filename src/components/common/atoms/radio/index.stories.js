import AppRadio from '@atoms/radio/index.vue'

export default {
  title: 'Common/Atoms/Components/Radio',
  component: AppRadio,
  argTypes: {
    horizon: {
      description: 'Horizon flag.',
    },
    options: {
      description: 'Options.',
    },
    selected: {
      description: 'Selected options index.',
    },
    onSelect: {
      description: 'Emitted event when user select a specific item.',
      table: {
        category: 'Events',
        type: {
          summary: 'input-event',
        },
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppRadio,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-radio
      v-bind="$props"
      @onSelect="onSelect"
    ></app-radio>
  </div>
  `,
})

export const Strings = Template.bind({})
Strings.args = {
  options: ['手動', '自動追加'],
  selected: 1,
  label: '更新方法',
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  ...Strings.args,
  horizon: true,
  label: '更新方法',
}
