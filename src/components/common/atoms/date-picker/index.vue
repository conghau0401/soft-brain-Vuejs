<template>
  <div class="calendar-wrapper" v-input-label="labelInformation">
    <div
      class="select-box"
      @click="onShowOption"
      :class="{ 'border-primary text-primary': showOption }"
    >
      <div class="flex justify-start">
        {{ input }}
      </div>
      <div class="icon-close">
        <i class="fa fa-times-circle" aria-hidden="true"></i>
      </div>
    </div>
    <div v-if="showOption">
      <div class="option-box" v-on-clickaway="onClickAwayHandler">
        <v-calendar
          color="red"
          locale="ja"
          title-position="left"
          trim-weeks
          :first-day-of-week="2"
          :value="null"
          :attributes="attributes"
          @dayclick="onDayClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { _to2digit } from '@utils'
import Label from '../../../../mixins/label'
import VCalendar from 'v-calendar/lib/components/calendar.umd'
import ClickAway from '../../../../mixins/click-away'

export default {
  name: 'AppCalendar',
  mixins: [Label, ClickAway],
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
  },
  components: {
    VCalendar,
  },
  computed: {
    input() {
      return [this.year, _to2digit(this.month), _to2digit(this.day)].join('-')
    },
  },
  data() {
    return {
      attributes: [
        {
          key: 'weekkend',
          highlight: {
            contentClass: 'weekkend-days',
          },
          dates: {
            weekdays: [1, 7],
          },
        },
      ],
    }
  },
  methods: {
    onShowOption() {
      this.showOption = !this.showOption
    },
    onDayClick(obj) {
      this.showOption = false
      const [year, month, day] = obj.id.split('-')
      this.$emit('onSelect', { year, month, day })
    },
  },
}
</script>

<style src="./style.scss" lang="scss" scoped></style>
