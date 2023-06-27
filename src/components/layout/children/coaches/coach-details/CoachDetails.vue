<template>
  <div class="">
    <div class="p-8 bg-white mt-24">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="grid grid-cols-1 text-center order-last md:order-first mt-20 md:mt-0">
          <div>
            <p class="font-bold text-gray-700 text-xl">{{this.$data.coach.studentsCount}}</p>
            <p class="text-gray-400">Students</p>
          </div>
        </div>

        <div class="relative">
          <img class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex
          items-center justify-center text-indigo-500" :src="this.$data.coach.avatar" :alt="this.$data.coach.name">
        </div>

        <div class="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-center">
          <button
            class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow
            hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            @click="connectWithCoach"
          >
            Connect
          </button>
        </div>
      </div>

      <div class="mt-20 text-center">
        <h1 class="text-4xl font-medium text-gray-700">{{this.$data.coach.name}},
          <span class="font-light text-gray-500">{{age}}</span>
        </h1>
        <h3 class="text-2xl font-medium text-gray-700">
          {{this.$data.coach.wage}}$ per hour
        </h3>
        <p class="font-light text-gray-600 mt-3">{{ this.$data.coach.country }}, {{ this.$data.coach.city }}</p>

        <p class="mt-6 text-gray-500" :key="i" v-for="(experience,i) of this.$data.coach.experience">
          {{experience}}
        </p>
      </div>
      <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
              {{ this.$data.coach.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from '@/models/user'
import { EMPTY_USER } from '@/shared/constants'
import { defineComponent } from 'vue'

interface CoachData {
  coach: User|NonNullable<unknown>,
}
export default defineComponent({
  name: 'CoachDetails',
  data ():CoachData {
    return {
      coach: EMPTY_USER
    }
  },
  async mounted () {
    await this.$store.dispatch('coachesModule/getCoach', this.$route.params.id)
    this.$data.coach = this.$store.state.coachesModule.coachProfile
  },
  methods: {
    async connectWithCoach () {
      await this.$store.dispatch('coachesModule/connectWithCoach', (this.$data.coach as User).id)
    }
  },
  computed: {
    age () {
      return this.$store.getters['coachesModule/age']
    }
  }
})
</script>

<style scoped lang="less">

</style>
