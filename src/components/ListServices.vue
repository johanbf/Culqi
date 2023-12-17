<script setup lang="ts">
</script>

<template>
  <div class="mt-4">
    <router-link to="recargas">
      <div class="bg-grayCulqi p-5 rounded flex items-center mb-5">
        <div class="p-2 bg-orange rounded mr-7">
          <img alt="image recargas " src="../assets/svg/phone.svg" height="24" width="24">
        </div>
        <p class="text-card">Recargas</p>
      </div>
    </router-link>
    <router-link :to="'pago-de-servicios'">
      <div class="bg-grayCulqi p-5 rounded flex items-center mb-5">
        <div class="p-2 bg-orange rounded mr-7">
          <img :alt="'image Pago de servicios' " src="../assets/svg/lightbulb.svg" height="24" width="24">
        </div>
        <p class="text-card">Pago de servicios</p>
      </div>
    </router-link>
    <router-link :to="'historial-ganancias-operaciones'">
      <div class="bg-grayCulqi p-5 rounded flex items-center mb-5">
        <div class="p-2 bg-orange rounded mr-7">
          <img :alt="'image Historial de ganancias y operaciones' " :src="'../assets/svg/calendar.svg'" height="24" width="24">
        </div>
        <p class="text-card">Historial de ganancias y operaciones</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.text-card {
  @apply font-roboto font-bold text-xl
}
</style>