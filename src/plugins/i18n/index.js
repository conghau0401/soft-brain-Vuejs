import Vue from 'vue'
import VueI18n from 'vue-i18n'
import language from '../../services/language'
Vue.use(VueI18n)

const lang = localStorage.lang || 'ja_jp'
const loaded = [lang]

export const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: 'ja_jp',
  messages: {},
})

language(lang).then((messages) => {
  loaded.push(lang)
  _set(lang, messages)
  // TODO: enable display after finish loading
})

function _set(lang, messages) {
  i18n.locale = lang
  localStorage.lang = lang
  if (messages) {
    i18n.setLocaleMessage(lang, messages)
  }
}

export function loadLanguageAsync(lang) {
  if (loaded.includes(lang)) {
    return _set(lang)
  }
  loaded.push(lang)
  localStorage.lang = lang
  language(lang).then((messages) => _set(lang, messages))
}
