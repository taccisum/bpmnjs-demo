<template>
  <div class="hello">
    <img id="logo" src="../assets/logo.png"/>
    <h1>{{ title }}</h1>
    <h2>{{ prompt }}</h2>
    <ul>
      <li>
        <label>getting start: </label>
        <router-link to="/simple-viewer">simple viewer</router-link>
        <router-link to="/simple-modeler">simple model</router-link>
        <router-link to="/save">save</router-link>
      </li>
      <li>
        <label>plugins: </label>
        <router-link to="/properties_panel">properties panel</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title: 'Welcome to bpmn.js Demo App',
      prompt: '选择你要查看的demo'
    }
  },
  created () {
    this.$store.dispatch('hide_home')
  },
  destroyed () {
    this.$store.dispatch('reset_home')
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
#logo {
  margin-bottom: 80px;
}
</style>
