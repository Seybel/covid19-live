<template>
  <div>
    <md-button class="md-icon-button">
      <md-icon><i class="fa fa-search" @click="showDialog = !showDialog"></i></md-icon>
      <md-tooltip md-direction="bottom">Search</md-tooltip>
    </md-button>
    <md-dialog :md-active.sync="showDialog">
      <div class="search">
        <div class="search-header md-layout">
          <md-dialog-title>Search Location</md-dialog-title>
          <md-icon><i class="fa fa-times" @click="showDialog = !showDialog"></i></md-icon>
         </div>
        <div class="search-text">
          <input type="text"
          name="search"
          v-model="search"
          placeholder="Type here"
          autocomplete="off">
          <md-icon><i class="fa fa-search"> </i></md-icon>
        </div>
        <md-list class="search-result" v-for="(DataItem, index) in filteredData" :key="index">
          <md-list-item  :to="{name: 'CountryDetails', params: {country: DataItem.country,
            cases: DataItem.cases,
            deaths: DataItem.deaths,
            recovered: DataItem.recovered,
            tests: DataItem.tests,
            active:DataItem.active}}">
            <p>{{DataItem.country}}</p>
            <img :src="DataItem.countryInfo.flag" alt="National Flag">
          </md-list-item>
        </md-list>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import { eventBus } from '@/main'
export default {
  name: 'DialogCustom',
  data () {
    return {
      search: '',
      showDialog: false
    }
  },
  methods: {
    // selectedCountry (index) {
    //   const payLoad = this.filteredData[index]
    //   eventBus.$emit('selectedCountry', payLoad)
    // }
  },
  computed: {
    ...mapState([
      'covidData'
    ]),
    ...mapGetters([
      'getSortedData'
    ]),
    filteredData () {
      if (this.search.trim() !== '') {
        return this.getSortedData.filter((DataItem) => {
          const regex = new RegExp(this.search.trim(), 'gi')
          return DataItem.country.match(regex)
        })
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
  .md-dialog /deep/.md-dialog-container {
    min-width: 400px;
    padding-bottom: 40px;
    max-height: 300px;
    font-family: sans-serif;
  }
  .search{
    display: $display-flex;
    flex-direction: column;
    font-family: sans-serif;
    &-header{
      .md-dialog-title{
        font-size: $regular;
      }
      .fa-times{
          bottom: 61%;
          font-size: $xx-big;
          margin-left: 55px;
          cursor: pointer;
          position: $fixed;
          right: 3%;
          top: 3%;

      }
    }
    &-text{
     input{
       width: 80%;
       border: none;
       background:none;
       border-bottom: 2px solid $grey;
       color: $white;
       margin-left: 25px;
       &:focus{
         outline: none;
        }
      }
      .fa-search{
        position:relative;
        right: 82%;
        margin-bottom: 10px;
        font-size: 13px;
      }
    }
    &-result{
      border-bottom: 2px solid $grey;
      width: 80%;
      margin: 10px 25px;
      padding-left: 8px;
      img{
        width: 40px;
      }
    }
  }
</style>
