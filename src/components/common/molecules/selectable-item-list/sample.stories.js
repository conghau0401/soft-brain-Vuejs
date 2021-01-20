import SearchPopup from './search-popup.vue'
import GlobalMenu from './global-menu.vue'

export default {
  title: 'Components/Molecules/Selectable Item List/Sample',
}

export const Popup = () => ({
  components: {
    SearchPopup,
  },
  template: `
  <div class="tailwind-wrapper">
    <search-popup></search-popup>
  </div>
  `,
})

Popup.storyName = 'Search Popup'


export const Menu = () => ({
  components: {
    GlobalMenu,
  },
  template: `
  <div class="tailwind-wrapper">
    <global-menu></global-menu>
  </div>
  `,
})
Menu.storyName = 'Global Menu'
