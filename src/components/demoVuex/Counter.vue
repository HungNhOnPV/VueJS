<template>
  <div class="counter container">
    <button class="btn btn-danger" @click="increment()">Increment</button>
    <button class="btn btn-success" @click="asyncDecrement()">Decrement</button>
    <hr>
    <input class="input-group mb-3" type="text" v-model="value" />
    <p>Text input: {{ value }}</p>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    value: {
      get: function () {
        return this.$store.getters.value
      },
      set: function (value) {
        this.$store.dispatch('updateValue', value)
      }
    }
  },
  methods: {
    ...mapActions(['increment', 'asyncDecrement'])
    // ...mapMutations(['decrement'])
  }
}
</script>

<style>

</style>
