<template>
  <div id="app" class="container">
    <Toolbar />
    <div class="container-wrapper md-layout-row">
        <Scrollbar />
        <div class="world-details">
          <ul>
            <li><span class="wd-details-title">Confirmed</span></li>
            <li><span class="wd-details-text">987,654</span></li>
          </ul>
          <ul>
            <li><span class="wd-details-title">Recovered</span></li>
            <li><span class="wd-details-text">87,543</span></li>
          </ul>
          <ul>
            <li><span class="wd-details-title">Deaths</span></li>
            <li><span class="wd-details-text">7,543</span></li>
          </ul>
        </div>
      <router-view/>
    </div>

  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Scrollbar from '@/components/Scrollbar'

export default {
  components: {
    Toolbar,
    Scrollbar
  }
}
</script>
<style lang="scss" scoped>
 .md-content {
    max-width: 400px;
    max-height: 200px;
    overflow: auto;
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

// MOBILE STYLE
  @media (min-width: 981px) {
    .wd-details {
    display: block;
    }
  }
</style>
