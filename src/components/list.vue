<template lang="html">
<div class="container list-container">
  <popup :flag="flagPopup" :cpop="cpop" :detail="detailShop" @closePopup="closePopup" :detailList="detailList"></popup>
  <!-- <popup :flag="flagPopup" :cpop="cpop" :details="shops" :select-shop="selectShop" :latPop="latMap" :lngPop="lngMap" @closePopup="closePopup" ></popup> -->

  {{ loading(localhere[0]) }}
  <div class="columns is-tablet is-multiline list-fix">
    <div class="column is-one-third" v-for="(List, key, index) in Lists" @click="openPopup(List.reference)">
        <!-- ที่อยู่ร้าน : {{List.geometry.location}}
        ที่อยู่ของผู้ใช้ : {{List.geometry.viewport}} -->
      <div class="card" style="height:250px;">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="List.icon" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ List.name }}</p>
            </div>
          </div>
          <div class="content">
            ที่อยู่ : {{List.vicinity}}<br/>
            ระยะทาง : {{ Number(HaversineInKM( List.geometry.location.lat , List.geometry.location.lng , localhere[0] , localhere[1]).toFixed(2)) }} กิโลเมตร
            <br>
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import Popup from '@/components/Popup'
import 'bulma/css/bulma.css'
// import Map from '@/components/map'

export default {
  name: 'list',
  data () {
    return {
      Lists: '',
      num: 0,
      detailList: true,
      flagPopup: false,
      cpop: 'list',
      detailShop: {},
      localhere: []
    }
  },
  methods: {
    openPopup: function (reference) {
      console.log('open')
      axios.get('https://maps.googleapis.com/maps/api/place/details/json?reference=' + reference + '&key=AIzaSyBar4Mz_GdBZW_ob2TK3rcffAB_rl5PnbE').then((response) => {
        this.detailShop = response.data.result
        this.flagPopup = true
        console.log(this.detailShop)
      })
    },
    closePopup: function () {
      console.log('close')
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
        this.Lists = response.data.results
      })
    },
    HaversineInKM: function (Lat, Long, LatHere, LongHere) {
      var d2r = (Math.PI / 180)
      var dlong = (LongHere - Long) * d2r
      var dlat = (LatHere - Lat) * d2r
      var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(Lat * d2r) * Math.cos(LatHere * d2r) * Math.pow(Math.sin(dlong / 2), 2)
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      var d = 6378.1370 * c
      return d
    }
  },
  components: {
    Popup
  },
  beforeMount () {
    this.getLocation()
  }
}
</script>

<style lang="css">
#butlist{
  width:100%;
}
.list-container{
  float:left;
  width:100%;
}
.list-fix{
  margin-left:10px;
}
</style>
