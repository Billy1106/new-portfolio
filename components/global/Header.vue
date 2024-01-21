<template>
  <div>
    <v-toolbar flat class="header mt-10 px-10" color="transparent" app>
      <v-btn class="button">
        <v-icon color="black" left class="mr-2">mdi-account</v-icon>Ryota
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="scroll('home')" class="text-black button"
        >Home</v-btn
      >
      <v-btn text @click="scroll('about')" class="text-black button"
        >About</v-btn
      >
      <v-btn text @click="scroll('project')" class="text-black button"
        >Projects</v-btn
      >
      <v-btn text @click="scroll('experience')" class="text-black button"
        >Experiences</v-btn
      >
      <v-btn text @click="scroll('contact')" class="text-black button"
        >Contact</v-btn
      >
    </v-toolbar>
  </div>
</template>

<script setup>
const scroll = (refName) => {
  const element = document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<style scoped>
.header {
  .button {
    color: #000000;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
}
</style>
