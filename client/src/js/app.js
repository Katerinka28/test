import { createI18n } from './i18n'

export function createApp({ Vue, I18n }) {
  const i18n = createI18n({ Vue, I18n })
  const app = new Vue({
    i18n,
    el: '#app',
    delimiters: ['[[', ']]'],
    data() {
      return {
        True: true,
        False: false,
        None: undefined,
        slides: 4,
        test: '',
        dateRange: ''
      }
    },
  })

  return { app, i18n }
}
