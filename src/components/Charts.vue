<template>
    <div class="md-layout">
        <!-- <div class="md-layout-row"> -->
            <div class="md-layout-item">
                <div class="chart-inner-wrapper">
                    <apexchart width="394" height="300" type="bar" :options="options" :series="seriesA"></apexchart>
                </div>
            </div>
            <div class="md-layout-item">
                <div class="chart-inner-wrapper2">
                    <apexchart width="394" height="300" type="bar" :options="options" :series="seriesB"></apexchart>
                </div>
            </div>
             <div class="md-layout-item">
                <div class="chart-inner-wrapper3">
                    <apexchart width="394" height="300" type="line" :options="options" :series="seriesB"></apexchart>
                </div>
            </div>
            <div class="md-layout-item">
                <div class="chart-inner-wrapper4">
                    <apexchart width="394" height="300" type="bar" :options="options" :series="seriesA"></apexchart>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    testing: [],
    options: {
      chart: {
        id: 'vuechart-example',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
        text: 'Vuechart-example',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: '#7d7d7d'
        }
      },
      colors: ['#00897b']
    },
    seriesA: [{
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }],
    seriesB: [{
      name: 'series-2',
      data: [30, 50, 65, 80, 99, 160, 170, 191]
    }]
  }),

  mounted () {
    axios.get('https://corona.lmao.ninja/v2/historical')
      .then(response => {
        const characters = response.data
        this.testing = characters
        // display test results
        // console.log(characters)
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
