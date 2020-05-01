export default {
  getSortedData (state) {
    const getCovidData = state.covidData
    const sortByCases = getCovidData.sort((a, b) => {
      return b.cases - a.cases
    })
    return sortByCases
  }
}
