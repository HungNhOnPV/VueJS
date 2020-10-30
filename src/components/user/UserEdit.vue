<template>
  <div class="user__edit container">
    <h1>User Edit</h1>
    <ul class="list-group">
      <li class="list-group-item">
        Locate: {{ $route.query.locate}}
      </li>
      <li class="list-group-item">
        Brower: {{ $route.query.brower}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
