<template>
  <v-card
    class="text-center card d-flex flex-column justify-center align-center"
    variant="outlined"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="dialog = true"
  >
    <v-dialog
      v-model="dialog"
      max-width="700px"
      class="text-center d-flex flex-column justify-center"
    >
      <v-card>
        <v-card-title class="card-title">{{ title }}</v-card-title>
        <v-card-text class="">
          <v-icon size="70">{{ icon }}</v-icon>
        </v-card-text>
        <v-card-text class="card-content">
          <p>
            {{ description }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row justify="center">
      <v-col align-self="center" class="ga-20">
        <v-icon size="80">
          {{ icon }}
        </v-icon>
        <div class="card-title">{{ title }}</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const hover = ref(false);
const dialog = ref(false);
</script>

<style scoped>
.card {
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.card:hover {
  background-color: #f5f5f5;
}

.card-title {
  font-weight: bold;
  font-size: large;
}

.card-content p {
  font-weight: 500;
  font-size: medium;
  font-family: "Inter", sans-serif;
  padding: 8px;
  text-align: left;
}
</style>
