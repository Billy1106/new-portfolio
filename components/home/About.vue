<template>
  <v-container
    fluid
    class="about d-flex align-center justify-center"
    :style="{ backgroundColor: bgColor }"
  >
    <v-row justify="center">
      <v-col align-self="center">
        <v-col>
          <h6 class="text-center">Get To Know More</h6>
          <h1 class="text-center pb-10">About Me</h1>
        </v-col>
        <v-row>
          <!-- <v-col align-self="center" style="height: 70vh; scale: 0.7;"> -->
          <v-col align-self="center">
            <v-img
              src="/images/about/AI-profile.png"
              height="400"
              width="300"
              class="mx-auto"
              cover
              eager
            />
            <!-- <client-only>
              <Vue3Spline
                :scene="{
                  url: 'https://prod.spline.design/45HOhjPtNnttR3mF/scene.splinecode',
                }"
              />
            </client-only> -->
          </v-col>
          <v-col cols="12" md="8" class="my-auto">
            <v-row>
              <v-col cols="12" md="6">
                <v-card class="text-center" variant="outlined">
                  <v-card-title>
                    <v-icon>mdi-school</v-icon>
                    <h4>Education</h4>
                  </v-card-title>
                  <v-card-text>
                    <h4>University of British Columbia</h4>
                    <h4>B.Sc. Computer Science 2024</h4>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="text-center" variant="outlined">
                  <v-card-title>
                    <v-icon>mdi-file-certificate</v-icon>
                    <h4>Experience</h4>
                  </v-card-title>
                  <v-card-text>
                    <h4>4+ years</h4>
                    <h4>Full Stack Development</h4>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-col cols="12" md="12">
              <v-card variant="outlined" style="border: none">
                <v-card-text class="description-text">
                  <h4 style="line-height: 2">
                    Ryota is is a Japanese software engineer based in Vancouver,
                    with passions in developing high-performance REST APIs using
                    Golang and creating advanced data retrieval systems using
                    technologies like VectorDB and AWS Redshift. His proficiency
                    extends to front-end development, where he excels in
                    building user-friendly interfaces with Nuxt3 and TypeScript.
                    He is adept in Agile and CI/CD methodologies, with
                    significant experience in enhancing user engagement and
                    application security.
                  </h4>
                </v-card-text>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";
import { onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray('.about .v-card, v-img, .about h6, .about h1, .about .description-text h4, .project v-img').forEach(value => {
    const element = value as Element;

    gsap.fromTo(element, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%', 
        end: 'bottom 60%', // 要素のボトムがビューポートの60%に達したときに終了
        toggleActions: 'play none none reverse', // スクロールダウンでプレイ、スクロールアップでリバース
      },
    });
  });
});


const theme = useTheme();

const bgColor = computed(() => theme.current.value.colors.surface);
</script>

<style scoped>
.about {
  min-height: 100vh;
  .description-text h4 {
    font-weight: 600;
  }
}
.about h6,
.about h1,
.about v-img,
.about .v-card,
.about .description-text h4 {
  opacity: 0;
}
</style>
