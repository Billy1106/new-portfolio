<template>
  <v-app class="home">
    <Header class="header" />
    <v-main>
      <div id="home">
        <Profile />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Experience />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="history">
        <History />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/global/Header.vue";
import About from "@/components/home/About.vue";
import Experience from "@/components/home/Experience.vue";
import Projects from "@/components/home/Projects.vue";
import History from "@/components/home/History.vue";
import Profile from "@/components/home/Profile.vue";
import Footer from "@/components/global/Footer.vue";
import { useGtag } from "vue-gtag-next";
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
const { pageview } = useGtag();
onMounted(() => {
  pageview({ page_path: "/" });
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
