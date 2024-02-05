<template>
  <v-container fluid class="history" id="experience">
    <h6 class="text-center">Explore My</h6>
    <h1 class="text-center pb-10">Experience</h1>
    <v-timeline direction="vertical" side="end" class="overflow-hidden ml-n9">
      <v-timeline-item
        v-for="(event, index) in eventLists"
        :key="index"
        :color="index % 2 === 0 ? 'primary' : 'secondary'"
      >
        <v-card flat>
          <v-card-title>
            <h4>{{ event.organization }}</h4>
          </v-card-title>
          <v-card-text>
            <h3 class="my-1">{{ event.position }}</h3>
            <h5 class="my-1">{{ event.date }}</h5>
            <p class="my-2">{{ event.description }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup lang="ts">
import HistoryCard from "@/components/home/history/HistoryCard.vue";
import { defineComponent } from "vue";

interface Event {
  id: number;
  date: string;
  organization: string;
  position: string;
  description: string;
}

defineComponent({
  components: {
    HistoryCard,
  },
});
const eventLists: Event[] = [
  {
    id: 1,
    date: "July 2018 - August 2018",
    organization: "Sigfoss Corp",
    position: "Software Engineer Internship",
    description:
      "Developed Face Recognition Software with Yolov3(Python) \nCreated training data for the machine learning algorithm.",
  },
  {
    id: 2,
    date: "July 2019 - September 2019",
    organization: "Cybergym Corp",
    position: "Software Engineer Internship",
    description:
      "Worked as interpreter of the company to communicate with headquarters\nGained proficiency in using metasploit frameworks to conduct penetration testing and vulnerability scanning.",
  },
  //   {
  //     id: 3,
  //     date: "September 2019 - Present",
  //     organization: "University of British Columbia",
  //     position: "Undergraduate",
  //     description:
  //       "Science Faculty, Computer Science Major \nDeveloping a strong understanding of Data structure and Algorithm, Computer Architecture and Database.",
  //   },
  //   {
  //     id: 4,
  //     date: "August 2021 - Present",
  //     organization: "Twilight Traveler Corp",
  //     position: "Volunteer",
  //     description:
  //       "Delivering a 1-hour presentation history the universities in Canada to classes of 20-30 Japanese high school students who are interested in studying abroad after their graduation.",
  //   },
  {
    id: 5,
    date: "September 2021 - September 2023",
    organization: "CoderDojo OME",
    position: "Coding Mentor",
    description:
      "Teaching basic coding skills through Scratch and Python to young people between 7 and 17.",
  },
  //   {
  //     id: 6,
  //     date: "September 2021 - Present",
  //     organization: "Kidsdoor",
  //     position: "English Teacher",
  //     description:
  //       "Teaching English once in a week to high school age children suffering from poverty due to welfare or single parent families.",
  //   },
  {
    id: 7,
    date: "September 2022 - September 2023",
    organization: "SMART Technologies",
    position: "Frontend Developer (Co-op)",
    description:
      "Led the design and implementation of 10+ user-centric features, improving the application experience while gaining proficiency in CI/CD and Agile methodologies.",
  },
  {
    id: 8,
    date: "September 2023 - present",
    organization: "Memory Lab",
    position: "Fullstack Developer",
    description:
      "Developed and maintained a high-performance REST API in Golang, facilitating seamless integration for client applications.",
  },
];

const gameExperiences = [
  { icon: "mdi-certificate", text: "C++" },
  { icon: "mdi-certificate", text: "Java" },
  { icon: "mdi-certificate", text: "Python" },
];
</script>

<style scoped>
.history {
  max-width: 800px;
  font-weight: 560;
}
</style>
