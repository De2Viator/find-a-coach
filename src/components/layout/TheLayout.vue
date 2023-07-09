<template>
  <the-header></the-header>
  <the-navigation></the-navigation>
  <main>
    <section class="container mx-auto">
      <router-view></router-view>
    </section>
  </main>

</template>

<script lang="ts">
import TheHeader from '@/components/ui/header/TheHeader.vue'
import TheNavigation from '@/components/ui/navigation/TheNavigation.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheLayout',
  components: {
    TheNavigation,
    TheHeader
  }
})
</script>

<style scoped>

</style>
