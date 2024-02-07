<template>
  <div>
    <v-toolbar flat class="header mt-10 px-10" color="transparent" app>
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-btn class="button">
        <v-icon color="black" left class="mr-2">mdi-account</v-icon>Ryota
      </v-btn>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex">
        <v-btn text @click="scroll('home')" class="text-black button"
          >Home</v-btn
        >
        <v-btn text @click="scroll('about')" class="text-black button"
          >About</v-btn
        >
        <v-btn text @click="scroll('skills')" class="text-black button"
          >Skills</v-btn
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
      </div>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item @click="scroll('home')">
          <v-list-item-title class="text-black button">Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scroll('about')">
          <v-list-item-title class="text-black button">About</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scroll('project')">
          <v-list-item-title class="text-black button"
            >Projects</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="scroll('experience')">
          <v-list-item-title class="text-black button"
            >Experiences</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="scroll('contact')">
          <v-list-item-title class="text-black button"
            >Contact</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const { gtag } = useGtag();

const scroll = (refName) => {
  drawer.value = false; // Close the drawer when a link is clicked
  const element = document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  sendEvent(refName);
};

const sendEvent = (refName) => {
  gtag("event", "click", {
    event_category: "scroll",
    event_label: refName,
  });
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
