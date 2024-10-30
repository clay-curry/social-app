import {describe, expect, it} from '@jest/globals'

describe('datePickerCanLocaleizeCalendar', () => {
  const ppLanguage = [
    'en',
    'ca',
    'de',
    'en-GB',
    'es',
    'fi',
    'fr',
    'ga',
    'hi',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'pt-BR',
    'ru',
    'tr',
    'uk',
    'zh-CN',
    'zh-HK',
    'zh-TW',
  ]
  it.each(ppLanguage)(
    `'%s' is in Intl.DateTimeFormat.supportedLocales`,
    lang => {
      expect(Intl.DateTimeFormat.supportedLocalesOf([lang]).length).toEqual(1)
    },
  )

  it.each(ppLanguage)(
    `'%s' is compatible with DateTimeFormat.formatToParts`,
    lang => {
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }
      const dateTimeFormat = new Intl.DateTimeFormat(lang, options)

      const parts = dateTimeFormat.formatToParts(new Date())
      expect(parts.length > 4).toEqual(true)
    },
  )
})

/*
// Results below use the time zone of America/Los_Angeles (UTC-0800, Pacific Standard Time)
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// US English uses month-day-year order "12/19/2012"
console.log(new Intl.DateTimeFormat("en-US").format(date));
// British English uses day-month-year order "19/12/2012"
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// Korean uses year-month-day order "2012. 12. 19."
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// Arabic in most Arabic speaking countries uses real Arabic digits 
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era "24/12/19"
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian "19/12/2012"
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));

*/
