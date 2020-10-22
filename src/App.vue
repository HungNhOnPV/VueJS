<template>
  <div id="app">
    <comp-header />
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import CompHeader from './components/CompHeader'

export default {
  name: 'App',
  components: {
    CompHeader
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
