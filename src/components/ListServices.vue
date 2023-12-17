<script setup lang="ts">
  import CardService from "./CardService.vue";

  const phone = import('../assets/svg/phone.svg')
  const lightbulb = import('../assets/svg/lightbulb.svg')
  const calendar = import('../assets/svg/calendar.svg')

  let services : Array<Services> = [
    {
      img: phone,
      title: 'Recargas',
      ruta: 'recargas'
    },
    {
      img: lightbulb,
      title: 'Pago de servicios',
      ruta: 'pago-de-servicios'
    },
    {
      img: calendar,
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