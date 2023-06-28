<template>
  <nav>
    <ul class="flex">
      <li class="flex-1 mr-2" :key="index" v-for="(link, index) of links">
        <router-link class="text-center block border border-white rounded hover:border-gray-200
        text-blue-500 hover:bg-gray-200 py-2 px-4"
                     active-class="bg-blue-500 hover:bg-blue-700 text-white" :to="link.link">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="less" scoped>
</style>
<script lang="ts">
import { Data } from '@/components/ui/navigation/models/data'
import { defineComponent } from 'vue'
import { IS_STUDENT } from '@/shared/constants'
export default defineComponent({
  name: 'TheNavigation',
  data ():Data {
    return {
      links: [{ name: 'Coaches', link: '/coaches' },
        { name: 'Requests', link: '/requests' },
        { name: 'Profile', link: '/profile' }
      ]
    }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem(IS_STUDENT) as string)) {
      this.links.splice(1, 1)
    }
  }
})
</script>
