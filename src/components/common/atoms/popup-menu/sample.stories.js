import AppSample from './sample.vue'

export default {
  title: 'Common/Atoms/Components/popup-menu/Sample',
  component: AppSample,
}

export const Primary = () => ({
  components: {
    AppSample,
  },
  template: `
  <div class="tailwind-wrapper h-128">
    <app-sample></app-sample>
  </div>
  `,
})
Primary.storyName = 'Sample Usage'
