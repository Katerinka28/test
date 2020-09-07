# vue-trans
- `VueTrans` - добавляет во `Vue` метод **_**. 
  Во Vue компонентах используем это так:
  * В `<template lang='pug>` - 
  ```pug 
    +b.ds-caption.H2 {{ _('Form Title') }}
    ui-input(
      :placeholder="_('Your name')"
    )
  ```
  * В `<script>` - 
  ```js 
    data() {
      return {
        label: this._('Some translatable text')
      }
    }
  ```

- `compileMessages` - базовые настройки для `vue-I18n` с указанием локали и подвязкой массива переводов с `window.django.catalog`. 
P.S. Не забудь создать глобальную переменную с локалью 
```
  window.language = "!{exp('LANGUAGE_CODE')}"
```

## Установка 

```bash
yarn add @aspectus/vue-trans
```
```js
import VueTrans, { compileMessages } from '@aspectus/vue-trans'
```

## Использование

```js 
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(VueTrans)

export const i18n = new VueI18n({
  ...compileMessages(),
  silentTranslationWarn: true,
})
```

И, конечно, не забываем о пакете для бека [**django-vuejs-translate**](https://gitlab.com/cyberbudy/django-vuejs-translate), без которого это счастье не имеет смысла.

Вот и все) Все [переводы появились](http://joxi.ru/Rmz0O7lHRoM6ZA).