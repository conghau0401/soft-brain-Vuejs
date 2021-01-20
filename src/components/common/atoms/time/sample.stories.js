import AppTimePicker from '@atoms/time/index.vue'

export default {
  title: 'Common/Atoms/Components/Time/Sample',
}

const Template = () => ({
  components: {
    AppTimePicker,
  },
  data: () => ({
    hour: 14,
    minute: 10,
  }),
  methods: {
    onSelect({ hour, minute }) {
      this.hour = hour
      this.minute = minute
    },
  },
  template: `
  <div class="bg-white p-8 h-128 overflow-scroll">
    <div class="flex flex-col w-64 m-2">
      <app-time-picker
        :hour="hour"
        :minute="minute"
        @onSelect="onSelect"
      ></app-time-picker>
      <div class="m-4">Selected: {{ hour }} : {{ minute }}</div>
    </div>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.storyName = 'Sample Usage'
