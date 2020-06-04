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
          <form action="">
           <input type="text" name="search" v-model="search" placeholder="Type here" autocomplete="off">
           <md-icon><i class="fa fa-search" @click="filteredData"></i></md-icon>
          </form>
        </div>
        <md-list class="search-result" v-for="(getSortedDataItem, index) in filteredData" :key="index">
          <md-list-item :to="`/CountryDetails/${getSortedData[index].country}/${getSortedData[index].cases}
            /${getSortedData[index].deaths}
            /${getSortedData[index].recovered}
            /${getSortedData[index].tests}
            `"
            @click="selectedCountry(index)">
          <p>{{getSortedDataItem.country}}</p>
          <img :src="getSortedDataItem.countryInfo.flag" alt="National">
          </md-list-item>
        </md-list>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { eventBus } from '@/main'
export default {
  name: 'DialogCustom',
  props: [
    'country'
  ],
  data () {
    return {
      search: '',
      showDialog: false
    }
  },
  computed: {
    ...mapState([
      'covidData'
    ]),
    ...mapGetters([
      'getSortedData'
    ]),
    filteredData (index) {
      const self = this
      return this.getSortedData.filter((DataItem) => {
        const regex = new RegExp(self.search, 'gi')
        return DataItem.country.match(regex)
      })
    }
  },
  methods: {
    selectedCountry (index) {
      const payLoad = this.getSortedData[index]
      eventBus.$emit('selectedCountry', payLoad)
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-dialog /deep/.md-dialog-container {
    max-width: 100%;
    height: 300px;
    font-family: sans-serif;
  }
  .search{
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    &-header{
      .md-dialog-title{
        font-size: 16px;
      }
      .fa-times{
          bottom: 61%;
          font-size: 24px;
          margin-left: 55px;
          position: fixed;
          right: 3%;
          top: 5%;

      }
    }
    &-text{
     input{
       width: 80%;
       border: none;
       background:none;
       border-bottom: 2px solid grey;
       color: white;
       margin-left: 25px;
       &:focus{
         outline: none;
        }
      }
      .fa-search{
        position: relative;
        right: 82%;
        margin-bottom: 10px;
        font-size: 13px;
      }
    }
    &-result{
      border: 2px solid grey;
      width: 80%;
      margin: 10px 25px;
      padding-left: 10px;
      img{
        width: 50px;
      }
    }
  }
</style>
