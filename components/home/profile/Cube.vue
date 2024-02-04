<template>
  <div class="scene">
    <div class="cube" :style="cubeStyle">
      <div class="cube-face front"></div>
      <div class="cube-face back"></div>
      <div class="cube-face right"></div>
      <div class="cube-face left"></div>
      <div class="cube-face top"></div>
      <div class="cube-face bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

onMounted(() => {
  window.addEventListener("scroll", (e) => {
    rotation.value.x = window.scrollY/2;
    rotation.value.y = window.scrollY/2;
  });
});

const rotation = ref({ x: 0, y: 0 });

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
  border: 1px solid #000000;
  background-color: rgba(255, 255, 255, 0.9);
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
