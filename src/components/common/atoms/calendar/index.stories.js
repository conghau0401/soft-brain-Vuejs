import AppCalendar  from '@atoms/calendar/index.vue'

export default {
  title: 'Components/Atoms/Calendar',
  component: AppCalendar,
  // argTypes: {},
}

const Template = (args, { argTypes }) => ({
  components: {
    AppCalendar,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-128">
    <app-calendar
      v-bind="$props"
      @onSelect="onSelect"
    ></app-calendar>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  selected: new Date('2021-01-20') ,
}

// TODO: weekend
