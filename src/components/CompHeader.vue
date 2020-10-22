<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'comp-header',
  props: {
    title: String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>
