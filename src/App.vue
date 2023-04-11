<template>
  <the-layout></the-layout>
</template>

<script lang="ts">
import TheLayout from '@/components/layout/TheLayout.vue'

export default {
  components: {
    TheLayout
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: "Work-Sans";
  src: url(./fonts/Work-Sans/woff2/WorkSans-ExtraLight.woff2) format("woff2");
  src :url(./fonts/Work-Sans/woff/WorkSans-ExtraLight.woff) format("woff");
  font-weight: 300;
}

@font-face {
  font-family: "Work-Sans";
  src: url(./fonts/Work-Sans/woff2/WorkSans-Medium.woff2) format("woff2");
  src :url(./fonts/Work-Sans/woff/WorkSans-Medium.woff) format("woff");
  font-weight: 500;
}

* {
  margin: 0;
  padding: 0;
  font-family: Work-Sans,serif;
}
</style>
