<template>
  <v-app-bar class="MainHeader" height="90" :flat="true">
    <template #prepend>
      <router-link
          :to="{ name: 'HomeView' }"
          class="MainHeader__brand ml-1"
      >
        <v-avatar size="50">
          <img src="https://yakkalabour.com.au/wp-content/uploads/2024/07/YAKKA-ICON-OUTLINED-WHITE-RGB-e1721036217858.png" alt="Yakka">
        </v-avatar>
      </router-link>
    </template>
    <v-app-bar-title class="MainHeader__title ml-4">
      <template #text>
        <div class="d-flex align-center">
          <h3 class="md">
            Yakka
          </h3>
          <p class="ml-2 pt-1 text-small">
            Premier Construction
          </p>
        </div>
      </template>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>

</script>
<style lang="scss">
@import "@/assets/scss/variables";

.MainHeader {
  &.v-app-bar.v-toolbar {
    background-color: $yakka-primary-100;
  }
}
</style>
