import AppLocalMenu from './index.vue'

export default {
  title: 'Components/Molecules/Local Menu',
  component: AppLocalMenu,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  components: {
    AppLocalMenu,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-local-menu v-bind="$props"></app-local-menu>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  icon: {
    close: '<i class="fas fa-caret-right mr-2"/>',
    open: '<i class="fas fa-caret-down mr-2"/>',
  },
  tree: [
    {
      label: 'データサンプル',
      open: true,
      subs: [
        {
          label: '部署',
          subs: [],
        },
      ],
    },
    {
      label: '開発本部',
      open: true,
      subs: [
        {
          label: '製品開発部',
        },
        {
          label: '組織開発室',
        },
      ],
    },
    {
      label: '営業本部',
      open: true,
      subs: [
        {
          label: '製品1部',
          subs: [
            {
              label: '研究開発部',
              open: true,
              subs: [
                {
                  label: '新技術研究U',
                },
              ],
            },
          ],
        },
        {
          label: '製品2部',
        },
      ],
    },
  ],
}
