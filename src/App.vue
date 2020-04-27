<template>
  <div id="app" class="container">
  <NavigationDesktop />
  <md-toolbar class="md-theme-default showHideToolbarMobile">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Covid19 Live</span>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon><i class="fa fa-github"></i></md-icon>
        </md-button>
      </div>
    </md-toolbar>
  <md-drawer :md-active.sync="showNavigation" class="md-fixed showHideMobile" md-swipeable>
      <div class="main-nav-drawer-content">
        <div class="main-nav-content">
          <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">32,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
            <div class="country-details">
              <md-list>
                <md-list-item to="#">
                  <div class="md-list-item-text">
                    <span><span class="cd-no">12,345 </span><span class="cd-name">USA</span></span>
                    <span>Deaths: 123</span>
                    <span>Recovered: 23</span>
                  </div>
                  </md-list-item>
              </md-list>
            </div>
        </div>
      </div>
    </md-drawer>
    <router-view/>
  </div>
</template>

<script>
// import Toolbar from '@/components/Toolbar'
import NavigationDesktop from '@/components/NavigationDesktop'

export default {
  data: () => ({
    showNavigation: false
  }),

  components: {
    // Toolbar,
    NavigationDesktop
  }
}
</script>
<style lang="scss" scoped>
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
 .md-content {
    max-width: 200px;
    max-height: 100vh;
    overflow: auto;
    display: block;
    // padding: 16px;
  }

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

.md-drawer {
    width: 230px;
    max-width: calc(100vw - 160px);
  }

.main-nav-drawer-content {
    padding-top: 10px;
    flex: 1;
    overflow: auto;
}

.showHideToolbarMobile { display: flex; } // Toggle toolbar display on mobile
.showHideMobile { display: block; } // Toggle drawer display

// MOBILE STYLE

/* Desktop, Mobile */
@media screen and (min-width: 768px) {
  .showHide  { display: flex; }
  .showHideToolbarMobile  { display: none; }
  .showHideMobile  { display: none; }
}

@media (min-width: 981px) {
  .world-details {
    display: block;
  }
}
</style>
