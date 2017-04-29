<template>
  <div id="app">
    <p class="notification" id="header" >
      <img src="./assets/logo.png" id="marimage" >
    </p>
    <router-view></router-view>
    <popup :flag="flagPopup" @closePopup="closePopup"></popup>
    {{ flagPopup }}
    <button id="btnPop" @click="openPopup()">Show Popup  </button>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import Popup from '@/components/Popup'

export default {
  name: 'app',
  data () {
    return {
      flagPopup: false
    }
  },
  methods: {
    openPopup: function () {
      this.flagPopup = true
    },
    closePopup: function () {
      this.flagPopup = false
    }
  },
  components: {
    Popup
  }
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #FFFF00;
    margin-top: 0px;
  }
  #marimage {
    height:70px;
    width:90px;
    margin-top:-10px;
    margin-left:-10px;
  }
  #header {
    background-color:#ffeb3b;
     height:80px ;
  }
</style>
