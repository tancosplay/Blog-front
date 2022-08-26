import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { 
    faReply, faCircleUser, faPenToSquare, faBookOpen, faFilePen
} from "@fortawesome/free-solid-svg-icons"
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(mavonEditor)

library.add(faReply, faCircleUser, faPenToSquare, faBookOpen, faFilePen)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
