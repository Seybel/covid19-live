<template>
    <div v-if="options.xaxis.categories.length" class="md-layout">
        <!-- {{ testing.confirmed }} -->
        <!-- <div class="md-layout-row"> -->
            <div class="md-layout-item">
                <div class="chart-inner-wrapper">
                  <!-- <button type="button" @click="updateC">Change data</button> -->
                  <apexchart width="394" height="300" type="area" :options="options" :series="seriesA"></apexchart>
                </div>
            </div>
            <div class="md-layout-item">
                <div class="chart-inner-wrapper2">
                    <apexchart width="394" height="300" type="bar" :options="options" :series="seriesB"></apexchart>
                </div>
            </div>
             <div class="md-layout-item">
                <div class="chart-inner-wrapper3">
                    <apexchart width="394" height="300" type="line" :options="options" :series="seriesC"></apexchart>
                </div>
            </div>
            <div class="md-layout-item">
                <div class="chart-inner-wrapper4">
                    <apexchart width="394" height="300" type="bar" :options="options" :series="seriesD"></apexchart>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
// import VueApexCharts from 'vue-apexcharts'

export default {
  data: () => ({
    testing: [],
    testing2: [],
    testing3: [],
    options: {
      chart: {
        id: 'vuechart-example',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        theme: 'dark'
      },
      xaxis: {
        categories: [],
        labels: {
          show: true,
          style: {
            colors: '#7d7d7d'
          }
        }
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: '#7d7d7d'
          }
        }
      },
      title: {
        text: 'My Charts',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: '#7d7d7d'
        }
      },
      noData: {
        text: 'Loading...',
        align: 'center',
        verticalAlign: 'middle',
        style: {
          color: '#7d7d7d',
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }
      },
      colors: ['#00897b']
    },
    seriesA: [{
      name: 'Total Confirmed Cases',
      data: []
    }],
    seriesB: [{
      name: 'series-2',
      data: [121, 141, 111, 131, 253, 161, 735]
    }],
    seriesC: [{
      name: 'series-2',
      data: [1211, 1141, 5051, 2331, 2653, 161, 335]
    }],
    seriesD: [{
      name: 'series-2',
      data: [121, 141, 111, 131, 253, 161, 735]
    }]
  }),

  // mounted () {
  //   this.updateC()
  // },

  //   // const newData = this.xAxis[0].data.map(() => {
  //   //   return this.testing
  //   // })
  //   const newData = this.options.xaxis.categories.map(() => {
  //     return this.testing
  //   })
  //   return newData
  //   // In the same way, update the series option
  //   // this.xAxis = [{
  //   //   data: newData
  //   // }]
  // },

  mounted () {
    axios.get('https://covidapi.info/api/v1/global/count')
      .then(response => {
        const myObj = response.data.result
        const sliced = Object.keys(myObj).slice(-7).reduce((resultA, key) => {
          resultA[key] = myObj[key]
          return resultA
        }, {})

        // Separate dates from object
        var allDates = sliced
        var reportDates = Object.keys(allDates)
        // console.log(reportDates)

        // push report dates
        this.options.xaxis.categories.push(...reportDates)

        // Separate case, deaths, and recovered
        var allCasesType = sliced
        var CasesType = Object.values(allCasesType)

        var t = CasesType.map((arr) => {
          return arr.confirmed
        })
        console.log(t)
        this.testing2 = CasesType.map((arr) => {
          return arr.deaths
        })
        this.testing3 = CasesType.map((arr) => {
          return arr.recovered
        })
        // console.log(CasesType)

        // push series (confirmed)
        this.seriesA[0].data.push(...t)

        // console.log(sliced)

        // this.testing = sliced
        // return sliced

        // const characters = response.data
        // const myTest = characters.map(characters => characters.timeline.cases)
        // var testResult = Object.keys(myTest).map(function (key) {
        //   return [Number(key), myTest[key]]
        // })
        // console.log(testResult)
        // const myTest2 = characters.map(characters => characters.timeline.deaths)

        // this.testing2 = myTest2
        // this.testing3 = myTest3
      }).catch(error => {
        console.log(`API: ${error}`)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';

.md-layout {
    margin: 10px 10px;
    margin-right: 30px;
    margin-left: 130px;
}
.chart-inner-wrapper {
    background-color: $charts-bg-color;
    border: 1px solid #333;
    padding: 15px 30px 15px 20px;
    max-width: 480px;
//     margin-top: 5px;
    margin-left: 180px;
    // margin-right: 180px;
}

.chart-inner-wrapper2 {
    background-color: $charts-bg-color;
    border: 1px solid #333;
    padding: 15px 30px 15px 20px;
    max-width: 480px;
}

.chart-inner-wrapper3 {
    background-color: $charts-bg-color;
    border: 1px solid #333;
    padding: 15px 30px 15px 20px;
    max-width: 480px;
    margin-top: 10px;
    margin-left: 180px;
    // margin-right: 180px;
}

.chart-inner-wrapper4 {
    background-color: $charts-bg-color;
    border: 1px solid #333;
    padding: 15px 30px 15px 20px;
    max-width: 480px;
    margin-top: 10px;
}
</style>
