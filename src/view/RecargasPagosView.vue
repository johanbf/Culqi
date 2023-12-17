<script setup lang="ts">

import Header from "../components/Header.vue";
import Container from "../components/Container.vue";
import CardDataAcount from "../components/CardBalanceCommerce.vue";
import ListServicios from "../components/ListServices.vue";
import {onMounted, Ref, ref} from "vue";
import {API_URL} from "../config/constants.ts";
import {useRouter} from "vue-router";

const balanceCommerce: Ref<string> = ref('')
const router = useRouter()

onMounted(() => {
  getBalance()
})

const getBalance = () => {
  fetch(`${API_URL}/getActualBalance`, {
    headers: {
      Authorization : 'Bearer '+localStorage.getItem('token')
    }
  }).then(response => response.json()).then(data => {
    balanceCommerce.value = data.data.balanceCommerce
  }).catch((error: any) => {
    console.log(error)
    router.push('/error-401')
  })
}

const refreshEventWatch = (data: boolean) => {
  if(data){
    balanceCommerce.value = ""
    getBalance()
  }
}

</script>

<template>
  <Header title="Recargas y pagos" urlback="/"/>
  <Container >
    <CardDataAcount :balance-commerce="balanceCommerce" @refresh-event="refreshEventWatch"/>
    <ListServicios />
  </Container>
</template>

<style scoped>

</style>