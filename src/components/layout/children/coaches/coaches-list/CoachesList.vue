<template>
  <ul class="mt-5 flex justify-between flex-wrap">
    <coaches-item :key="coach.id" :coach="coach" v-for="coach of this.$store.state.coachesModule.coaches">
    </coaches-item>
  </ul>
</template>

<script lang="ts">
import CoachesItem from '@/components/layout/children/coaches/coaches-list/children/CoachesItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoachesList',
  components: { CoachesItem },
  mounted () {
    this.$store.dispatch('coachesModule/getCoaches')
  }
})
</script>

<style scoped lang="less">

</style>
