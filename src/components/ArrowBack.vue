<script setup lang="ts">
  defineProps<{urlback : string}>()
</script>

<template>
  <router-link :to="urlback" class="arrow-back">
    <img src="../assets/svg/arrow.svg" alt="arrow back" width="20" height="20">
  </router-link>
</template>

<style scoped>
  .arrow-back {
    top: 45%;
    @apply absolute left-5 block
  }
</style>