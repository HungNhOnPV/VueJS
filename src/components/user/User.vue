<template>
  <div class="user">
    <h1>User</h1>
    <button class="btn btn-danger" @click="backHome()">Back To Home</button>
    <button class="btn btn-warning" @click="goUserDetails()">Go To Details</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {}
  },
  methods: {
    backHome: function () {
      this.$router.push('/')
    },
    goUserDetails: function () {
      this.$router.push('/user/1')
    }
  }
}
</script>

<style>

</style>
