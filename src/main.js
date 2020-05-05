import Vue from 'vue'

// Importing Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

import App from './App.vue'
import router from './router'
import store from './store'

// Importing components for leaflet map
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Importing echarts plugin
import '@/plugins/apexcharts'

import './assets/scss/index.scss'

Vue.use(VueMaterial)

// To resolve issues with the marker
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
