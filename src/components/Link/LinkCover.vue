<script setup lang="ts">
import {useRouter} from "vue-router";
import {TOKEN_APP} from "../../config/constants.ts";

defineProps<{ link: string , texto: string}>()

const router = useRouter()

const startApp = (ruta: string) => {
  localStorage.setItem('token', TOKEN_APP)
  router.push(ruta)
}

</script>

<template>
  <button class="bg-moradQulqi px-6 py-2 text-lg rounded text-white" v-on:click="startApp(link)">{{texto}}</button>
</template>

<style scoped>

</style>