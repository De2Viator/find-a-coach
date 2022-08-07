<template>
<the-navigation>
<the-header></the-header>
</the-navigation>
<router-view />
</template>

<script lang="ts">
import TheHeader from './components/ui/TheHeader.vue'
import TheNavigation from './components/ui/TheNavigation.vue'

export default {
  components: {
    TheHeader,
    TheNavigation
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
  font-family: Work-Sans;
}
</style>
