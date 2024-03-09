<template>
  <v-app class="home">
    <Header class="header" />
    <v-main>
      <div id="home"><Profile /></div>
      <div id="about"><About /></div>
      <div id="skills"><Experience /></div>
      <div id="project"><Projects /></div>
      <div id="history"><History /></div>
      <div id="contact"><Contact /></div>
      <v-btn
        style="bottom: 20px; right: 20px; position: fixed"
        @click="scrollToNextSection"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import Header from "@/components/global/Header.vue";
import About from "@/components/home/About.vue";
import Experience from "@/components/home/Experience.vue";
import Projects from "@/components/home/Projects.vue";
import History from "@/components/home/History.vue";
import Profile from "@/components/home/Profile.vue";
import Footer from "@/components/global/Footer.vue";
import { useGtag } from "vue-gtag-next";
import useScroll from "~/composables/useScroll";

defineComponent({
  components: {
    Header,
    About,
    Experience,
    Projects,
    History,
    Profile,
    Footer,
  },
});
const { event } = useGtag();
const { scrollToNextSection } = useScroll();
onMounted(() => {
  event("page_view", { page_path: "/home" });
});



</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  .header {
    padding: 50px;
  }
}
</style>
