<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RequestedUser } from '@/components/layout/children/requests/models/types'
import { calculateAge } from '@/shared/helpers/age'

export default defineComponent({
  props: {
    requestedUser: {
      type: Object as PropType<RequestedUser>,
      required: true
    }
  },
  computed: {
    formattedDescription () {
      if (this.requestedUser.details.length > 500) return `${this.requestedUser.details.slice(0, 500)}...`
      return this.requestedUser.details
    },
    userInfo () {
      return `${this.requestedUser.name} ${this.requestedUser.surname}, ${calculateAge(this.requestedUser.birthDay)}`
    }
  },
  methods: {
    deleteRequestedStudent () {
      this.$store.dispatch('requestsModule/deleteRequestedUser', this.requestedUser.id)
    },
    takeStudent () {
      this.$store.dispatch('requestsModule/takeStudent', this.requestedUser.id)
    }
  }
})
</script>

<template>
  <li class="w-full mt-4">
    <div
      type="button"
      class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
      <div class="user">
        <div class="info">
          <div class="avatar-wrp">
            <img class="avatar" :src="requestedUser.avatar" :alt="userInfo">
            <p class="text-center">{{userInfo}}</p>
          </div>
          <div class="description">
            <p>{{formattedDescription}}</p>
          </div>
        </div>
        <div class="buttons">
          <button @click="takeStudent" data-modal-hide="staticModal" type="button" class="text-white mr-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Accept</button>
          <button @click="deleteRequestedStudent" data-modal-hide="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>
.avatar-wrp {
  min-width: 200px;
}
.avatar {
  width: 100%;
  height: 200px;
}
.buttons {
  display: flex;
}
.user {
  display: flex;
  justify-content: space-between;
}

button {
  height: fit-content;
  align-self: center;
}
.description {
  margin:0 15px;
}
.info {
  display: flex;
}
@media (max-width: 1021px) {
  .info {
    flex-wrap: wrap;
    justify-content: center;
  }
  .user {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
