<template>
  <div id="columns">
    <p class="column is-flex-mobile" id="header">
      <img src="./assets/logo.png" id="marimage">
      <div class="column">
        <menus></menus>
      </div>
    </p>
    <router-view ></router-view>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import Popup from '@/components/Popup'
import Menus from '@/components/Menu'

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
    Popup,
    Menus
  }
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: black;
    margin-top: 0px;
  }
  #marimage {
    height:70px;
    width:90px;
    margin-top:-10px;
  }
  #header {
    background-color:#ffeb3b;
    height:80px ;
  }
</style>
