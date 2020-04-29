export default {
  myCompare (state) {
    const sortNumber = state.covidData[0].cases
    return sortNumber
  },
  test (state) {
    const myTest = state.covidData
    const testData = myTest.map(arr => {
      return arr.cases
    })

    console.log(testData)
  }
}
