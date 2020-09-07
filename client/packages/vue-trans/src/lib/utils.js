const messages = {
  [window.language]: window.django && window.django.catalog || {},
}

export const compileMessages = () => ({
  locale: window.language,
  messages,
})

export function translator(...arg) {
  /* eslint-disable prefer-spread */
  return this.$t.apply(this, arg)
}
