<template>
  <v-container fluid id="profile" class="profile">
    <v-row justify="center">
      <v-col cols="12" md="4" class="text-center" align-self="center">
        <v-row justify="center" class="my-16">
          <Cube class="my-5" />
        </v-row>
        <v-row justify="center">
          <h4>Hello, I'm</h4>
        </v-row>
        <v-row justify="center">
          <h1>Ryota Koda</h1>
        </v-row>
        <v-row justify="center">
          <h3>Software Engineer</h3>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-btn variant="outlined">
              <span>Download CV</span>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-btn variant="tonal" @click="scroll('contact')">
              <span>Contact Info</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="2">
            <v-btn
              flat
              size="50"
              href="https://github.com/Billy1106/"
              target="_blank"
            >
              <v-icon size="50">mdi-github</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="2">
            <v-btn
              flat
              size="50"
              href="https://www.linkedin.com/in/ryota-koda-1a970521b/"
              target="_blank"
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

defineComponent({
  components: {
    Cube,
  },
});

const scroll = (refName: string) => {
  const element = document.getElementById(refName);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<style scoped>
.profile {

}
</style>
