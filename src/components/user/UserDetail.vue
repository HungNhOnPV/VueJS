<template>
  <div class="user__detail">
    <h1>User Details</h1>
    <p>User Id: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'user-default',
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>
