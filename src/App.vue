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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
