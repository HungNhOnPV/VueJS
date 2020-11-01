<template>
  <div class="counter">
    <button class="btn btn-danger" @click="increment()">Increment</button>
    <button class="btn btn-success" @click="decrement()">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    increment: function () {
      this.$store.commit('incrementOption', 30)
    },
    ...mapMutations(['decrement'])
  }
}
</script>

<style>

</style>
