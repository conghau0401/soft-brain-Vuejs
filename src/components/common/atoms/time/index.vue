<template>
  <div class="time-wrapper">
    <div
      class="select-box"
      :class="{ 'border-primary text-primary': showOption }"
    >
      <div class="time" @click="onShowOption">
        <span> {{ hours[hIdx] }} </span>
        :
        <span> {{ minutes[mIdx] }} </span>
      </div>
      <div class="icon-close">
        <i class="fa fa-times-circle" aria-hidden="true"></i>
      </div>
    </div>
    <div v-if="showOption">
      <div class="option-box" v-on-clickaway="onClickAwayHandler">
        <div class="select-date-time">
          <div
            class="value-date-time"
            v-for="(item, idx) in hoursList"
            :key="'hour-' + idx"
            :class="{ active: parseInt(hours[hIdx]) === parseInt(item) }"
          >
            {{ item }}
          </div>
          <div class="control-arrow" @click="onChangeHour(increase)">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </div>
          <div class="control-arrow down" @click="onChangeHour(reduce)">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
        <span class="icon">:</span>
        <div class="select-date-time">
          <div
            class="value-date-time"
            v-for="(item, idx) in minutesList"
            :key="'min-' + idx"
            :class="{ active: parseInt(minutes[mIdx]) === parseInt(item) }"
          >
            {{ item }}
          </div>
          <div class="control-arrow" @click="onChangeMinute(increase)">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </div>
          <div class="control-arrow down" @click="onChangeMinute(reduce)">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { _to2digit } from '@utils'
import ClickAway from '../../../../mixins/click-away'

const hourDistance = 1
const hours = [...Array(24)].map((el, idx) => _to2digit(idx * hourDistance))

const minuteDistance = 5
const minutes = [...Array(12)].map((el, idx) => _to2digit(idx * minuteDistance))

const largestNumber = (listNumber) => {
  return Math.max.apply(Math, listNumber)
}

const getElements = (arr, ele, total) => {
  let getEleByIndex = (arr, start) => {
    return arr.slice(start)[0]
  }
  let idx = arr.indexOf(ele)
  if (idx === -1) {
    return []
  }
  let result = []
  for (let i = 0; i < total; i++) {
    let curIdx = idx - (total / 2 - 1) + i
    result.push(
      getEleByIndex(
        arr,
        curIdx >= arr.length ? curIdx - arr.length : Math.floor(curIdx)
      )
    )
  }
  return result.reverse()
}

export default {
  name: 'AppTimePicker',
  mixins: [ClickAway],
  props: {
    hour: {
      type: Number,
      required: true,
      validator: (val) => hours.includes(_to2digit(val)),
    },
    minute: {
      type: Number,
      required: true,
      validator: (val) => minutes.includes(_to2digit(val)),
    },
  },
  data: () => ({
    hours,
    minutes,
    increase: 1,
    reduce: 0,
  }),
  computed: {
    hoursList() {
      return getElements(this.hours, _to2digit(this.hour.toString()), 3)
    },
    minutesList() {
      return getElements(minutes, _to2digit(this.minute.toString()), 3)
    },
    hIdx() {
      return this.hours.indexOf(_to2digit(this.hour))
    },
    mIdx() {
      return this.minutes.indexOf(_to2digit(this.minute))
    },
  },
  methods: {
    onShowOption() {
      this.showOption = !this.showOption
    },
    condition(type, list, distance, idx) {
      let result
      if (type === 1) {
        if (parseInt(list[idx]) > largestNumber(list)) {
          result = parseInt(list[idx]) - (largestNumber(list) + 1) + distance
        } else if (parseInt(list[idx]) == largestNumber(list)) {
          result = 0
        } else {
          result = parseInt(list[idx]) + distance
        }
      } else {
        if (parseInt(list[idx]) > largestNumber(list)) {
          result = parseInt(list[idx]) - (largestNumber(list) + 1) + distance
        } else if (parseInt(list[idx]) == 0) {
          result = largestNumber(list)
        } else {
          result = parseInt(list[idx]) - distance
        }
      }
      return result
    },
    onChangeHour(type) {
      let result = this.condition(type, hours, hourDistance, this.hIdx)
      this.$emit('onSelect', {
        hour: parseInt(result),
        minute: parseInt(minutes[this.mIdx]),
      })
    },
    onChangeMinute(type) {
      let result = this.condition(type, minutes, minuteDistance, this.mIdx)
      this.$emit('onSelect', {
        hour: parseInt(hours[this.hIdx]),
        minute: parseInt(result),
      })
    },
  },
}
</script>

<style src="./style.scss" lang="scss" scoped></style>
