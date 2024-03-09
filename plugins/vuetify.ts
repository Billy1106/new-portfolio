import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; //追加

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomLightTheme = {
    dark: false,
    colors: {
      background: "#FFFFFF",
      surface: "#F0F0F0",
      primary: "#000000",
      secondary: "#FFFFFF",
      error: "#FF3737",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  };
  
  const myCustomDarkTheme = {
    dark: true,
    colors: {
      background: "#121212",
      surface: "#222222",
      primary: "#FFFFFF",
      secondary: "#222222",
      error: "#FF5252",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FFC107",
    },
  };
  
  
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: "mdi",
    },
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
        myCustomDarkTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
