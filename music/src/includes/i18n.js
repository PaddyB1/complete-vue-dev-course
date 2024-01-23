import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import sp from '@/locales/sp.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    sp
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'NZD'
      }
    }
  }
})
