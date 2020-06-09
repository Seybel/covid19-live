<template>
  <div class="world-details text-center md-layout " v-if="typeof totalConfirmedData != 'undefined'">
      <ul class="showHide ">
        <div class="md-layout-item ">
          <div id="odometer" class="my-odometer">0</div> <br/>
          <div id="odometer" class="a-test">12</div>
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
import Odometer from 'odometer'
// import NumberTransition from 'vue-number-transition'

export default {
  data () {
    return {
      st: 0
    }
  },
  // directives: {
  //   // ..
  //   NumberTransition
  //   // ..
  // },
  watch: {
    // immediate: true,
    // deep: true,
    // test (newValue) {
    //   alert(`yes, computed property changed: ${newValue}`)
    //   return newValue
    // }
    // totalConfirmedData: {
    //   handler (newValue) {
    //     if (newValue) {
    //       console.log(`yay: ${newValue}`)
    //       // return newValue
    //     }
    //   }
    // }
  },
  computed: {
    ...mapState([
      'totalConfirmedData'
    ]),
    test () {
      const that = this
      var ab = numeral(that.totalConfirmedData.cases)
      var ba = ab.value()
      console.log(ba)
      // var myNumeral2 = numeral('1,000')
      // var value2 = myNumeral2.value()
      return ba
    }
  },
  filters: {
    formatNumber: function (value) {
      return numeral(value).format('0,0') // Format number
    }
  },
  // methods: {
  //   // testB (x) {
  //   //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  //   // },
  //   // testimony (value) {
  //   //   return numeral(value).format('0,0') // Format number
  //   // }
  //   ...mapActions([
  //     'loadTotalData'
  //   ])
  // },
  async mounted () {
    // var t = await this.totalConfirmedData
    console.log(this.$store.dispatch('loadTotalData'))
    this.$store.dispatch('loadTotalData')
      .then(() => {
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
        // function updateOdometer () {
        //   return odometer.update(t.cases)
        // }
        // setTimeout(updateOdometer, 2000)

        odometer.update(190000)
        odometerB.update(111111)
      })

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
