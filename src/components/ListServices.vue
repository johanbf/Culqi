<script setup lang="ts">
  import CardService from "./CardService.vue";

  let services : Array<Services> = [
    {
      img: '../src/assets/svg/phone.svg',
      title: 'Recargas',
      ruta: 'recargas'
    },
    {
      img: '../src/assets/svg/lightbulb.svg',
      title: 'Pago de servicios',
      ruta: 'pago-de-servicios'
    },
    {
      img: '../src/assets/svg/calendar.svg',
      title: 'Historial de ganancias y operaciones',
      ruta: 'historial-ganancias-operaciones'
    }
  ]
</script>

<template>
  <div class="mt-4">
    <CardService v-for="(service ) in services" :img="service.img" :name-service="service.title" :ruta="service.ruta" :key="service.title"/>
  </div>
</template>

<style scoped>

</style>