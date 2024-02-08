import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss"],
  ssr: true,
  modules: ["nuxt-gtag"],
  runtimeConfig: {
    public: {
      AWS_S3_ACCESS_ID: process.env.S3_ACCESS_ID,
      AWS_S3_SECRET_KEY: process.env.S3_SECRET_KEY,
      AWS_S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
      AWS_S3_REGION: process.env.S3_REGION,
      AWS_S3_RESUME_KEY: process.env.S3_RESUME_KEY,
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
      EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
      EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
      EMAIL_USER_ID: process.env.EMAIL_USER_ID,
    },
  },
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
});
