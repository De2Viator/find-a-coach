<template>
  <CoachDetails></CoachDetails>
</template>

<script lang="ts">
import CoachDetails from '@/components/layout/children/coaches/coach-details/CoachDetails.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoachView',
  components: { CoachDetails }
})
</script>

<style scoped>

</style>
