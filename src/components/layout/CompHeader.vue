<template>
  <div class="header">
    <nav class="nav justify-content-center">
      <router-link tag="a" class="nav-link" to="/" active-class="active" exact>Home</router-link>
      <router-link tag="a" class="nav-link" to="/user" active-class="active">User</router-link>
      <router-link tag="a" class="nav-link disabled" to="avatar" active-class="active">Avatar</router-link>
    </nav>
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
  .active {
    color: red;
  }
</style>
