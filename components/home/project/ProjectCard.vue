<template>
  <v-card class="text-center mx-auto pa-4" flat variant="outlined">
    <v-row no-gutters>
      <v-col cols="12">
        <v-img
          :src="project.img"
          :alt="project.title"
          height="200"
          aspect-ratio="4/3"
          class="transition-fast"
          eager
        />
      </v-col>

      <v-col cols="12">
        <v-card-title class="justify-center pb-1">
          <h4>{{ project.title }}</h4>
        </v-card-title>
      </v-col>

      <v-col cols="12">
        <v-card-text class="justify-center pb-0">
          <p>
            {{ project.description }}
          </p>
        </v-card-text>
        <v-btn :href="project.link" target="_blank" dark large>
          <v-icon left>mdi-github</v-icon>
          Source Code
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  techs: any[];
  link: string;
}
defineProps({
  project: {
    type: Object as () => Project,
    required: true,
  },
});
</script>
<style scoped></style>
