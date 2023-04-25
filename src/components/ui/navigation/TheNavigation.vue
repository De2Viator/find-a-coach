<template>
  <nav>
    <ul class="flex">
      <li class="flex-1 mr-2" :key="link.id" v-for="link of links">
        <router-link class="text-center block border border-white rounded hover:border-gray-200
        text-blue-500 hover:bg-gray-200 py-2 px-4"
                     active-class="bg-blue-500 hover:bg-blue-700 text-white" :to="link.link">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
</style>
<script lang="ts">
import { nanoid } from 'nanoid'
import { Data } from '@/components/ui/navigation/models/data'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TheNavigation',
  data ():Data {
    return {
      links: [{ name: 'Coaches', id: nanoid(), link: '/coaches' },
        { name: 'Requests', id: nanoid(), link: '/requests' }
      ]
    }
  }
})
</script>
