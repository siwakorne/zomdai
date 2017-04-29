<template>
  <div id="columns">
    <p class="column is-flex-mobile" id="header">
      <img src="./assets/logo.png" id="marimage">
      <div class="column" style="float:right;
      width: 100%;">
        <menus></menus>
      </div>
    </p>
    <router-view ></router-view>
  </div>
</template>

<script>
import Menus from '@/components/Menu'
import 'bulma/css/bulma.css'

export default {
  name: 'app',
  components: {
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
  }
  #header {
    background-color:#ffeb3b;
    height:80px ;
  }
</style>
