<template>
  <v-layout>
    <v-main class="container w-100 default-layout-wrapper d-flex m-auto justify-center items-center">
      <section class="w-25">
        <v-avatar size="200">
          <img src="https://yakkalabour.com.au/wp-content/uploads/2024/07/YAKKA-LABOUR-HIRE.webp" alt="Yakka">
        </v-avatar>
        <v-text-field v-model="loginForm.email" label="Email" required/>
        <v-text-field v-model="loginForm.password" label="Password" type="password" required/>
        <v-btn color="primaryDefault" elevation="1" @click="handleAuthLogin" density="default">Login</v-btn>
      </section>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">

import {useAuth} from "@/composables/useAuth.ts";

const {loginForm, handleAuthLogin} = useAuth();

</script>
<style scoped lang="scss">

</style>
