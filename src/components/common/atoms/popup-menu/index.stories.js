import AppPopupMenu from '@atoms/popup-menu/index.vue'

export default {
  title: 'Common/Atoms/Components/Popup Menu',
  component: AppPopupMenu,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppPopupMenu,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-64">
    <app-popup-menu v-bind="$props"></app-popup-menu>
  </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
    options: ['社員詳細', '設定', 'ログアウト'],
}
