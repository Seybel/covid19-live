<template>
  <div class="world-details text-center">
    <!-- <span>{{totalConfirmedData}}</span> -->
      <ul class="showHide">
          <li><span class="wd-details-title">Total Confirmed</span></li>
          <li><span class="wd-details-text ggg">{{ totalConfirmedData.cases }}</span></li>
          <li><span class="wd-details-title">Recovered</span></li>
          <li><span class="wd-details-text hhh">{{ totalConfirmedData.recovered }}</span></li>
          <li><span class="wd-details-title">Deaths</span></li>
          <li><span class="wd-details-text">{{ totalConfirmedData.deaths }}</span></li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'totalConfirmedData'
    ])
  }
}
</script>
<style lang="scss" scoped>
.showHide { display: none; } // Toggle
.world-details {
  position: absolute;
  margin-top: 55px;
  padding-top: 24px;
  right: 35px;
  // z-index: 16;
  // border-left: 1px solid #333;
  // padding-right: 10px;
  max-width: 400px;

  ul {
    list-style: none;
    padding-left: 20px;
    padding-right: 20px;
    margin: 5px 0;

    li {
        color: #7d7d7d;

        span.wd-details-title {
          color: #b9b9b9;
          font-size: 16px;
          font-weight: 500;
          line-height: 28px;
        }

        span.wd-details-text {
          color: #fff;
          font-size: 28px;
          font-weight: 500;
          line-height: 40px;

          &.ggg {
            color: #d32f2f;
          }
          &.hhh {
            color: #6ba476;
          }
        }
    }
  }
}

.text-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

// MOBILE STYLE

/* Desktop, Mobile */
@media screen and (min-width: 1024px) {
  .showHide  { display: block; }
}
</style>
