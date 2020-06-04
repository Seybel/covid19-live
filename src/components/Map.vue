<template>
  <div class="md-layout gutter">
    <div class=" md-layout-item map">
    <l-map
        :zoom="zoom"
        :center="center"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
        >
        <l-tile-layer
        :url="url"
        >
        </l-tile-layer>
        <!-- This tag is for the marker, the v-for is to iterate through the lat and long and apply the marker  -->
        <l-circle-marker
        v-for="(covidDataItem,index) in covidData" :key="index"
        :lat-lng="latLng(covidDataItem.countryInfo.lat, covidDataItem.countryInfo.long)"
        :radius="circle.radius"
        :color="circle.color"
        :opacity="circle.opacicty"
        :fillColor="circle.fillColor"
        :fillOpacity="circle.fillOpacity"
        >
        </l-circle-marker>
     </l-map>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LCircleMarker } from 'vue2-leaflet'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      zoom: 2,
      center: L.latLng(22.593726, 48.333649),
      url: 'https://api.mapbox.com/styles/v1/tolumento/ck9t3fgda04951ipho5ohv6dr/tiles/256/{z}/{x}/{y}@2x?access_token=p' +
      'k.eyJ1IjoidG9sdW1lbnRvIiwiYSI6ImNrOW1zYXlnczAybTQzcG0xbWF3ZWt0bWwifQ.3w3Af5QZ4zQeTvbt_ekwsg',
      currentZoom: 4,
      currentCenter: L.latLng(48.019324, 18.672841),
      marker: L.latLng(47.413220, -1.219482),
      circle: {
        radius: 10,
        color: 'red',
        opacicty: 0,
        fillColor: 'red',
        fillOpacity: 0.5
      }
    }
  },
  // prevents the gridlines from appearing on the map
  mounted () {
    (function () {
      if (!L || !L.GridLayer || !L.GridLayer.prototype) return
      const originalInitTile = L.GridLayer.prototype._initTile
      L.GridLayer.include({
        _initTile: function (tile) {
          originalInitTile.call(this, tile)
          const tileSize = this.getTileSize()
          tile.style.width = tileSize.x + 1 + 'px'
          tile.style.height = tileSize.y + 1 + 'px'
        }
      })
    })()
  },
  computed: {
    ...mapState([
      'covidData'
    ])
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    },
    // Funtion to get the latitude and longitude
    latLng (lat, lng) {
      return L.latLng(lat, lng)
    }
  },
  components: {
    LMap,
    LTileLayer,
    LCircleMarker
  }
}
</script>

<style lang="scss">
  .map {
    background-color: #333;
    max-width: 64.8%;
    height: 350px;
    // margin-top: 5px;
    margin-top: 66px;
    // padding-top: 24px;
    margin-left: 310px;
    transform: none;
    z-index: 1;
  }
  // MOBILE STYLE
  @media screen and (max-width: 600px) {
    .map{
      margin-top: 0px;
      margin-left: 5px;
      max-width: 97%;
      height: 250px;
    }
  }

   @media screen and (min-width: 768px) and (max-width: 1199px) {
    .map{
      max-width: 90%;
      margin-top: 50px;
    }
  }
</style>
