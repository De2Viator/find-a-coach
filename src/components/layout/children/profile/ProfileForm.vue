<template>
  <form class="pb-5" @submit.prevent>
    <div class="relative mb-4 mt-4 flex flex-wrap items-stretch">
    <span
      class="flex items-center whitespace-nowrap rounded-l border border-solid border-neutral-300 px-3
      py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600
      dark:text-neutral-200 dark:placeholder:text-neutral-200 w-full md:w-3/12 md:border-r-0 mb-4 md:mb-0"
    >First and last name</span
    >
      <input
        type="text"
        required
        v-model.lazy="this.$data.firstName"
        aria-label="First name"
        class="rounded-0 relative m-0 block w-full min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent
      bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none
      transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700
      focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600
      dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary sm:w-[1px] mb-4 md:mb-0"
        placeholder="First name"
      />
      <input
        type="text"
        v-model.lazy="this.$data.lastName"
        placeholder="Last name"
        aria-label="Last name"
        required
        class="relative m-0 -ml-px block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent
      bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out
      focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600
      dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      />
    </div>
    <div class="flex flex-wrap justify-between w-full mb-4">
      <div class="w-full mb-4 md:w-5/12 md:mb-0">
        <select data-te-select-init ref="countrySelect" v-model="this.$data.country">
          <option
            v-for="(country,index) in savedCountries"
            :value="country.name"
            :key="index"
            :data-te-select-icon="country.flag"
          >
            {{ country.name }}
          </option>
        </select>
      </div>
      <div class="w-full md:w-5/12">
        <select data-te-select-init ref="citySelect" class="w-6/12" v-model="this.$data.city">
          <option
            v-for="(city,index) in this.$store.state.geoModule.cities"
            :value="city"
            :key="index"
          >
            {{ city }}
          </option>
        </select>
      </div>
    </div>

    <div class="w-full flex justify-between flex-wrap">
      <div
        class="relative mb-3 w-full md:w-2/3"
        ref="datePicker"
        data-te-input-wrapper-init
      >
        <input
          type="text"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Select a date"
          id="datePicker"
        />
        <label
          for="datePicker"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Select a date</label
        >
      </div>
      <div class="relative mb-4 flex flex-wrap items-stretch w-full md:w-1/4">
      <span
        class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
      >$</span
      >
        <input
          v-model.lazy="this.$data.wage"
          type="text"
          placeholder="Wage per hour"
          class="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          aria-label="Amount (to the nearest dollar)"
          pattern="[0-9]*\.[0-9]*"
        />
      </div>
    </div>

    <div
      id="subjects"
      data-te-chips-initial
      ref="subjects"
      class="mb-4 min-h-[45px] border-none pb-0 shadow-none outline-none transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:cursor-text"
    ></div>

    <div
      id="experience"
      data-te-chips-initial
      ref="experience"
      class="mb-4 min-h-[45px] border-none pb-0 shadow-none outline-none transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:cursor-text"
    ></div>

    <div class="col-12" v-if="!this.$data.isEdit">
      <div>
        <input type="email" v-model.lazy="this.$data.email" name="email" id="email" class="border border-gray-300
      text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
      dark:bg-gray-700 dark:border-gray-600 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="name@company.com" required>
      </div>
      <div>
        <input required type="password" v-model.lazy="this.$data.password" name="password" id="password" placeholder="••••••••••" class="border border-gray-300
      text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
      dark:focus:border-blue-500 mb-5">
      </div>

    </div>
    <div class="relative flex flex-wrap items-stretch mb-4">
    <span
      class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
    >Short Description</span
    >
      <textarea
        rows="4"
        v-model.lazy="this.$data.description"
        required
        class="relative resize-none m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        aria-label="short description"
      ></textarea>
    </div>

    <div class="relative flex flex-wrap items-stretch mb-4">
    <span
      class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
    >Detailed description</span
    >
      <textarea
        rows="8"
        required
        v-model.lazy="this.$data.details"
        class="relative resize-none m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        aria-label="detailed description"
      >
    </textarea>
    </div>

    <div class="mb-3">
      <label
        for="avatar"
        class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >Avatar</label
      >
      <div class="flex rounded-md shadow-sm">
        <div class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <span class="text-sm text-gray-500 dark:text-gray-400">http://</span>
        </div>
        <input v-model.lazy="this.$data.avatar" required type="text" name="avatar" id="avatar" class="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md
        text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
        dark:border-gray-700 dark:text-gray-400" placeholder="www.example.com">
      </div>
    </div>

    <div class="flex justify-center" v-if="!this.$data.isEdit">
      <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
        <input
          class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          @change="changeMode(false)"
          value="teacher" />
        <label
          class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
          for="inlineRadio1"
        >I'm a teacher</label
        >
      </div>

      <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
        <input
          class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          @change="changeMode(true)"
          value="student" />
        <label
          class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
          for="inlineRadio2"
        >I'm a student</label
        >
      </div>
    </div>
    <div class="flex justify-end">
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        @click="submit"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal
               text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out
               hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
               focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
               focus:outline-none focus:ring-0 active:bg-primary-700
               active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
               dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
               dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
               dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
               dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] w-4/12 sm:w-2/12">
        Submit
      </button>
    </div>
  </form>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChipsInput, initTE, Datepicker, Input, Select } from 'tw-elements'
import { ProfileFormData } from '@/components/layout/children/profile/types'

export default defineComponent({
  name: 'ProfileForm',
  data (): ProfileFormData {
    return {
      avatar: '',
      description: '',
      details: '',
      firstName: '',
      lastName: '',
      wage: 0,
      country: 'Ukraine',
      city: 'Kiev',
      subjects: {},
      experience: {},
      isEdit: false,
      isStudent: true,
      email: '',
      password: '',
      birthDaySelector: {}
    }
  },
  methods: {
    async updateCities (city: string) {
      await this.$store.dispatch('geoModule/getCities', city)
    },
    changeMode (mode: boolean) {
      this.isStudent = mode
    },
    submit () {
      const subjects = (this.subjects.allChips as HTMLElement[]).map(e => e.innerText)
      const experience = (this.experience.allChips as HTMLElement[]).map(e => e.innerText)
      const birthDay = new Date(this.birthDaySelector._selectedDate || this.birthDaySelector._activeDate).toISOString()
      if (!subjects.length || !experience.length) return
      if (this.$route.path === '/registration') {
        this.$store.dispatch('authModule/registration', {
          avatar: this.avatar,
          email: this.email,
          password: this.password,
          name: this.firstName,
          surname: this.lastName,
          wage: this.wage,
          description: this.description,
          details: this.details,
          country: this.country,
          city: this.city,
          isStudent: this.isStudent,
          studentsCount: 0,
          birthDay,
          subjects,
          experience
        })
      } else {
        if (!birthDay) return
        const user = {
          birthDay,
          subjects,
          experience,
          description: this.description,
          details: this.details,
          avatar: this.avatar,
          name: this.firstName,
          surname: this.lastName,
          isStudent: this.isStudent,
          city: this.city,
          country: this.country,
          wage: this.wage
        }
        console.log(user)
        this.$store.state.userModule.user = user
        this.$store.dispatch('userModule/updateUser')
      }
    }
  },
  async mounted () {
    initTE({ ChipsInput, Datepicker, Input })
    let subjectValues:{tag: string}[] = []
    let experienceValues:{tag: string}[] = []
    let startDate = new Date().toISOString()
    if (this.$route.path !== '/registration') {
      this.$data.isEdit = true
      await this.$store.dispatch('userModule/getUser')
      this.avatar = this.$store.state.userModule.user.avatar
      this.firstName = this.$store.state.userModule.user.name
      this.lastName = this.$store.state.userModule.user.surname
      this.details = this.$store.state.userModule.user.details
      this.description = this.$store.state.userModule.user.description
      this.wage = this.$store.state.userModule.user.wage
      this.country = this.$store.state.userModule.user.country
      this.city = this.$store.state.userModule.user.city
      subjectValues = this.$store.state.userModule.user.subjects.map(el => {
        return { tag: el }
      })
      experienceValues = this.$store.state.userModule.user.experience.map(el => {
        return { tag: el }
      })
      startDate = new Date(this.$store.state.userModule.user.birthDay).toISOString()
    }
    this.birthDaySelector = new Datepicker(this.$refs.datePicker, {
      disableFuture: true,
      startDate
    })
    this.subjects = new ChipsInput(this.$refs.subjects, {
      initialValues: subjectValues,
      labelText: 'Subjects'
    })
    this.experience = new ChipsInput(this.$refs.experience, {
      initialValues: experienceValues,
      labelText: 'Experience'
    })
    await this.$store.dispatch('geoModule/getCountries')
    await this.updateCities(this.$data.country)
    const countrySelectEl = this.$refs.countrySelect;
    (countrySelectEl as HTMLSelectElement).addEventListener('optionSelect.te.select', (e) => {
      this.updateCities((e as unknown as {value: string}).value)
    })
    const countrySelector = new Select(countrySelectEl, {
      selectVisibleOptions: 30,
      selectFilter: true
    })
    const citySelector = new Select(this.$refs.citySelect, {
      selectFilter: true
    })
  },
  computed: {
    savedCountries () {
      return this.$store.state.geoModule.countries
    }
  }
})
</script>

<style scoped>
.resize-none {
  resize: none;
}
</style>
