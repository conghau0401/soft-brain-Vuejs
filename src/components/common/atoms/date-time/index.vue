<template>
  <div v-input-label="labelInformation">
    <div class="date-time-wrapper">
      <app-calendar
        :year="year"
        :month="month"
        :day="day"
        @onSelect="onSelectDate"
      >
      </app-calendar>
      <app-time :hour="hour" :minute="minute" @onSelect="onSelectTime">
      </app-time>
    </div>
  </div>
</template>

<script>
import Label from '../../../../mixins/label'
import AppCalendar from '@atoms/date-picker/index.vue'
import AppTime from '@atoms/time/index.vue'

export default {
  name: 'AppDateTimePicker',
  components: {
    AppCalendar,
    AppTime,
  },
  mixins: [Label],
  props: {
    year: {
      Type: Number,
      required: true,
    },
    month: {
      Type: Number,
      required: true,
    },
    day: {
      Type: Number,
      required: true,
    },
    hour: {
      Type: Number,
      required: true,
    },
    minute: {
      Type: Number,
      required: true,
    },
  },
  methods: {
    onSelectTime({ hour, minute }) {
      this.$emit('onSelect', {
        year: this.year,
        month: this.month,
        day: this.day,
        hour: hour,
        minute: minute,
      })
    },
    onSelectDate({ year, month, day }) {
      console.log(month)
      this.$emit('onSelect', {
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day),
        hour: this.hour,
        minute: this.minute,
      })
    },
  },
}
</script>

<style lang="scss">
.date-time-wrapper {
  @apply flex;
  .icon-close {
    @apply hidden;
  }
  .select-box {
    @apply border-gray-9;
    @apply text-gray-6;
  }
  .calendar-wrapper {
    @apply mr-1;
  }
}
</style>
