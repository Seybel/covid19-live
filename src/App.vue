<template>
  <div id="app" class="container md-layout-row">
    <NavigationDesktop />
    <NavigationMobile />
    <WorldDetails />
    <Map />
    <router-view/>
  </div>
</template>

<script>
import NavigationDesktop from '@/components/NavigationDesktop'
import NavigationMobile from '@/components/NavigationMobile'
import WorldDetails from '@/components/WorldDetails'
import Map from '@/components/Map'

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
    NavigationDesktop,
    NavigationMobile,
    WorldDetails,
    Map
  }
}
</script>
<style lang="scss" scoped>
a:not(.md-button) {
    text-decoration: none;
}

a:not(.md-button) {
    transition: .3s cubic-bezier(.25,.8,.25,1);
    transition-property: color,background-color,opacity;
}

@media (min-width: 981px) {
  .world-details {
    display: block;
  }
}
</style>
