import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { 
    faReply, faCircleUser, faPenToSquare, faBookOpen
} from "@fortawesome/free-solid-svg-icons"

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faReply, faCircleUser, faPenToSquare, faBookOpen)

// import "D:/Node.js/node_global/node_modules/font-awesome/css/font-awesome.min.css"

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
