import AppPopupModal from './index.vue'
export default {
  title: 'Components/Templates/Popup Modal',
  component: AppPopupModal,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppPopupModal,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-popup-modal v-bind="$props" ></app-popup-modal>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.storyName = 'Primary'
Primary.args = {
  isShowPopup: true,
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

}
