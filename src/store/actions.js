import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  // loadData ({ commit }) {
  //   Vue.axios.get('https://corona.lmao.ninja/v2/countries')
  //     .then(response => {
  //       const result = response.data
  //       commit('SAVE_DATA', result)
  //     }).catch(error => {
  //       console.log(`API: ${error}`)
  //     })
  // },

  // loadCountriesData ({ commit }) {
  //   Vue.axios.get('https://corona.lmao.ninja/v2/countries')
  //     .then(response => {
  //       const result = response.data
  //       commit('SAVE_DATA', result)
  //     }).catch(error => {
  //       console.log(`API: ${error}`)
  //     })
  // },

  async loadCountriesData ({ commit }) {
    const { data } = await axios.get('https://corona.lmao.ninja/v2/countries')
    const countriesData = data
    commit('SAVE_DATA', countriesData)
    return data
  },

  async loadTotalData ({ commit }) {
    const { data } = await axios.get('https://corona.lmao.ninja/v2/all')
    const totalData = data
    commit('SAVE_TOTAL_DATA', totalData)
    return data
  }
}
