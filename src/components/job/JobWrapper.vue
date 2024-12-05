<template>
  <v-card class="mx-auto mb-5" max-width="344" elevation="2">
    <v-card-text>
      <p class="text-left text-lg text-decoration-underline font-weight-black w-64 overflow-hidden truncate">
        {{ job.title }}
        <v-tooltip
            activator="parent"
            location="top"
        >{{ job.title }}</v-tooltip>
      </p>
      <p class="text-small mt-2 text-ellipsis w-100 text-no-wrap overflow-hidden text-gray-500">
        <v-icon :icon="mdiMapMarkerOutline" class="mr-2"></v-icon>
        {{ job.location }}
      </p>
      <p class="text-small mt-2 text-ellipsis w-100 text-no-wrap overflow-hidden text-gray-500">
        <v-icon :icon="mdiFilter" class="mr-2"></v-icon>
        {{ job.interval }}
      </p>
    </v-card-text>

    <v-divider class="border-opacity-75" color="warning"></v-divider>
    <v-card-actions class="display-flex justify-center align-center">
      <v-btn
          color="black"
          text="Share"
          variant="text"
          :prepend-icon="mdiShareVariantOutline"
      ></v-btn>
      <v-btn
          color="black"
          text="Show More"
          variant="flat"
          :append-icon="mdiArrowRightThin"
          @click="openLink"
        >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import {PropType} from "vue";
import {mdiArrowRightThin, mdiMapMarkerOutline, mdiShareVariantOutline} from "@mdi/js";
import {IYakkaJob} from "@/interfaces/job/yakka-job.interface.ts";
import {mdiFilter} from "@mdi/js/commonjs/mdi";

defineProps({
  job: {
    type: Object as PropType<IYakkaJob>,
    required: true
  }
})

const openLink = () => {
  window.open('https://yakkalabour.com.au/download-yakka-app', '_blank')
}

</script>
<style scoped lang="scss">

</style>
