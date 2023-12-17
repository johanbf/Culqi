<script setup lang="ts">
import ArrowBack from "./ArrowBack.vue";
defineProps<{ title: string, urlback: string }>()
</script>

<template>
  <div class="header header-border">
    {{title}}
    <ArrowBack :urlback="urlback"/>
  </div>
</template>

<style scoped>
  .header{
    @apply px-10 font-bold relative text-center h-[100px] bg-black text-white pb-8 text-xl flex justify-center items-end
  }

  .header-border{
    @apply rounded-b-3xl
  }
</style>