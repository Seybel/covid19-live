<template>
  <div id="app" class="container md-layout-row">
    <ToolbarDesktop />
    <NavigationDesktop />
    <NavigationMobile />
    <WorldDetails />
    <Map />
    <Charts />
    <router-view/>
  </div>
</template>

<script>
import ToolbarDesktop from '@/components/ToolbarDesktop'
import NavigationDesktop from '@/components/NavigationDesktop'
import NavigationMobile from '@/components/NavigationMobile'
import WorldDetails from '@/components/WorldDetails'
import Map from '@/components/Map'
import Charts from '@/components/Charts'

export default {
  // methods: {
  //   ...mapActions([
  //     'loadData'
  //   ])
  // },
  created () {
    this.$store.dispatch('loadData')
    this.$store.dispatch('loadTotalData')
  },
  components: {
    ToolbarDesktop,
    NavigationDesktop,
    NavigationMobile,
    WorldDetails,
    Map,
    Charts
  }
}
</script>
<style lang="scss" scoped>
body {
  overflow-x: hidden;
}
// .page-container.centered {
//     max-width: 1100px;
//     margin: 0px auto;
//     // padding: 16px;
//     transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s;
// }

// .main-container {
//     position: relative;
//     z-index: 1;
//     flex: 1 1 0%;
// }

a:not(.md-button) {
    text-decoration: none;
}

a:not(.md-button) {
    transition: .3s cubic-bezier(.25,.8,.25,1);
    transition-property: color,background-color,opacity;
}

// @media (min-width: 981px) {
//   .page-container.centered {
//       margin-right: 280px;
//   }
// }
</style>
