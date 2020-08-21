import Accordion from './Accordion'

function install(Vue, {
  accordionName = Accordion.name,
} = {}) {
  Vue.component(accordionName, Accordion);
}

export { Accordion };
export default { install };
