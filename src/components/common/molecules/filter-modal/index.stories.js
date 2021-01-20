import appFilterModal from '@molecules/filter-modal/index.vue'

export default {
  title: 'Common/Molecules/Components/Filter Modal',
  component: appFilterModal,
}

const Template = (args, { argTypes }) => ({
  components: {
    appFilterModal,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="bg-white p-8 h-full w-128 overflow-scroll">
    <app-filter-modal v-bind="$props" @onChange="onChange"></app-filter-modal>
  </div>
  `,
})

const TYPE_FILTER = 1

export const Primary = Template.bind({})
Primary.args = {
  sort: true,
  lock: true,
  filter: true,
  options: [
    '選択肢指定','どの選択肢も選択されていない',
  ],
  type: TYPE_FILTER,
  checkbox: {
    elements: [
      "製品開発部", "研究開発部", "データサンプール", "組織開発室", "営業新卒",
      "製品開発部", "研究開発部", "データサンプール", "組織開発室", "営業新卒",
      "製品開発部", "研究開発部", "データサンプール", "組織開発室", "営業新卒",
    ],
    filterCheckbox: true,
    methods: [
      "NOT検索",
    ],
  },
  multipleSelections: [
    "and change", "or change", "string change",
  ],
  optionsProcess: [
    "OR", "AND", "1つの文字列として検索",
  ],
}
