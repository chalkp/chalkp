import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import * as th from './locales/th'
import * as en from './locales/en'

export const resources = {
  en,
  th
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'th',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
