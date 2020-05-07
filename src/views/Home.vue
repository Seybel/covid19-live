<template>
  <div >
    <NavigationDesktop />
    <NavigationMobile />
    <WorldDetails />
    <Map />
  </div>
</template>

<script>
import NavigationDesktop from '@/components/NavigationDesktop'
import NavigationMobile from '@/components/NavigationMobile'
import WorldDetails from '@/components/WorldDetails'
import Map from '@/components/Map'
export default {
  components: {
    NavigationDesktop,
    NavigationMobile,
    WorldDetails,
    Map
  }
}
</script>
