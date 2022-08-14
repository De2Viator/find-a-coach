<template>
    <ul>
        <li v-for="coach in coaches" :key="coach.id">
            <coach-item :name="coach.name"></coach-item>
        </li>
    </ul>
</template>

<script lang="ts">
import CoachItem from '../coaches-item/CoachesItem.vue'

export default {
  components: {
    CoachItem
  },
  data () {
    return {
      coaches: [{
        name: 'Test',
        id: 1
      }]
    }
  },
  mounted () {
    this.$store.dispatch('getCoaches')
  }
}
</script>
