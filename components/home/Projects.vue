<template>
  <v-container fluid class="project">
    <v-img
      :src="img"
      height="200"
      aspect-ratio="4/3"
      class="transition-fast"
      eager
    />
    <v-row>
      <v-col align-self="center">
        <h6 class="text-center">Browse My Recent</h6>
        <h1 class="text-center">Projects</h1>
      </v-col>
      <v-carousel hide-delimiter-background class="h-screen">
        <template v-slot:prev="{ props }">
          <v-btn variant="outlined" class="rounded-pill" @click="props.onClick"
            ><</v-btn
          >
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="outlined" class="rounded-pill" @click="props.onClick"
            >></v-btn
          >
        </template>
        <v-carousel-item
          v-for="(group, index) in groupedProject"
          :key="'group-' + index"
        >
          <v-row :style="{ width: '90vw' }" class="mx-auto" justify="center">
            <v-col
              cols="12"
              md="6"
              lg="4"
              xl="4"
              v-for="(project, projIndex) in group"
              :key="'project-' + projIndex"
              class="mx-auto my-5"
              align-self="center"
            >
              <ProjectCard :project="project" />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/home/project/ProjectCard.vue";
import { defineComponent, computed, ref } from "vue";
import {
  projectList,
  type Project,
} from "@/components/home/project/project-contents";
defineComponent({
  components: {
    ProjectCard,
  },
});

const img = ref("");
const screenWidth = ref(window?.innerWidth || 900);
const groupedProject = ref<Project[][]>([[]]);

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
    setProject();
  });
  setProject();

});

const setProject = () => {
  let perGroup;
    if (screenWidth.value < 960) {
      perGroup = 2;
    } else if (screenWidth.value < 1300) {
      // Medium screens
      perGroup = 3;
    } else if (screenWidth.value < 1600) {
      // Large screens
      perGroup = 6;
    } else {
      // Large screens
      perGroup = 6;
    }

    const grouped = [];
    for (let i = 0; i < projectList.length; i += perGroup) {
      grouped.push(projectList.slice(i, i + perGroup));
    }
    groupedProject.value = grouped;
  screenWidth.value = window.innerWidth;
}
</script>

<style scoped>
.project {
  margin-bottom: 15rem;
  background-color: #f5f5f5;
}

.project-card {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
