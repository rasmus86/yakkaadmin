<template>
  <v-app class="DashboardLayout rounded">
    <div>
      <DefaultHeader/>
    </div>
    <div v-if="!display.smAndDown">
      <DefaultAsideMenu/>
    </div>
    <div class="overlay-content">
      <div class="overlay"></div>
      <v-main class="DashboardLayout__content">
        <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useDisplay} from 'vuetify';
import DefaultHeader from "@/layouts/DefaultHeader.vue";
import DefaultAsideMenu from "@/layouts/DefaultAsideMenu.vue";

const display = ref(useDisplay());

</script>

<style lang="scss" scoped>

@import "@/assets/scss/variables";

.DashboardLayout {
  padding: 0 16px 0px 20px;
  background-color: $yakka-primary-100;
  overflow: hidden;

  &__content {
    overflow: hidden;
    height: 100vh;
    border-radius: 0 16px 16px 0;
    background-color: $yakka-primary-light;
  }
}



.overlay-content {
  z-index: 5;
}
</style>
