<template>
  <ul class="mt-5">
    <coaches-item :key="coach.id" :coach="coach" v-for="coach of this.$store.state.coachesModule.coaches">
    </coaches-item>
  </ul>
</template>

<script>
import CoachesItem from '@/components/layout/children/coaches/coaches-list/children/CoachesItem.vue'

export default {
  name: 'CoachesList',
  components: { CoachesItem },
  mounted () {
    this.$store.dispatch('coachesModule/getCoaches')
  }
}
</script>

<style scoped>

</style>
