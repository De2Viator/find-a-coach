<template>
  <section>
    <Requests />
  </section>
</template>
<style lang="less">

</style>
<script lang="ts">
import { defineComponent } from 'vue'
import Requests from '@/components/layout/children/requests/TheRequests.vue'

export default defineComponent({
  name: 'RequestsView',
  components: { Requests }
})
</script>
