<script setup lang="ts">

import Header from "../components/Header.vue";
import {computed, onMounted, Ref, ref} from "vue";
import {API_URL} from "../config/constants.ts";
import Container from "../components/Container.vue";
import {Company} from "../models/company.ts";
import Search from "../components/Search.vue";
import {useRouter} from "vue-router";

const listCompanies: Ref<Company[]> = ref([])
const searchTerm = ref('');
const router = useRouter()

onMounted(() => {
  fetch(`${API_URL}/getProviders`, {
    headers: {
      Authorization : 'Bearer '+localStorage.getItem('token')
    }
  }).then(response => response.json()).then(data => {
    console.log(data)
    listCompanies.value = data.data.companies
  }).catch((error: any) => {
    console.log(error)
    router.push('/error-401')
  })
})

const filteredItems = computed(() => {
  return listCompanies.value.filter(item =>
      item.company.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const searchEvent = (value : string) => {
  searchTerm.value = value
}

</script>

<template>
  <Header title="Recargas" urlback="recargas-pagos"/>

  <Container>
    <div class="mt-2">

      <Search label="Buscar empresa" @search-event="searchEvent"/>

      <div class="w-full overflow-x-scroll scroll-m-0 scroll-none my-3">
        <div class="mt-3 inline-block whitespace-nowrap items-center">
          <button class="border-gray rounded-full border-2 px-5 py-1 font-roboto font-medium mr-3">Todas</button>
          <button class="border-gray rounded-full border-2 px-5 py-1 font-roboto font-medium mr-3">Favoritas</button>
          <button class="border-gray rounded-full border-2 px-5 py-1 font-roboto font-medium mr-3">Telefonia</button>
          <button class="border-gray rounded-full border-2 px-5 py-1 font-roboto font-medium mr-3">Servicios electricos</button>
        </div>
      </div>

      <div v-if="listCompanies.length == 0">
        <div class="animate-pulse flex space-x-4 flex flex-wrap py-5 items-center px-2 border-b border-gray">
          <div class="h-12 w-12 bg-gray rounded col-span-2 w-2/12"></div>
          <div class="h-7 w-36 bg-gray rounded col-span-2"></div>
        </div>

        <div class="animate-pulse flex space-x-4 flex flex-wrap py-5 items-center px-2 border-b border-gray">
          <div class="h-12 w-12 bg-gray rounded col-span-2 w-2/12"></div>
          <div class="h-7 w-36 bg-gray rounded col-span-2"></div>
        </div>

        <div class="animate-pulse flex space-x-4 flex flex-wrap py-5 items-center px-2 border-b border-gray">
          <div class="h-12 w-12 bg-gray rounded col-span-2 w-2/12"></div>
          <div class="h-7 w-36 bg-gray rounded col-span-2"></div>
        </div>
      </div>

      <div v-if="listCompanies.length > 0">
        <div class="flex flex-wrap py-5 items-center px-2 border-b border-gray" v-for="(company, index) in filteredItems" :key="index">
          <div class="w-2/12">
            <div class="w-[40px] h-[40px]">
              <img :src="company.image" :alt="'logo '+company.company " class="w-full" width="40" height="40">
            </div>
          </div>
          <p class="font-roboto font-bold text-lg w-8/12">{{company.company}}</p>
          <div class="w-2/12">
            <img src="../assets/svg/start.svg" alt="start" height="24" width="24">
          </div>
        </div>
      </div>

    </div>
  </Container>

</template>

<style scoped>

.scroll-none::-webkit-scrollbar {
  width: 0;
}

</style>