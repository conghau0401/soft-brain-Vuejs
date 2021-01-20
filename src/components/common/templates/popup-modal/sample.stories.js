import AppSample from './sample.vue'

export default {
  title: 'Components/Templates/Popup Modal/Sample',
  component: AppSample,
}

export const Primary = () => ({
  components: {
    AppSample,
  },
  template: `
  <div class="tailwind-wrapper w-256">
    <app-sample></app-sample>
  </div>
  `,
})
Primary.storyName = 'Sample Usage'
