<template>
  <div class="world-details text-center">
    <!-- <span>{{totalConfirmedData}}</span> -->
      <ul class="showHide">
          <li><span class="wd-details-title">Confirmed</span></li>
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
  background-color: rgb(58, 57, 57);
  position: absolute;
  border-radius: 10px;
  margin-top: 75px;
  padding-top: 24px;
  padding-bottom: 24px;
  right: 23px;
  // z-index: 16;
  // border-left: 1px solid #333;
  padding-right: 10px;
  width: 200px;

  ul {
    list-style: none;
    padding-left: 20px;
    padding-right: 20px;
    margin: 5px 0;

    li {
      color: #7d7d7d;
      padding-bottom: 10px;

      span.wd-details-title {
        color: #b9b9b9;
        font-size: 19px;
        font-weight: 500;
        line-height: 28px;
      }

      span.wd-details-text {
        color: #fff;
        font-size: 36px;
        font-weight: 500;
        line-height: 48px;

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
