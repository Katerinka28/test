import { documentOffsetTop } from './utils'

const ACTIVE_ICON = 'mdi-chevron-up'
const PASSIVE_ICON = 'mdi-chevron-down'
const INITIAL_HEIGHT = 0
const FIRST_ELEMENT = 1

export default {
  name: 'vue-accordion',
  props: {
    active: {
      default: () => false,
    },
    collapsable: {
      default: () => false,
    },
    id: { },
    fullHeight: {
      default: () => false,
    },
    activeIcon: {
      default: () => ACTIVE_ICON,
    },
    passiveIcon: {
      default: () => PASSIVE_ICON,
    },
  },
  data() {
    return {
      activeState: this.active,
      windWidth: 1200,
      contentHeight: INITIAL_HEIGHT,
    }
  },
  computed: {
    style() {
      return {
        icon: this.activeState ? this.activeIcon : this.passiveIcon,
        height: this.activeState ? this.stylesGenerator(this.contentHeight) : INITIAL_HEIGHT,
      }
    },
  },
  mounted() {
    this.checkUrl()
    this.calcHeight()
  },
  methods: {
    stylesGenerator(val) {
      if (this.fullHeight) {
        return 'initial'
      }
      return `${val}px`
    },
    calcHeight() {
      const el = this.$el.firstChild.lastChild
      if (el) {
        this.contentHeight = el.scrollHeight
      }
    },
    toggleActive() {
      this.activeState = !this.activeState
      this.calcHeight()
    },
    checkUrl() {
      let { hash } = window.location
      if (hash) {
        hash = hash.split('#')[FIRST_ELEMENT]
        if (hash === this.id) {
          this.activeState = true
        }
      }
    },
    async scrolly(time) {
      setTimeout(async () => {
        const offset = 90
        const top = documentOffsetTop(document.getElementById(this.id)) - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }, time)
    },
  },
  render() {
    return this.$scopedSlots.default({
      style: this.style,
      activeState: this.activeState,
      toggleActive: this.toggleActive,
      collapse: () => {
        this.activeState = false
      },
    })
  },
}
