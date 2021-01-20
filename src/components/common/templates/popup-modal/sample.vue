<template>
  <div>
    <app-button
      @onClick="clickMe"
      type="BUTTON_TYPE_5"
      label="Click me"
    ></app-button>
    <app-popup-modal
      :is-show-popup="isShowPopup"
      :headers="headers"
      :footers="footers"
      @example="methodName"
      @onClickCancel="onClick"
    ></app-popup-modal>
  </div>
</template>

<script>
import AppPopupModal from '@templates/popup-modal/index.vue'
import AppButton from '@atoms/button/index.vue'

export default {
  name: 'AppSample',
  components: {
    AppPopupModal,
    AppButton,
  },
  data: () => ({
    isShowPopup: false,
    headers: {
      title: '社員登録',
      img: '/assets/images/ic-sidebar-employee.svg',
      externalUrl: '',
      btnCopy: true,
      btnClose: true,
      backable: true,
      display: true,
    },
    footers: {
      btnSubmit: true,
      btnCancel: true,
      display: true,
      btnLabelSubmit: 'Submit',
      btnLabelCancel: 'Cancel',
    },
  }),
  methods: {
    clickMe() {
      this.isShowPopup = true
    },
    onClick() {},
    methodName() {
      this.isShowPopup = false
    },
  },
}
</script>
