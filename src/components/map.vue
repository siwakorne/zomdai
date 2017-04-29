<template>
 <gmap-map :center="center" :zoom="12" class="map--gmap">
   <gmap-marker
     v-for="shop in shops"
     :position="shop.geometry.location"
     :clickable="true"
     @click="center=shop.geometry.location"
   ></gmap-marker>
  </gmap-map>


</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'
  import axios from 'axios'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyA-uESGlh-Kgcim8WWn9JMEDhPKGd6At3U',
      v: '3.2'
    }
  })

  export default {
    data () {
      return {
        center: {lat: 13.8220887, lng: 100.595177},
        shops: []
      }
    },
    beforeMount () {
      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.8220887%2C100.595177&radius=5000&type=car&keyword=repair&key=AIzaSyDN0-75xfLIXbMfGDN--esKWkNpmYS3viw').then((response) => {
        this.shops = response.data.results
        console.log(this.shops)
      })
    }
  }
</script>

<style lang="css">
  .map--gmap {
    width: 100vw;
    height: calc(100vh - 80px);
  }
</style>
