<template>
  <div class="avatar">
    <button @click="handleAvatar()" class="avatar__btn">Change Avatar</button>
    <input type="file" :style="{display: 'none'}" ref="changeAvatar" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'comp-avatar',
  data () {
    return {}
  },
  methods: {
    handleAvatar: function () {
      this.$refs.changeAvatar.click()
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
  .avatar {
    width: 100%;
    height: 500px;
    border: 2px solid green;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar__btn {
    font-size: 1.2rem;
    padding: 10px 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    transition: all .3s ease;
  }
  .avatar__btn:hover {
    color: #fff;
    background: green;
  }
</style>
