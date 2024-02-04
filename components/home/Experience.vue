<template>
  <v-container fluid class="about">
    <h6 class="text-center">Explore My</h6>
    <h1 class="text-center pb-10">Skills</h1>
    <v-row>
      <v-col cols="12" md="6">
        <ExperienceCard
          title="Frontend Development"
          :experiences="frontendExperiences"
        />
      </v-col>
      <v-col cols="12" md="6">
        <ExperienceCard
          title="Backend Development"
          :experiences="backendExperiences"
        />
      </v-col>
      <v-col cols="12" md="6">
        <ExperienceCard title="Others" :experiences="gameExperiences" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ExperienceCard from "@/components/home/experience/ExperienceCard.vue";
import { defineComponent } from "vue";

defineComponent({
  components: {
    ExperienceCard,
  },
});
const backendExperiences = [
  { icon: "mdi-certificate", text: "Express JS" },
  { icon: "mdi-certificate", text: "Go" },
  { icon: "mdi-certificate", text: "MongoDB" },
  { icon: "mdi-certificate", text: "Firebase" },
  { icon: "mdi-certificate", text: "AWS" },
  { icon: "mdi-certificate", text: "Docker" },
];
const frontendExperiences = [
  { icon: "mdi-certificate", text: "HTML/CSS" },
  { icon: "mdi-certificate", text: "Javascript" },
  { icon: "mdi-certificate", text: "Typescript" },
  { icon: "mdi-certificate", text: "SAAS" },
  { icon: "mdi-certificate", text: "Vue2/3" },
  { icon: "mdi-certificate", text: "React" },
];
const gameExperiences = [
  { icon: "mdi-certificate", text: "C++" },
  { icon: "mdi-certificate", text: "Java" },
  { icon: "mdi-certificate", text: "Python" },
];
</script>

<style scoped>
.about {
  width: 80vw;
  font-weight: 560;
}
</style>
