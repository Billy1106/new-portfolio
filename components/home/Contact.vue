<template>
  <v-container fluid class="contact" id="contact">
    <v-row
      justify="center"
      :style="{
        height: '100vh',
      }"
    >
      <v-col class="text-center" align-self="center">
        <v-row justify="center">
          <h6>Get in Touch</h6>
        </v-row>
        <v-row justify="center" class="pb-2">
          <h1 class="font-weight-bold">Contact Me</h1>
        </v-row>
        <v-row justify="center">
          <v-card variant="outlined" class="px-12 py-10 rounded-xl">
            <v-col cols="12" md="12" align-self="center">
              <v-row justify="center">
                <v-icon size="40">mdi-email</v-icon>
                <h2>ryotabilly@gmail.com</h2>
              </v-row>
              <v-row justify="center">
                <v-icon size="40">mdi-linkedin</v-icon>
                <v-btn
                  href="https://www.linkedin.com/in/ryota-koda-1a970521b/"
                  target="_blank"
                  style="text-transform: unset !important"
                  class="pa-0"
                  flat
                  ><h2>LinkedIn</h2></v-btn
                >
              </v-row>
            </v-col>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact {
}
</style>
