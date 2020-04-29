<template>
  <div id="app" class="container">
    <NavigationDesktop />
    <NavigationMobile />
    <!-- <Map /> -->
    <router-view/>
  </div>
</template>

<script>
import NavigationDesktop from '@/components/NavigationDesktop'
import NavigationMobile from '@/components/NavigationMobile'
// import Map from '@/components/Map'

export default {
  // methods: {
  //   ...mapActions([
  //     'loadData'
  //   ])
  // },
  created () {
    this.$store.dispatch('loadData')
  },
  components: {
    NavigationDesktop,
    NavigationMobile
    // Map
  }
}
</script>
<style lang="scss" scoped>
.world-details {
    top: 10%;
    position: fixed;
    right: 10px;
    z-index: 16;
    border-left: 1px solid #e0e0e0;
    padding-right: 15px;
    max-width: 250px;

    ul {
      list-style: none;
      padding-left: 20px;
      padding-right: 20px;
      margin: 5px 0;

      li {
          color: #7d7d7d;

          span.wd-details-title {
            color: #fff;
            font-size: 28px;
            font-weight: 700;
            line-height: 40px;
          }

          span.wd-details-text {
            color: #fff;
            font-size: 20px;
            font-weight: 500;
            line-height: 32px;
          }
      }
    }
}

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
