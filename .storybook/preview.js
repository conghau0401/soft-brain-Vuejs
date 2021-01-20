// I18n
import Vue from 'vue'
import '../src/plugins/vue-js-modal/index.js'
import { i18n } from '../src/plugins/i18n/index.js'

// Style
import '../src/assets/scss/font.scss'
import '../src/assets/scss/tailwind.scss'
import '../src/assets/scss/reset.scss'
import '../src/assets/scss/main.scss'
import '../src/assets/scss/input.scss'
import '../src/assets/scss/border.scss'


export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#eee',
      },
    ],
  },
}
/*<div class="tailwind-wrapper"></div>*/
export const decorators = [
  (story, context) => {
    const wrapped = story(context)
    return Vue.extend({
      i18n,
      components: { wrapped },
      template: `<div class="h-screen w-screen center p-4">
        <wrapped/>
      </div>`,
    })
  },
]
