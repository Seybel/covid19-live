<template>
    <div>
        <md-toolbar class="md-elevation-2 md-elevation-2 showHide">
            <h3 class="md-title" style="flex: 1">Covid19 World Confirmed cases</h3>
            <div class="md-toolbar-section-end">
                <md-button class="md-icon-button">
                <md-icon><i class="fa fa-github"></i></md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <div class="main-nav-container md-xsmall-hide">
            <md-content class="main-nav md-scrollbar md-theme-default">
                <div class="main-nav-content">
                    <div class="main-nav-level" v-for="(covidDataItem, index) in covidData" :key="index">
                        <div v-if="covidDataItem" class="country-details">
                            <md-list>
                                <md-list-item to="#">
                                    <div class="md-list-item-text">
                                        <span>{{ test }}</span>
                                        <span><span class="cd-no">{{ covidDataItem.cases }} </span><span class="cd-name">{{ covidDataItem.country }}</span></span>
                                        <span>Deaths: {{ covidDataItem.deaths }}</span>
                                        <span>Recovered: {{ covidDataItem.recovered }}</span>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </div>
                    </div>
                </div>
            </md-content>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState([
      'covidData'
    ]),
    ...mapGetters([
      'myCompare',
      'test'
    ])
  }
}
</script>

<style lang="scss" scoped>
.showHide { display: none; } // Toggle toolbar and scrollbar display on desktop

.md-content {
    max-width: 308px;
    max-height: 100vh;
    overflow: auto;
    display: block;
    // padding: 16px;
}

.main-nav {
    width: 316px;
    // padding: 24px 16px 112px;
    padding-top: 24px;
    padding-bottom: 0px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    transition: .3s cubic-bezier(.4,0,.2,1);
    transition-property: top;
}

.main-nav-level {
    margin-bottom: 16px;
}

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

// MOBILE STYLE

/* Desktop, Mobile */
@media screen and (min-width: 768px) {
  .showHide  { display: flex; }
}
</style>
