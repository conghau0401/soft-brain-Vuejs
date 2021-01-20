<template>
  <div class="app-calendar-wrapper">
    <v-calendar
      color="red"
      locale="ja"
      title-position="left"
      :masks="{ title: 'YYYY年 MM月' }"
      trim-weeks
      :first-day-of-week="2"
      :value="selected"
      :attributes="vCalendarAttributes"
      @dayclick="onDayClick"
    />
  </div>
</template>

<script>
// TODO: handle timezone
import VCalendar from 'v-calendar/lib/components/calendar.umd'

export default {
  name: 'AppCalendar',
  components: {
    VCalendar,
  },
  props: {
    selected: {
      type: [Date, String, Number],
      required: true,
    },
  },
  computed: {
    vCalendarAttributes() {
      return [
        {
          key: 'today',
          highlight: {
            contentClass: 'today',
          },
          dates: new Date(),
        },
        {
          key: 'selected',
          highlight: {
            contentClass: 'selected-day',
          },
          dates: new Date(this.selected.toString()),
        },
        {
          key: 'weekkend',
          highlight: {
            contentClass: 'weekkend-days',
          },
          dates: {
            weekdays: [1, 7],
          },
        },
      ]
    },
  },
  methods: {
    onDayClick(obj) {
      const [year, month, day] = obj.id.split('-').map((el) => parseInt(el))
      this.$emit('onSelect', { year, month, day })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-calendar-wrapper {
  @apply inline-block;
  @apply w-32;
}

.app-calendar-wrapper::v-deep {
  .today {
    @apply bg-light-blue;
    @apply text-white;
  }
  .selected-day {
    @apply bg-primary;
    @apply text-white;
  }
  .vc-day {
    @apply hover:text-primary;
  }
  .weekkend-days {
    @apply text-dark-red;
    @apply hover:text-primary;
  }
  .vc-weekday {
    @apply text-black;
  }
  .vc-weekday:nth-of-type(6),
  .vc-weekday:nth-of-type(7) {
    @apply text-dark-red;
  }
  .is-not-in-month .vc-day-content {
    opacity: 0.1 !important;
  }
}
</style>
