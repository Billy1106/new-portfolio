<template>
  <v-card class="text-center mx-auto pa-10" flat variant="outlined">
    <v-row no-gutters>
      <v-col cols="12">
      </v-col>

      <v-col cols="12">
        <v-card-title class="justify-center py-4">
          <h4>{{ bio.organization }}</h4>
        </v-card-title>
      </v-col>

      <v-col cols="12">
        <v-card-text class="px-4">
          {{ bio.description }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Event {
  id: number;
  date: string;
  organization: string;
  position: string;
  description: string;
}

defineProps({
  bio: {
    type: Object as () => Event,
    required: true,
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
