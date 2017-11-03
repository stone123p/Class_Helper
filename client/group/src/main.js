import Vue from 'vue'
import App from './components/App/index.vue'
import store from './store'

window.vue = new Vue({
  el: '#app',
  store,
  components:{
    app:App,
  },
  render: h => h(App)
})
