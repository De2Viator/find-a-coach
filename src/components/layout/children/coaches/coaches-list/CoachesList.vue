<template>
  <CoachesItem :key="coach.id" :coach="coach" v-for="coach of this.$store.state.coachesModule.coaches">
  </CoachesItem>
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
