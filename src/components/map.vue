<template>
  <gmap-map :center="center" :zoom="10" class="map--gmap">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyA-uESGlh-Kgcim8WWn9JMEDhPKGd6At3U',
      v: '3.2'
    }
  })

  export default {
    data () {
      return {
        center: {lat: 14.1589141, lng: 101.3451766},
        markers: [{
          position: {lat: 14.1511767, lng: 101.3628938}
        }]
      }
    }
  }
</script>

<style lang="css">
  .map--gmap {
    width: 100vw;
    height: calc(100vh - 80px);
    float:left;
  }
</style>
