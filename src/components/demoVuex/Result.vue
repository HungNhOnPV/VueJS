<template>
  <div class="result">
    <p>This is result: {{ result }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    // eslint-disable-next-line standard/object-curly-even-spacing
    result: { type: Number, default: 0}
  }
}
</script>

<style>

</style>
