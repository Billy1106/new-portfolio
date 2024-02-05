<template>
  <v-card class="text-center mx-auto pa-4" flat variant="outlined" max-width="500px" height="400px">
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
        <v-card-text class="justify-center pb-0 description-text">
  <p>
    {{ project.description }}
  </p>
</v-card-text>

        <v-card-actions class="justify-center pb-4">
          <v-btn :href="project.sourceLink" target="_blank" dark class="mr-2">
            <v-icon>mdi-github</v-icon> Source
          </v-btn>
          <v-btn v-if="project.demoLink" :href="project.demoLink" target="_blank" dark>
            <v-icon>mdi-web</v-icon> Demo
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { type Project } from "@/components/home/project/project-contents";
defineProps({
  project: {
    type: Object as () => Project,
    required: true,
  },
});
</script>
<style scoped>
.description-text p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

</style>
