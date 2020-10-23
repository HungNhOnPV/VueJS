<template>
  <div id="app">
    <comp-header :title="title" @handleChangeTitle="handleChangeTitle"/>
    <comp-avatar />
    <router-view/>
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from './components/CompHeader'
import CompFooter from './components/CompFooter'
import CompAvatar from './components/CompAvatar'

export default {
  name: 'App',
  data () {
    return {
      title: 'Hello Header Vue'
    }
  },
  components: {
    CompHeader,
    CompFooter,
    CompAvatar
  },
  methods: {
    handleChangeTitle: function (e) {
      this.title = e.title
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
