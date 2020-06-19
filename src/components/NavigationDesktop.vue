<template>
  <div>
    <div class="main-nav-container md-xsmall-hide">
      <md-content class="main-nav md-scrollbar md-theme-default">
        <div class="main-nav-content">
            <!-- <div v-if="sortCases.length > 0">
              <div class="main-nav-level" v-for="(caseObj, index) in sortCases" :key="index">
                <md-list id="countryList">
                  <md-list-item :to="{name: 'CountryDetails', params: {country: sortCases[index].country,
                  cases: sortCases[index].cases,
                  deaths: sortCases[index].deaths,
                  recovered: sortCases[index].recovered,
                  tests: sortCases[index].tests,
                  active:sortCases[index].active}}">
                    <md-list-item-text>
                      <span id="cd-no" :class="[`cases${sortCases.indexOf(caseObj)}`]">0</span><span id="cd-name"> {{ caseObj.country }}</span>
                      <p>Deaths: <span id="d-no" :class="[`death${sortCases.indexOf(caseObj)}`]">0</span></p>
                      <span>Recovered: <span id="r-no" :class="[`confirmed${sortCases.indexOf(caseObj)}`]">0</span></span>
                    </md-list-item-text>
                  </md-list-item>
                </md-list>
              </div>
            </div> -->

          <div class="main-nav-level" v-for="(getSortedDataItem, index) in getSortedData" :key="index">
            <div v-if="getSortedData. length" class="country-details">
              <md-list id="countryList">
                <md-list-item :to="{name: 'CountryDetails', params: {country: getSortedData[index].country,
                  cases: getSortedData[index].cases,
                  deaths: getSortedData[index].deaths,
                  recovered: getSortedData[index].recovered,
                  tests: getSortedData[index].tests,
                  active:getSortedData[index].active}}">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">{{ new Intl.NumberFormat().format(getSortedDataItem.cases) }} </span><span class="cd-name">{{ getSortedDataItem.country }}</span></span>
                    <span>Deaths: {{ new Intl.NumberFormat().format(getSortedDataItem.deaths) }}</span>
                    <span>Recovered: {{ new Intl.NumberFormat().format(getSortedDataItem.recovered) }}</span>
                  </div>
                </md-list-item>
              </md-list>
            </div>
          </div>
        </div>
      </md-content>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import numeral from 'numeral'
// import Odometer from 'odometer'
// import { eventBus } from '@/main'
export default {
  data () {
    return {
      sortCases: []
    }
  },
  computed: {
    ...mapState([
      'covidData'
    ]),
    ...mapGetters([
      'getSortedData'
    ])
  }
  // methods: {
  //   async loadCountry () {
  //     try {
  //       const getCovidData = await this.loadCountriesData()
  //       const sortByCases = getCovidData.sort((a, b) => {
  //         return b.cases - a.cases
  //       })
  //       // console.log(sortByCases)
  //       // Pass the sorted object data to this.sortCases
  //       this.sortCases = sortByCases
  //       // console.log(this.sortCases[0].cases)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   },
  //   loopCases () {
  //     const cases = this.sortCases
  //     // case01`
  //     cases.map(covidDataObj => {
  //       const casesClass = document.querySelector(`.cases${cases.indexOf(covidDataObj)}`)
  //       const deathClass = document.querySelector(`.death${cases.indexOf(covidDataObj)}`)
  //       const recoveredClass = document.querySelector(`.confirmed${cases.indexOf(covidDataObj)}`)

  //       const confirmedCases = new Odometer({
  //         el: casesClass,
  //         animation: 'count',
  //         duration: 2000
  //       })
  //       const deaths = new Odometer({
  //         el: deathClass,
  //         animation: 'count',
  //         duration: 2000
  //       })
  //       const recovered = new Odometer({
  //         el: recoveredClass,
  //         animation: 'count',
  //         duration: 2000
  //       })
  //       confirmedCases.update(covidDataObj.cases)
  //       deaths.update(covidDataObj.deaths)
  //       recovered.update(covidDataObj.recovered)
  //     })
  //   },
  //   ...mapActions([
  //     'loadCountriesData'
  //   ])
  // },
  // filters: {
  //   formatNumber: function (value) {
  //     return numeral(value).format('0,0') // Format number
  //   }
  // },
  // created () {
  //   this.loadCountry()
  // },
  // updated () {
  //   this.loopCases()
  // }
}
</script>

<style lang="scss" scoped>
.md-content {
    max-width: 308px;
    max-height: 100vh;
    overflow: auto;
    display: block;
    // padding: 16px;
}

.main-nav {
    width: 316px;
    // padding: 24px 16px 112px;
    padding-top: 24px;
    padding-bottom: 0px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    transition: .3s cubic-bezier(.4,0,.2,1);
    transition-property: top;
}

.main-nav-level {
    margin-bottom: 16px;
}

.md-list {
  margin: -13px 0 5px 0;
}

.md-list-item-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

    // cd - country-details
  span.cd-no {
      color: #d32f2f;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
  }

  span.cd-name {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
  }
}
</style>
