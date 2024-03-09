<template>
  <div>
    <v-footer flat class="footer">
      <v-row class="mx-15">
        <v-row justify="center" class="pt-6">
          <v-col cols="12" md="2" class="text-center">
            <v-btn variant="text" flat @click="scroll('home')" class="button">Home</v-btn>
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn variant="text" flat @click="scroll('about')" class="button">About</v-btn>
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn variant="text" flat @click="scroll('skills')" class="button">Skills</v-btn>
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn variant="text" flat @click="scroll('project')" class="button"
              >Projects</v-btn
            >
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn variant="text" flat @click="scroll('experience')" class="button"
              >Experiences</v-btn
            >
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn variant="text" flat @click="scroll('contact')" class="button"
              >Contact</v-btn
            >
          </v-col>
        </v-row>

        <v-col cols="12" md="12" class="text-center">
          Copyright © 2023 Ryota Koda. All Rights Reserved.
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
import useScroll from "@/composables/useScroll";
const { scroll } = useScroll();
</script>

<style scoped>
.footer {
  .button {
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
}
</style>
