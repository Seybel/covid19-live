<template>
  <div v-if="options.xaxis.categories.length" class="md-layout">
        <!-- {{ testing.confirmed }} -->
        <!-- <div class="md-layout-row"> -->
    <div class="chart-inner-wrapper ">
      <h3>Total Confirmed Cases and Deaths Daily</h3>
      <apexchart type="area" :options="options" :series="seriesA"></apexchart>
    </div>
    <div class="chart-inner-wrapper2">
      <h3>Total Recovered Cases Daily</h3>
        <apexchart type="radar" :options="options" :series="seriesB"></apexchart>
    </div>
    <!-- <div class="md-layout-item">
      <div class="chart-inner-wrapper3">
          <apexchart width="394" height="300" type="line" :options="options" :series="seriesC"></apexchart>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    options: {
      chart: {
        width: '100%',
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
      // title: {
      //   text: 'Total Confirmed Cases and Deaths Daily',
      //   style: {
      //     fontSize: '16px',
      //     fontWeight: 'bold',
      //     fontFamily: 'Helvetica, Arial, sans-serif',
      //     color: '#7d7d7d'
      //   }
      // },
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
  mounted () {
    axios.get('https://covidapi.info/api/v1/global/count')
      .then(response => {
        // Return results
        const myObj = response.data.result
        // Return last seven properties of myObj
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

        // Separate total case, deaths, and recovered
        var allCasesType = sliced
        var CasesType = Object.values(allCasesType)

        // Confirmed cases
        var confirmedCases = CasesType.map((arr) => {
          return arr.confirmed
        })
        // console.log(confirmedCases)

        // Deaths cases
        var deathCases = CasesType.map((arr) => {
          return arr.deaths
        })

        // Recovered cases
        var recoveredCases = CasesType.map((arr) => {
          return arr.recovered
        })
        // console.log(CasesType)

        // push series (confirmed)
        this.seriesA[0].data.push(...confirmedCases)
        // push series (deaths)
        this.seriesA[1].data.push(...deathCases)
        // push series (recovered)
        this.seriesB[0].data.push(...recoveredCases)

        // console.log(sliced)
      }).catch(error => {
        console.log(`API: ${error}`)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';

h3 {
  font-size: $regular;
  font-weight: $deep;
  color: $wd-details;
  margin-left: 16px;
}
.md-layout {
  display: $display-flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}
.chart-inner-wrapper {
  background-color: $charts-bg-color;
  border: 1px solid #333;
  border-radius: 5px;
  width: 500px;
  margin-left: 295px;
  padding: 15px 30px 15px 20px;
}

.chart-inner-wrapper2 {
  background-color: $charts-bg-color;
  border: 1px solid #333;
  border-radius: 5px;
  width: 500px;
  margin-left: 20px;
  padding: 15px 30px 10px 20px;
}

@media screen and (max-width: 600px) {
  .md-layout {
    margin-top: 160px;
  }
  .chart-inner-wrapper {
    padding: 5px 10px 0px 5px;
    margin: -30px 20px 10px;
  }
  .chart-inner-wrapper2 {
    padding: 5px 10px 0px 5px;
    margin: 5px 20px 10px;
  }
}
@media screen and (min-width: 768px) {
  .md-layout {
    margin-top: 160px;
  }
  .chart-inner-wrapper {
    width: 430px;
    margin: -20px 0px 10px 300px;
  }
  .chart-inner-wrapper2 {
    width: 430px;
    margin: 0px 0px 10px 300px;
  }
}
@media screen and (min-width: 1024px) {
  // .md-layout {
  //   margin-top: 160px;
  // }
  .chart-inner-wrapper {
    padding: 30px 100px;
    width: 700px;
  }
  .chart-inner-wrapper2 {
   padding: 30px 100px;
    width: 700px;
  }
}
@media screen and (min-width: 1366px) {
  .md-layout {
    margin-top: 20px;
  }
  .chart-inner-wrapper {
    width: 500px;
    margin-left: 295px;
    padding: 15px 30px 15px 20px;
  }
  .chart-inner-wrapper2 {
    width: 500px;
    margin-left: 20px;
    padding: 15px 30px 15px 20px;
  }
}

</style>
