<script setup lang="ts">

import LinkCover from "../components/Link/LinkCover.vue";

localStorage.setItem('token', '')

</script>

<template>
  <div class="content-justify">
    <div class="text-center">
      <h1 class="text-3xl mb-3 font-bold px-5 pb-4">Culqi Recargas y Pagos de servicios</h1>
      <LinkCover link="recargas-pagos" texto="Iniciar"/>
    </div>
  </div>
</template>

<style scoped>
  .content-justify{
    @apply justify-center flex items-center h-screen flex-wrap
  }
</style>