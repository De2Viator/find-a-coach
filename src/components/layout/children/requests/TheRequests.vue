<script lang="ts">
import { defineComponent } from 'vue'
import TheRequest from '@/components/layout/children/requests/children/TheRequest.vue'

export default defineComponent({
  components: { TheRequest },
  mounted () {
    this.$store.dispatch('requestsModule/getRequestedUsers')
  }
})
</script>

<template>
  <ul class="w-full mt-10">
    <TheRequest :requested-user="user" :key="user.id" v-for="user of this.$store.state.requestsModule.users"/>
  </ul>
</template>

<style scoped>

</style>
