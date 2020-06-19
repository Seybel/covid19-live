<template>
  <div>
    <md-toolbar class="md-theme-default md-elevation-2 md-elevation-2 showHideToolbarMobile">
        <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
        </md-button>
        <router-link to="/"><span class="md-title">Covid19 Live</span></router-link>
        <div class="md-toolbar-section-end">
          <Searchbox />
          <md-button class="md-icon-button">
              <md-icon><i class="fa fa-github"></i></md-icon>
          </md-button>
        </div>
    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation" class="md-fixed showHideMobile" md-swipeable>
      <div class="main-nav-drawer-content">
        <div v-for="(getSortedDataItem, index) in getSortedData" :key="index" class="main-nav-content">
          <div class="country-details">
            <md-list>
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
    </md-drawer>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import numeral from 'numeral'
// import { eventBus } from '@/main'
import Searchbox from '@/components/Searchbox'
export default {
  components: {
    Searchbox
  },
  data: () => ({
    showNavigation: false
  }),
  methods: {
    // selectedCountry (index) {
    //   const payLoad = this.getSortedData[index]
    //   eventBus.$emit('selectedCountry', payLoad)
    // }
  },
  computed: {
    ...mapState([
      'covidData'
    ]),
    ...mapGetters([
      'getSortedData'
    ])
  }
  // filters: {
  //   formatNumber: function (value) {
  //     return numeral(value).format('0,0') // Format number
  //   }
  // }
}
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
  .md-title{
    color: $white;
    text-decoration: none;
  }
.md-list {
  margin: -13px 0 5px 0;
}

.md-list-item-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight:$regular;
  line-height: 18px;

    // cd - country-details
  span.cd-no {
      color: $country-cases;
      font-size: $regular;
      font-weight:$semi-bold;
      line-height: 19px;
  }

  span.cd-name {
      color: $white;
      font-size:$regular;
      font-weight: $regular;
      line-height: 19px;
  }
}

.md-drawer {
    width: 230px;
    max-width: calc(100vw - 160px);
  }

.main-nav-drawer-content {
    padding-top: 10px;
    flex: 1;
    overflow: auto;
}

.showHideToolbarMobile { display: $display-flex; } // Toggle toolbar display on mobile
.showHideMobile { display: block; } // Toggle drawer display

// MOBILE STYLE

/* Desktop, Mobile */
@media screen and (min-width: 768px) {
  .showHide  { display: $display-flex; }
  .showHideToolbarMobile  { display: none; }
  .showHideMobile  { display: none; }
}
</style>
