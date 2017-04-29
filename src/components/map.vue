<template>
  <div class="">
    {{ loading(localhere[0]) }}
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
        shops: {},
        flagPopup: false,
        detailShop: 0,
        cpop: 'map',
        latMap: 0,
        lngMap: 0,
        localhere: '',
        selectShop: '',
        refShop: {},
        locate: ''
      }
    },
    computed: {
      center () {
        return {lat: this.localhere[0], lng: this.localhere[1]}
      }
    },
    beforeMount () {
      this.getLocation()
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
      },
      getLocation: function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition)
        } else {
          console.log('Geolocation is not supported by this browser.')
        }
      },
      showPosition: function (position) {
        this.localhere = [position.coords.latitude, position.coords.longitude]
      },
      loading (para) {
        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.localhere[0] + '%2C' + this.localhere[1] + '&radius=5000&type=car&keyword=repair&key=AIzaSyDN0-75xfLIXbMfGDN--esKWkNpmYS3viw').then((response) => {
          this.shops = response.data.results
          console.log(this.shops)
        })
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
