import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add font awesome icon component */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faBars,faTwitter, faInstagram)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
