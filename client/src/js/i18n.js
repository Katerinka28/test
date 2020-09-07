import { trans } from '@aspectus/vee-i18n/src/main'
import VueTrans, { compileMessages } from '@aspectus/vue-trans/src/main'
import Vue from 'vue'
import {
  required,
  min,
  max,
  email,
} from 'vee-validate/dist/rules'

const dateTimeFormats = {}

const available_rules = {
  required,
  min,
  max,
  email,
}
Vue.use(VueTrans)
export function createI18n({ Vue, I18n }) {

  const i18n = new I18n({
    ...compileMessages(),
    silentTranslationWarn: true,
    dateTimeFormats,
  })
  trans(i18n, available_rules)

  return i18n
}
