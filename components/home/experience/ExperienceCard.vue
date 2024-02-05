<template>
  <v-card class="text-center" variant="outlined">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card-title>
          <v-icon>mdi-file-certificate</v-icon>
          <h4>{{ title }}</h4>
        </v-card-title>
      </v-col>
      <v-col cols="12">
        <v-list lines="one">
          <v-row no-gutters>
            <v-col
              cols="12"
              md="6"
              v-for="(item, index) in experiences.slice(0, 3)"
              :key="index"
            >
              <v-list-item class="ma-5">
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.text }}
              </v-list-item>
            </v-col>
            <v-col
              cols="12"
              md="6"
              v-for="(item, index) in experiences.slice(3, 6)"
              :key="index + 3"
            >
              <v-list-item class="ma-5">
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.text }}
              </v-list-item>
            </v-col>
          </v-row>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
interface Experience {
  icon: string;
  text: string;
}
defineProps({
  experiences: {
    type: Array<Experience>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<style scoped></style>
