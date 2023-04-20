<template>
  <div class="">
    <div class="p-8 bg-white mt-24">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="grid grid-cols-1 text-center order-last md:order-first mt-20 md:mt-0">
          <div>
            <p class="font-bold text-gray-700 text-xl">22</p>
            <p class="text-gray-400">Students</p>
          </div>
        </div>
        <!--
         <div class="relative">
          <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        -->
        <div class="relative">
          <img class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
        </div>

        <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
          <button
            class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Request
          </button>
        </div>
      </div>

      <div class="mt-20 text-center pb-12">
        <h1 class="text-4xl font-medium text-gray-700">Jessica Jones, <span class="font-light text-gray-500">27</span></h1>
        <p class="font-light text-gray-600 mt-3">Bucharest, Romania</p>

        <p class="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
        <p class="mt-2 text-gray-500">University of Computer Science</p>
      </div>
      <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
              An artist of considerable range, Jenna the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes,
              performs and records all of his own music, giving it a
              warm, intimate feel with a solid groove structure. An
              artist of considerable range.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoachDetails'
}
</script>

<style scoped>

</style>
