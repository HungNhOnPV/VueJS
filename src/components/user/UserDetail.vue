<template>
  <div class="user__detail">
    <h1>User Details</h1>
    <p>User Id: {{ id }}</p>
    <router-link tag="button" :to="link" class="btn btn-warning">Edit User</router-link>
  </div>
</template>

<script>
export default {
  name: 'user-default',
  data () {
    return {
      id: this.$route.params.id,
      link: {
        name: 'userEdit',
        params: {
          id: this.id
        },
        query: {
          locate: 'vi', brower: 'chorme'
        },
        hash: '#hash-fragment'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      next()
    } else {
      next(false)
    }
  },
  watch: {
    '$route': function (to, from) {
      this.id = to.params.id
    }
  }
}
</script>

<style>

</style>
