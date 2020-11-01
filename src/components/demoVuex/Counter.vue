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
      this.$emit('increment', 1)
    },
    decrement: function () {
      this.$emit('decrement', -1)
    }
  }
}
</script>

<style>

</style>
