const Vue = require('vue')
const Draggie = require('../vue-draggie.src.js')
import App from './App'

Vue.use(Draggie, {effect: 'move', start: 'start', enter: 'enter'})

var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
