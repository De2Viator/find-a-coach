<template>
  <the-header></the-header>
  <the-navigation></the-navigation>
  <main>
    <section>
      <router-view></router-view>
    </section>
  </main>

</template>

<script>
import TheHeader from '@/components/ui/header/TheHeader.vue'
import TheNavigation from '@/components/ui/navigation/TheNavigation.vue'

export default {
  name: 'TheLayout',
  components: {
    TheNavigation,
    TheHeader
  }
}
</script>

<style scoped>

</style>
