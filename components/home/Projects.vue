<template>
  <v-container fluid class="project">
    <v-row
      justify="center"
      :style="{
        height: '90vh',
      }"
    >
      <v-col align-self="center">
        <v-col align-self="center">
          <h6 class="text-center">Browse My Recent</h6>
          <h1 class="text-center">Projects</h1>
        </v-col>
        <v-carousel hide-delimiter-background>
          <template v-slot:prev="{ props }">
            <v-btn
              variant="outlined"
              class="rounded-pill"
              @click="props.onClick"
              ><</v-btn
            >
          </template>
          <template v-slot:next="{ props }">
            <v-btn
              variant="outlined"
              class="rounded-pill"
              @click="props.onClick"
              >></v-btn
            >
          </template>
          <v-carousel-item
            v-for="(group, index) in groupedProject"
            :key="'group-' + index"
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
                v-for="(project, projIndex) in group"
                :key="'project-' + projIndex"
                class="mx-auto"
              >
                <ProjectCard :project="project" height="50vh" />
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/home/project/ProjectCard.vue";
import { defineComponent } from "vue";
import { projectList } from "@/components/home/project/project-contents";

defineComponent({
  components: {
    ProjectCard,
  },
});

const groupedProject = computed(() => {
  const grouped = [];
  for (let i = 0; i < projectList.length; i += 2) {
    grouped.push(projectList.slice(i, i + 2));
  }
  return grouped;
});
</script>

<style scoped>
.project {
  width: 80vw;
  height: 100vh;
  font-weight: 560;
}
</style>
