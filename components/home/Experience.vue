<template>
  <v-container fluid class="about">
    <v-row justify="center">
      <v-col class="text-center">
        <h6>Explore My</h6>
        <h1 class="pb-10">Skills</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="tech in techList"
        :key="tech.text"
        align-self="center"
      >
        <SkillCard
          :title="tech.text"
          :icon="tech.icon"
          :description="tech.description"
          width="200"
          height="200"
          class="mx-auto"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ExperienceCard from "@/components/home/experience/ExperienceCard.vue";
import { defineComponent } from "vue";
import { techList } from "@/components/home/experience/tech-list";

defineComponent({
  components: {
    ExperienceCard,
  },
});
</script>

<style scoped>
.about {
  width: 80vw;
  font-weight: 560;
  min-height: 100vh;
}
</style>
