import clickaway from './clickaway'

function install(Vue, {
  clickawayName = clickaway.name,
} = {}) {
  Vue.component(clickawayName, clickaway);
}

export { clickaway };
export default { install };
