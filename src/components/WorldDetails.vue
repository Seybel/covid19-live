<template>
  <div class="world-details text-center">
    <!-- <span>{{totalConfirmedData}}</span> -->
      <ul>
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
    .world-details {
    margin-top: 5px;
    position: fixed;
    right: 10px;
    z-index: 16;
    border-left: 1px solid rgb(185, 185, 185);
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
</style>
