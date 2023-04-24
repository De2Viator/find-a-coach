<template>
  <li class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full avatar" :src="coach.avatar" :alt="coach.name">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ coach.name }}</div>
      <p class="text-gray-700 text-base">
        {{ coach.description }}
      </p>
    </div>
    <h3 class="text-center font-bold">Wage: {{coach.wage}}$</h3>
    <router-link :to="'/coach-details/'+coach.id">
      <div class="flex justify-center w-full">
        <button
          class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-11/12 flex items-center justify-center"
        >
          View
        </button>
      </div>
    </router-link>
    <div class="px-6 pt-4 pb-2">
      <span :key="i" v-for="(subject, i) of coach.subjects" class="inline-block bg-gray-200 rounded-full px-3 py-1
      text-sm font-semibold text-gray-700 mr-2 mb-2">{{subject}}</span>
    </div>
  </li>
</template>

<script lang="ts">
import { Coach } from '@/models/coach'
import { PropType } from 'vue'
import { nanoid } from 'nanoid'

export default {
  name: 'CoachesItem',
  methods: { nanoid },
  props: {
    coach: {
      type: Object as PropType<Coach>,
      required: true
    }
  },
  mounted () {
    console.log(2)
  }
}
</script>

<style scoped lang="less">
.avatar {
  max-height: 250px;
  object-fit: cover;
}
</style>
