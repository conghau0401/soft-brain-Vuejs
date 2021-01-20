<template>
  <modal :id="id" :name="id" draggable resizable :clickToClose="false">
    <div class="flex flex-col">
      <div class="border-b border-gray-c p-4" v-if="headers.display">
        <div
          :class="[
            'modal-header-left',
            'float-left',
            {
              'grid grid-cols-3 gap-2 divide-x divide-gray-c': headers.backable,
            },
          ]"
        >
          <div class="pl-2" v-if="headers.backable">
            <app-button
              type="BUTTON_TYPE_2"
              icon="fas fa-arrow-left"
              @onClick="$emit('onClickBackAble')"
              class="leading-3 bg-gray-c"
            ></app-button>
          </div>
          <div class="col-span-2">
            <app-image size="md" :url="headers.img" class="float-left" />
            <label class="float-left mt-1"> {{ headers.title }} </label>
          </div>
        </div>
        <div
          :class="[
            'modal-header-right',
            'float-right',
            {
              'grid grid-cols-2 gap-2 divide-x divide-gray-c': headers.btnCopy,
            },
          ]"
        >
          <div class="pl-2" v-if="headers.btnCopy">
            <app-button
              type="BUTTON_TYPE_4"
              icon="fas fa-external-link-alt"
              @onClick="$emit('onClickCopy')"
            ></app-button>
          </div>
          <div class="px-2" v-if="headers.btnClose">
            <app-button
              type="BUTTON_TYPE_4"
              icon="fas fa-times"
              @onClick="hide"
            ></app-button>
          </div>
        </div>
      </div>
      <div class="modal-main-content">
        <slot name="modal-body">
          <div class="center h-full">
            <span>Modal Content!</span>
          </div>
        </slot>
      </div>
      <div
        class="w-full absolute border-t border-gray-c p-2 bottom-0 flex justify-center"
        v-if="footers.display"
      >
        <div class="px-2" v-if="footers.btnCancel">
          <app-button
            type="BUTTON_TYPE_8"
            :label="footers.btnLabelCancel"
            @onClick="$emit('onClickCancel')"
          ></app-button>
        </div>
        <div class="px-2" v-if="footers.btnSubmit">
          <app-button
            type="BUTTON_TYPE_5"
            :label="footers.btnLabelSubmit"
            @onClick="$emit('onClickSubmit')"
          ></app-button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Id from '../../../../mixins/id'
import AppButton from '@atoms/button/index.vue'
import AppImage from '@atoms/image/index.vue'

export default {
  name: 'AppPopupModal',
  mixins: [Id('popup-modal')],
  components: { AppButton, AppImage },
  props: {
    headers: {
      type: Object,
      default: () => ({
        title: '',
        img: '',
        externalUrl: '',
        backable: false,
        btnCopy: true,
        btnClose: true,
        display: true,
      }),
    },
    footers: {
      type: Object,
      default: () => ({
        btnSubmit: true,
        btnCancel: true,
        btnLabelSubmit: '',
        btnLabelCancel: '',
        display: true,
      }),
    },
    isShowPopup: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  computed: {},
  methods: {
    hide() {
      this.$modal.hide(this.id)
      this.$emit('example', false)
    },
  },
  mounted() {},
  watch: {
    isShowPopup(newVal) {
      if (newVal) {
        this.$modal.show(this.id)
      }
    },
  },
}
</script>
