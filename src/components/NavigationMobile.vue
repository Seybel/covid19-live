<template>
    <div>
        <md-toolbar class="md-theme-default md-elevation-2 md-elevation-2 showHideToolbarMobile">
            <md-button class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">Covid19 Live</span>

            <div class="md-toolbar-section-end">
                <md-button class="md-icon-button">
                    <md-icon><i class="fa fa-github"></i></md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <md-drawer :md-active.sync="showNavigation" class="md-fixed showHideMobile" md-swipeable>
            <div class="main-nav-drawer-content">
                <div v-for="(covidDataItem, index) in covidData" :key="index" class="main-nav-content">
                    <div class="country-details">
                        <md-list>
                            <md-list-item to="#">
                                <div class="md-list-item-text">
                                    <span><span class="cd-no">{{ covidDataItem.cases }} </span><span class="cd-name">{{ covidDataItem.country }}</span></span>
                                    <span>Deaths: {{ covidDataItem.deaths }}</span>
                                    <span>Recovered: {{ covidDataItem.recovered }}</span>
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
import { mapState } from 'vuex'

export default {
  data: () => ({
    showNavigation: false
  }),
  computed: {
    ...mapState([
      'covidData'
    ])
  }
}
</script>

<style lang="scss">
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

.md-drawer {
    width: 230px;
    max-width: calc(100vw - 160px);
  }

.main-nav-drawer-content {
    padding-top: 10px;
    flex: 1;
    overflow: auto;
}

.showHideToolbarMobile { display: flex; } // Toggle toolbar display on mobile
.showHideMobile { display: block; } // Toggle drawer display

// MOBILE STYLE

/* Desktop, Mobile */
@media screen and (min-width: 768px) {
  .showHide  { display: flex; }
  .showHideToolbarMobile  { display: none; }
  .showHideMobile  { display: none; }
}
</style>
