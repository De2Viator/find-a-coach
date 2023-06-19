<template>
  <h2 class="text-center pt-3" style="font-size: 25px">Registration</h2>
  <div class="container">
    <ProfileForm />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ProfileForm from '@/components/layout/children/profile/ProfileForm.vue'
export default defineComponent({
  name: 'RegistrationView',
  components: { ProfileForm }
})
</script>

<style scoped>

</style>
