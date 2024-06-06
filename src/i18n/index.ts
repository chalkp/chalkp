import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import * as th from './locales/th'
import * as en from './locales/en'

const resources = {
  en,
  th
} as const

export enum Language {
  en = 'en',
  th = 'th'
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['th']
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: Language.th,

  interpolation: {
    escapeValue: false,
  },
})

export { i18n }
