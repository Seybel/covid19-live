<template>
  <div>
    <md-toolbar class="md-elevation-2 md-elevation-2 showHide">
      <h3 class="md-title"  style="flex: 1">
        <router-link to="/">Covid19 World Confirmed cases</router-link>
      </h3>
      <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon><i class="fa fa-github"></i></md-icon>
            <md-tooltip md-direction="bottom">Repo</md-tooltip>
          </md-button>
      </div>
    </md-toolbar>
    <div class="md-layout">
      <div class="md-layout-item md-size-20">
        <h3 class="Confirmed">Confirmed</h3>
        <p class="value cases">{{country.cases}}</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Deaths">Deaths</h3>
          <p class="value deaths">{{country.deaths}}</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Recovered">Recovered</h3>
          <p class="value recovered">{{country.recovered}}</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Tested">Tested</h3>
          <p class="value tests">{{country.tests}}</p>
      </div>
    </div>

    <div v-if="series[0].data.length" class="md-layout-item">
      <div class="chart-inner-wrapper">
        <h3 class="lead">Total Confirmed, Deaths, Recovered, and Active Cases</h3>
        <apexchart width="704" height="320" type="bar" :options="options" :series="series"></apexchart>
      </div>
     </div>
  </div>
</template>

<script>
import { eventBus } from '@/main'

export default {
  data () {
    return {
      country: [],
      options: {
        chart: {
          id: 'my-chart',
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
        xaxis: {
          categories: ['Confirmed', 'Deaths', 'Recovered', 'Active'],
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
      series: [
        {
          name: 'Cases',
          data: []
        }
      ]
    }
  },
  mounted () {
    eventBus.$on('selectedCountry', (payLoad) => {
      this.country = payLoad

      // console.log(this.country)
      const casesType = this.country

      // push series (confirmed, deaths, recovered, and active)
      this.series[0].data.push(casesType.cases, casesType.deaths, casesType.recovered, casesType.active)
    })
  }
}
</script>

<style lang="scss" scoped>
 .md-layout{
    justify-content: center;
    font-size: 16px;
    color: #7d7d7d;
    &-item{
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      padding: 10px;
      p {
        font-size: 18px;
        border: 2px solid #7d7d7d;
        width: 50%;
        height: 45px;
        text-align: center;
        padding-top: 10px;
      }
      .cases{
        color: #d32f2f;
      }
      .deaths{
        color: #fff;
      }
      .recovered{
       color: #6ba476;
      }
      .tests{
        color: #c7c70d;
      }
    }
 }

 .chart-inner-wrapper {
    background-color: rgb(58, 57, 57);
    border: 1px solid #333;
    padding: 15px 30px 15px 20px;
    max-width: 780px;
    margin-top: 35px;
    margin-bottom: 20px;

    h3.lead {
      font-size: 16px;
      font-weight: 900;
      color: #7d7d7d;
      margin-left: 16px;
    }
}
  @media screen and (max-width: 600px) {
    .md-layout{
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      padding: 2px;
      p {
        width: 150px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    p {
      width: 130px;
      // padding-top: 3px;
    }
  }
</style>
