export default {
  SAVE_DATA (state, countriesData) {
    state.covidData = countriesData
  },

  SAVE_TOTAL_DATA (state, totalData) {
    state.totalConfirmedData = totalData
  }
}
