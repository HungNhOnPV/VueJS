<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <button @click="handleChangeTitle">Change Title</button>
  </div>
</template>

<script>
export default {
  name: 'comp-header',
  props: {
    title: String
  },
  data () {
    return {
    }
  },
  methods: {
    handleChangeTitle: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$emit('handleChangeTitle', { title: 'Học Lập Trình Font End'})
    }
  }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>
