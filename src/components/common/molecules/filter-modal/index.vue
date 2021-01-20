<template>
  <div>
    <div class="filter-wrapper">
      <app-sort-filter :sort="sort" :lock="lock" @onClick="onClickSort">
      </app-sort-filter>

      <div class="filter-table">
        <div class="option">
          <app-radio
            label="フィルター"
            :options="options"
            @onSelect="onSelectFilter"
            :selected="selectedFilter"
          ></app-radio>
          <div
            class="option-filter"
            v-if="checkbox.filterCheckbox && type == TYPE_FILTER3"
          >
            <label class="option-icon" @click="showProcessModal">
              <i aria-hidden="true" class="fa fa-minus"></i>
            </label>
            <div
              class="radio-option"
              v-if="showOption"
              v-on-clickaway="onClickAwayHandler"
            >
              <div class="method-box">
                <div class="mb-1 input-label">検索方法</div>
                <div class="vertical">
                  <app-checkbox
                    v-for="(item, idx) in checkbox.methods"
                    :key="idx"
                    :label="item"
                    v-model="methodList[idx]"
                    :value="methodList[idx]"
                  ></app-checkbox>
                </div>
              </div>
              <app-radio
                label="スペースで区切った場合の処理"
                :options="optionsProcess"
                :selected="selectedProcess"
                @onSelect="onSelectProcess"
              ></app-radio>
            </div>
          </div>
        </div>
        <div class="filter-option" v-if="showFilter">
          <div class="text-option" v-if="type == TYPE_FILTER1">
            <div class="input-arround">
              <app-text-field
                placeholder="フィルターを設定"
                v-model="inputText"
              >
              </app-text-field>
              <div class="methods-icon" @click="showProcessModal">
                <i class="fa fa-minus" aria-hidden="true"></i>
              </div>
            </div>
            <div class="radio-option" v-if="showOption">
              <app-radio
                label="スペースで区切った場合の処理"
                :options="optionsProcess"
                :selected="selectedProcess"
                @onSelect="onSelectProcess"
                v-on-clickaway="onClickAwayHandler"
              ></app-radio>
            </div>
          </div>
          <div class="number-option" v-if="type == TYPE_FILTER2">
            <div class="item-number">
              <div class="input-element">
                <input
                  type="number"
                  v-model="inputNumberFull"
                  class="input-box"
                />
              </div>
              <p class="title">以上</p>
            </div>
            <div class="item-number">
              <div class="input-element">
                <input
                  type="number"
                  v-model="inputNumberShort"
                  class="input-box"
                />
              </div>
              <p class="title">以下</p>
            </div>
          </div>
          <div class="checkbox-option" v-if="type == TYPE_FILTER3">
            <div class="checkbox-top">
              <app-button
                label="全選択"
                class="filter-checkbox"
                @onClick="checkboxFilter(TYPE_FILTER1)"
              >
              </app-button>
              <app-button
                label="選択解除"
                class="filter-checkbox"
                @onClick="checkboxFilter(TYPE_FILTER2)"
              >
              </app-button>
              <app-button
                label="選択反転"
                class="filter-checkbox"
                @onClick="checkboxFilter(TYPE_FILTER3)"
              >
              </app-button>
            </div>
            <div class="checkbox-box">
              <app-checkbox
                v-for="(item, idx) in checkbox.elements"
                :key="idx"
                :label="item"
                v-model="checkboxList[idx]"
              ></app-checkbox>
            </div>
          </div>
        </div>
      </div>

      <div class="filter-button">
        <app-button label="解除" class="item-button"></app-button>
        <app-button
          label="設定"
          class="item-button"
          :type="activeFilterButton ? 'BUTTON_TYPE_5' : 'BUTTON_TYPE_1'"
          @onClick="onChange"
        ></app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@atoms/button/index.vue'
import AppRadio from '@atoms/radio/index.vue'
import AppTextField from '@atoms/text-field/index.vue'
import AppCheckbox from '@atoms/checkbox/index.vue'
import AppSortFilter from '@atoms/sort-filter/index.vue'
import ClickAway from '../../../../mixins/click-away'

export default {
  mixins: [ClickAway],
  components: {
    AppButton,
    AppRadio,
    AppTextField,
    AppCheckbox,
    AppSortFilter,
  },
  props: {
    sort: {
      type: Boolean,
      default: false,
    },
    lock: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    type: {
      type: Number,
      default: 0,
    },
    checkbox: {
      elements: {
        type: Array,
        required: true,
      },
      filterCheckbox: {
        type: Boolean,
        default: false,
      },
      methods: {
        type: Array,
        required: true,
      },
    },
    multipleSelections: {
      type: Array,
      required: true,
    },
    optionsProcess: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    TYPE_FILTER1: 1,
    TYPE_FILTER2: 2,
    TYPE_FILTER3: 3,
    inputText: '',
    selectedFilter: 0,
    selectedProcess: 0,
    sortId: 0,
    lockId: 0,
    inputNumberFull: '',
    inputNumberShort: '',
    checkboxList: [],
    methodList: [],
    showFilter: true,
  }),
  computed: {
    activeFilterButton() {
      var result
      if (this.selectedFilter == 0) {
        if (this.type == this.TYPE_FILTER1) {
          if (this.inputText != '') {
            result = true
          } else {
            result = false
          }
        } else if (this.type == this.TYPE_FILTER2) {
          if (this.inputNumberFull != '' || this.inputNumberShort != '') {
            result = true
          } else {
            result = false
          }
        } else if (this.type == this.TYPE_FILTER3) {
          if (this.checkboxList.length > 0) {
            result = true
          } else {
            result = false
          }
        }
      } else {
        result = true
      }
      return result
    },
  },
  methods: {
    // Component events
    onChange() {
      this.$emit('onChange', {
        sort: this.sortId,
        lock: this.lockId,
        selectedFilter: this.selectedFilter,
        selectedProcess: this.selectedProcess,
        inputText: this.inputText,
        inputNumberFull: this.inputNumberFull,
        inputNumberShort: this.inputNumberShort,
        checkboxList: this.checkboxList,
        methodList: this.methodList,
      })
    },
    // Sort click events
    onClickSort(response) {
      this.sortId = response.sortId
      this.lockId = response.lockId
      this.onChange()
    },
    // Choose filter
    onSelectFilter(response) {
      this.selectedFilter = response
      if (this.selectedFilter == 0) {
        this.showFilter = true
      } else {
        this.showFilter = false
      }
    },
    // String processing in search
    onSelectProcess(response) {
      this.selectedProcess = response
    },
    // display process modal
    showProcessModal() {
      this.showOption = true
    },
    // group checkbox
    checkboxFilter() {
      // TODO
    },
  },
}
</script>

<style src="./style.scss" lang="scss"></style>
