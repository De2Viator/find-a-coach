<template>
  <div
    class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <a data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {{ coach.name }}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {{ coach.description }}
      </p>
      <button
        class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
      >
        View
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Coach } from '@/models/coach'
import { PropType } from '@vue/runtime-core'

export default {
  name: 'CoachesItem',
  props: {
    coach: {
      type: Object as PropType<Coach>,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
