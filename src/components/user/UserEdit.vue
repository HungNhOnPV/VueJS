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
    <div :style="{height: 700 + 'px'}"></div>
    <h1 id="hash-fragment">Hash Fragments</h1>
    <div :style="{height: 700 + 'px'}"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
