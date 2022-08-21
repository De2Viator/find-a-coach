<template>
<div class="flex justify-center">
    <ul class="flex flex-col w-2/4">
      <li v-for="coach in $store.state.coachesModule.coaches" :key="coach.id">
        <coach-item :coach="coach"></coach-item>
      </li>
  </ul>
</div>
</template>

<script lang="ts">
import CoachItem from '../coaches-item/CoachesItem.vue'

export default {
  components: {
    CoachItem
  },
  mounted () {
    this.$store.dispatch('getCoaches')
  }
}
</script>
