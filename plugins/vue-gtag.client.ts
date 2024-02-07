import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: config.GOOGLE_ANALYTICS_ID as string,
    },
  });
});
