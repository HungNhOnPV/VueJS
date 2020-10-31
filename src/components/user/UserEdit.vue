<template>
  <div class="user__edit container">
    <button class="btn btn-danger mt-3" @click="() => { status = false }">Somthing</button>
    <h1>User Edit</h1>
    <ul class="list-group">
      <li class="list-group-item">
        Locate: {{ $route.query.locate}}
      </li>
      <li class="list-group-item">
        Brower: {{ $route.query.brower}}
      </li>
    </ul>
    <div :style="{height: 700 + 'px'}"></div>
    <h1 id="hash-fragment">Hash Fragments</h1>
    <div :style="{height: 700 + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'user-edit',
  data () {
    return {
      status: true
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.status) {
      next()
    } else {
      if (confirm('Are u sure? Any data will not save!!!')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>

<style>

</style>
