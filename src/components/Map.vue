<template>
  <div class="map">
    <l-map
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
      >
      <l-tile-layer
       :url="url">
      </l-tile-layer>
      <l-circle-marker
       :key="index"
       v-for="(covidData,index) in covidDatas"
       :lat-lng="latLng(covidData.latitude, covidData.longitude)"
       :radius="circle.radius"
       :color="circle.color"
       :fillColor="circle.fillColor"
       :fillOpacity="circle.fillOpacity"
       >
      </l-circle-marker>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LCircleMarker } from 'vue2-leaflet'
export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker
  },
  data () {
    return {
      covidDatas: [],
      zoom: 5,
      center: L.latLng(48.019324, 18.672841),
      url: 'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=8c9f8b88b0db49398d680581331e4670',
      currentZoom: 5,
      currentCenter: L.latLng(48.019324, 18.672841),
      marker: L.latLng(47.413220, -1.219482),
      circle: {
        radius: 10,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }
    }
  },
  //  Temporarily fetching data from covid api for testing purposes
  mounted () {
    fetch('https://covid19-data.p.rapidapi.com/all', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid19-data.p.rapidapi.com',
        'x-rapidapi-key': 'ee21d115b2msh8d4d8cc339189b9p1a2d46jsne5f5fca1707d'
      }
    })
      .then(response => {
        return response.json()
      })
      .then((jsonData) => {
        this.covidDatas = jsonData
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    },
    latLng (lat, lng) {
      return L.latLng(lat, lng)
    }
  }
}
</script>

<style lang="scss" scoped>
  .map{
    max-width: 70.5%;
    height: 400px;
    margin-top: 66px;
    margin-left: 233px;
    position: sticky;
  }
</style>
