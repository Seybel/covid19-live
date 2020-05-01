import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  loadData ({ commit }) {
    Vue.axios.get('https://corona.lmao.ninja/v2/countries')
      .then(response => {
        const result = response.data
        commit('SAVE_DATA', result)
      }).catch(error => {
        console.log(`API: ${error}`)
      })
  },

  loadTotalData ({ commit }) {
    Vue.axios.get('https://corona.lmao.ninja/v2/all')
      .then(response => {
        const totalData = response.data
        commit('SAVE_TOTAL_DATA', totalData)
      }).catch(error => {
        console.log(`API: ${error}`)
      })
  }
}
