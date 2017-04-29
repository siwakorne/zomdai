<template lang="html">
<div class="container list-container">
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
              <p class="title is-4">{{ List.name}}</p>
            </div>
          </div>
          <div class="content">
            ที่อยู่ : {{List.vicinity}}
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

export default {
  name: 'list',
  data () {
    return {
      Lists: '',
      num: 0,
      flagPopup: false,
      detailShop: {},
      localhere: []
    }
  },
  methods: {
    openPopup: function (reference) {
      axios.get('https://maps.googleapis.com/maps/api/place/details/json?reference=' + reference + '&key=AIzaSyBar4Mz_GdBZW_ob2TK3rcffAB_rl5PnbE').then((response) => {
        this.detailShop = response.data.result
        this.flagPopup = true
      })
    },
    closePopup: function () {
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
