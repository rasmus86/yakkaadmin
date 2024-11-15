<template>
  <v-layout>
    <v-main class="container w-25 default-layout-wrapper d-flex justify-center align-center">
      <section class="w-25">
        <v-avatar size="200">
          <img src="https://yakkalabour.com.au/wp-content/uploads/2024/07/YAKKA-LABOUR-HIRE.webp" alt="Yakka">
        </v-avatar>
        <v-file-input @change="uploadFile($event)" label="File input" variant="solo-filled"></v-file-input>
      </section>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">

const uploadFile = (file: Event) => {
  console.log(file);
}

</script>
<style scoped lang="scss">

</style>
