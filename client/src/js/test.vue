<template lang="pug">
  validation-observer
    validation-provider(
      rules="required|email|min:20|between:10,20",
      v-slot='{ errors }'
    )
      input(name='test', id='test' type='text', v-model='test')
      p errors: {{ errors }}
      button(type="submit") {{ _("Подписаться") }}
</template>
<script>
export default {
  name: 'SeoText',
  data() {
    return {
      test: '',
    }
  },
}
</script>
