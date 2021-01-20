import AppToggleButton from '@molecules/toggle-button'

export default {
  title: 'Components/Molecules/Toggle Button',
  component: AppToggleButton,
  argTypes: {
    side: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right', 'up', 'down'],
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppToggleButton,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-toggle-button
      v-bind="$props"
      @onToggle="onToggle"
    ></app-toggle-button>
  </div>
  `,
})

export const Primary = Template.bind({})

export const Sample = () => ({
  components: {
    AppToggleButton,
  },
  data: () => ({ side: 'right' }),
  template: `<div class="tailwind-wrapper">
    <app-toggle-button
      :side="side"
      @onToggle="(val) => (side = val)"
    ></app-toggle-button>
  </div>
  `,
})
Sample.storyName = 'Sample Usage'
