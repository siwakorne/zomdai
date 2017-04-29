<template lang="html">
  <div class="list">
    <!-- {{ Lists }} -->
    <p v-for="(List, key, index) in Lists"  @click="openPopup(List.reference)">
    ชื่อร้าน :  {{ List.name }}<br/>
    ที่อยู่ : {{ List.vicinity }}<br/><br/>
    </p>
    <popup :flag="flagPopup" :detail="detailShop" @closePopup="closePopup"></popup>
  </div>
</template>
<script>
import axios from 'axios'
import Popup from '@/components/Popup'

export default {
  name: 'list',
  data () {
    return {
      Lists: '',
      num: 0,
      flagPopup: false,
      detailShop: {}
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
    }
  },
  components: {
    Popup
  },
  beforeMount () {
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=14.1590111%2C101.3459433&radius=5000&type=car&keyword=repair&key=AIzaSyDN0-75xfLIXbMfGDN--esKWkNpmYS3viw').then((response) => {
      this.Lists = response.data.results
    })
  }
}
</script>

<style lang="css">
</style>
