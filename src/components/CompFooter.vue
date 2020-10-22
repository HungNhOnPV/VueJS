<template>
  <div class="footer">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'comp-footer',
  data () {
    return {
      title: 'Footer'
    }
  }
}
</script>

<style>
  .footer {
    color: #e6e6;
  }
</style>
