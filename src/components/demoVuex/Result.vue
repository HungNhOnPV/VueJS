<template>
  <div class="result">
    <p>This is result: {{ result }}</p>
    <p>This is ten result: {{ tenResult }}</p>
    <p>This is ten result: {{ nameResult }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    result: function () {
      return this.$store.state.result
    },
    ...mapGetters([ 'tenResult', 'nameResult' ])
  }
}
</script>

<style>

</style>
