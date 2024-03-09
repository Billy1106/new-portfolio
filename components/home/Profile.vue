<template>
  <v-container fluid class="profile d-flex align-center justify-center">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-row justify="center" class="my-16">
          <Cube class="my-10" />
        </v-row>
        <v-row justify="center">
          <v-col class="text-center">
            <h4>Hello, I'm</h4>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="text-center">
            <h1>Ryota Koda</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="text-center">
            <h3>Software Engineer</h3>
          </v-col>
        </v-row>
        <v-row justify="space-around">
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
        <v-row justify="center">
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
const runtimeConfig = useRuntimeConfig().public;
const { event } = useGtag();

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
