<template>
  <div class="">
    <gmap-map :center="center" :zoom="12" class="map--gmap">
      <gmap-marker
        v-for="shop in shops"
        :position="shop.geometry.location"
        :clickable="true"
        @click="TestClick(shop.geometry.location, shop,shop.reference)"
      ></gmap-marker>
     </gmap-map>
     <popup :flag="flagPopup" :cpop="cpop" :details="shops" :select-shop="refShop" :latPop="latMap" :lngPop="lngMap" @closePopup="closePopup(locate)" ></popup>
  </div>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'
  import axios from 'axios'
  import Popup from '@/components/Popup'

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
        shops: {},
        flagPopup: false,
        detailShop: 0,
        cpop: 'map',
        latMap: 0,
        lngMap: 0,
        selectShop: '',
        refShop: {},
        locate: ''
      }
    },
    beforeMount () {
      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.8220887%2C100.595177&radius=5000&type=car&keyword=repair&key=AIzaSyDN0-75xfLIXbMfGDN--esKWkNpmYS3viw').then((response) => {
        this.shops = response.data.results
      })
    },
    methods: {
      TestClick (position, shop, locate) {
        this.center = position
        this.latMap = this.center.lat
        this.lngMap = this.center.lng
        this.flagPopup = true
        this.selectShop = shop
        this.locate = locate
      },
      closePopup: function (data) {
        axios.get('https://maps.googleapis.com/maps/api/place/details/json?reference=' + data + '&key=AIzaSyBar4Mz_GdBZW_ob2TK3rcffAB_rl5PnbE').then((response) => {
          this.refShop = response.data.result
          console.log(this.refShop)
        })
        this.flagPopup = false
      }
    },
    components: {
      Popup
    }
  }
</script>

<style lang="css">
  .map--gmap {
    width: 100vw;
    height: calc(100vh - 80px - 60px);
    float:left;
  }
</style>
