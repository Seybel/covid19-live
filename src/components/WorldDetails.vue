<template>
  <div class="world-details text-center md-layout ">
      <ul style="display: inline-flex" class="showHide ">
        <div class="md-layout-item ">
          <!-- <div id="odometer" class="my-odometer">0</div> <br/> -->
          <div id="odometer" class="a-test">0</div>
          <li><span class="wd-details-title"> Confirmed</span></li>
          <li><span class="my-odometer wd-details-text ggg">0</span></li>
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
import { mapState, mapActions } from 'vuex'
import numeral from 'numeral'
import Odometer from 'odometer'

export default {
  // watch: {
  //   totalConfirmedData: {
  //     handler (newValue) {
  //       if (newValue) {
  //         // console.log(`yay: ${newValue.cases}`)
  //         return newValue
  //       }
  //     }
  //   },
  //   deep: true,
  //   immediate: true
  // },
  computed: {
    ...mapState([
      'totalConfirmedData'
    ])
    // test () {
    //   const that = this
    //   var ab = that.totalConfirmedData
    //   // console.log(ab)
    //   return ab
    // }
  },
  filters: {
    formatNumber: function (value) {
      return numeral(value).format('0,0') // Format number
    }
  },
  methods: {
    async loadData () {
      try {
        const res = await this.loadTotalData()
        console.log({ res })
        // console.log(this.totalConfirmedData)
        const myOdometer = document.querySelector('.my-odometer')
        const myOdometerB = document.querySelector('.a-test')

        const odometer = new Odometer({
          el: myOdometer,
          animation: 'count',
          duration: 3000
        })
        const odometerB = new Odometer({
          el: myOdometerB,
          animation: 'count',
          duration: 3000
        })

        odometer.update(res.cases)
        odometerB.update(res.recovered)
      } catch (error) {
        console.error(error)
      }
    },
    ...mapActions([
      'loadTotalData'
    ])
  },
  mounted () {
    this.loadData()

    // const myOdometer = document.querySelector('.my-odometer')
    // const myOdometerB = document.querySelector('.a-test')

    // const odometer = new Odometer({
    //   el: myOdometer,
    //   animation: 'count',
    //   duration: 3000
    // })
    // const odometerB = new Odometer({
    //   el: myOdometerB,
    //   animation: 'count',
    //   duration: 3000
    // })
    // var test = this.res
    // console.log({ test })
    // odometer.update(145000)
    // odometerB.update(111111)

    // console.log(t)
    // myOdometer.innerHTML = 170000
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
  background-color: rgb(58, 57, 57);
  position: absolute;
  border-radius: 10px;
  margin-top: 85px;
  padding: 44px 10x 64px 10px;
  right: 5%;
  max-width: 250px;

  ul {
    list-style: none;
    padding-left: 5px;
    padding-right: 30px;
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
          font-family: 'Roboto';
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

//-------ODOMETER-------//

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
    display: flex;
    // right: 12%;
    border: none;
    background: none;
    padding-left: 15px;
    padding-right: 20px;
   ul {
      li {
        span.wd-details-title {
          font-size: 18px;
          padding-left: 10px;
          padding-right: 11px;
        }

        span.wd-details-text {
          font-size: 22px;
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
    top: 27%;
    left: 46%;
    background: none;
    // border: none;
   ul {
      li {
        span.wd-details-title {
          font-size: 20px;
          padding-left: 10px;
          padding-right: 11px;
        }

        span.wd-details-text {
          font-size: 28px;
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
    // background-color: rgb(58, 57, 57);
    // top:-1%;
    // left: 86%;
    z-index: 100;
    ul {
      display: inline-flex;
      // flex-direction: column;
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
