<template>
  <div class="hello">
    <img id="logo" src="../assets/logo.png"/>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/simple-viewer">simple viewer</router-link>
        <router-link to="/simple-modeler">simple model</router-link>
      </li>
      <li>
        <router-link to="/simple-modeler">simple model</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to bpmn.js Demo App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
