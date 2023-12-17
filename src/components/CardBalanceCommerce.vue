<script setup lang="ts">
defineProps<{ balanceCommerce: string }>()

const $emit = defineEmits<{
  refreshEvent : [refres : boolean]
}>()

const refresh = () => {
  $emit('refreshEvent', true)
}

</script>

<template>
  <div class="mt-8 border-b pb-4 border-gray px-4">
    <p class="text-balance">Saldo virtual <span class="ml-3"><img src="../assets/svg/info.svg" alt="info" width="20" height="20"></span></p>
    <h2 class="font-black font-roboto text-4xl my-2 flex items-center"> <div class="animate-pulse flex space-x-4" v-if="balanceCommerce == ''">
      <div class="h-10 w-44 bg-gray rounded col-span-2"></div>
    </div> <p v-show="balanceCommerce != ''" >S/ {{balanceCommerce}}</p> <span class="ml-3" @click="refresh"><img src="../assets/svg/refresh.svg" alt="refresh" width="20" height="20"></span></h2>
    <button class="rounded-full py-1 px-4 font-roboto border-gray border-2 border-opacity-40 flex items-center"> <span class="mr-3"><img src="../assets/svg/heart.svg" alt="heart" width="20" height="20"></span> ¿Cómo cargar mi saldo virtual?</button>
    <p class="text-code">Código para cargar tu saldo: <span class="text-green">{12345678901}</span></p>
  </div>
</template>

<style scoped>
  .text-balance {
    @apply font-roboto text-gray font-bold text-lg flex items-center
  }

  .text-code {
    @apply font-roboto text-gray font-bold text-base mt-2
  }
</style>