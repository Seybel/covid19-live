<template>
    <div>
        <md-toolbar class="md-elevation-2 md-elevation-2 showHide">
            <h3 class="md-title" style="flex: 1">Covid19 World Confirmed cases</h3>
            <div class="md-toolbar-section-end">
                <form id="content">
                  <input type="text"
                   @keypress="searchFilter()"
                   name="input"
                   class="input"
                   id="search-input"
                   autocomplete="off" />
                  <button type="reset" class="search" id="search-btn"></button>
                  <md-tooltip md-direction="bottom">Search</md-tooltip>
                </form>
                <md-button class="md-icon-button">
                  <md-icon><i class="fa fa-github"></i></md-icon>
                  <md-tooltip md-direction="bottom">Repo</md-tooltip>
                </md-button>
            </div>
        </md-toolbar>
        <div class="main-nav-container md-xsmall-hide">
            <md-content class="main-nav md-scrollbar md-theme-default">
                <div class="main-nav-content">
                    <div class="main-nav-level" v-for="(getSortedDataItem, index) in getSortedData" :key="index">
                        <div v-if="getSortedData.length" class="country-details">
                            <md-list id="countryList">
                                <md-list-item to="#">
                                    <div class="md-list-item-text">
                                        <!-- <span>{{ getCases }}</span> -->
                                        <span><span class="cd-no">{{ getSortedDataItem.cases }} </span><span class="cd-name">{{ getSortedDataItem.country }}</span></span>
                                        <span>Deaths: {{ getSortedDataItem.deaths }}</span>
                                        <span>Recovered: {{ getSortedDataItem.recovered }}</span>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </div>
                    </div>
                </div>
            </md-content>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState([
      'covidData'
    ]),
    ...mapGetters([
      'getSortedData'
    ])
  },

  methods: {
    searchFilter () {
      document.getElementById('search-input').oninput = () => {
        var matcher = new RegExp(document.getElementById('search-input').value, 'gi')
        for (var i = 0; i < document.getElementsByClassName('country-details').length; i++) {
          if (matcher.test(document.getElementsByClassName('cd-name')[i].innerHTML)) {
            document.getElementsByClassName('country-details')[i].style.display = 'flex'
          } else {
            document.getElementsByClassName('country-details')[i].style.display = 'none'
          }
        }
      }
      // Prevent user from pressing enter while searching
      window.addEventListener('keydown', (e) => {
        if (e.keyIdentifier === 'U+000A' || e.keyIdentifier === 'Enter' || e.keyCode === 13) {
          if (e.target.nodeName === 'INPUT' && e.target.type === 'text') {
            e.preventDefault()
            return false
          }
        }
      }, true)
    }
  },

  mounted () {
    const input = document.getElementById('search-input')
    const searchBtn = document.getElementById('search-btn')

    const expand = () => {
      searchBtn.classList.toggle('close')
      input.classList.toggle('square')
    }

    searchBtn.addEventListener('click', expand)
  }
}
</script>

<style lang="scss" scoped>
.showHide { display: none; } // Toggle toolbar and scrollbar display on desktop

.md-toolbar {
  overflow-x: hidden;
}

#content {
  position: absolute;
  height: 0px;
  width: 0px;
  margin-left: 170px;
  top: 45%;
  right: 5%;
  transform: translate(-50%, -50%);
}

#content.on {
  -webkit-animation-name: in-out;
  animation-name: in-out;
  -webkit-animation-duration: 0.7s;
  animation-duration: 0.7s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

input {
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: none;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
    padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
    padding 0.2s;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.search {
  background: none;
  position: absolute;
  top: 0px;
  left: 0;
  height: 50px;
  width: 50px;
  padding: 0;
  border-radius: 100%;
  outline: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.search:before {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  background-color: #fff;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-top: 9px;
  margin-left: 20px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.close {
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

.close:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 2px;
  margin-top: 4px;
  margin-left: -13px;
  background-color: #fff;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.close:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 2px;
  background-color: #fff;
  margin-top: 4px;
  margin-left: -13px;
  cursor: pointer;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.square {
  box-sizing: border-box;
  padding: 0 40px 0 10px;
  width: 200px;
  margin-top: 4px;
  height: 25px;
  border: 2px solid #ffffff;
  border-radius: 0;
  background: none;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
    padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
    padding 0.2s;
  -webkit-transition-delay: 0.4s, 0s, 0.4s;
  transition-delay: 0.4s, 0s, 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.md-content {
    max-width: 308px;
    max-height: 100vh;
    overflow: auto;
    display: block;
    // padding: 16px;
}

.main-nav {
    width: 316px;
    // padding: 24px 16px 112px;
    padding-top: 24px;
    padding-bottom: 0px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    transition: .3s cubic-bezier(.4,0,.2,1);
    transition-property: top;
}

.main-nav-level {
    margin-bottom: 16px;
}

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

// MOBILE STYLE

/* Desktop, Mobile */
@media screen and (min-width: 768px) {
  .showHide  { display: flex; }
  // #content {right: 7%}
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  #content {right: 7%}
}
</style>
