<template>
  <div class="result">
    <p>This is result: {{ result }}</p>
    <p>This is ten result: {{ tenResult }}</p>
    <p>This is ten result: {{ nameResult }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    result: function () {
      return this.$store.state.result
    },
    tenResult: function () {
      return this.$store.getters.tenResult
    },
    nameResult: function () {
      return this.$store.getters.nameResult
    }
  }
}
</script>

<style>

</style>
