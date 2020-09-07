/* eslint-disable
  prefer-spread,
  no-restricted-syntax,
  prefer-rest-params,
  import/prefer-default-export,
*/
// import * as rules from 'vee-validate/dist/rules'
import {
  extend,
} from 'vee-validate'
import { dict } from './dict'

export function trans(i18n, rules) {
  function _() {
    return i18n.t.apply(i18n, arguments)
  }
  // loop over all rules
  for (const rule in rules) {
    // add the rule
    if ({}.hasOwnProperty.call(rules, rule)) {
      extend(rule, { ...rules[rule], message: dict(_)[rule] })
    }
  }
}
