<template>
  <div class="world-details text-center md-layout ">
      <ul class="test showHide ">
        <div class="md-layout-item">
          <li><span class="wd-details-title"> Confirmed</span></li>
          <li><span class="first-odometer wd-details-text ggg">0</span></li>
        </div>
        <div class="md-layout-item">
          <li><span class="wd-details-title">Recovered</span></li>
          <li><span class="second-odometer wd-details-text hhh">0</span></li>
        </div>
        <div class="md-layout-item ">
          <li><span class="wd-details-title">Deaths</span></li>
          <li><span class="third-odometer wd-details-text iii">0</span></li>
        </div>
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import numeral from 'numeral'
import Odometer from 'odometer'

export default {
  computed: {
    ...mapState([
      'totalConfirmedData'
    ])
  },
  // filters: {
  //   formatNumber: function (value) {
  //     return numeral(value).format('0,0') // Format number
  //   }
  // },
  methods: {
    async loadData () {
      try {
        const res = await this.loadTotalData()
        // console.log({ res })
        // console.log(this.totalConfirmedData)
        const myOd1 = document.querySelector('.first-odometer')
        const myOd2 = document.querySelector('.second-odometer')
        const myOd3 = document.querySelector('.third-odometer')

        const od1 = new Odometer({
          el: myOd1,
          animation: 'count',
          duration: 2000
        })
        const od2 = new Odometer({
          el: myOd2,
          animation: 'count',
          duration: 2000
        })
        const od3 = new Odometer({
          el: myOd3,
          animation: 'count',
          duration: 2000
        })

        od1.update(res.cases)
        od2.update(res.recovered)
        od3.update(res.deaths)
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
    padding-right: 40px;
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
        font-family: "Roboto", "Noto Sans",  sans-serif;
        font-size: 23px;
        font-weight: 500;
        line-height: 32px;
        &.ggg {
          font-size: 23px;
          color: #d32f2f;
        }
        &.hhh {
          font-size: 23px;
          color: #6ba476;
        }
        &.iii {
          font-size: 23px;
          color: #fff;
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
        font-family: "Roboto", "Noto Sans",  sans-serif;
        font-size: 19px;
        // padding-left: 3px;
        // padding-right: 5px;
          &.ggg {
            font-size: 19px;
            color: #d32f2f;
          }
          &.hhh {
            font-size: 19px;
            color: #6ba476;
          }
          &.iii {
            font-size: 19px;
            color: #fff;
          }
        }
      }
    }
  }
}
@media screen and (min-width:601px){
  .showHide {
    display: flex;
    flex-direction: column;
  }
  .world-details{
     top: 25%;
     display: flex;
     justify-content: center;
     align-items: center;
    background: none;
    ul {
      &.test {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 80px;
      }
      li {
        span.wd-details-title {
          font-size: 18px;
          padding-left: 10px;
          padding-right: 11px;
        }

        span.wd-details-text {
        font-family: "Roboto", "Noto Sans",  sans-serif;
        font-size: 20px;
          &.ggg {
            font-size: 18px;
            color: #d32f2f;
          }
          &.hhh {
            font-size: 18px;
            color: #6ba476;
          }
          &.iii {
            font-size: 18px;
            color: #fff;
          }
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
       &.test {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 30px;
      }
      li {
        span.wd-details-title {
          font-size: 20px;
          padding-left: 10px;
          padding-right: 11px;
        }

        span.wd-details-text {
        font-family: "Roboto", "Noto Sans",  sans-serif;
        font-size: 20px;
          &.ggg {
            font-size: 20px;
            color: #d32f2f;
          }
          &.hhh {
            font-size: 20px;
            color: #6ba476;
          }
          &.iii {
            font-size: 20px;
            color: #fff;
          }
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
    ul {
      &.test {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin-top: 150px;
    }
      li{
        span.wd-details-title {
        font-size: 26px;
        margin-left: 10px;
        margin-right: 10px;
      }
        span.wd-details-text {
        font-family: "Roboto", "Noto Sans",  sans-serif;
        font-size: 20px;
          &.ggg {
            font-size: 25px;
            color: #d32f2f;
          }
          &.hhh {
            font-size: 25px;
            color: #6ba476;
          }
          &.iii {
            font-size: 25px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
