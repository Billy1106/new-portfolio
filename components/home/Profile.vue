<template>
  <v-container fluid class="profile d-flex align-center justify-center"> 
      <v-row justify="center" v-show="isMounted">
        <v-col cols="12" class="text-center">
          <v-row justify="center" >
            <v-transition-group name="fade" mode="out-in">
              <Cube />
            </v-transition-group>
          </v-row>
          <v-row justify="center" class="greeting">
            <v-col class="text-center">
              <h4>Hello, I'm</h4>
            </v-col>
          </v-row>
          <v-row justify="center" class="name">
            <v-col class="text-center">
              <h1>Ryota Koda</h1>
            </v-col>
          </v-row>
          <v-row justify="center" class="title">
            <v-col class="text-center">
              <h3>Software Engineer</h3>
            </v-col>
          </v-row>
          <v-row justify="space-around" class="buttons">
            <v-col cols="auto">
              <v-btn
                :href="objectURL"
                target="_blank"
                variant="outlined"
                @click="sendEvent"
              >
                Download CV
              </v-btn>
              <v-btn variant="tonal" @click="scroll('contact')">
                Contact Info
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center" class="icon-buttons">
            <v-col cols="auto">
              <v-btn
                flat
                icon
                href="https://github.com/Billy1106/"
                target="_blank"
                color="transparent"
              >
                <v-icon size="50">mdi-github</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn
                flat
                icon
                href="https://www.linkedin.com/in/ryota-koda-1a970521b/"
                target="_blank"
                color="transparent"
              >
                <v-icon size="50">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Cube from "@/components/home/profile/Cube.vue";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { useGtag } from "vue-gtag-next";

import gsap from "gsap";
const runtimeConfig = useRuntimeConfig().public;
const { event } = useGtag();
import { ref, onMounted } from "vue";

const isMounted = ref(false);

const objectURL = ref<string>("");
const client = new S3Client({
  region: runtimeConfig.AWS_S3_REGION,
  credentials: {
    accessKeyId: runtimeConfig.AWS_S3_ACCESS_ID,
    secretAccessKey: runtimeConfig.AWS_S3_SECRET_KEY,
  },
});

defineComponent({
  components: {
    Cube,
  },
});

onMounted(async () => {
  const command = new GetObjectCommand({
    Bucket: runtimeConfig.AWS_S3_BUCKET_NAME,
    Key: runtimeConfig.AWS_S3_RESUME_KEY as string,
  });

  try {
    const response = await client.send(command);
    if (!response.Body) {
      throw new Error("No body in response");
    }
    const str = await response.Body.transformToByteArray();
    const blob = new Blob([str], { type: "application/pdf" });
    objectURL.value = URL.createObjectURL(blob);
    if (!response.Body) {
      throw new Error("No body in response");
    }
  } catch (err) {
    console.error(err);
  } finally {
    isMounted.value = true;
    gsap.utils
      .toArray(
        ".profile",
      )
      .forEach((value) => {
        const element = value as Element;
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          }
        );
      });
  }
});

const scroll = (refName: string) => {
  const element = document.getElementById(refName);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
  event("click", {
    event_category: "scroll",
    event_label: refName,
  });
};

const sendEvent = () => {
  event("click", {
    event_category: "download",
  });
};
</script>

<style scoped>
.profile {
  min-height: 100vh;
}
</style>
