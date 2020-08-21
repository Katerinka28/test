const ACTIVE_ICON = 'mdi-chevron-up'
const PASSIVE_ICON = 'mdi-chevron-down'
const INITIAL_HEIGHT = 0

const documentOffsetTop = el => el.offsetTop +
  (el.offsetParent ? documentOffsetTop(el.offsetParent)
    : INITIAL_HEIGHT)

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
    init: {
      default: () => true,
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
      isDesktop: false,
    }
  },
  computed: {
    style() {
      return {
        icon: this.activeState ? this.activeIcon : this.passiveIcon,
        myHeight: this.activeState ? this.stylesGenerator(this.contentHeight) : INITIAL_HEIGHT,
      }
    },
  },
  mounted() {
    this.checkUrl()
    this.resizeHandler()
    this.calcHeight()
    this.initialCheck()
    this.checkWidth()
  },
  methods: {
    stylesGenerator(val) {
      if (this.fullHeight && !this.isDesktop) {
        return 'initial'
      }
      return `${val}px`
    },
    initialCheck() {
      this.activeState = this.init
    },
    calcHeight() {
      const el = this.$el.getElementsByClassName('tt-accordion__description')[0]
      if (el) {
        this.contentHeight = el.scrollHeight
      }
    },
    checkWidth() {
      if (window.innerWidth > this.windWidth) {
        this.isDesktop = true
      }
    },
    resizeHandler() {
      if (window.innerWidth < this.windWidth) {
        this.activeState = false
      } else {
        this.activeState = true
        this.isDesktop = true
      }
    },
    toggleActive(optional) {
      if (optional === 'resizable') {
        if (window.innerWidth > this.windWidth) {
          return
        }
      }
      this.activeState = !this.activeState
      this.calcHeight()
      this.checkWidth()
    },
    checkUrl() {
      let { hash } = window.location
      if (hash) {
        hash = hash.split('#')
        hash = hash[this.one]
        if (hash === this.id) {
          this.activeState = true
        }
      }
    },
    async scrolly(time) {
      setTimeout(async () => {
        const offset = 90
        const top = documentOffsetTop(document.getElementById(this.id)) - offset
        console.log(top)
        window.scrollTo({ top, behavior: 'smooth' })
      }, time)
    },
  },
  render() {
    return this.$scopedSlots.default({
      style: this.style,
      activeState: this.activeState,
      toggleActive: this.toggleActive,
      isDesktop: this.isDesktop,
      collapse: () => {
        if (this.isDesktop) {
          return
        }
        this.activeState = false
      },
    })
  },
}
