<template>
  <div>
    <md-toolbar class="md-elevation-2 md-elevation-2 showHide">
      <router-link to="/"><h3 class="md-title">Covid19 Live </h3></router-link>
      <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon><i class="fa fa-github"></i></md-icon>
            <md-tooltip md-direction="bottom">Repo</md-tooltip>
          </md-button>
      </div>
    </md-toolbar>
    <div class="md-layout">
      <div class="md-layout-item md-size-20">
        <h3 class="Country">Country</h3>
        <p class="value country">{{$route.params.country}}</p>
      </div>
      <div class="md-layout-item md-size-20">
        <h3 class="Confirmed">Confirmed</h3>
        <p class="value cases">{{$route.params.cases | formatNumber}}</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Deaths">Deaths</h3>
          <p class="value deaths">{{$route.params.deaths | formatNumber}}</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Recovered">Recovered</h3>
          <p class="value recovered">{{$route.params.recovered | formatNumber}}</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Tested">Tested</h3>
          <p class="value tests">{{$route.params.tests | formatNumber}}</p>
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
import numeral from 'numeral'
// import { eventBus } from '@/main'

export default {
  data () {
    return {
      // country: [],
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
        responsive: [
          {
            breakpoint: 1000,
            options: {
              chart: {
                align: 'center',
                verticalAlign: 'middle',
                width: '250px',
                height: '200px'
              },
              grid: {
                padding: {
                  // right: 10,
                  left: 15
                }
              }
            }
          }
        ],
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
  filters: {
    formatNumber: function (value) {
      return numeral(value).format('0,0') // Format number
    }
  },
  mounted () {
    const casesType = this.$route.params
    // push series (confirmed, deaths, recovered, and active)
    this.series[0].data.push(casesType.cases, casesType.deaths, casesType.recovered, casesType.active)
    // eventBus.$on('selectedCountry', (payLoad) => {
    //   this.country = payLoad

    //   // console.log(this.country)
    //   const casesType = this.country

    //   // push series (confirmed, deaths, recovered, and active)
    //   this.series[0].data.push(casesType.cases, casesType.deaths, casesType.recovered, casesType.active)
    // })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
 .md-layout{
    justify-content: center;
    font-size: $regular;
    color: $wd-details;
    &-item{
      display: $display-flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      padding: 10px;
      p {
        font-size: $big;
        font-weight: $xx-bold;
        border: 2px solid $wd-details;
        width: 70%;
        height: 55px;
        text-align: center;
        padding-top: 10px;
      }
      .lead{
        color: $white;
      }
      .country{
        color: $white;
      }
      .cases{
        color: $country-cases;
      }
      .deaths{
        color: $white;
      }
      .recovered{
       color: $recovered;
      }
      .tests{
        color: $theme-default-primary;
      }
    }
 }

//  .chart-inner-wrapper {
//     background-color: rgb(58, 57, 57);
//     border: 1px solid #333;
//     padding: 15px 30px 15px 20px;
//     max-width: 780px;
//     margin-top: 35px;
//     margin-bottom: 20px;

//     h3.lead {
//       font-size: 16px;
//       font-weight: 900;
//       color: #7d7d7d;
//       margin-left: 16px;
//     }
// }

  .md-title{
    color: $white;
    text-decoration: none;
    flex: 1;
  }
  a:hover {
    color: $white;
    text-decoration: none;
  }
  @media screen and (max-width: 600px) {
    .md-layout{
      display: $display-flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-items: center;
      padding-top: 2px;
      &-item {
        p {
          width: 150px;
          height: 65px;
          padding-top: 18px;
        }
        .country{
          padding-top: 10px;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .md-layout{
      &-item{
        p {
          width: 135px;
          // padding-top: 3px;
        }
      }
    }
  }
</style>
