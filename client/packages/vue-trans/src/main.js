import { translator, compileMessages } from './lib'

function install(Vue) {
  /* eslint-disable no-param-reassign */
  Vue.prototype._ = translator
}

export default { install }

export {
  compileMessages,
}
