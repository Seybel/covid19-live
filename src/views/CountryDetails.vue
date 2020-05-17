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
  </div>
</template>

<script>
import { eventBus } from '@/main'

export default {
  data () {
    return {
      country: []
    }
  },
  mounted () {
    eventBus.$on('selectedCountry', (payLoad) => {
      this.country = payLoad
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
 .md-layout{
    justify-content: center;
    font-size: 16px;
    color: $wd-details;
    &-item{
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      padding: 10px;
      p {
        font-size: 18px;
        font-weight: $xx-bold;
        border: 2px solid $wd-details;
        width: 50%;
        height: 45px;
        text-align: center;
        padding-top: 10px;
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
