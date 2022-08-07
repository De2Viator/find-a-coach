<template>
  <div>
    <slot></slot>
    <nav>
      <router-link to="/coaches">Coaches</router-link>
      <router-link to="/requests">Requests</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
div {
  height: 7vh;
  background-color: rgb(124, 18, 181);
}

nav {
  display: flex;
  justify-content: space-around;
}
</style>
