<script setup lang="ts">
import {ref} from "vue";

defineProps<{ label: string }>()

const search = ref('')

const $emit = defineEmits<{
  searchEvent : [search : string]
}>()

const emitSearch = () => {
  console.log(search.value)
  $emit("searchEvent", search.value)
}

</script>

<template>
  <label class="font-bold font-roboto">{{ label }}</label>
  <div class="content-input-search">
    <input type="text" class="input-search" v-model="search" placeholder="ej. Culqi" v-on:keyup="emitSearch">
    <div class="w-[10%] flex justify-end">
      <img src="../assets/svg/search.svg" alt="" width="24" height="24">
    </div>
  </div>
</template>

<style scoped>
  .input-search {
     @apply w-[90%] bg-transparent text-xl font-bold outline-0 text-gray placeholder-gray
  }

  .content-input-search {
    @apply bg-grayCulqi p-4 rounded flex
  }
</style>