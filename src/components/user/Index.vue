<template>
  <div class="user__index container">
    <h1>Please select on user to manage:</h1>
    <ul class="list-group">
      <router-link tag="li" to="user/1" class="list-group-item" :style="{cursor: 'pointer'}">
        User 01
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
