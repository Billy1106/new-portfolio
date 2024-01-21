<template>
  <div>
    <v-footer flat class="footer">
      <v-row class="mx-15">
        <v-row justify="center">
          <v-col cols="12" md="2" class="text-center">
            <v-btn flat text @click="scroll('home')" class="text-black button"
              >Home</v-btn
            >
          </v-col>

          <v-col cols="12" md="2" class="text-center">
            <v-btn flat text @click="scroll('about')" class="text-black button"
              >About</v-btn
            >
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn
              flat
              text
              @click="scroll('project')"
              class="text-black button"
              >Projects</v-btn
            >
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn
              flat
              text
              @click="scroll('experience')"
              class="text-black button"
              >Experiences</v-btn
            >
          </v-col>
          <v-col cols="12" md="2" class="text-center">
            <v-btn
              flat
              text
              @click="scroll('contact')"
              class="text-black button"
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

<script setup>
const scroll = (refName) => {
  const element = document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<style scoped>
.footer {
  .button {
    color: #000000;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
}
</style>
