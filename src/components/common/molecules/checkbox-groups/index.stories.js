import AppCheckboxGroup from './index.vue'

export default {
  title: 'Components/Molecules/CheckboxGroup',
  component: AppCheckboxGroup,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  components: {
    AppCheckboxGroup,
  },
  props: Object.keys(argTypes),
  template: `<div class="bg-white p-8 overflow-scroll">
    <app-checkbox-group v-bind="$props"></app-checkbox-group>
  </div>`,
})

export const OneLevel = Template.bind({})
OneLevel.args = {
  tree: [
    {
      label: 'タスク',
      img: '/assets/images/task/ic-menu-task.svg',
      selected: false,
    },
    {
      label: 'マイルストーン',
      img: '/assets/images/common/calendar/ic-calendar-flag1.svg',
      selected: false,
    },
  ],
}

export const TwoLevel = Template.bind({})
TwoLevel.args = {
  tree: [
    {
      label: 'スケジュール',
      selected: false,
      subs: [
        {
          label: '外出',
          img: '/assets/images/ic-calendar-bag.svg',
          selected: false,
        },
        {
          label: '来客',
          img: '/assets/images/ic-calendar-bell.svg',
          selected: false,
        },
        {
          label: '電話',
          img: '/assets/images/ic-calendar-person1.svg',
          selected: false,
        },
        {
          label: '出張',
          img: '/assets/images/ic-calendar-phone.svg',
          selected: false,
        },
        {
          label: '会議',
          img: '/assets/images/ic-calendar-recyclebin.svg',
          selected: false,
        },
        {
          label: '内勤',
          img: '/assets/images/ic-calendar-user1.svg',
          selected: false,
        },
      ],
    },
  ],
}

export const NoImage = Template.bind({})
NoImage.args = {
  tree: [
    {
      label: 'ソフトブレーン株式会社',
      selected: false,
      subs: [
        {
          label: '営業本部',
          selected: false,
          subs: [
            '野中 陽子',
            '栗原 聡',
            // '塚田 忠助',
            // '柳沢 千恵',
            // '小山 茂也',
          ].map((label) => ({
            label,
            selected: false,
          })),
        },
        {
          label: '研究開発部',
          selected: false,
          subs: [
            // '佐伯 政治',
            '青山 芳弘',
            // '高瀬 久作',
            // '宮田 理絵',
            '落合 幾江',
          ].map((label) => ({
            label,
            selected: false,
          })),
        },
        {
          label: '研究開発部',
          selected: false,
          subs: [
            {
              label: '新技術研究U',
              selected: false,
              subs: [
                '佐伯 政治',
                '落合 幾江',
              ].map((label) => ({
                label,
                selected: false,
              })),
            },
            {
              label: 'アプリ基盤研究U',
              selected: false,
              subs: [
                '佐伯 政治',
                '落合 幾江',
              ].map((label) => ({
                label,
                selected: false,
              })),
            },
          ],
        },
      ],
    },
  ],
}
