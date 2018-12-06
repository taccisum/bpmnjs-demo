<template>
  <div id="app">
    <router-link v-if="show" to="/">首页</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    show () {
      return this.$store.state.show
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
