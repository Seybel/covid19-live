<template>
  <div >
    <ToolbarDesktop />
    <NavigationDesktop />
    <NavigationMobile />
    <WorldDetails />
    <Map />
    <Charts />
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
