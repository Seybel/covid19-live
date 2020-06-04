<template>
  <div class="world-details text-center md-layout ">
      <ul class="showHide ">
        <div class="md-layout-item ">
          <li><span class="wd-details-title"> Confirmed</span></li>
          <li><span class="wd-details-text ggg">{{ totalConfirmedData.cases | formatNumber }}</span></li>
        </div>
        <div class="md-layout-item">
          <li><span class="wd-details-title">Recovered</span></li>
          <li><span class="wd-details-text hhh">{{ totalConfirmedData.recovered | formatNumber }}</span></li>
        </div>
        <div class="md-layout-item ">
          <li><span class="wd-details-title">Deaths</span></li>
          <li><span class="wd-details-text">{{ totalConfirmedData.deaths | formatNumber }}</span></li>
        </div>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import numeral from 'numeral'

export default {
  computed: {
    ...mapState([
      'totalConfirmedData'
    ])
  },
  filters: {
    formatNumber: function (value) {
      return numeral(value).format('0,0') // Format number
    }
  }
}
</script>
<style lang="scss" scoped>
.showHide {
  display: flex;
  flex-direction: row;
  justify-content: center;
  } // Toggle
.world-details {
  // background-color: rgb(58, 57, 57);
  position: absolute;
  // border-radius: 10px;
  margin-top: 75px;
  padding: 24px 10px 24px 10px;
  right: 1%;
  max-width: 250px;

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
@media screen and (max-width: 600px){
  .showHide  {
    display: flex;
    width: 80%;
  }
  .world-details{
    position: absolute;
    top: 23%;
    right: 12%;
    border: none;
    background: none;
   ul {
      li {
        span.wd-details-title {
          font-size: 20px;
          padding-left: 10px;
          padding-right: 11px;
        }

        span.wd-details-text {
          font-size: 18px;
          padding-left: 10px;
          padding-right: 11px;
        }
      }
    }
  }
}
@media screen and (min-width: 768px){
   .showHide  {
    display: flex;
    width: 105%;
  }
  .world-details{
    top: 28%;
    left: 40%;
    // background: none;
    // border: none;
   ul {
      li {
        span.wd-details-title {
          font-size: 20px;
          padding-left: 10px;
          padding-right: 11px;
        }

        span.wd-details-text {
          font-size: 18px;
          padding-left: 10px;
          padding-right: 11px;
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .showHide  {
    display: flex;
    width: 115%;
  }
  .world-details{
    position: absolute;
    top: 23%;
    left: 30%;
    ul {
      li {
        span.wd-details-title {
          font-size: 25px;
        }

        span.wd-details-text {
          font-size: 23px;
        }
      }
    }
  }
}
@media screen and (min-width:1199px){
  .showHide {
    display: flex;
    flex-direction: column;
  }
  .world-details{
    top:-1%;
    left: 86%;
    ul {
      li{
        span.wd-details-title {
        font-size: 16px;
      }
      span.wd-details-text {
        font-size: 28px;
      }
      }
    }
  }
}
</style>
