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
import { onMounted, ref, computed } from 'vue';
import ProjectCard from "@/components/home/project/ProjectCard.vue";
import { projectList, type Project } from "@/components/home/project/project-contents";
import { useTheme } from "vuetify";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const theme = useTheme();

const screenWidth = ref(window?.innerWidth || 900);
const groupedProject = ref<Project[][]>([[]]);

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
    setProject();
  });
  setProject();

  // アニメーションの追加
  gsap.utils.toArray('.project').forEach(value => {
    const card = value as Element;
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=200',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: 'power.out',
    });
  });
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
</style>
