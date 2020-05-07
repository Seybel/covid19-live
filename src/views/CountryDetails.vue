<template>
  <div>
    <!-- <NavigationDesktop /> -->
    {{getData}}
    <md-toolbar class="md-elevation-2 md-elevation-2 showHide">
      <h3 class="md-title"  style="flex: 1">
        <router-link to="/"> World Confirmed cases</router-link>
      </h3>
      <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon><i class="fa fa-github"></i></md-icon>
            <md-tooltip md-direction="bottom">Repo</md-tooltip>
          </md-button>
      </div>
    </md-toolbar>

    <!-- <NavigationMobile /> -->
    <div class="md-layout">
      <div class="md-layout-item md-size-20">
          <h3 class="Confirmed">Confirmed</h3>
          <p class="value">xxx</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Deaths">Deaths</h3>
          <p class="value">xxx</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Recovered">Recovered</h3>
          <p class="value">xxx</p>
      </div>
      <div class="md-layout-item md-size-20">
          <h3 class="Tested">Tested</h3>
          <p class="value">xxx</p>
      </div>
    </div>
  </div>
</template>

<script>
// import NavigationDesktop from '@/components/NavigationDesktop'
// import NavigationMobile from '@/components/NavigationMobile'
import { mapState, mapGetters } from 'vuex'
export default {
  // components: {
  //   // NavigationDesktop,
  //   // NavigationMobile
  //   // WorldDetails,
  //   // Map
  // },
  props: {
    getData: Function
  },
  computed: {
    ...mapState([
      'covidData'
    ]),
    ...mapGetters([
      'getSortedData'
    ])
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
      P {
        border: 2px solid #7d7d7d;;
        width: 50%;
        height: 45px;
        text-align: center;
        padding-top: 10px;
      }
    }
 }
 .md-title a {
    color: #fff;
    &:hover{
      text-decoration: none;
      color: #fff;
    }
  }
</style>
