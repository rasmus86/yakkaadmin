<template>
  <v-layout>
    <v-main class="container w-25 h-screen  default-layout-wrapper d-flex justify-center align-center">
      <section class="w-75 h-full pb-5">
        <div class="overflow-y-auto h-screen mb-1">
          <v-avatar size="200">
            <img src="https://yakkalabour.com.au/wp-content/uploads/2024/07/YAKKA-LABOUR-HIRE.webp" alt="Yakka">
          </v-avatar>
          <v-btn color="primaryDefault" @click="login" class="ml-3">Login</v-btn>
          <div class="search-wrapper">
            <v-row no-gutters>
              <v-col cols="5" >
                <v-text-field
                    v-model="searchJobForm.job"
                    label="Job title, keywords or company"
                    :prepend-inner-icon="mdiMagnify"
                    variant="plain"
                    hide-details
                    single-line
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                    v-model="searchJobForm.city"
                    label="City, state/territory, postcode"
                    :prepend-inner-icon="mdiMapMarker"
                    variant="plain"
                    hide-details
                    single-line
                ></v-text-field>
              </v-col>
              <v-col cols="2" class="d-flex align-center justify-items-center">
                <v-btn variant="flat" :loading="loading" color="primaryDefault" @click="searchJobs">Find Jobs</v-btn>
              </v-col>
            </v-row>
          </div>
          <v-row no-gutters v-if="!loading" class="mt-7 overflow-scroll h-4/5">
            <v-col cols="4" col-sm="6" cols-md="4" cols-lg="3" v-for="job in yakkaJobs" :key="job.location">
              <JobWrapper :job="job"></JobWrapper>
            </v-col>
          </v-row>
          <v-row no-gutters v-else>
            <v-col cols="12">
              <v-progress-linear color="primaryDefault" indeterminate></v-progress-linear>
            </v-col>
            <v-row class="mt-7">
              <v-col cols="4">
                <v-skeleton-loader type="card-avatar"></v-skeleton-loader>
              </v-col>
              <v-col cols="4">
                <v-skeleton-loader type="card-avatar"></v-skeleton-loader>
              </v-col>
              <v-col cols="4">
                <v-skeleton-loader type="card-avatar"></v-skeleton-loader>
              </v-col>
              <v-col cols="4">
                <v-skeleton-loader type="card-avatar"></v-skeleton-loader>
              </v-col>
              <v-col cols="4">
                <v-skeleton-loader type="card-avatar"></v-skeleton-loader>
              </v-col>
              <v-col cols="4">
                <v-skeleton-loader type="card-avatar"></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-row>
        </div>
      </section>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
import {onMounted,} from "vue";
import {useJob} from "@/composables/useJob.ts";
import JobWrapper from "@/components/job/JobWrapper.vue";
import {mdiMagnify, mdiMapMarker} from "@mdi/js";
import router from "@/router";

const {handleGetYakkaJobs, yakkaJobs, loading, searchJobForm} = useJob();

const searchJobs = async () => {
  await handleGetYakkaJobs();
}

const login = async () => {
  await router.push({name: 'login'});

}
const initConfig = async () => {
}

onMounted(() => {
  initConfig();
})
</script>
<style scoped lang="scss">
.search-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 70px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.v-input--density-default .v-field--variant-plain, .v-input--density-default .v-field--variant-underlined {
  --v-input-control-height: 48px;
  --v-field-padding-top: 4px;
  --v-field-padding-bottom: 4px;
}
</style>
