import AppImage from '@atoms/image/index.vue'

export default {
  title: 'Components/Atoms/Image',
  component: AppImage,
  argTypes: {
    url: {
      description: 'Image url.',
    },
    alt: {
      description: 'Image alt text.',
    },
    size: {
      description: 'Image size.',
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    AppImage,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="tailwind-wrapper">
    <app-image v-bind="$props"></app-image>
  </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  url: '/assets/images/ic-sidebar-calendar.svg',
  alt: 'calendar',
}

export const Small = Template.bind({})
Small.args = {
  ...Default.args,
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  ...Default.args,
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  ...Default.args,
  size: 'lg',
}

export const Text = Template.bind({})
Text.args = {
  ...Default.args,
  url: '/assets/images/invalid.svg',
}
