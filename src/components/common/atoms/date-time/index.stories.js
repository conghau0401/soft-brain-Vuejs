import AppDateTimePicker from '@atoms/date-time/index.vue'

export default {
  title: 'Common/Atoms/Components/DateTime',
  component: AppDateTimePicker,

}

const Template = (args, { argTypes }) => ({
  components: {
    AppDateTimePicker,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-64">
    <app-date-time-picker
      v-bind="$props"
      @onSelect="onSelect"
    ></app-date-time-picker>
  </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  label: '日時',
  required: true,
  year: 2021,
  month: 1,
  day: 20,
  hour: 14,
  minute: 10,
}
