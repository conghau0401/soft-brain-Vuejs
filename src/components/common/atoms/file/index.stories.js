import AppFile from '@atoms/file/index.vue'

export default {
  title: 'Components/Atoms/File',
  component: AppFile,
  argTypes: {
    mixins: {
      description: AppFile.mixins.map(el => el.name).join(','),
    },
  },
}

const Template = (args, {argTypes}) => ({
  components: {
    AppFile,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper h-128">
    <app-file v-bind="$props"></app-file>
  </div>`,
})

export const Single = Template.bind({})

export const Multiple = Template.bind({})
Multiple.args = {
  max: 3,
}
