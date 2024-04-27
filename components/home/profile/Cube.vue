<template>
  <v-container class="mb-12">
    <div class="scene">
      <div class="cube" :style="cubeStyle">
        <div class="cube-face front" :style="style"></div>
        <div class="cube-face back" :style="style"></div>
        <div class="cube-face right" :style="style"></div>
        <div class="cube-face left" :style="style"></div>
        <div class="cube-face top" :style="style"></div>
        <div class="cube-face bottom" :style="style"></div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useTheme } from "vuetify";
const rotation = ref({ x: 0, y: 0 });

let angle = 0;
setInterval(() => {
  angle = (angle + 0.3) % 360;
  rotation.value.x = angle;
  rotation.value.y = angle;
}, 20); // Approx. 60 frames per second

const theme = useTheme();
const isDark = computed(() => theme.global.name.value === "dark");
const style = computed(() =>
  isDark.value
    ? {
        backgroundColor: theme.themes.value.dark.colors.background,
        border: `1px solid white`,
      }
    : {
        backgroundColor: theme.themes.value.light.colors.background,
        border: `1px solid black`,
      }
);

watchEffect(() => {});

const cubeStyle = computed(() => ({
  transform: `rotateX(${rotation.value.x}deg) rotateY(${rotation.value.y}deg)`,
}));
</script>

<style scoped>
.scene {
  width: 200px;
  height: 200px;
  perspective: 600px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center;
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  /* border: 1px solid #000000;
  background-color: rgba(255, 255, 255, 0.9); */
  text-align: center;
  line-height: 200px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

.front {
  transform: translateZ(100px);
}
.back {
  transform: rotateY(180deg) translateZ(100px);
}
.right {
  transform: rotateY(90deg) translateZ(100px);
}
.left {
  transform: rotateY(-90deg) translateZ(100px);
}
.top {
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}
</style>
