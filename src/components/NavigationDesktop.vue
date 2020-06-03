<template>
  <div>
    <div class="main-nav-container md-xsmall-hide">
      <md-content class="main-nav md-scrollbar md-theme-default">
        <div class="main-nav-content">
          <div class="main-nav-level" v-for="(getSortedDataItem, index) in getSortedData" :key="index">
            <div v-if="getSortedData.length" class="country-details">
              <md-list id="countryList">
                <md-list-item to="/CountryDetails" @click="selectedCountry(index)">
                  <div class="md-list-item-text">
                    <!-- <span>{{ getCases }}</span> -->
                    <span><span class="cd-no">{{ getSortedDataItem.cases | formatNumber }} </span><span class="cd-name">{{ getSortedDataItem.country }}</span></span>
                    <span>Deaths: {{ getSortedDataItem.deaths | formatNumber }}</span>
                    <span>Recovered: {{ getSortedDataItem.recovered | formatNumber }}</span>
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
import numeral from 'numeral'
import { eventBus } from '@/main'
export default {
  computed: {
    ...mapState([
      'covidData'
    ]),
    ...mapGetters([
      'getSortedData'
    ])
  },
  methods: {
    selectedCountry (index) {
      const payLoad = this.getSortedData[index]
      eventBus.$emit('selectedCountry', payLoad)
    }
  },
  filters: {
    formatNumber: function (value) {
      return numeral(value).format('0,0') // Format number
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
