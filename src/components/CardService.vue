<script setup lang="ts">
defineProps<{ img: string, nameService: string, ruta: string }>()
</script>

<template>
  <router-link :to="ruta">
    <div class="bg-grayCulqi p-5 rounded flex items-center mb-5">
      <div class="p-2 bg-orange rounded mr-7">
        <img :alt="'image '+nameService " :src="img" height="24" width="24">
      </div>
      <p class="text-card">{{nameService}}</p>
    </div>
  </router-link>
</template>

<style scoped>
  .text-card {
    @apply font-roboto font-bold text-xl
  }
</style>