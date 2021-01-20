import AppTimePicker from '@atoms/time/index.vue'

export default {
  title: 'Common/Atoms/Components/Time',
  component: AppTimePicker,

}

const Template = (args, { argTypes }) => ({
  components: {
    AppTimePicker,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-64">
    <app-time-picker
      v-bind="$props"
      @onSelect="onSelect"
    ></app-time-picker>
  </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  hour: 10,
  minute: 55,
}
