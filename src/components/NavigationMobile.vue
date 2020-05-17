<template>
    <div>
        <md-toolbar class="md-theme-default md-elevation-2 md-elevation-2 showHideToolbarMobile">
            <md-button class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title"><router-link to="/"> Covid19 Live</router-link></span>

            <div class="md-toolbar-section-end">
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
                            <md-list-item to="/CountryDetails"  @click="selectedCountry(index)">
                                <div class="md-list-item-text">
                                    <span><span class="cd-no">{{ getSortedDataItem.cases }} </span><span class="cd-name">{{ getSortedDataItem.country }}</span></span>
                                    <span>Deaths: {{ getSortedDataItem.deaths }}</span>
                                    <span>Recovered: {{ getSortedDataItem.recovered }}</span>
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
import { eventBus } from '@/main'
export default {
  data: () => ({
    showNavigation: false
  }),
  methods: {
    selectedCountry (index) {
      const payLoad = this.getSortedData[index]
      eventBus.$emit('selectedCountry', payLoad)
    }
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

<style lang="scss">
  // .md-theme-default a:not(.md-button) {
  //   // color: #fff;
  //   text-decoration: none;
  //   &:hover{
  //     color: #fff;
  //   }
  // }
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
