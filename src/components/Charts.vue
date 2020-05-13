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
                    <apexchart width="394" height="300" type="radar" :options="options" :series="seriesB"></apexchart>
                </div>
            </div>
             <!-- <div class="md-layout-item">
                <div class="chart-inner-wrapper3">
                    <apexchart width="394" height="300" type="line" :options="options" :series="seriesC"></apexchart>
                </div>
            </div>
            <div class="md-layout-item">
                <div class="chart-inner-wrapper4">
                    <apexchart width="394" height="300" type="bar" :options="options" :series="seriesD"></apexchart>
                </div>
            </div> -->
        </div>
</template>

<script>
import axios from 'axios'

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
      markers: {
        size: 5
      },
      // stroke: {
      //   curve: 'smooth'
      // },
      legend: {
        horizontalAlign: 'center',
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        offsetX: 20,
        labels: {
          colors: '#7d7d7d'
        }
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
      colors: ['#00897b', '#ff0000']
    },
    seriesA: [
      {
        name: 'Total Cases',
        data: []
      },
      {
        name: 'Total Deaths',
        data: []
      }
    ],
    seriesB: [{
      name: 'Total Recovered',
      data: []
    }]
  }),

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

        // Confirmed cases
        var t = CasesType.map((arr) => {
          return arr.confirmed
        })
        console.log(t)

        // Deaths cases
        var t2 = CasesType.map((arr) => {
          return arr.deaths
        })

        // Recovered cases
        this.testing3 = CasesType.map((arr) => {
          return arr.recovered
        })
        // console.log(CasesType)

        // push series (confirmed)
        this.seriesA[0].data.push(...t)
        // push series (deaths)
        this.seriesA[1].data.push(...t2)

        // console.log(sliced)
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
