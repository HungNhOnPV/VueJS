<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'comp-header',
  data () {
    return {
      title: 'Header'
    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>
