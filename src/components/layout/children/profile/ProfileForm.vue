<template>
  <div class="relative mb-4 mt-4 flex flex-wrap items-stretch">
    <span
      class="flex items-center whitespace-nowrap rounded-l border border-solid border-neutral-300 px-3
      py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600
      dark:text-neutral-200 dark:placeholder:text-neutral-200 w-full md:w-3/12 md:border-r-0 mb-4 md:mb-0"
      >First and last name</span
    >
    <input
      type="text"
      v-model="this.$data.firstName"
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
      v-model="this.$data.lastName"
      placeholder="Last name"
      aria-label="Last name"
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
          v-for="(country,index) in $store.state.geoModule.countries"
          @click="console.log('click')"
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
        type="number"
        v-model="this.$data.wage"
        placeholder="Wage per hour"
        min="0.01"
        class="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        aria-label="Amount (to the nearest dollar)"
      />
      <span
        class="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
        >.00</span
      >
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

  <div class="relative flex flex-wrap items-stretch mb-4">
    <span
      class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
      >Short Description</span
    >
    <textarea
      v-model="this.$data.description"
      rows="4"
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
      v-model="this.$data.details"
      class="relative resize-none m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      aria-label="detailed description"
    >
    </textarea>
  </div>

  <div class="flex justify-center">
    <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
      <input
        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
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
        value="student" />
      <label
        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
        for="inlineRadio2"
      >I'm a student</label
      >
    </div>
  </div>

  <div class="mb-3">
    <label
      for="formFile"
      class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >Avatar</label
    >
    <input
      @change="showAvatar($event)"
      class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid
      border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700
      transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden
      file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100
      file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150
      file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
      hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary
      focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700
      dark:file:text-neutral-100 dark:focus:border-primary"
      type="file"
      id="formFile"
    />
  </div>

  <img v-if="this.$data.avatarPreview" :src="this.$data.avatarPreview" alt="Current profile avatar">
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
      subjects: [],
      avatarPreview: '',
      isEdit: false
    }
  },
  methods: {
    showAvatar (event: Event) {
      const file = ((event.target as HTMLInputElement)?.files as FileList)[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        (this.$data.avatarPreview as string | ArrayBuffer | null) = reader.result
      }
    },
    async updateCities (city: string) {
      await this.$store.dispatch('geoModule/getCities', city)
    }
  },
  async mounted () {
    initTE({ ChipsInput, Datepicker, Input })
    const subjects = new ChipsInput(this.$refs.subjects, {
      initialValues: [],
      labelText: 'Subjects'
    })
    const experience = new ChipsInput(this.$refs.experience, {
      initialValues: [],
      labelText: 'Experience'
    })
    const datePicker = new Datepicker(this.$refs.datePicker, {
      disableFuture: true
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
    if (this.$route.path === '/auth') this.$data.isEdit = true
  }
})
</script>

<style scoped>
.resize-none {
  resize: none;
}
</style>
