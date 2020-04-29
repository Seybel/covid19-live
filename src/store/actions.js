import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  loadData ({ commit }) {
    Vue.axios.get('https://corona.lmao.ninja/v2/countries')
      .then(response => {
        // console.log(response.data)
        const result = response.data
        commit('SAVE_DATA', result)
      }).catch(error => {
        console.log(`API: ${error}`)
      })
  }
}
