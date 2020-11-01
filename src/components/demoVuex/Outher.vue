<template>
  <div class="result">
    <p>This is result: {{ result }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    result: function () {
      return this.$store.state.result
    }
  }
}
</script>

<style>

</style>
