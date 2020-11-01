<template>
  <div class="counter">
    <button class="btn btn-danger" @click="increment()">Increment</button>
    <button class="btn btn-success" @click="decrement()">Decrement</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    increment: function () {
      this.$store.state.result++
    },
    decrement: function () {
      this.$store.state.result--
    }
  }
}
</script>

<style>

</style>
