import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' //追加

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
        defaultSet: "mdi",
      },
    // 他の設定をここに記述していく
  })

  // Vue.js で Vuetify を使用する
  nuxtApp.vueApp.use(vuetify)
})