<template>
  <v-app-bar
    flat
    fixed
    class="header px-10"
    app
    :class="`theme-${currentTheme}`"
  >
    <v-app-bar-nav-icon
      class="d-md-none"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-btn class="button">
      <v-icon left class="mr-2">mdi-account</v-icon>
      <div>Ryota</div>
    </v-btn>

    <v-spacer></v-spacer>

    <div class="d-none d-md-flex">
      <v-btn text @click="scroll('about')" class="button">About</v-btn>
      <v-btn text @click="scroll('skills')" class="button">Skills</v-btn>
      <v-btn text @click="scroll('project')" class="button">Projects</v-btn>
      <v-btn text @click="scroll('experience')" class="button"
        >Experiences</v-btn
      >
      <v-btn text @click="scroll('contact')" class="button">Contact</v-btn>
    </div>

    <v-btn @click="toggleTheme" class="theme-toggle">
      <v-icon>{{
        currentTheme === "dark"
          ? "mdi-white-balance-sunny"
          : "mdi-weather-night"
      }}</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item @click="scroll('home')">
        <v-list-item-title class="button">Home</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scroll('about')">
        <v-list-item-title class="button">About</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scroll('project')">
        <v-list-item-title class="button">Projects</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scroll('experience')">
        <v-list-item-title class="button">Experiences</v-list-item-title>
      </v-list-item>
      <v-list-item @click="scroll('contact')">
        <v-list-item-title class="button">Contact</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useTheme } from "vuetify";
import { ref, computed } from "vue";
const theme = useTheme();
const drawer = ref(false);
const darkMode = ref(false);
const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  theme.global.name.value = darkMode.value ? "dark" : "light";
};
const currentTheme = computed(() => (darkMode.value ? "dark" : "light"));

</script>

<style scoped>
.header {

}

.header .button {
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--text-color);
}
</style>
