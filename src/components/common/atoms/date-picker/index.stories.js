import AppComponent from './index.vue'

export default {
  title: 'Components/Molecules/Date Picker',
  component: AppComponent,
  argTypes: {
    mixins: {
      description: AppComponent.mixins.map(el => el.name).join(','),
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppComponent,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-128 w-256">
    <app-component
      v-bind="$props"
      @onSelect="onSelect"
    ></app-component>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  label: '日つけ',
  required: true,
  year: 2021,
  month: 1,
  day: 1,
}
