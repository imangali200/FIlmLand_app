<script setup>

  import headerFirst from './components/headerFirst.vue'

  import bottom from './components/bottom.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <headerFirst v-if="route.path !== '/search'"/>
  <router-view/>
  <bottom />

</template>