import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faStackOverflow,
  faGithub,
  faLinkedin,
  faBehance,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faTwitter, faFacebook, faStackOverflow, faGithub, faLinkedin, faBehance, faViber);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
