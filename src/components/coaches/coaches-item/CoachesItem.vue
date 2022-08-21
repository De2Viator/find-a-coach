<template>
  <div class="mb-5 mt-5 bg-white shadow-lg shadow-black-500 rounded-2xl flex">
    <div>
      <img class="rounded-l-2xl coach-image" :src="coach.image" :alt="coach.name + coach.description">
    </div>
    <div class="coach-info flex flex-col">
      <div class="flex justify-between mb-5">
        <p>{{coach.name}}</p>
        <div class="rounded-2xl">
          <p>{{coach.subject}}</p>
        </div>
      </div>
      <div>
        <p class="coach-description">{{coach.description}}</p>
      </div>
      <div>
        <p class="bottom-0">${{coach.price}} per hour</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coach-image {
  width: 350px;
  height: 200px;
}

.coach-info {
  width: 100%;
  margin-left: 20px;
  margin-right: 15px;
}

@media (max-width:530px) {
  .coach-image {
    display: none;
  }
}
</style>

<script lang="ts">
//TODO MAKE DESIGN FOR PRICE
import { PropType } from '@vue/runtime-core'
import { Coach } from '@/models/coach'
export default {
  props: {
    coach: {
      type: Object as PropType<Coach>
    }
  }
}
</script>
