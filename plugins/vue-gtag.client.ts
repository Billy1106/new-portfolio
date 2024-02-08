import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: config.GOOGLE_ANALYTICS_ID as string,
    },
  });
});
