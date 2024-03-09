<template>
  <v-container fluid class="project" :style="{ backgroundColor: bgColor }">
  <v-row justify="center" class="py-5">
    <v-col>
      <h6 class="text-center subtitle-1">Browse My Recent</h6>
      <h1 class="text-center display-1">Projects</h1>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-window hide-delimiter-background show-arrows class="project-window">
      <template v-slot:prev="{ props }">
        <v-btn icon large color="surface" class="project-nav-btn" @click="props.onClick">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn icon large color="surface" class="project-nav-btn" @click="props.onClick">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-window-item v-for="(group, index) in groupedProject" :key="'group-' + index" class="project-window-item">
        <v-row class="mx-auto" justify="space-around">
          <v-col cols="12" md="6" v-for="(project, projIndex) in group" :key="'project-' + projIndex" align-self="center">
            <ProjectCard :project="project" />
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-row>
</v-container>

</template>

<script setup lang="ts">
import ProjectCard from "@/components/home/project/ProjectCard.vue";
import { defineComponent, ref } from "vue";
import {
  projectList,
  type Project,
} from "@/components/home/project/project-contents";
import { useTheme } from "vuetify";

const theme = useTheme();
defineComponent({
  components: {
    ProjectCard,
  },
});

const screenWidth = ref(window?.innerWidth || 900);
const groupedProject = ref<Project[][]>([[]]);

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
    setProject();
  });
  setProject();
});

const bgColor = computed(() => theme.current.value.colors.surface);

const setProject = () => {
  let perGroup;
  if (screenWidth.value < 960) {
    perGroup = 2;
  } else {
    // Large screens
    perGroup = 4;
  }

  const grouped = [];
  for (let i = 0; i < projectList.length; i += perGroup) {
    grouped.push(projectList.slice(i, i + perGroup));
  }
  groupedProject.value = grouped;
  screenWidth.value = window.innerWidth;
};
</script>

<style scoped>
.project {
  min-height: 100vh;
}

.project-card {
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
