export default {
  SAVE_DATA (state, result) {
    state.covidData = result
  },

  SAVE_TOTAL_DATA (state, totalData) {
    state.totalConfirmedData = totalData
  }
}
