<template>
  <div class="notFound">
    <h1>404 Not Found</h1>
    <router-link tag="button" to="/" class="btn btn-warning">Back To Home</router-link>
    <button @click="() => {$router.push({name: 'helloWorld'})}" class="btn btn-warning">Back To Home</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
