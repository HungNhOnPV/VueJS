<template>
  <div id="app">
    <comp-header :title="title" @handleChangeTitle="handleChangeTitle"/>
    <comp-avatar>
      <div class="demo__slot">Demo slot</div>
    </comp-avatar>
    <router-view/>
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from './components/CompHeader'
import CompFooter from './components/CompFooter'
import CompAvatar from './components/CompAvatar'

export default {
  name: 'App',
  data () {
    return {
      title: 'Hello Header Vue'
    }
  },
  components: {
    CompHeader,
    CompFooter,
    CompAvatar
  },
  methods: {
    handleChangeTitle: function (e) {
      this.title = e.title
    }
  },
  // Chạy trước khi tạo dữ liệu
  beforeCreate () {
    console.log('beforeCreate')
  },
  // Chạy sau khi tạo dự liệu
  created () {
    // Thường gọi api tại đây
    console.log('created')
  },
  beforeMount () {
    console.lgo('beforeMount')
  },
  // Chạy sau khi tải xong html
  mounted () {
    // Sử dụng jquery tại đây
    console.log('mounted')
  },
  // Chạy khi có sự thay đổi về dữ liệu
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
