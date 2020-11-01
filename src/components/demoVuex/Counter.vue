<template>
  <div class="counter">
    <button class="btn btn-danger" @click="increment()">Increment</button>
    <button class="btn btn-success" @click="asyncDecrement()">Decrement</button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions(['increment', 'asyncDecrement'])
    // ...mapMutations(['decrement'])
  }
}
</script>

<style>

</style>
