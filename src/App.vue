<template>
  <div id="app">
    <router-view name="comp-header" />
    <transition name="slide">
      <router-view/>
    </transition>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="form-group">
            <input class="form-control mt-3 mb-3" type="text" placeholder="Name" v-model="user.name" />
            <input class="form-control mt-3 mb-3" type="email" placeholder="Email" v-model="user.email" />
            <button class="btn btn-block btn-success" type="submit" @click.prevent="submit()">Add User</button>
          </div>
          <input class="form-control mt-3 mb-3" type="text" placeholder="Node" v-model="node" />
          <button class="btn btn-block btn-danger" @click="getUsers()">Show User</button>
          <ul class="list-group mt-3">
            <li class="list-group-item" v-for="(user, index) in users" :key="index">{{ user.name }} - {{ user.email }}</li>
          </ul>
        </div>
      </div>
    </div>
    <counter @increment="increment" @decrement="decrement" />
    <result :result="result" />
    <router-view name="comp-footer" />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// eslint-disable-next-line no-unused-vars
import Counter from './components/demoVuex/Counter'
// eslint-disable-next-line no-unused-vars
import Result from './components/demoVuex/Result'

export default {
  name: 'App',
  data () {
    return {
      title: 'Hello Header Vue',
      user: {
        name: '',
        email: ''
      },
      users: [],
      resource: {},
      node: '',
      result: 0
    }
  },
  components: {
    Counter,
    Result
  },
  methods: {
    increment: function ($event) {
      this.result = this.result + $event
    },
    decrement: function ($event) {
      this.result = this.result + $event
    },
    handleChangeTitle: function (e) {
      this.title = e.title
    },
    submit: function () {
      // this.$http.post('', this.user)
      //   .then(response => {
      //     console.log(response)
      //     this.user.name = ''
      //     this.user.email = ''
      //   }, error => {
      //     console.log(error)
      //   })
      // this.resource.save({}, this.user)
      this.resource.createdItem(this.user)
      this.user.name = ''
      this.user.email = ''
    },
    getUsers: function () {
      this.resource.getNodeData({ node: this.node })
        .then(response => {
          return response.json()
        }, error => {
          console.log(error)
        })
        .then(data => {
          let newArr = []
          for (let key in data) {
            newArr.push(data[key])
          }
          this.users = newArr
        })
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
    const customActions = {
      createdItem: { method: 'POST', url: 'data.json' },
      getNodeData: { method: 'GET' }
    }
    this.resource = this.$resource('{node}.json', {}, customActions)
  },
  beforeMount () {
    console.log('beforeMount')
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

.slide-enter {}

.slide-enter-active {}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(30px);
  }
}

</style>
