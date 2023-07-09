<template>
    <section>
        <coaches-list></coaches-list>
    </section>
</template>

<script lang="ts">
import CoachesList from '@/components/layout/children/coaches/coaches-list/CoachesList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CoachesList
  }
})
</script>
