<template>
  <ProfileForm></ProfileForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileForm from '@/components/layout/children/profile/ProfileForm.vue'

export default defineComponent({
  name: 'ProfileView',
  components: { ProfileForm }
})
</script>

<style scoped>

</style>
